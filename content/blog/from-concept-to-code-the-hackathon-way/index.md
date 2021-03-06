---
author: Aashni
comments: true
date: 2020-06-28 09:45:53+00:00
description: Hackathons are a great way to go from an idea or concept to actually coding and building it out. It doesn't have to be pretty, it just has to (look like it) works. Here are some of my hackathon tips based on the ODF4 Hackathon I participated in.
layout: post
link: https://aashni.me/blog/from-concept-to-code-the-hackathon-way/
slug: from-concept-to-code-the-hackathon-way
title: From Concept To Code - The Hackathon Way
---

One of the exciting things that happened last week was the [https://beondeck.com](On Deck Fellowship(ODF)) Hackathon. It felt good to flex my hacker skills and get back into the hackathon life.

## What _Is_ A Hackathon?

Incase you aren't familiar with the term `hackathon`, it's an event that often lasts 24-48 hours where folks come together, think up an idea and then build it. They usually end with a demo for teams to share what they've been working on (and judging). I've been involved with hackathons for over 7 years now, and actually started [UofTHacks](https://uofthacks.com) while I was at UofT.

Here's the journey our team went through during this hackathon, and some really useful tips to help get you from concept to code during a hackathon.

## Coming Up With An Idea

One of the main requirements of this hackathon (and most hackathons) is that we're not allowed to work on existing projects. All code had to be written during the event, however you can discuss ideas and form teams before the event starts. I started thinking about cool projects to hack on. One idea I joked about with another fellow was to create auto-recorded zoom intro's as a service since we're all doing numerous 1:1 calls everyday. What I landed on was creating a **Shopify for African Countries** called **Duka**. Duka means shop in Kiswahili.

Digital transformation has been accelerated globally as a result of COVID-19. If you follow stock market trends, one of the companies doing extremely well right now is [Shopfy](https://shopify.com) since many individuals and businesses are turning to the platform in order to earn additional income or simply keep their current business afloat. But this doesn't work (well) for African countries like Kenya.

As a concept, Shopify would work really well in Kenya. However, looking at it from a cost perspective, Shopify costs USD$29 every month on their basic plan, plus an additional 2.9% + 30¢ per transaction. These are pretty fair prices in USA, however in Kenya this is a significant portion of a businesses margins. For some context, it's possible to feed low income families of 6 for less than $USD25 for an entire month, and is what I've been doing through the funds raised for [Virtual Quiz Night Fundraiser](https://quizngiht.org). 

There's unfortunately another major issue when you look at Shopify's implementation. Shopify works  with card transactions for online purchases and unfortunately credit cards and debit cards are not a commonly used payment choice in Kenya. Instead, most citizens use mobile money, the most popular being [MPesa](https://www.safaricom.co.ke/personal/m-pesa). To understand Mobile Money, think of it like [Cash App](https://cash.app) or [Venmo](https://venmo.com) but over text message instead of an app. Currently Shopify doesn't offer MPesa as a form of payment. You can use third party integration tools to get MPesa working but this becomes even more **expensive** since Shopify charges a 2% transaction fee, and then the third party payment provider will also charge their own fees. That's **a lot**.

## Find Your A-Team

Once you've got your brilliant idea, you need to find a team of other incredibly talented folks to work with. 

`Should I take part in a hackathon if I'm not a developer?` is a question I'm asked often. My answer is unequivocally **yes**. While it's tempting to make a team of only developers that can hack away at top speed, I'd actually recommend trying to get a few folks that are also good at PM and Design work. The PM and/or Designer can focus on doing the necessary research and creating the demo at the end, while the developers can focus on building your hack. 

Before the hackathon started, I put a call out for folks interested in my idea and managed to find some folks in Ghana (Mickey), South Africa (David) and USA (Jeff) to join the team. This was possibly one of the most magical moments I've experienced during a hackathon, where the folks from Ghana and South Africa were able to reach out to their network and effectively conduct user interviews to support my hypothesis about Shopify. We explored the problem with a few different solutions, but eventually landed back on an African version of Shopify. What's better, between the three of us we were able to come up with real customers that wanted our product if we could get it working. Once the hackathon started, we connected with an additional teammate also from the USA (Alexis).

## Come Up With Your Game Plan

Once the hackathon officially started, our merry band got together and came up with a game plan. Jeff and I focused on starting to build the payment platform, while the rest of the team focused on research and working on getting our final presentation together.

From the developer perspective, I'd recommend identifying the core portions of your project you want to achieve. If it's a really technical project (like compressing files to 1kb), then focus on the technical. But if it's something with a visual component then make sure you break down your project in what you need to make it _work_, and what you need to make it _look like it works_. 

We came up with our plan and started working on code to make things actually work. Things were going well for Jeff and I. We pair programmed in order to understand the [MPesa API](http://developer.safaricom.co.ke/) and made some progress. Then we hit a stone wall where no matter what we did, we couldn't get the API to work. I have since found out it's because the API has been updated to avoid fraud, and the sandbox environment functionality doesn't work the way we'd hoped it would.

## Abandon Your Game Plan

As with most hackathons I've taken part in, at some point you'll hit a brick wall and will need to abandon your game plan, and start figuring out how to make your project _look like it works_ instead. Jeff and I switched gears to start focusing on what the store would like. We wanted to make the store as real as possible, so used products from one of our future customers Instagram store to power ours. 

**Don't code everything from scratch** - find open source alternatives that you can tweak where possible. Jeff and I looked at _many_ options and eventually settled on [JAMStack Ecommerce Site](https://github.com/jamstack-cms/jamstack-ecommerce). We made significant tweaks such as _localization_, styling changes, and populating it with data from our customers store. There were also a few bugs in the code, such as links not appending properly, so I fixed those as I went along. 

## Fake It To Make It

Since we couldn't get MPesa working completely, we had to come up with some creative hacks around this. _Just incase any of the On Deck Judges are reading this_, I won't go into too much detail here ;) (though feel free to [email](https://aashni.me/contact) or [tweet](https://twitter.com/aashnisshah) me to find out).

It's ok to fake parts of your app, especially the parts that you know work and exist elsewhere in the world. Hackathons aren't about _how much can you build in 24 hours_, but rather what creative ideas can you **hack** together. Think of them as early proof of concepts.

For example, a judge isn't going to care if you have a functioning login form on your app unless your app is about a creative new login flow that's better than [2FA, MFA, Magic Links, and whatever else exists in the world](https://twitter.com/AashniSShah/status/1277383575323762688?s=20). 

## Demo Time
Make sure you check any rules about your demo. Some hackathons have a specific format, others may have a time restriction. We had 3.5 minutes.

Our team ended up using a slide deck to walk folks through our problem before explaining our solution. Alexis walked through the slides, then showed a pre-recorded video of our app working, then finished off the slide deck. Some **really** important takeaways from demo'ing, expecially virtually:

 - Only have 1 speaker presenting, otherwise you waste valuable time switching back and forth between speakers
 - Use a slide deck so even if your audio cuts out, folks can follow along with the content on your slides
 - **Pre-record your demo**. Live demo's are excrutiatingly hard in person. They're even harder virtually where you're also tackling internet connectivity and lag. It's easier to pre-record your hack if possible and play the video during the demo.
 - For whoever is presenting, make sure you practice the demo a few times and time yourself as well

This summarizes what we built, and you can watch the pre-recorded [demo of our hack](https://drive.google.com/file/d/1YCEDHOuBoKgD-FZ8vXRb9w_-_Kl_T4Xy/view?usp=sharing). 

[![](./concept-to-code-01.png)](./concept-to-code-01.png)

## And The Winner Is....

**Team DUKA!**

There were three different categories; most achieved, most creative and most impactful. We won the _most achieved_ category which I suspect has a lot to do with the user research and real customers who would love to use this (and why PMs and Designers are important). 

To find out about the other teams that won, On Deck shared this [great write up](https://www.beondeck.com/post/odf-june-2020-hackathon-winners) that you should definitely check out!

## Thank You Team!
A giant shoutout to the amazing team I got to work with. You can find them on twitter at [@JeffChristianII](https://twitter.com/JeffChristianII), [@Alexishaebinkim](https://twitter.com/Alexishaebinkim) and [@MickeyCosta](https://twitter.com/MickeyCosta). Honorable mention to [@DavidTheFu](https://twitter.com/davidthefu).