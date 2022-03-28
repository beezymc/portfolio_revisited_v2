---
title: Top 5 Portfolio Pitfalls
date: "2022-03-28T22:12:03.284Z"
description: https://i.imgur.com/epYUgV1.png
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

One might go into building a portfolio website thinking "How hard can it be? There's no backend infrastructure to worry about--it's all just a static site. Just slap some components together and call it a day." HOWEVER, for those of us that are newer to the web development scene, it's probably not going to be that easy. I'll be going over some of the pitfalls I ran into when building this portfolio website--so you don't have to!

## 1. Following Outdated Tutorials
One good place to go to when considering building a portfolio is tutorial videos, both for inspiration, and maybe for a little code snatching too (Hey, we all do it!) One major thing to be careful of is whether or not that tutorial is outdated. When starting my site, I chose a tutorial using Material UI in combination with Gatsby.js. What I didn't realize was that Material UI v5 is pretty dang different from Material UI v4, and the issues with those differences unfortunately didn't manifest until I finally got deployed, where Gatsby was overriding the Material UI styles and I hit FOUS (flash of unstyled content) errors. So please, make sure your reference material is up to date as possible--it can save you days of refactoring down the road.

## 2. Not Being Resourceful Enough
Gatsby.js makes use of a number of plugins to make a portfolio website (with blog) functional. This can spell trouble when some of those plugins conflict in mysterious ways. One piece of advice I would give is to incorporate plugins carefully--one at a time--to be certain there aren't any conflicts. Where you can, refer to the robust documentation of whatever frontend framework you choose to use--they often have good example projects you can use as a reference to set up your portfolio with the proper plugins.

## 3. Not Deploying Early
Deployment with a static site isn't too difficult--little more than throwing all of your build files into an Amazon S3 bucket. Because of this, I'd recommend deploying once you've made a decent amount of progress (such as between each major component), because many errors don't appear in development and then crush your dreams in deployment.

## 4. Not Having Review
Have someone review your portfolio, either once deployed or somewhere along the way. When they play around with your site, they might find quality-of-life issues or even major bugs that you might have overlooked. It's easy to forget adding a target='_blank' to a link, for example, and that little change can turn your portfolio navigation experience from mediocre to excellent!

## 5. Being Stale
This is less of a development tip, and more of a marketing tip, but don't be afraid to do something different! Use bold colors, create crazy animations, be a wordplay wizard--do what you can to attract and retain the interest of people who end up on your site. Following a tutorial to the 'T' will make your portfolio almost as unimpressive as if you hadn't made one at all.