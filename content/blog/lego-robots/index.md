---
author: Aashni
comments: true
date: 2013-11-28 02:37:11+00:00
description: Here's a breakdown of a lego robot project I built for my microprocessor course
layout: post
link: https://aashni.me/blog/lego-robots/
slug: lego-robots
title: Lego Robots!
wordpress_id: 116
categories:
  - Classes
  - Hardware
  - UofT
---

While this isn’t a totally new idea, it’s something I worked on for a lab in class, and it’s a project that I really liked working on. Enter: Lego Robot Scanner. Our task in this lab was to create a “robot” that would emit sounds whenever the scanner picked up a change in colour from white to black. We had two scanners running simultaneously, and a single strip with bars either going to the half-way point, or across the page. This setup meant that we had four possible sound states: no sound (all white), left sound (the left half had a bar), right sound (the right half had a bar) and full sound (the bar crossed the whole page).

We used a polling system where the sensors were constantly checking the colour, and if the threshold value of the sensor was less than the hexadecimal value of `7`, then it would call on the sound function to emit a sound. We also had a motor running in the code as well, though I’m pretty sure we had the motor running as part of the polling system, so you would sometimes see the motor slow down - basically, bad design! We know where and how to fix it, so it’s not too big a deal.

This code was written in a combination of C and Assembly, especially when we realized working with sound outputs and sensors is a lot easier in assembly, since you don’t have to work with some of the necessary overhead caused by C.

Anywhere, here are two pictures of the end result, followed by a video.

[![](./lr01.png)](./lr01.png)

[![](./lr02.png)](./lr02.png)
