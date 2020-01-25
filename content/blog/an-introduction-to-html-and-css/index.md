---
author: Aashni
comments: true
date: 2018-02-05 06:48:53+00:00
description: An Introduction to HTML and CSS
layout: post
link: http://blog.aashni.me/2018/02/an-introduction-to-html-and-css/
slug: an-introduction-to-html-and-css
title: An Introduction to HTML and CSS
wordpress_id: 378
categories:
- HTML and CSS
- Tutorial
---

In this week’s post, I’ll be writing my take on a simple guide to HTML and CSS. This is mostly a high overview of HTML and CSS, and won't get into too many language specific details. Instead, I discuss what HTML and CSS are, and how they work to make a website.



## How Does the Internet Work



Websites generally live on the internet, and the easiest way to see a website is by visiting it through a web browser. So let’s say you go to your internet browser (my browser of choice is [Google Chrome](https://www.google.ca/chrome/browser/features.html?brand=CHBD&ds_kid=43700017582260978&gclid=EAIaIQobChMIvteSpIWO2QIVxbXACh0kkgLuEAAYASABEgKnbPD_BwE&gclsrc=aw.ds&dclid=CN_ZtqaFjtkCFR6zTwod5rwA9Q), and you type in a URL or Uniform Resource Locator into the browser (that’s the website address, like www.google.com or www.aashni.me or www.facebook.com). You’ve created a request on your browser to go find the content related to the website. The browser will connect to the internet and communicate with multiple other computers to figure out where the files for the website are located, and once it’s found the files, it returns these files for your browser to interpret and display. These files can be in many different formats, depending on what you requested. For our intents and purposes, we’ll stick to the files being HTML and CSS type files. 



## What is HTML



HTML stands for Hyper Text Markup Language, and you can think of it as the language your browser speaks in order to display the right things on the website. We need to declare what type of language we’re using so that the browser can correctly pick up the right language and interpret the file properly. Imagine you were speaking French to someone else, but the only way they could properly understand you is if they knew you were speaking French as well. 

HTML uses tags, specially reserved words between triangle brackets such as `<b>` to declare what a certain bit of code refers to. In this example, the `b` tag makes text bold. Most tags have a closing tag pair, which you can achieve by adding a `/` after the first closing bracket, for example `</b>` is the closing tag. If you wrote `<b>his is bold text</b>`, then you’d get **this is bold text** as the outcome. The closing tag signifies the end of that specific type of HTML tag. Each tag or set of tags has different properties which control how content can be controlled on a page.

HTML tags also have attributes, and when variables are passed to these attributes there is more flexibility and control over the HTML tag. For example, some of the attributes on the `img` tag are `src`, `height` and `width`. Combined, these determine what image to display, and what height and width to set for the image. (Note: img is one of the few HTML tags that doesn’t require a closing tag - we use a / before the closing > instead.)

Here's an example of some image tag manipulations.

Display an image of a husky at 100x100px:
```
<img src="http://blog.aashni.me/wp-content/uploads/2018/02/puppyy.jpg" height="100px" width="100px" />
```
<img src="http://blog.aashni.me/wp-content/uploads/2018/02/puppyy.jpg" height="100px" width="100px" />

Display an image of a husky at 250x250px:
```
<img src="http://blog.aashni.me/wp-content/uploads/2018/02/puppyy.jpg" height="250px" width="250px" />
```

<img src="http://blog.aashni.me/wp-content/uploads/2018/02/puppyy.jpg" height="250px" width="250px" />


## Example HTML Website

When we create a page in HTML, we usually include a head section and a body section. Scripts, imports and website Meta data (the title of the page for example) all go into the page head and this is often not visible on the actual page that gets loaded. The changes we'd like to see on the website will isntead need to be added in the body of the website.

The following code snippet creates a simple HTML page with the head and body sections. The title is set to `My Awesome Website`. There is ah `<h1/>` header describing the page, some text and then an image. I'll save this page as `index.html`


    
    
    <html>
    <head>
    <title>My Awesome Website</title>
    </head><
    <body>
    <h1>This Is My Awesome Website</h1>
    <p>My awesome website will have a picture of a beautiful Siberian Husky because they are really beautiful dogs</p>
    <img src="https://siberianhusky.com/wp-content/uploads/2016/09/puppyy11.jpg">
    </body>
    </html>
    
[![](http://blog.aashni.me/wp-content/uploads/2018/02/awesomewebsite-1024x955.png)](http://blog.aashni.me/wp-content/uploads/2018/02/awesomewebsite.png)

## What is CSS

These attributes make it much easier to style a website page, but can you imagine realizing you need to update one of the tags? It becomes quite a tedious task, and human error is extremely high as well. Enter: CSS. CSS or Custom Style Sheets are a way for us to define the attributes once, in a single location and have them update any HTML website page that’s referring to them. In recent years, CSS has added some new, pretty incredible features, but I’ll stick to the basics for this post.

CSS works in two ways, the first is inline, and the second is exported in. Inline CSS works similar to HTML attributes in that you edit them in line with the HTML text. For example, to style the images above, you could do `<img src="http://blog.aashni.me/wp-content/uploads/2018/02/puppyy.jpg" style="height:100px;width:"100px" />`. Unfortunately this leaves us with the same problem as HTML attributes - they'd be horrible to try and update in the future.

Instead, we can use imported CSS files instead. The first step would be to create a file `style.css` in the same directory as your HTML file. Then, in our HTML page, include the CSS file by including this line in the header (between the head tags). `<link rel="stylesheet" href="styles.css">`.


    
    
    <div><html></div>
    <div><head></div>
    <div><title>My Awesome Website</title></div>
    <div><linkrel="stylesheet"href="style.css"></div>
    <div></head></div>
    <div><body></div>
    <div><h1>This Is My Awesome Website</h1></div>
    <div><p>My awesome website will have a picture of a beautiful Siberian Husky because they are really beautiful dogs</p></div>
    <div><imgsrc="http://blog.aashni.me/wp-content/uploads/2018/02/puppyy.jpg"></div>
    <div></body></div>
    <div></html></div>
    



We can now create a a style page called `style.css`. Inside the style page, I'll set the img tag height to 320px by 240px. I will also set the website background to a light green, and set the font to a `4286f4` which is a type of blue.


    
    
    html, body {
      background: #8af2ca;
      color: #4286f4;
    }
    
    img {
      height: 240px;
      width: 320px;
    }
    



Here's what the website looks like.

[![](http://blog.aashni.me/wp-content/uploads/2018/02/awesomewebsite2-1024x628.png)](http://blog.aashni.me/wp-content/uploads/2018/02/awesomewebsite2.png)

Yes - this looks terrible right now - but that's where styling and knowing more about design play really important roles to making a website.
