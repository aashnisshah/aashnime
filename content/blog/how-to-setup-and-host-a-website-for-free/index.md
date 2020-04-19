---
author: Aashni
comments: true
date: 2020-04-18 06:01:34+00:00
description: "This guide will walk you through how to register a domain, create a very basic website, then use Github and Netlify to host your website. This is great if you want to setup a personal website, portfolio of all your work or a landing page for your brand spanking new startup."
layout: post
link: https://aashni.me/blog/how-to-setup-and-host-a-website-for-free/
slug: how-to-setup-and-host-a-website-for-free
title: "How To Setup and Host A Website For Free"
categories:
  - Web Development
  - Tutorial
  - Guide
  - Frontend
  - Netlify
  - Buttondown.email
---

I need to setup a landing page for one of my new projects, [Tech Nyumba](https://technyumba.com), and I thought I'd take you along for the journey. So wether you're trying to create a personal website, portfolio of all your work or a landing page for your brand spanking new startup, this guide is for you! I'll walk you through how to create and setup a very basic website, using github for code management then hosting it on Netlify. In my next blog post, I'll share how you can use a combination of Netlify and Buttondown Email to create a contact form and newsletter subscription form.

Hosting your website is completely free using the method I outline below, the only thing you'll need to pay for is your domain name. Speaking of domains, that's a great place for us to start this journey.

## Registering your domain

Your domain is what people would enter into their search bar in order to find your website. I generally like finding a relevant but catchy name. Once you've got your domain selected, you can use a domain name provider like [namecheap](https://namecheap.com) to register your domain. Simply enter your desired domain into the search bar, make sure it's available, then follow the prompts.

![Search for your domain](./setup-website-free-001.png)

We're not going to configure the domain just yet. We'll move on to getting the rest of your website running first.

## Github

Github is a great tool to manage and maintain your code projects, whether you're working alone or with a team. If you're experienced with creating a github repo, go ahead and create one and clone it to your desktop, then skip to the next section. If you haven't already, create an account at [github.com](https://github.com). Next you'll want to create a [new repository](https://github.com/new). I recommend picking a name related to your website and adding a description. Here's what I filled in.

![Create a new repository](./setup-website-free-002.png)

Once your repository is created, select the _Clone or Download_ option, and copy the link.

![Clone your website](./setup-website-free-003.png)

Next open up your terminal, navigate to a directory where you'd like your code to live, then clone the repository to your desktop.

```bash
git clone git@github.com:<username>/<repositoryname>.git
```

This will create a new folder and copy the <code>README.md</code> file from your repository. Now we're ready to code up the landing page.

## Start coding your landing page

This is where your creative freedom really comes in handy. You can design this page to look like whatever you'd like it to look like. In this example, I'll be using a very simple HTML and CSS website, however you can use any number of frameworks such as [GatsbyJs](https://gatsbyjs.org/), [ReactJS](https://reactjs.org/) or [AngularJS](https://angularjs.org/) in the same way. [Subscribe to my newsletter](https://aashni.me/newsletter) as I'll be writing some posts on GatsbyJS in the future.

If you have already coded and designed your own site, skip ahead to the next section. Here's what my site looks like. I'll share the code below.

![Tech Nyumba site](./setup-website-free-004.png)

Create a new file called <code>index.html</code>:

```html
<!DOCTYPE html>
<html class="no-js" lang="zxx">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Tech Nyumba | Created by Aashni</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- CSS here -->
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <div class="content">
        <div class="header">
          <h1>Tech Nyumba</h1>
          <div class="subtitle">tɛk njum-ba</div>
          <p>
            <italic>Nyumba</italic> means house in Swahili. Welcome to my Tech
            House.
          </p>
          <p>
            This project is being created by
            <a
              href="https://aashni.me"
              target="_blank"
              rel="noopener noreferrer"
              >Aashni</a
            >. Sign up below to get updates and be the first to know when Tech
            Nyumba launches!
          </p>
        </div>
        <div class="form">
          <form>
            <input
              class="form-control valid"
              name="name"
              id="name"
              type="text"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter your Name'"
              placeholder="Enter your Name"
            />
            <input
              class="form-control valid"
              name="email"
              id="email"
              type="email"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter your Email'"
              placeholder="Enter your Email"
            />
            <button type="submit" class="button button-contactForm boxed-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>
```

Save the following CSS in a file called style.css:

```css
body {
  background-color: #357376;
  margin: none;
  padding: none;
  color: #222831;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.container {
  background-color: #357376;
  width: 450px;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed #e5dfdf;
}

.content {
  padding: 10px;
  margin: 10px;
}

.header {
  background-color: #357376;
}

.header h1 {
  font-style: italic;
  margin-bottom: 0px;
}

.subtitle {
  font-style: italic;
}

.form {
  background-color: #357376;
  width: 100%;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

label,
input {
  display: block;
  width: 100%;
  background-color: #357376;
  border: none;
  border-bottom: 1px #1d4d4f solid;
}

label {
  margin-top: 0.5rem;
}

::placeholder {
  color: #e5dfdf;
}

input {
  font-size: 1rem;
  padding: 0.8rem 0em;
}

button {
  background: #e5dfdf;
  color: #1d4d4f;
  display: block;
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  margin-top: 1.5rem;
}

a {
  color: #e5dfdf;
  text-decoration: none;
}
```

## Save code to Github

Now we're at a point where we want to save this code and push it to github. Go back to your terminal and make sure you're inside the repository folder. If you aren't, use <code>cd \<repositoryname\></code>.

Here are the four steps I do to push my code up.

```bash
git status
git add index.html style.css
git commit -m "Initial layout for technyumba.com site"
git push
```

The first line will print out all files that have been modified. I do this to double check that I'm only adding the files that I expect to. The next three lines prepare your files for a commit, commits it to your repository, then pushes the change so that anyone else accessing your repository also has access.

![Terminal Showing Git commands](./setup-website-free-005.png)

If you did that right, you can now go back to your github repository in the browser, and should now see the files uploaded there.

![Updated Github Repository](./setup-website-free-006.png)

## Netlify Time!

Sweet, so up to now we've managed to get your code up on github, but no one can see it yet. Our next steps are to go to [Netlify.com](https://netlify.com). Sign up for an account if you haven't already, and follow the prompts to connect your github account to your Netlify account.

Select the _New Site from Git_ option.

![Select new site from Git](./setup-website-free-007.png)

Then select _Github_ from the Git providers.

![Select Github from the Git Providers options](./setup-website-free-008.png)

Search for your repository name

![Search for your repository name](./setup-website-free-009.png)

Make sure all your data looks right here. If it does, then scroll to the bottom and select _Deploy Site_. If you used a frontend framework like GatsbyJs, make sure you include your build commands on this screen.

![Deploy your site](./setup-website-free-010.png)

Your site will get ready to deploy in the background.

![Site is deploying!](./setup-website-free-011.png)

You'll see a link on that screen that points to \<something\>.netlify.app. Click on the link and make sure your site renders the way you expected it to. This is what my site looks like.

![Netlify site running](./setup-website-free-012.png)

You can go to the _Site Settings_ option and change your sites name so that instead of some long random string, it can be more relevant to you. I updated mine to point to [technyumba.netlify.app](https://technyumba.netlify.app).

If all goes well, then congrats! You have officially hosted your website! But wait - it's not hooked up to your domain name. Let's work on that part next.

## Connecting Your Domain

Start off by clicking on the _Domain Settings_ option on your site's overview page in Netlify.

![Domain settings page](./setup-website-free-013.png)

Select _Verify_, then select the _Yes, add domain_ option.

![Verify domain](./setup-website-free-014.png)

![Select Yes and Add domain](./setup-website-free-015.png)

Next you'll need to go to the top of the _Domain Settings_ page and select options, then Setup Netlify DNS.

![Netlify DNS](./setup-website-free-016.png)

![Verify DNS](./setup-website-free-017.png)

If you're using your domain for other services like an Email provider, you'll need to configure those on this screen. If this is a brand new site, you can just hit continue for now.

![Continue DNS](./setup-website-free-018.png)

You'll then come to a screen with Netlify's domain nameservers.

![Netlify's Domain nameservers](./setup-website-free-019.png)

We need to copy over these nameservers to our domain on Namecheap. In a new tab, navigate to your Namecheap dashboard, then list select _Modify_ for your domain.

![Modify domain on Namecheap](./setup-website-free-020.png)

In the nameserver dropdown, select the Custom DNS option.

![Custom DNS options](./setup-website-free-021.png)

Then copy over the nameservers from netlify into namecheap. Once you've completed that, make sure you click on the small green checkmark to save your changes.

![Submit DNS changes](./setup-website-free-022.png)

Once this is completed, you can head back to your domain settings page in Netlify and scroll to the bottom where the SSL/TLS certificate section is. Netlify will provide an encryption certificate for you, allowing you to secure your site and use _https_ instead of _http_. You'll need to click on _Verify DNS Configuration_ to get the certificate done. If you get a message saying the DNS isn't configured properly - just wait and try again later. If you're still having issues, take a look at Netlify's [troubleshooting guide](https://docs.netlify.com/domains-https/troubleshooting-tips/#certificates-and-https)

![Waiting for SSL/TLS](./setup-website-free-023.png)

![DNS not propogated yet](./setup-website-free-024.png)

![Success!](./setup-website-free-025.png)

If everything is configured properly, you can now go to your domain in the browser. For me it's [www.technyumba.com](https://technyumba.com) and your site should load!

![Live website](./setup-website-free-026.png)

If this guide helped you, I'd love to know. Please consider [tweeting](https://twitter.com/aashnisshah) me, especially links to your sites once they're setup!

[Subscribe to my newsletter](https://aashni.me/newsletter) to get my future blog posts straight into your inbox! My next post will talk about how to add a contact form and create a newsletter on your site, again all for free!
