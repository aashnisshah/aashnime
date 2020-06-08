---
author: Aashni
comments: true
date: 2020-06-07 08:41:36+00:00
description: Git is an incredibly powerful resource to make sharing and collaborating on code much easier. Here's a breakdown of how Git works, as well as an overview of tools like Github.
layout: post
link: https://aashni.me/blog/a-git-guide-for-beginners/
slug: a-git-guide-for-beginners
title: A Git Guide for Beginners
categories:
- Git
- Github
- Backend
- Frontend
- HTML and CSS
- Javascript
- Tutorial
- Web Development
tags:
- Git
- Web Dev
- Github
---

[Git](https://git-scm.com/) is a free and open source distributed version control system. Those words might sound scary, but they mean git is a great tool to track code changes, as well as to collaborate and share code with other folks.

Imagine you and a friend both work on an essay together. You start by writing out an outline, and then the introduction paragraph.

You then send that file to your friend, who sees you made a few errors in your intro paragraph, fixes them for you and then writes the next paragraph. 

While your friend is doing that, you keep working on your own file and continue making changes.

It’s the end of the project - how do you go about combining both papers together so that you can easily find each others edits? Can you imagine doing this with 1000’s of people on a single set of files? Well, that’s what GIT is used to help with.

# What is Github or Gitlab or BitBucket
Many folks often confused `git` to be the same as `github`, however they are different. Git is the version control system that lets you manage and control your source code. Github on the other hand is a cloud-based hosting platform that let's you store and manage git repositories. [Github](https://github.com/), [Gitlab](http://gitlab.com/) and [BitBucket](https://bitbucket.org/) are similar services with slightly different features.

# How to Install Git
[Git's guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) covers many of the different ways to install Git if you don't already have it installed. To test if you have it installed, try the following:

```bash
git --version
```

# What Are Basic Git Commands

Here are some of the common commands you'll likely come across.

## Starting a repository
```bash
git init
```

Initialize an existing repository on your computer as a git repository

```bash
git clone [repolink]
```

If you already have an existing repository in the cloud, this allows you to initialize the repository locally, and pull down all the current code that exists in that repository.

## Checking for Changes

```bash
git status
```

This shows you what files and folders have been added or changes since you last synced your files

```bash
git diff
```

Diff shows you all the changes in a set of unpushed changes

## Syncing Changes to the Cloud
This is better known as `pushing` changes. I recommend doing a quick `git status` and `git diff` to check what changes have occured before adding files to the cloud.

```bash
git add [filename]
```

This adds changes to the file called `[filename]` to your local repository, and prepares the files to get merged.

```bash
git add *
```

This will add all unmerged changes to the current commit.

```bash
git commit -m [message]
```

This packages a set of changes into a group (or commit) and adds a `[message]` for easy reference in the future

```bash
git push
```

This pushes the changes from your local repository to the master repository wherever you've hosted your files (i.e. Github)

## Getting changes from other people

```bash
git pull
```

This pulls the latest copy of code from the master repository to your local repository

## Checking your history

```bash
git log
```

This will print out a log of all the changes that have been added or pushed to your repository

# Only the Beginning

These are some of the basic git commands you'll want to get familiar with. There are plenty other useful commands and best practices, however I'll leave this post as a simple guide for folks who have never used git before. Stay tuned (and subscribe) for a future post with more advanced commands, and the best ways to use them.