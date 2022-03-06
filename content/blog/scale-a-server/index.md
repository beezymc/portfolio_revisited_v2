---
title: One Does Not Just Scale a Server
date: "2022-02-20T23:46:37.121Z"
description: https://upload.wikimedia.org/wikipedia/commons/e/e9/Arise_Server_Cloud_Computing.png
---

<style>
  code {
    white-space: pre-wrap !important;
    word-break: break-word;
  }
  .blogImage {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  a {
    color: white;
  }
</style>

It's been a week since I've graduated from Hack Reactor, and I thought it'd be a fun exercise to revisit the most interesting project assigned. The project involved scaling the backend infrastructure of an ecommerce site to handle traffic of up to 1000 requests per second and return responses at less than 100ms on average. Before this project, most of the program's focus had been on creating dynamic frontend components. However, aside from Google Lighthouse reports, there usually weren't many metrics to back up the performance and quality of our work. This project was different--the metrics were all that mattered. In addition to that, there were a plethora of decision points that made each person's project fairly unique, from database selection, to query creation, to deployment strategy and beyond.
To get to those two magical numbers, there were a few steps that needed to be done:
1. Choose a database to hold the data.
2. Transform and load previously-existing data into that database.
3. Create efficient queries to the database.
4. Develop a server that would route query results back to the client.
5. Deploy both the server and database.
6. Scale the server up to multiple instances, and load balance between those instances.
7. Implement caching.
So let's get into it and explore the challenges and choices I made with each.
## The Database
The decision of database largely came down to preference, if I'm being honest. Proctors highly recommended going the SQL route, but plenty of colleagues went the noSQL direction, too. Personally, I was working in MongoDB more frequently at that time, and wanted the additional challenge of creating custom SQL queries that would retrieve data efficiently, and so I decided on a SQL database: PostgreSQL.  <br />
With that decision out of the way, I needed to build a schema. Because of the variety of data being retrieved (there were 4 tables total by the end, one of which being a join table), schema creation posed a challenge and I frequently had to revisit and modify the schema up until deployment. To give one simple example of something that required me to revisit the schema, I hadn't considered query speed initially and realized later that some additional indexing would really speed things up, so I went back to include those indexes.  <br />
Aside from that, though, challenges to database selection were minimal and hardly the most interesting part of the project, so let's move onto the next piece.
## Transform and Load
Fortunately, as part of the project, data had already been extracted into a few gigabytes of CSV files for us, and so all we needed to do was transform and load the data into our database. There were two primary ways to go about this process: transform and load the data, or load and transform the data.
Transforming and loading the data would have required creating a javascript function or functions that would process the CSV data into a ready-to-load format that I could then copy into the tables. If the data wasn't already *nearly* what I needed it to be, I would have gone this route. However, because transformations were minimal, I decided it would be better to load and transform instead.  <br />
In this route, I would load the data into temporary tables that matched the data types copied from the CSV files. Then I would transfer the data from temporary tables into the real tables, transforming what data needed transforming in the process--primarily dates, in this case.  <br />
Below, I show an example of the process for one table: <br />
```
CREATE TEMP TABLE characteristics_temp (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  name TEXT
);
\copy characteristics_temp FROM './data/characteristics.csv' CSV HEADER;
CREATE TABLE characteristics (
  characteristic_id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  product_id INTEGER NOT NULL
);
CREATE INDEX char_product_id_idx ON characteristics(product_id);
INSERT INTO characteristics select id, name, product_id from characteristics_temp;
```
That's really all there was to it here--although there were some challenges during deployment I'll get into later.
## Queries
I would be dishonest if I didn't say I spent about a third of the project timeline at this step. Generating optimized SQL queries is as much art as it is science, and it took some artistry to get average database query times below 50ms (which was the pre-deployment goal). After some tests with EXPLAIN ANALYZE, it was here that I ended up needing to include those indices I mentioned earlier--at first I *assumed* foreign keys were auto-indexed like primary keys are, so it took some precious time for me to realize that wasn't the case. (NOTE: First rule of software engineering--do not assume).  <br />
I didn't think too much of queries beyond indexing at this stage, as I thought to myself "Oh, I'll just retrieve the data using simple queries and transform it on the server side to fit client needs." We'll find out how far that thought went once we get into the server.  <br />
This is an example of one of those early queries: <br />
```
select reviews.review_id, reviews.rating, reviews.summary, reviews.recommend, reviews.response, reviews.body, reviews.date, reviews.reviewer, reviews.helpfulness, review_photos.id, review_photos.url FROM products JOIN reviews on products.product_id = reviews.product_id JOIN review_photos on reviews.review_id = review_photos.review_id where product.product_id = 1000011;
```
## Server
Not far. Once I built out my express server routes, transformation functions, and incorporated Newrelic for testing, I wasn't happy with the speed at which data was being retrieved. For one, I was using multiple queries in some cases where one would suffice. Second, after doing some research, I discovered server data transformation is *bad* if you can use database aggregate functions instead. Some quick refactoring would have me solve both of these issues and hit that 50ms or less average data retrieval.  <br />
Here are some refactored queries. The first is a more complete version of the simple query from earlier, and the second makes full use of aggregation functions: <br />
```
select reviews.review_id, reviews.rating, reviews.summary, reviews.recommend, reviews.response, reviews.body, reviews.date, reviews.reviewer, reviews.helpfulness, review_photos.id, review_photos.url FROM reviews LEFT JOIN review_photos using (review_id) where reviews.product_id = 1000011;

select SUM(case when rating = 1 then 1 else 0 end) as one_count, SUM(case when rating = 2 then 1 else 0 end) as two_count, SUM(case when rating = 3 then 1 else 0 end) as three_count, SUM(case when rating = 4 then 1 else 0 end) as four_count, SUM(case when rating = 5 then 1 else 0 end) as five_count, SUM(case when recommend = true then 1 else 0 end) as true_count, SUM(case when recommend = false then 1 else 0 end) as false_count FROM reviews where product_id = 1000011;
```
## Deployment
Now that my server and database were hitting the desired milestones, it was time to deploy. I would start by deploying my database into its own T2.micro AWS instance. This would require I create a fresh PostgreSQL database up in the AWS cloud, copy my SQL schema and CSV data over, and load the data up into the T2.micro. Up comes the next silly mistake: I initialized the T2.micro with only 8 GB of memory, and the whole process required more memory than that. My first thought was to reduce the amount of memory I was using. To do so, I removed two entire tables from my SQL schema (there were 6 tables at this point and the two I removed were for future-proofing more than anything) and some indices that weren't necessary for the routes I'd be testing. Unfortunately, this wasn't enough and I racked my brain for longer than I'd like to admit trying to figure something out before my mentor let me know you can initialize a T2.micro with up to 30GB even though 8 was the default.  <br />
You can see the settings I used below. The security group settings allow you to make an http request to your instance, while the storage settings are where you'd want memory to be set to however much you need. <br />
<img src="https://i.imgur.com/LxvUnP9.png" class='blogImage' alt="AWS Settings">
Doh! With that information, though, I was able to get my database up and active. Note that there are settings you'll need to adjust to make your database accessible from outside the T2.micro (see the Resources at the end of the article).  <br />
The initial server deployment actually went much more smoothly--though it helped that I was familiar with Docker from the prior project we'd done. Using dockerized node as a springboard, I launched a server container accessible from the outside, and connected it to my database without too much fuss.
## Scaling
Once my deployment was complete, I began to scale. My scaling strategy involved spinning up multiple server instances using Docker, creating and initializing an nginx instance in order to load balance between the servers, and connecting them. One might say this strategy is sound--until I mention that I planned on doing this all in a single T2.micro. When testing with Loader.io using the above setup, I noticed something curious: Once I started to surpass 300 requests per second, I would get fewer responses than there were requests. Something was wrong. <br />
You can see in the image below that with 5000 requests made over 15 seconds, only ~4700 come back with responses. <br />
<img src="https://i.imgur.com/k7z05hb.png?1" class='blogImage' alt="Loader.io results with CPU cap">
Unfortunately, because my Newrelic setup was split across the 3 servers, I couldn't easily determine what the issue was using those metrics. I looked through PostgreSQL logs and nginx logs to see if there were issues on either. Nginx logs did provide some errors, but nothing conclusive. When discussing the issue with colleagues, I received two pieces of advice. The first was to try slowly ramping up the Loader.io requests to see if the data there would point to the problem. The second was to try AWS Cloudwatch instead of Newrelic, since Newrelic didn't seem to be working. <br />
<img src="https://i.imgur.com/xSwFL3i.png" class='blogImage' alt="Cloudwatch results with CPU cap">
That advice gave me exactly what I needed: I determined pretty quickly that I hit capacity on CPU usage. After removing Newrelic, since I was using Cloudwatch instead, I could get requests per second up to 370 before running into the CPU wall. Now, I had a decision to make: either horizontally or vertically scale. At this point, because the project period was almost over, I wanted to confirm my suspicion that a stronger CPU would solve things, and I wanted to implement caching, I went with scaling vertically to a T2.medium. This resulted in just at 1000 requests per second--the magic number. <br />
<img src="https://i.imgur.com/6jpetv2.png" class='blogImage' alt="Loader.io results of vertical scaling without caching">
I intended (and eventually did) horizontally scale at a later date, which I'll get into during the conclusion of this article.
## Caching
Caching didn't pose too much of a challenge, personally. I installed REDIS and implemented it within my server, redeploying the server once I did. It was a little tricky to format the connection string correctly, and I needed to make use of docker-compose to have my server connect to the REDIS cache properly. <br />
Once I connected things, though, I could get the metrics quite low--down to a 9ms average response rate. <br />
<img src="https://i.imgur.com/yNXYdXP.png" class='blogImage' alt="Loader.io results of vertical scaling with caching">
## Conclusion
So by the end of the project, I succeeded in my goal of 1000 requests per second and 100ms or less average response rate. I wasn't entirely satisfied that I didn't implement horizontal scaling correctly, and so took it upon myself to do so at a later time. I'd spin up multiple T2.micro instances, 4 in total, with 3 holding a server and 1 holding the load balancer. Using this setup, I was able to achieve 1300 requests per second with a 34ms average response (the performance hit not being too surprising since the load balancer and servers were now decoupled, and there were 3 caches instead of 1). <br />
<img src="https://i.imgur.com/zfPFBPM.png" class='blogImage' alt="Loader.io results of horizontal scaling with caching">
There were a few additional challenges I didn't get a chance to work on, such as scaling the databases or implementing Kubernetes to auto-scale the backend system, but that's a challenge for a later time (though I'd be happy to receive any resources that would help there!) I hope this read was insightful to those that are new to backend system design--perhaps you can avoid some of those silly mistakes I made and embrace the challenge of scaling up a backend system yourself!
## Resources
Github Repo: https://github.com/beezymc/Ratings-and-Reviews <br />
SQL vs. noSQL: https://www.reddit.com/r/webdev/comments/c3226n/when_should_one_use_sql_and_when_should_one_use/ <br />
Transform and Load: https://www.mariokandut.com/how-to-use-streams-to-extract-transform-and-load-data-in-node-js/ <br />
Database Aggregation vs. Server Functions: https://www.baeldung.com/calculations-in-db-vs-app <br />
Database Setup: <br />
https://betterprogramming.pub/how-to-provision-a-cheap-postgresql-database-in-aws-ec2-9984ff3ddaea <br />
https://pgtune.leopard.in.ua/ <br />
Docker Tutorial: https://github.com/dylanlrrb/Please-Contain-Yourself