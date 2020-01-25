---
author: Aashni
comments: true
date: 2016-08-20 23:47:14+00:00
description: 'AngularJS Tutorial Part 3: Using Star Wars API Data through Angular
  Controllers and Views'
layout: post
link: http://blog.aashni.me/2016/08/angularjs-tutorial-part-3-using-star-wars-api-data-through-angular-controllers-and-views/
slug: angularjs-tutorial-part-3-using-star-wars-api-data-through-angular-controllers-and-views
title: 'AngularJS Tutorial Part 3: Using Star Wars API Data through Angular Controllers
  and Views'
wordpress_id: 247
categories:
- AngularJS
- Javascript
- LSH
- Tutorial
- Women In Tech
- Workshop
---

This is part 3 of a multi-part [Intro to AngularJS](http://blog.aashni.me/2016/08/angularjs-an-introduction/) tutorial series. Part 2 can be found [here](http://blog.aashni.me/2016/08/angularjs-tutorial-part-2-introducing-the-star-wars-api-and-angular-services), and Part 4 can be found [here](http://blog.aashni.me/2016/08/angularjs-tutorial-part-4-introducing-bootstrap).



The Star Wars API is working, and we're able to access information about the character. Next we'll play around with some of the data that has been returned from our API call, and display it in a more interesting (and more useful) format.

First, we'll start by displaying each characters name. Go back to your `main.html` view, and change the reference from `person` to `person.name`. The `name` is a field we know each person object has, and Angular will display all the information found at `person.name`.


    
    
    <div>
      <div ng-repeat="person in data">
        <p>{{ person.name }}</p>
      </div>
      <hr>
    </div>
    



[![AngularJS Tutorial Displaying Star Wars API Character Names](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_character_names.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_character_names.png)

You can actually have an ng-repeat inside another ng-repeat, which we will do now to list all the movies a character has been in.


    
    
    <div>
      <div ng-repeat="person in data">
        <p>
          <b>{{ person.name }}</b> - <span ng-repeat="film in person.films">{{film}}</span>
        </p>
      </div>
      <hr>
    </div>
    



[![AngularJS Tutorial Display Characters Name and Movies](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_character_names_and_movies.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_character_names_and_movies.png)

This doesn't look particularly nice, since SWAPI stores the movie names as the API URL to each individual movie, instead of providing the movie name. So now we have a couple of different options. We can either store each movie's name on `$scope` using the controller, and use this as a quick lookup option. Or we can make a second service function to call the SWAPI films API. We'll start with the first option so that you can see how easy it is to create a lookup, however we'll eventually swap to the second method since we'd like to make pages for characters and films.

We'll start by creating the lookup in our main controller. Head over to the `controllers/main.js` page, and add the following lines.

    
    
    $scope.movieNames = {
      'http://swapi.co/api/films/1/': 'I - The Phantom Menace',
      'http://swapi.co/api/films/2/': 'II - Attack of the Clones',
      'http://swapi.co/api/films/3/': 'III - Revenge of the Sith',
      'http://swapi.co/api/films/4/': 'IV - A New Hope',
      'http://swapi.co/api/films/5/': 'V - The Empire Strikes Back',
      'http://swapi.co/api/films/6/': 'VI - Return of the Jedi',
      'http://swapi.co/api/films/7/': 'VII - The Force Awakens',
    }
    



Next, we'll update our `main.html` view so that instead of just outputting the API url, it will pull the name of the movie from the list we created. More specifically, we are looking for the `film` key in our `movieNames` variable on $scope, and returning the associated value.


    
    
    <b>{{ person.name }}</b> - <span ng-repeat="film in person.films">{{movieNames[film]}}</span>
    



Let's test this out by viewing it in our browser at `http://localhost:8000`.

[![AngularJS Tutorial displaying movie names using a lookup variable created in the controller](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_movies_using_movieNames_from_controller-1024x485.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_movies_using_movieNames_from_controller.png)

Sweet, it works! But can you see any long term problems with using this method? What if a new movie get's added? You'd have to go and update the lookup, which can get tedious and annoying. Especially since we already know that the SWAPI gives us access to this information. First let's `undo the two changes` above, then we'll go back into our `swapi.js` service, and add the following API function call.


    
    
    Swapi.films = function() {
      var path = '/films';
      var url = Swapi.domain + path;
    
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };
    



For now we can go ahead and display this on our website by adding the following to the `main.js` file.


    
    
    SwapiService.films()
      .then(function(data) {
        $scope.films = data.data.results;
    });
    



Next add this to the bottom of the `main.html` file.


    
    
    {{ films }}
    



[![AngularJS Tutorial displaying films after creating films service api call](http://blog.aashni.me/wp-content/uploads/2016/08/angulrjs_display_films_api_data.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angulrjs_display_films_api_data.png)

If you notice, this is another data block. Before we continue much further, I want to show you a really nifty tool called [NG-Inspector](https://chrome.google.com/webstore/detail/ng-inspector-for-angularj/aadgmnobpdmgmigaicncghmmoeflnamj). It's a Chrome plugin that helps view what content is stored on the $scope variable, and can make debugging a lot easier. If we inspect the `films` variable, we notice that it's an Object array. Dig a little deeper, into the `episode_id`, and we know that the movie order is based on when they were filmed.

[![AngularJS Tutorial Using the NG-Inspector](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_ng_inspector.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_ng_inspector.png)

We can map the `episode_id` to the end of the SWAPI url we get for the films in order to help automate the film information process. To do this, we'll dive into the `main.js` file, and make the following changes.


    
    
    $scope.films = {};
     
    SwapiService.people()
      .then(function(data) {
        $scope.data = data.data.results;
     
        angular.forEach($scope.data, function(person) {
          // creating a list of all possible films
          angular.forEach(person.films, function(film) {
            $scope.films[film] = '';
          });
        });
    });
     
    SwapiService.films()
      .then(function(data) {
        $scope.filmInfo = data.data.results;
     
        // adding film names to list of films
        angular.forEach($scope.filmInfo, function(film) {
          var api_call = 'http://swapi.co/api/films/' + film.episode_id + '/';
          $scope.films[api_call] = film.title;
        }); 
    });
    




    
    
    <b>{{ person.name }}</b> - <span ng-repeat="film in person.films">{{films[film]}}</span>
    



If everything worked well, you will now see a list of the main characters, and the names of the movies that they have been in beside them.

[![AngularJS Tutorial displaying names and films for characters after creating a films API service call](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_names_films_for_characters_using_films_service.png)](http://blog.aashni.me/wp-content/uploads/2016/08/angularjs_display_names_films_for_characters_using_films_service.png)

If you think you've made a mistake somewhere, you can access a copy of the above code from the accompanying github repository. [Click here](https://github.com/aashnisshah/lsh_angularjs_tutorial/commit/11d5ecf38b8ae1aac1710c806b7ece5499f0cc44) to see all the code upto the end of this section.
