---
author: Aashni
comments: true
date: 2018-03-19 08:32:15+00:00
description: Fetch For Javascript API Calls
layout: post
link: https://aashni.me/blog/fetch-for-javascript-api-calls/
slug: fetch-for-javascript-api-calls
title: Fetch For Javascript API Calls
wordpress_id: 437
categories:
- API
- Frontend
- HTML and CSS
- Javascript
- Tutorial
- Web Development
---

This week I taught a group of teenage girls how to make a website. I began with a basic explanation on how the Internet works, to which one girl was absolutely amazed that the cloud wasn't actually in the cloud, but rather a bunch of computers connected together on the ground. The majority of my class was about HTML, CSS and just a little Javascript to help the girls create their own website. It's been a while since I've had to use pure Javascript to make an API call and figured that would be a great focal point for this weeks blog post.



## Fetch()



Originally, the "easiest" way to make an API call using pure Javascript was by making use of the [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) API call. However it often required a lot of steps just to make a simple get call such as creating a new object, opening a connection to the URL destination and then sending the request. The response body contains the response and header information. It would also contain the different type of errors which you'd often have to handle individually in all cases.

There have been many new updates to Javascript over the years, and one of the big ones recently was the introduction of handling promises natively. What this means is that we can now create an api to handle our Get/Post requests, and use promises to deal with their responses asynchronously. The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is an excellent example of how this works in pure, native Javascript code. Here's the most basic example of a Fetch call:


    
    
    fetch('https://www.potterapi.com/v1/sortingHat')
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);
      });
    



Breaking this call down, the `fetch()` requires the path to the data you'd like to fetch as it's first argument. In this example, I'll be fetching a random house from the [Harry Potter API](https://www.potterapi.com/). The response object in line 2 is a promise that was returned from the API. I know my response data will be JSON, and use the `.json()` to extract the data. This is then passed on to the next `.then()`, where we're now able to log the json to the console.



## Adding Headers


While the barebones version of the fetch() api is useful, we still need the ability to add additional information into our request, or handle our responses based on certain criteria. 

We can add header tag information into the second argument field, for example `fetch(url, args)`. Here, args would be an object that contains different settings. See [Mozilla's Guide](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch) for a full list. Here's a small example with some additional headers added in.


    
    
    var data = {'name': 'Ada Lovelace'};
    
    fetch('https://www.potterapi.com/v1/sortingHat', {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json'
        },
        method: 'GET',
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);
      });
    



To post data to an API call, we convert the JSON object into a string, which is what I'm doing in line 4. We can set the cache, credentials and headers the way you'd normally expect to. The default method type is a `GET` type, but we can change it to any of the other verbs instead. 



## Dealing with the Response


The promise can resolve in one of two ways. The first is a `TypeError`, an exception where there was an issue connecting to the host. Other responses, such as a `200`, or a `404`, will return as part of the response. The best way to check for a success response is make use of the `response.ok` value, and only in that case do we proceed. Otherwise we would throw an error or retry the request depending on our needs. Here's an example.


    
    
    fetch('https://www.potterapi.com/v1/sortingHat', {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json'
        },
        method: 'GET',
      })
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        throw new Error('There was an error');
      })
      .then(function(responseJson) {
        console.log(responseJson);
      });
    





## Word of Caution


The Fetch API is extremely useful as a way to perform low level API calls. However as your code base gets more complicated, you'll likely want to start dealing for additional cases like aborting your call, or make changes to the headers in your request (POST instead of GET). The Fetch API is great for quick prototyping, however if you're working on a more complicated project, I'd recommend using an existing service like [AJAX](http://api.jquery.com/jquery.ajax/) or [$http](https://docs.angularjs.org/api/ng/service/$http) instead.
