---
author: Aashni
comments: true
date: 2018-02-26 08:41:36+00:00
description: A Guide to Web Development for Beginners
layout: post
link: https://aashni.me/blog/a-guide-to-web-development-for-beginners/
slug: a-guide-to-web-development-for-beginners
title: A Guide to Web Development for Beginners
wordpress_id: 423
categories:
- Backend
- Frontend
- HTML and CSS
- Javascript
- Tutorial
- Web Development
tags:
- Web Dev
---

I’ve gotten quite a few emails and questions in the past asking questions related to HTML, CSS, PHP, Ruby and Javascript from beginners looking to start their journey in web development. I always encourage questions, and really appreciate people emailing me to ask questions. However a common trend I’ve noticed is that many beginners get confused with HTML, CSS, PHP, Ruby and Javascript, and don’t quite understand what they are or how they might be linked. Hopefully this post helps clear up some questions.



## HTML, CSS and Javascript


With tools like CSS and Javascript, you can make your website look nicer, and become responsive and interactive for anyone visiting your website. A website can be something extremely simple that you could treat it like reading a book. A website can also be extremely dynamic, constantly pulling fresh data and letting you interact with it by posting your own content, reacting to other people’s content such as Facebook. 

`HTML` is the `Hyper Text Markup Language` that allows you to define what goes on the page. `CSS`, or `Cascading Style Sheets` lets you style a page, for example control the colors or size of content on the website, but with recent changes you can do a lot more. `Javascript` gives you a lot more power and control as you can start manipulating the objects on your website, for example making them disappear if you click on them. In essence, you can build some pretty powerful and very heavy websites with just these three tools.



## PHP and Ruby on Rails



Many people often ask me about `PHP` as well, and how you can use PHP to create your own website. PHP stands for `PHP: Hypertext Preprocessor` and can be mixed with HTML or used independently as a server side language that would allow a person to create a backend and make requests to a database. PHP used to be a really powerful and common language many years ago - in fact it’s what the original version of Facebook was written in. However today, it’s not as commonly used on new websites. If you are a beginner and looking to start your web dev career, unless you have a specific reason to use PHP, I’d recommend skipping it for now.

Another set of questions I commonly get is related to `Ruby`, and `Ruby on Rails`. Ruby is a programming language, and Rails is a framework (I’ll describe frameworks more in-depth shortly) built on top of Ruby. Unfortunately I haven’t had much experience (yet) with either of these and can’t offer up more information. Ruby and Ruby on Rails is still commonly used by numerous popular websites today, and if it looks like something that may interest you, I’d recommend learning it. I would also suggest that you pick either Ruby or Javascript as your introductory language, and only swap over once you feel fairly comfortable with the language you picked.The rest of this post focuses on Javascript, as that’s where my experience lies.



## Frontend VS Backend


So far, the examples I’ve described with HTML, CSS and Javascript will help you build a decent frontend or client side of a website. However in many cases, you’ll need to be able to interact with a backend server, and especially a database storing all your information. More complicated websites will often have a backend that lets you do all of this much easier. For now, I’ll continue focusing on simpler websites build using just a frontend, and will touch more on the backend later.



## Frameworks



Earlier, I mentioned that with just HTML, CSS and Javascript you can make some pretty powerful websites. While this is true, if you’re using pure, raw HTML, CSS and Javascript on your website, it could make some of the logic overly complicated and make your website slow and even messy. However there are some amazing tools called Frameworks that have popped up in recent years that deal with this exact problem, and let you create even more powerful websites using just HTML, CSS and Javascript. Frameworks can follow the MVC or Model-View-Controller format, which splits a framework into three components; the model (data), the view (what the user sees, also known as the template) and the controller (control and manipulate the data). Most frameworks have their own variation of this. They really help structure and organize code for a website, and often make it much easier to make repetitive calls or requests. The more popular Javascript frontend frameworks include [AngularJS](https://angular.io/), [ReactJS](https://reactjs.org/), [Ember JS](https://www.emberjs.com/), [Vue JS](https://vuejs.org/) and [Backbone JS](http://backbonejs.org/).

From my experience, the framework you choose to learn first will likely not be the only framework you continue to use in the future. The first framework I learnt was [Code Igniter](https://codeigniter.com/) in PHP. I then learnt AngularJS three years ago for my then job, and it’s already considered an older framework with both newer versions of Angular out, as well as other Frameworks that are able to achieve similar tasks more efficiently. Many developers have also started the trend of mixing frameworks together for different parts of a more complicated website as a way to slowly start migrating an ‘older’ framework to a new one. Once you’ve picked the framework you’d like to learn and use, I’d suggest focusing on how the model, view and controller in that framework is connected, especially on how data is passed around the website. This will make it much easier to transfer that knowledge to other frameworks in the future.

I want to point out that you should be able to make most websites, no matter which framework you pick. Some frameworks make it easier to build certain types of websites, and as you get more familiar with web frameworks, you’ll be able to identify this for yourself.



## Backend Web



Simpler websites that are often frontend only usually aren’t very data heavy, or are using a database like [Firebase](https://firebase.google.com/) that don’t require a backend. However a backend gives you more control and freedom over the type of data you’re parsing and storing, and eventually displaying back to the user. I'll split the backend into two portions (but there are likely many different ways to view it): the ‘backend’ and the database. The backend receives an API request - something like "give me the 10 newest movies". The backend can then query the database to fetch a list of movies, analyze the data to make sure it matches our requirements and then return a response which contains the 10 newest movies. API Requests deserve a blog post on their own, so I won’t dive into them too heavily here. I will say that an `API` is an `Application Protocol Interface` and acts as the communication tool that pass around information in the form of requests and responses. It’s built on top of a sequence of protocols and subroutines that communicate between a frontend and it's backend, as well as mixing communication between different frontends and backends made by different websites. APIs are a huge part of pretty much every website today.

Similar to the frontend, you can write your backend in many different languages. I’ve seen back-end’s written in python, javascript, PHP, java and even C++. The biggest requirements is that your language is able to accept and respond to the incoming requests in some way. Another important thing to note is that **your backend and frontend can be written in different languages**. What this means is you can write a super efficient backend in C++, and have that respond to requests coming from an AngularJS frontend. The type of language you pick for either backend or frontend will also dictate how you host your website, but I’ll leave that for another blog post.

For a beginner, I’d recommend learning either [Python](https://www.python.org/) or Javascript. Similar to frontends, backends also have frameworks to make creating a website easier. For Python, I’d recommend learning [Django](https://www.djangoproject.com/) or [Flask](http://flask.pocoo.org/), two relatively light weight frameworks that can get your website setup extremely quickly. If you’d like to get started with Javascript instead, then [Node.JS](https://nodejs.org/en/) is your best bet. If you’re completely new to programming, with no other experience, I’d recommend sticking to Javascript’s NodeJS since you’ll be using Javascript, where as you’d have to learn python in order to use either Flask or Django. However both languages and frameworks are relatively easy to pick up so you should be fine either way.



## Databases



The second part of the backend is the database component. You would use a database to store data. For example, you can create a database about movies including details like the cast, the movie's release date, and the movies rating. Your backend will make a query to your database, which literally means the database will look in itself to find any results that match the request and return them to the backend. There are quite a few different types of Databases - SQL and NoSQL refer to the database’s structure, more specifically if you want to use a relational database design (SQL), or not (noSQL). You can use [PostgresSql](https://www.postgresql.org/), [MySQL](https://www.mysql.com/) if you want to learn more about SQL’s relational databases. Alternatively, you could learn NoSQL databases like [MongoDB](https://www.mongodb.com/), [Firebase](https://firebase.google.com/) or some of the other tools available from alternative sources, like AWS’ [Dynamo DB](https://aws.amazon.com/dynamodb/). There are many different options. I'd recommend learning MySQL for relational Databases. It’s quite popular, and has many easy to find resources online. I’ve been using a lot of Firebase Database’s recently for different (personal) projects, as it provides a quick, easy way to interact with data in real time, however I’d still recommend learning and using a SQL database, at least in the beginning so that you can understand the intricacies related to designing a strong, scalable database design.



## Suggested Next Steps:



If you’re still interested in Web Development and I haven’t scared you away, then I'd suggest doing the following in possibly this order:



    
  * Learn some simple HTML/CSS. Codeacademy has a pretty decent course that goes over the basics. Play around with it yourself, and make a simple portfolio website that includes a description of yourself, your hobbies and skills, achievements you’re proud of, etc.

    
  * Learn some simple Javascript. Codeacademy has some courses for this as well, or you can check out [Coursera](https://www.coursera.org/courses?languages=en&query=javascript).

    
  * Start playing around with one of the frameworks I listed ([AngularJS](https://angular.io/), [ReactJS](https://reactjs.org/), [Ember JS](https://www.emberjs.com/), [Vue JS](https://vuejs.org/) and [Backbone JS](http://backbonejs.org/) for Javascript). Consider trying to make a website that displays information about movies using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). I wrote an introductory guide to [making a website with AngularJS and the Star Wars API]../angularjs-an-introduction/) that you could consider following. 

    
  * Start playing around and building other project ideas. I challenged myself for nearly a month to learn something new and code at least a little everyday over that month. I ended up making a couple of different Chrome extensions (like this one that returns random [Lorem Ipsum Text](https://github.com/aashnisshah/ipsonator)) and learnt some intro to react. If you can't come up with an immediate idea, think of some of the simple apps or websites that you've seen and think of how you'd go about trying to make your own version of that. For example, a restaurant booking website or a movie recommendation site.

    
  * Start using free APIs so that you can become more familiar with those tools as well. [Mashape](https://market.mashape.com/) is a great resource for finding API’s. 

    
  * As you start finding your websites becoming more complicated (they need to store data in a database), then you'll figure out when and how to introduce databases to your site, and separately also when and how to introduce working with backends like NodeJS, Django (Python), Flask (Python) or Java



I find the best way to start learning is to dive in and start building and it’s best to have a project in mind. It’s great to start with a simple version of a website idea, and then build on it as it gets more complicated. For example find a project that let’s you build up the frontend component. Then, as a second step, you can build out a backend with a connected database. If you need a few project ideas, here you go:

    
  * Movie Recommendation website that randomly selects a movie using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). This could eventually become a website for you and your friends to track website recommendations, then serve up an option based on what’s available. This would require a database to store your friends preferences and recommendations, and then a backend to compare movie preferences with movies fetched from an API.

    
  * Restaurant Recommendation website that randomly selects a restaurant using [Zomato’s](https://developers.zomato.com/api) restaurant API. This could become a way to track restaurants you liked and recommend something based on some specifications you set. This would require a database to store the restaurants that you’ve liked in the past, and then a backend that helps compare these, and filter for more restaurants that are similar to ones yo’ve picked in the past.



Well, what are you waiting for! There’s lots to do! If you do make a website, share the link below! If you still have questions then comment below!
