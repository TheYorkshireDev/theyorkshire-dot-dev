---
slug: "website-stack"
date: "2020-11-28"
title: "Website & Blog Stack"
featuredImage: "./images/featured.png"
thumbImage: "./images/thumb.png"
description: "Overview of my website technology stack and the journey from previous incarnations."
tags: ["Blog", "Website"]
---

Here we go, my first blog post after recently adding blog functionality to my website [TheYorkshire.Dev][1]. I'm going to go over why I redesigned my website, what I'm using, and some enhancements I want to add.

## Old Stack & Setup

My previous website was built in 2013 and was orange and grey. A refresh was long overdue. I created it primarily to assist in getting a placement year during my degree. It was pretty basic, built from HTML & CSS then deployed using FTP manually which was laborious, both modifying code and deploying.

I hosted the website on a $5 a month Digital Ocean droplet upon which I had installed the LAMP stack. Having a virtual private server seemed like a good idea at the time, but it soon became a burden. If I'm honest, I lost care and didn't update the VPS as regularly as I should have so decided it was time to lift and shift the website to a friendlier platform.

I moved the website over to Azure and utilised App Service. Azure App Service is a Platform as a Service (PaaS) offering, allowing managed hosting of applications for a variety of technologies. In addition to switching how I hosted the website, I also set up CI/CD with Azure DevOps (still a stupid name) for deploying the website easily whenever it is updated.

## Inspiration

In all honesty, I have been working on and off at building this site for over a year. The first cut has been published for many months now although I've only just finished adding blog capability hence this post.

Due to work commitments, it took me much longer than I wanted. The last nine months have been chaos with the pandemic as we are involved in the national NHS covid effort, so at the end of the day, I just wanted to log off my PC, kick back and relax.

Last year, I was fortunate to see a couple of talks from [Phil Hawksworth][2] who works at Netlify and is a big advocate for JAMStack. I liked what I saw and decided that I should refresh my website. I also had a few other motives;

-   I had some TheYorkshireDev logos a friend designed for me a few years back I wanted to incorporate on my website
-   I needed to get rid of the orange and grey and use a constant, clean colour scheme that links with my logos
-   I had a new domain to use
-   I wanted to try my hand at blogging needed a new solution
-   I wanted it to be a PWA, so if someone enjoys my blogging they could install the site as an app, potentially receiving notifications for blog posts (Still a TODO)

## Current Stack & Setup

### Development

I was inspired for the refresh by seeing JAMStack websites that didn't depend on webservers and could be statically generated. Since this was my first foray into static site generators, I did some googling to get up to speed. I found a nice tutorial [GatsbyJS tutorial][3] that covered elements I wanted to incorporate in my shiny new site.

Gatsby allowed me to use ReactJS and build the site with components. Using components avoids duplicating code which was one of the issues with my previous website. I styled the website using styled-components and Emotion, allowing me to scope my CSS, which I find much easier to manage.

The extensive plugin ecosystem came in use for adding functionality to the website. For example, allowing me to write blog posts in Markdown and transforming them to HTML, to be embedded during a build with a little help from GraphQL. I also used plugins to assist in optimising images, improving SEO and adding PWA functionality.

### CI/CD & Hosting

The source code for the website is publically available on GitHub in a repository. I had planned to have the website and blog posts in separate repositories but have decided to keep them together for now (see planned enhancements).

I have continued to use Azure DevOps for building and deploying the website. New commits on the website trigger a build within Azure DevOps and then subsequently deploys the code. Commits on the master branch deploy the code to production whereas commits on other branches deploy to a staging location.

I am hosting my website on Netlify. I was going to continue using Azure, however, setting up custom domain without a subdomain isn't possible. Netlify also provides free HTTPS certificates backed by let's encrypt, which is something I would have had to set up and configure within Azure. For the staging environment, I am using Azure blob storage fronted by a CDN for verifying website changes.

### Planned Enhancements

There are a few additions I'd like to make to the website in future.

-   Pull blog posts into a second repository
-   Blog post comments
-   Blog Pagination
-   Blog PWA Notifications
-   Ability to subscribe to the blog
-   Switch CI/CD to GitHub Workflows
-   Configure the website to use CSP and other HTTP headers
-   Update staging site to use either Netlify or Azure Static Web Apps

<hr />

What's your tech stack? Do you have any feedback? Reach out and let's discuss.

[1]: https://theyorkshire.dev
[2]: https://twitter.com/philhawksworth
[3]: https://github.com/justinformentin/gatsby-v2-tutorial-starter