---
author: Aashni
comments: true
date: 2016-08-20 23:46:26+00:00
layout: post
link: http://blog.aashni.me/2016/08/angularjs-tutorial-part-1-hello-world/
slug: angularjs-tutorial-part-1-hello-world
title: 'AngularJS Tutorial Part 1: Hello World'
wordpress_id: 211
categories:
- AngularJS
- Javascript
- LSH
- Tutorial
- Women In Tech
- Workshop
---

This is part 1 of a multi-part [Intro to AngularJS](http://blog.aashni.me/2016/08/angularjs-an-introduction/) tutorial series. Part 2 can be found [here](http://blog.aashni.me/2016/08/angularjs-tutorial-part-2-introducing-the-star-wars-api-and-angular-services).



Before we can churn out a kickass Star Wars website, we'll create the "Hello World" of Angular Apps.

I usually like to keep my files organized, especially since I've seen what happens when you have over 100 files for a single project. With that in mind, let's create the following files and folder.
`> index.html
> app.js
> controllers/
> views/`

I like keeping all controller related files in one folder, and the same for my views files. If we get down to creating directives or services, then I would also create individual folders for those as well, but this is good for the Hello World app.

[caption id="attachment_215" align="aligncenter" width="481"][![AngularJS Initial Files](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_tutorial_files.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_tutorial_files.png) AngularJS Initial Files[/caption]

Now we can open up the index.html file and start creating the app.

    
    
    <!DOCTYPE html>
    <html ng-app="AngularApp">
    <head>
      <title>Star Wars App</title>
    
      <!-- include AngualrJS js -->
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-route.min.js"></script>
    
      <!-- our files -->
      <script type="text/javascript" src="app.js"></script>
    
      <!-- Controllers -->
      <script type="text/javascript" src="controllers/main.js"></script>
    
    </head>
    <body>
    
      <div ng-view></div>
    
    </body>
    </html>
    



So the important things you need to understand from the above code is this:


  * the `ng-app` on line 2 tells Angular which version we are using as well as what we will name the app. In our case, I've called it `AngularApp`


  * The first two `<script>` tags (which have links to googleapis.com) bring in the AngularJS app from Google. You could always host these yourself, but for today this is good enough. You'll notice the "1.4.0" in the URL - we'll be using AngularJS 1.4.0 for this tutorial. There is an AngularJS v 2.x which has quite a few changes and not something I'll be diving into yet.


  * The third `<script>` tag includes our `app.js` file. We're about to make changes to this file, and will use this to create the AngularJS as well as the initial router instructions.


  * The fourth `<script>` tag includes our main controller, which exists in the file `main.js` file in the controllers folder. We'll make this soon.


  * Finally, the `<ng-view>` (or `<div ng-view></div>` as above) includes the angular view in that section of the website.


Next we'll move on to creating the `app.js` file. Open it up, and add the following line:


    
    
    var angularApp = angular.module('AngularApp', ['ngRoute']);
    



The code above creates an angular module called AngularApp that has `ngRoute` as one of the activated options, and assigns it to the angularApp variable.

We're now going to setup the routing configuration, so underneath the line you've already added in the app.js, add the following code:


    
    
    angularApp.config(['$routeProvider',
      function($routeProvider){
        $routeProvider
        .when('/', {
          templateUrl : 'views/main.html',
          controller : 'MainCtrl',
          controllerAs : 'main'
        })
        .otherwise('/');
      }
    ]);
    



This let's you add and configure the `routeProvider`. What's important here is in each `when` block, you assign what the router should do (second parameter) when the first parameter (in this case '/') is rendered in the browser. For now, we'll assign the templateUrl to `views/main.html`, which links to a `main.html` file we will create in the views folder. Assign the controller as `MainCtrl` and the controllerAs to `main`. We will create a controller called MainCtrl, and this is what the routeProvider will pick up on.

You can have multiple `when` blocks, however at the end you should include an `otherwise` block. Think of this as a catchall incase someone hits a URL that doesn't exist. You can setup a 404 page here, but for now we'll just let it reroute back to the main page.

Now we're going to create our first controller. Inside your `controller` folder, create a new file called `main.js` and add the following code.


    
    
    angularApp.controller('MainCtrl', [ 
      '$scope',
      function($scope){
        $scope.heading = "Hello World";
        $scope.message = "This is me";
      }
    ]);
    


Here we have created a controller called `MainCtrl`. Within the `.controller()` you have two parameters. The first parameter is the name of the controller (which you use in the router). The second is an n-length array that can contain a few different things. The first n-1 elements in the array are all different object types that you want included in AngularJS. In our example, this includes the `$scope` object (which we'll dive into soon). The nth element is a `function()` call, where all the objects you previously listed will also be listed as parameters being passed into the function. It's a little redundant, but oh well. Inside this function, you can include the logic for your website, in our case we create two variables (`$scope.heading` and `$scope.message`) and assign some strings to these variables. 

A quick dive into what `$scope` is - it acts as the binding bridge between the controller and the view. You can store information on the `$scope` variable in your controller, then display it in the view. You can also edit information in your view (through a form, for example), and have the controller react depending on what changes have occurred. 

Ok, we're on the last part of our `Hello World` app - we need to add a view. In the `views` folder, create a new file called `main.html`. Inside this file, add the following two lines:


    
    
    <h1>{{ heading }}</h1>
    <p>{{ message }}</h1>
    



AngularJS renders anything within `{{ }}` as Javascript. You can actually stick logic between these brackets! In our case, we're referring to the heading and message variables we created on $scope.

Phew, that was a lot. Now, let's go over to our terminal, and create a simple HTTP server so that we can run the AngularJS app. Make sure you cd into the angularJS app that we created, then type one of these commands:


    
    
    Mac OS X & Linux (in terminal):
    > python -m SimpleHTTPServer 8000
    
    Windows (maybe Python 3):
    > python -m http.server 8000
    



And finally, go to `http://localhost:8000` in your browser and let's see what we got! If everything went according to plan, then this is what you should see.

[caption id="attachment_235" align="aligncenter" width="623"][![AngularJS Tutorial Hello World](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs-hello-world.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs-hello-world.png) AngularJS Tutorial Hello World[/caption]

If you think you've made a mistake somewhere, you can access a copy of the above code from the accompanying github repository. [Click here](https://github.com/aashnisshah/lsh_angularjs_tutorial/commit/14dc5a4ac18510dc53906b8d162b91c9860abc66) to see all the code upto the end of this section.
