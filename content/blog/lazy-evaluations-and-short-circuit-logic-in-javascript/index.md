---
author: Aashni
comments: true
date: 2018-04-10 06:41:16+00:00
description: If you're trying to improve your runtime, consider Javascript's short circuit logic as a way to speed things up
layout: post
link: https://aashni.me/blog/lazy-evaluations-and-short-circuit-logic-in-javascript/
slug: lazy-evaluations-and-short-circuit-logic-in-javascript
title: Lazy Evaluations and Short Circuit Logic in Javascript
wordpress_id: 450
categories:
- AngularJS
- Backend
- Ember
- Frontend
- Javascript
- Tutorial
- Web Development
---

Javascript uses short circuit evaluation, where the second argument in an expression is only executed when the first argument is not sufficient to satisfy the expression.
We also have the power of Lazy Evaluations, which is the ability to only evaluate an expression when it’s needed. This is also known as the call-by-need strategy.



## Short Circuit Evaluations in Javascript


But before we dive too far into short circuit or lazy evaluation, let’s revisit what general Javascript [logical evaluation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) rules look like.

`a && b` is the equivalent of `a ? b : a`.
`a || b` is the equivalent of `a ? a : b`.
Any non empty string equates to `true` - this is true because Javascript uses the rule that any non-empty string is considered `truthy` approach to how it evaluates expressions. 



## Lazy Evaluation


Javascript takes a left to right, lazy approach to evaluating what an end result should be. You should always take care to group your evaluations together properly, or you may end up with outcomes you weren’t expecting.

With `&&` operators, the evaluation requires all values to be true. As soon as one element is false, the evaluation is stopped and the response would be `false`. The opposite is true with `||`, where only one element needs to be true.

For example:


    
    
    false && true                // returns false 
    false || true                    // returns true
    false && true || true     // returns true because it’s read as (false && true) || true, and the final true is sufficient
    false && (true || true)    // returns false
    





## Subtle Differences Between Lazy Evaluations and Short Circuits


Because of how coupled these two terms are with boolean or logical expression evaluation, they can be a little tricky to understand. Let’s use the following examples for some more explanation:


    
    
    let func1 = function() {
        console.log(‘f1’);
        return false;
    }
    
    let func2 = function() {
        console.log(‘f2’);
        return true;
    }
    
    let func3 = function() {
        console.log(‘f3’);
        return true;
    }
    
    if(func1() && func2() && func3()) {
        // code
    }
    /** output:
     ‘f1'
     returns false
    */
    
    if(func1() && func2() || func3()) {
        // code
    }
    /** output:
     ‘f1’
     ‘f3'
     returns true
    */
    



In the first if statement, because of short circuits, we get `false` because the first function evaluates to false and it’s sufficient for the whole expression. Because of lazy evaluations, the three functions aren’t called unless they’re needed. Since we only called the `func1()` function, the only output we’ll see if `f1`.

In the second if statement, just calling `func1` is no longer sufficient because of the `||`. Instead, these expressions are groups as `func1() && func2()` and `func3()` and at least one of these two pairs needs to be true. We start by checking `func1()` which evaluates to `false`. With short circuit, that makes the whole `func1() && func2()` expression `false`. With lazy evaluation, we don’t need to check `func2()`. However since we had an `||`, we do need to check `func3()`, which is `true` and gives us an output of `f3` to the command line as well.



## Chaining Evaluations



With this short circuit approach to logical expressions, we can use this type of `&&` and `||` evaluation to make certain checks and lookups within our codebase much easier. I’m constantly using objects with nested values in them, and want to perform actions based on those nested values, however every now and then the object that contains that nested value might not exist, and my code would run into an undefined error. In general it’s good practice to make sure a parent object exists before trying to access any of it’s child elements. With lazy evaluation and short circuiting, we’re now able to evaluate this as follows:


    
    
    let animals: {
        mammals: {
            dogs: {
                rating: 10
            }
        }
    }
    
    let howAwesomeAreDogs = animals && animals.mammals && animals.mammals.dogs && animals.mammals.dogs.rating;
    // howAwesomeAreDogs evaluates to 10/10
    



While it seems like overkill, it stops you from getting an undefined error if one of the parent components didn't exist.



## Replacing If Statements



If you noticed, the `howAwesomeAreDogs` value evaluated above is `10` and not a boolean value. As explained earlier, any non-empty string is considered truthy, and will return the value of the last element. In this case, it’s the value of the dog rating, which is 10.

Some people have started using this as a shortcut way of writing an if-statement. If we take our earlier example, this is what it looks like:


    
    
    let howAwesomeAreDogs = animals && animals.mammals && animals.mammals.dogs && animals.mammals.dogs.rating;
    
    // equivalent to writing:
    if(animals) {
        if(animals.mammals) {
            if(animals.mammals.dogs) {
                return animals.mammals.dogs.rating;
            }
        }
    }
    



What are some other cool techniques you've seen with short circuit or lazy evaluation logic in Javascript?
