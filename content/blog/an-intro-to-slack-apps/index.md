---
author: Aashni
comments: true
date: 2018-02-19 09:00:49+00:00
description: Slack is one of the best tools for communication. What's better is that it's fairly customizable, allowing you to make simple plugins and hacks unique for your company. Here's a guide on how to get started.
layout: post
link: https://aashni.me/blog/an-intro-to-slack-apps/
slug: an-intro-to-slack-apps
title: An Intro to Slack Apps!
wordpress_id: 407
categories:
  - API
  - Bash
  - Slack
  - Tutorial
---

This week, I was looking at our deployment pipeline and good ways in letting teammates know the status of a deployment. Previously, we’d have a message posted in the terminal with some details, which we’d then copy and paste into Slack. I wanted to take it a step further and automatically post it to [Slack](https://slack.com/). I’d never worked with [Slack’s API](https://api.slack.com) before, and thought I’d have to build a bot from the ground up to do this task for me. I was pleasantly surprised to find out that it’s actually a really simple process.

## Minimum Requirements

Before proceeding, you need to make sure you meet these minimum requirements.

1. You need to be part of a Slack community where you have enough rights to add Apps.
2. You will also need to make sure your Slack community is setup with Slack’s API.

## Create The Slack App

Once you’re all setup, [create a new app](https://api.slack.com/apps?new_app=1) through Slack’s API console. Start by giving your App a name, I’ll call mine ‘Deploy Bot’. You can then select which Slack workspace you want this bot to work in. Since I’m signed into, and have Admin rights, on multiple Slack channels, this is a dropdown list for me. I’ll choose the `Aashni.me App Testing` option that I setup.

[![](./Screen-Shot-2018-02-18-at-11.29.18-PM.png)](./Screen-Shot-2018-02-18-at-11.29.18-PM.png)

When your app is registered, you’ll then be taken to the Basic Information details page with a list of actions on preparing your App.

[![](./Screen-Shot-2018-02-18-at-11.30.16-PM.png)](./Screen-Shot-2018-02-18-at-11.30.16-PM.png)

## Introducing Webhooks

In the first set of options, `Add features and functionality`, there’s the `Incoming Webhooks` option that we’ll be using. Incoming Webhooks allow us to make use of regular HTTP requests with a JSON payload and the data sent on the payload gets pushed to a new message on Slack. You’ll want to click on the `Add New Webhook to Workspace` option, then select the channel or direct message chat group you’d like the messages to be posted to. Once selected, hit Authorize, and Slack will take care of the hook up.

[![](./Screen-Shot-2018-02-19-at-2.39.33-AM.png)](./Screen-Shot-2018-02-19-at-2.39.33-AM.png)

## Post Your First Message

Once this is all configured, you get a Webhook URL which you can now use to for your HTTP Requests. There’s a sample cURL command, you can copy and paste into a command line Terminal to test it out. The below screenshot shows me use the copied command, and what the result looks like on Slack.

[![](./Screen-Shot-2018-02-19-at-2.45.05-AM.png)](./Screen-Shot-2018-02-19-at-2.45.05-AM.png)

Let’s Analyze the cURL Request. This is what we used:

```bash
curl \-X POST \-H 'Content-type: application/json'  \--data '{"text":"Hello, World!"}'  <Slack  Hook URL: https://hooks.slack.com/\_\_\_\_\_\_\_\_\_\_>
```

cURL is a tool that let’s you copy from one source to another using many different protocols, http and https being some of these. `-X` deals with any proxy’s we may encounter. The `-H` flag is for header information that is attached to the request. In this example, we set the Content-type to application/json and set this as the header. The `--data` is the message that will appear on Slack. Finally, the last part is the URL that was generated and is available in the Slack API console for the channel we requested.

Tada! You can now include this cURL command as part of your deployment scripts, where the generated output is now saved in a variable that’s passed to the data object instead. Here’s an example of a quick bash script that prints out some lines, then posts them to slack as well.

```bash
#!/bin/bash

line1\="Hello world."
line2\="This is a bash file."
line3\="Let's post this to slack!"
text\=$(printf "%s %s %s" $line1 $line2 $line3)

echo $line1 $line2 $line3
echo $text
echo '{"text":"'"$text"'"}'

curl \-X POST \-H 'Content-type: application/json'  \--data '{"text":"'"$text"'"}'  <INSERT SLACK HOOK API URL\>
```

Note: To get the data to properly output, be very careful with which sets of quotes you open and close in the last line of this bash script.

[![](./Screen-Shot-2018-02-19-at-3.27.14-AM.png)](./Screen-Shot-2018-02-19-at-3.27.14-AM.png)
