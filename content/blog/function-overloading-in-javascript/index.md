---
author: Aashni
comments: true
date: 2018-03-26 03:12:10+00:00
description: Javascript doesn't really allow you to practice function overloading. But I wanted to do it, so I figured out a way.
layout: post
link: https://aashni.me/blog/function-overloading-in-javascript/
slug: function-overloading-in-javascript
title: Function Overloading in Javascript
wordpress_id: 441
categories:
- AngularJS
- Frontend
- HTML and CSS
- Javascript
- Tutorial
- Web Development
---

Most object oriented languages like Java give you the option to do function overloading. What this means is that you can have multiple functions with the same names, but different expected parameter values and types, and the correct function would be called depending on the inputs provided. In Javascript, we don't quite get the same experience unfortunately.


    
    
    function foo(a) {
      console.log(a);
    }
    
    function foo(a, b) {
      console.log(a, b);
    }
    
    function foo(a, b, c) {
      console.log(a, b, c);
    }
    
    foo('one');
    foo('one', 'two');
    foo('one', 'two', 'three');
    



With function overloading, you would expect the above code to output:

    
    
    one
    one two
    one two three
    



In reality, Javascript doesn't do that. Instead, Javascript will pick the most recent definition of a function or variable, and make reference to that. Instead, this is what our expected output would be:

    
    one undefined undefined
    one two undefined
    one two three
    



To verify that this is happening because of the order the function's were created in, we can try a quick experiment.


    
    
    function foo(a) {
      console.log(a);
    }
    
    function foo(a, b, c) {
      console.log(a, b, c);
    }
    
    function foo(a, b) {
      console.log(a, b);
    }
    
    foo('one');
    foo('one', 'two');
    foo('one', 'two', 'three');
    



The above code would output:


    
    
    one undefined
    one two
    one two
    





## Optional Parameters



There are often many times where having this type of power and flexibility can come in useful in a javascript app. Here are three optional ways that we can recreate the function overloading experience instead. The first is declaring optional parameters, and assigning values to the optional parameters if nothing is assigned to them. In the following code, the `a` argument is expected, while `b` uses the value `default` as a default, and `c` will use the number `7` if nothing is passed in.


    
    
    function foo(a, b = 'default', c = 7) {
      console.log(a, b, c);
    }
    
    foo('one');
    foo('one', 'two');
    foo('one', 'two', 'three');
    



This produces the following output;


    
    
    one default 7
    one two 7 
    one two three 
    





## Wrapper Function Overloaders


This option works great if you're only using one, possibly two optional values, and the order of the values remains the same. This will likely not always be the case, which is where alternatives two and three come into play.

The second option would create a wrapper class around our various foo functions, which we can then call with any number of arguments. For example:


    
    
    function foo(a, b = 'default', c = 9) {
      if(arguments.length === 1) {
        fooOne(a);
      }
    
      if(arguments.length === 2) {
        fooTwo(a, b);
      }
    
      if(arguments.length === 3) {
        fooThree(a, b, c);
      }
    }
    
    function fooOne(a) {
      console.log(a);
    }
    
    function fooTwo(a, b) {
      console.log(a, b);
    }
    
    function fooThree(a, b, c) {
      console.log(a, b, c);
    }
    
    foo('one');
    foo('one', 'two');
    foo('one', 'two', 'three');
    
    



This produces the initial output we originally, expected:


    
    
    one
    one two
    one two three
    



A few quick comments here: you can use either an `if, else if, else`, or a switch to achieve the same type of lookup here. Additionally, you can make use of the `typeof` function to determine what type of parameter has been passed in, incase you're passing in a mixture of strings, functions, objects or something else.

However, this method requires a lot of extra and possibly unnecessary code. For every new parameter you'd want to include, you'd have to write an 'if' statement, followed by a new function to specifically deal with the case. This can get unnecessarily messy and long, and also doesn't allow for scenarios where we might only want to use `a` and `c`, ignoring the `b` argument. 



## JSON Objects



This brings us to option number three where you pass in an object as your final parameter which contains any additional values you may want to use. Here, you'll likely still need to use an `if, else if, else` or `switch` statement, however there will be significantly less code and more flexibility. Here's an example of the code:


    
    
    function foo(a, params) {
      if(!params) {
        console.log(a);
      } else if(params['b'] && params['c']) {
        console.log(a, params.b, params.c);
      } else if(params['b']) {
        console.log(a, params.b);
      } else if(params['c']) {
        console.log(a, params.c);
      }
    }
    
    foo('one');
    foo('one', {b: 'two'});
    foo('one', {b: 'two', c: 'three'});
    foo('one', {c: 'three'});
    



This gives us the following output, which is what we expected.


    
    
    one
    one two
    one two three
    one three
    



As usual, every optional way has it’s own pro’s and cons on why you should or shouldn’t use a specific technique for your code. It comes down to what you’re trying to achieve, and how you expect your codebase to grow in the future. From personal experience, I usually start with a version of using optional parameters for one variable, two at the absolute maximum, then I’d swap over to using a JSON-formatted object for anything more complicated because I like having fewer repetitive functions, and it keeps the context of the work in the same place.

Do you have a preference? Or some other way fo dealing with function overloading since that’s not currently available in Javascript.
