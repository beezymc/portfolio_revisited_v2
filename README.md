# Portfolio Website
This is my portfolio website, complete with a hero section, about section, projects section and blog, and should be fully responsive on both desktop and mobile.

## Duplication Instructions
1. Clone the website to your local machine.
2. Install all required dependencies.
3. Run 'gatsby develop' to ensure everything appears as it should on the development server (localhost:8000 by default).

## Customization Tips
There are a few changes that need to take place in order to customize the portfolio for a new user. Namely, the resume, contact, social links, hero image, project details, and blog post details.
### Resume
To change the resume, replace the current resume PDF in the static folder, updating the import line in the Header.jsx component with the new file's filepath.
### Contact
The contact email needs updating in 2 spots: The BlogHeader.jsx component 'Get in Touch' button's href, and the HeroSection.jsx 'Get in Touch' href.
### Social Links
Social Links will need updating in Social.jsx. If you wish to include different social media, you will need to add the appropriate icons as shown in the Social.jsx socialItems array.
### Hero Image
Update the hero image in HeroSection.jsx within both StaticImage components present to the image of your choice. The image should be saved in src/images.
### Project Details
Update the projectsData array as needed to include your own projects. The objects within the array have the following elements: a project title, a project description, tags for the technologies used, an image URL representation, and links to the project (github and deployed links were used for my projects, but you can modify these as needed).
### Blog Posts
See the /content/blog folder for an example of how blog posts should be organized. The name of the post-containing folder will signify how the URL will be displayed to a reader. The posts themselves are created using markdown format, so a reference to that format might be helpful. Blog posts include a title, date, splash image (titled 'description'), and room for the content itself under the content's styles. If you wish to include other elements, you may need to update the graphql queries within the src/pages/index.jsx file as well as the src/templates/blog-post.js file.

## Deployment
This portfolio was deployed as a static site using an AWS s3 bucket, AWS route 53 for a custom domain, and certificate manager and cloudfront to allow for the website to be served with https.
The link below can help with this deployment strategy: https://www.freecodecamp.org/news/simple-site-hosting-with-amazon-s3-and-https-5e78017f482a/