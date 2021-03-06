---
author: Aashni
comments: true
date: 2018-04-23 06:01:34+00:00
description: Most codebases are riddled with TODO comments. Here's a few tips on how to keep them manageable
layout: post
link: https://aashni.me/blog/todo-make-todo-comments-better-for-everyone/
slug: todo-make-todo-comments-better-for-everyone
title: "TODO: Make TODO Comments Better For Everyone"
wordpress_id: 462
categories:
  - AngularJS
  - Backend
  - Coding Tips
  - Frontend
  - Javascript
  - Tutorial
  - Web Development
---

This past week, I had some time to work on code cleanup after the [Cash App Launch in UK](https://twitter.com/CashApp/status/981201724689014784), especially since my next two "projects" are waiting on final designs. As I worked on the launch, I'd kept a general list of things to follow up on, like cleaning up some regexes or refactoring some of my code. I has also used some `TODO's` within the code to track very specific code changes that I knew I wanted to come back to and fix.

```javascript
if (country === "United Kingdom") {
  // do this
} else {
  // do this
}
```

If you're working on any type of codebase, you'll often find yourself trying to come up with sensible ways to track things within your code, whether it's a bug you want to fix, or some general code cleanup you need to do. There are a few different ways you can go about trying to do this such as using sticky notes, a notebook, JIRA tickets, a list on your computer or written on a whiteboard. It's extremely common to use a `TODO` comment somewhere in your code.

TODO comments in code are extremely helpful since they're easy to search, and should be written exactly where the related work needs to be done. In most modern IDEs (and some text editors) their's a tab to compile and view all your TODO's in one place. However, more often than not, these TODO's are forgotten, lost in the codebase forever. There are a few different reasons for this, the most common being once you're done with a section of code, you're unlikely to go back to it and instead continue with a new part of your project. In this case, the TODO's become old and can lose relevance. The other common reason is that by the time you do get back to the TODO comment, you may have forgotten what the purpose or your TODO was.

## When To Use TODO's

Within my team, we try to have our code production ready before merging it in to reduce the need of additional follow ups in the future. However every now and then we'll have a few relevant TODO's creep into our code - and that's totally fine. To make the most out of your TODO's, especially when you're working with a team, it's good to set up some guidelines on how and when to use them. A good rule to follow is to use TODO's when it may be good for a future optimization, but isn't necessary to ship the code. Alternatively, if we're shipping the code, but know there's a future change in some other part of the infrastructure (i.e. a server change), and we'll need to make an update once that change lands.

### Follow a Format

Agree on a format and start using it. A good format would include, at a minimum, the alias or name of the developer who put the comment into the code, and enough of a description that it's easy to understand the comment. The first TODO below isn't very helpful, while the second provides more information

```javascript
// TODO optimize this function
// TODO(aashni): optimize this function
```

It's sometimes good practice to include a date in your comment as well, if your team has the habit of finding TODOs from a long time ago in your code. For reference - I found some TODOs in our codebase from at least 3 years ago!

### Healthy Descriptions

A TODO is only as useful as it's accompanying description. When writing a TODO, don't assume you're writing it for yourself in the next few days. Instead imagine you're writing it for a new developer on the team, who's reading the comment a year from now. Is there enough information for the developer to understand the TODO without having to come and find you? If it's a simple TODO, like `make variable configurable`, then it's sufficient to keep that as an inline comment. With simplicity, I add caution to stay away from comments like `fix this up` or `reenable this later`. These don't provide the next developer with useful information on what needs to be done.

Focus on including, where relevant, why the code is in it's current state, what you're waiting on before updating it, or what's blocking it from being done. For example if you're waiting on a server change before updating some frontend code you could write `waiting on code change in server code that will send the country value to the user profile so that we can use country value instead of guessing from the currency value`. That can get pretty long, and no one's realistically going to start reading through many comments if they're all super long.

Instead you could make use of a JIRA ticket and TODO comment combination. Here, we'd use `waiting on http://link.to/jira/ticker to use country code value`. The JIRA ticket would have an explanation of the server side changes that need to take place, and ideally a link or comment on the changes related to your TODO as well. It's a tricky balancing game of only providing the necessary information.

### Scan TODOs Often

Make it a team habit, and perhaps even one of your teams goals to scan through your codebase every couple of months specifically to identify existing TODO's, wether they are still relevant, need to be updated or can be deleted. If you have a new person joining the team, it may even be a good idea to let the new person scan through and fix some of the simpler TODOs. Note that I'm strictly talking about using this as a technique to get your new team member familiar with the codebase - **do not** use this as an opportunity to get your new team member to clean up your code.

## Other TODO-like Comments

TODO is only one type of comment you can find in a codebase. There are a few other common ones:

`TODO` - a change that should be done in the future, but isn't necessary to ship the product. These are usually code cleanups or refactoring the code
`BUG` - the code below contains a bug
`HACK` - the code below is a workaround for an existing issue
`FIXME` - the code below doesn't work as intended and needs to be fixed.

They all sound similar, but have subtle differences. You should use the same decisions of marking who wrote the comment, and being descriptive enough for all of them.

How do you use TODO comments within your codebase? Have any other tips you'd like to share?
