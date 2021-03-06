---
author: Aashni
comments: true
date: 2020-07-28 09:29:41+00:00
description: Git is an incredibly powerful tool that makes tracking code changes and collaborating with others extremely easy. Here's how to set a default branch name to replace master when initiating a repository locally.
layout: post
link: https://aashni.me/blog/set-default-git-branch-name-for-new-repositories/
slug: set-default-git-branch-name-for-new-repositories
title: Set Default Git Branch Names for New Repositories
categories:
- Git
- Github
- Backend
- Frontend
- BLM
tags:
- Git
- Web Dev
- Github
---

In a previous post I talked about updating git repositories to use `main` instead of `master`: [renaming git master branch to use main](./../rename-git-master-main/).

Since then, the folks who help manage git released version 2.28 which allows you [to set your own default git repository name](https://lore.kernel.org/git/xmqq5za8hpir.fsf@gitster.c.googlers.com/), which means you no longer have to use `master` by default anymore.

It's worth noting that this currently only works for _new_ repositories that are created locally with the `git init` command. If you're using an existing repo, your default branch name will be whatever was previously set.

# Update Your Git Version

The easiest way to update git is likely through their website. [Download](https://git-scm.com/downloads) a version and make sure it's 2.28 or above.

If you're using mac and have homebrew, you can also run `brew update && brew upgrade`

# Set Your Default Branch Name

A simple 1 liner - run this in your command line and change `<defaultBranchName>` to whatever you'd like your default branches to be called. One example is `main`.

```bash
git config --global init.defaultBranch <defaultBranchName>
```

Voila! One less thing to worry about!
