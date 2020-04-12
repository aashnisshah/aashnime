---
author: Aashni
comments: true
date: 2016-08-20 23:39:25+00:00
description: AngularJS is a great framework for building fast frontend websites. Here's the introduction in a series of tutorials on how to build and deploy a website with AngularJS.
layout: post
link: https://aashni.me/blog/angularjs-an-introduction/
slug: angularjs-an-introduction
title: "AngularJS: An Introduction"
wordpress_id: 209
categories:
  - AngularJS
  - Javascript
  - LSH
  - Tutorial
  - Women In Tech
  - Workshop
---

Hey there! Welcome to this multi-part introduction to [AngularJS](https://angularjs.org/), a Javascript based framework to make some kickass websites. I've broken down this tutorial into five sections that build on top of each other, and hope to add some more sections in the future. I originally taught this as a virtual class as part of the [Ladies Storm Hackathons Tutorial](https://github.com/Ladies-Storm-Hackathons/Tutorials) series, and decided to convert it into a written tutorial for anyone looking to start learning AngularJS.

I'm hoping you're a fan of Star Wars, or at least know a little about it. I'll be making use of the [Star Wars API](http://swapi.com) to help create a Star Wars Fan Site. At the end of each section, I'll also provide a link to a commit in a github repo that should match all the code upto that section of the tutorial.

Let me begin with a little bit about AngularJS, and my experience with it.
AngularJS is a javascript framework that's backed by Google. It's been used to create websites like [Join.Me](https://www.join.me/) and [virginamerica.com](https://www.virginamerica.com/). You can check out more Angular-based websites at this nifty [Built With Angular](https://builtwith.angularjs.org/) website.

It works as a router that serves up either a controller or a view. I like to say that the controller is where all the Javascript logic goes, while the view is how you display the information to the visitor. There are some other powerful parts to AngularJS, namely the directives and services. These let you replace potentially repetitive or somewhat complex code in your controllers and views. But we'll talk more about them later on with examples.

I first used AngularJS for a couple of weeks during an Internship at [Amazon](http://www.amazon.com). I then used it much more in-depth at another internship at [OANDA](http://www.oanda.com). At OANDA, we used AngularJS as the core framework for the front-end portion of the new registration system we were releasing. Once I returned back to school, I've used AngularJS for a couple of super quick [hackathon projects]../that-one-time-i-hacked-the-north/), as well as a much more complicated project course I took. I find it really easy to setup, and that you can connect it with a lot of other technologies like [Firebase](https://www.firebase.com/) really easily.

Before we begin writing any code, I'd like to make sure you have all the basics setup and ready. From personal preference, I'll be using [Sublime Text](https://www.sublimetext.com) for editing my code.
I am using a Mac to do my development, and will will be using the bash terminal to run a Python command that creates a simpleHTTPServer. I'll be doing my testing on a Google Chrome browser to view the changes as we go.

If everyone is ready, then let's get started!

[Part 1 - Hello World](../angularjs-tutorial-part-1-hello-world)

[Part 2 - Introducing the Star Wars API and Angular Services](../angularjs-tutorial-part-2-introducing-the-star-wars-api-and-angular-services)

[Part 3 - Using the Star Wars API Data through the Controller and Views](../angularjs-tutorial-part-3-using-star-wars-api-data-through-angular-controllers-and-views)

[Part 4 - Introducing Bootstrap](../angularjs-tutorial-part-4-introducing-bootstrap)

[Part 5 - Creating Individual Pages for Characters and Movies](../angularjs-tutorial-part-5-creating-individual-pages-for-characters-and-movies)
