---
author: Aashni
comments: true
date: 2020-06-21 07:25:11+00:00
description: Security features are vital at keeping users data safe within your app, especially because users need to trust that their data is safe. Here are some of the common ways to build that trust into your app right from the login flow.
layout: post
link: https://aashni.me/blog/features-to-improve-your-apps-safety-during-the-login-flow/
slug: features-to-improve-your-apps-safety-during-the-login-flow
title: "Features to Improve Your Apps Safety During the Login Flow"
categories:
  - Security
  - Privacy
  - Engineering
  - Startups
  - Apps
---

We've all seen alarming media articles about how a security breach resulted in millions of users worth of data being stolen. For example an [Adobe breach resulted in 7 million cloud accounts to be exposed](https://www.comparitech.com/blog/information-security/7-million-adobe-creative-cloud-accounts-exposed-to-the-public/) or how [nearly 140 million users data was on Canva](https://www.cisomag.com/nearly-140-million-user-data-leaked-in-canva-hack/). These are all extremely alarming, especially when you consider how much data exists on these platforms. 

However these mass breaches are not the only types of attacks you need to keep an eye out for. An attacker may attempt to breach just a single account on your app, and that can be costly. Attackers are incredibly intelligent and create scripts to automate guessing users passwords in order to gain access to their account. This happens against both individual accounts as well as thousands or millions of accounts in one go. Here are some ways to reduce the likelihood someone can break into an account, which will help keep your app safe and your customers happy.

## What are Brute Force Password Attacks?

If an attacker is using brute force patterns to guess a users password, they are effectively trying every combination of letters, numbers and symbols to guess your password. For example if your password is 6 letters long, a brute force script may iteratively go through and try the following password combinations:

```bash
aaaaa
aaaab
aaaac
...
zzzzz
```

With unlimited tries, the hackers script will eventually create your 5-letter password combination and get access to your account.

Note: Brute force attaks most often happen on desktop browsers rather than on mobile apps because it's easier to script for a desktop app.

## Improve Password Complexity Requirements

Increasing complexity means encouraging use of symbols, letters and numbers. A brute force script now has more combinations to iterate through in order to guess your password. 

- **Password Length** - Each additional letter in your password increases the number of brute force attempts required by a factorial multiple of the length of your password.
- **Require Uppercase charcaters, Symbols and Numbers** - There are 26 characters in the alphabet. If you include uppercase characters, that turns into 52 characters to iterate through. By requiring the use of numbers (for example: 0 to 9) and symbols (for example: @~!$_) it increases the characters to iterate through. Simple brute force scripts may only include letters, so adding numbers and symbols will help.
- **Don't Reuse Old Passwords** - If a user requests to change their password, require them to use a new password that they haven't used before. 

**PROS:**
This makes brute force login attempts programattically more complicated.

**CONS:**
This requires users to remember passwords that are more complicated.

## Limit Login Attempts and Lock Accounts

We can track the number of failed attempts at logging in to an account since the last successful login, and then lock an accountant after a certain number of attempts. It's important to do this after some failed attempts (i.e. 5 tries) rather than after the first failed login attempt because `to err is to be human`, and many people don't remember their passwords.

**PROS:**
This is a fairly simple solution to implement, and means brute force attacks only have 5 guesses rather than an unlimited number of guesses.

**CONS:**
If a genuine user legitimately forgot their password, they can get locked out of their own account. You'd likely need to implement a verification flow for these users to get back access of their account.

## 2 Factor Authentication (2FA)

2FA is a growing trend. A user goes through the login flow by entering their password. After this, your app will send a second verification method, usually a code to the users email or phone number, which the user then inputs into the app. There are various ways to implement a 2FA approach, such as using SMS messages or email, and adding additional security features such as expiring the code that's been sent so a user can only use it within a small timeframe.

**PROS:**
This is an extremely effective way to reduce brute force attacks on your app since the attacker would need to have first guessed the users account, then also have access to a users email or their physical phone in order to get the second verification code.

**CONS:**
As effective as this solution is, it requires a fair amount more design and coding to implement. In addition, some users can get stuck without the ability to verify their secondary account if the only option is using a phone number, and they are travelling or lose their phone.

## Captcha's

Everyone has used a captcha at some point.

**PROS:**
These are fairly easy to implement with plenty of free options. Google has a version you can implement, and [easy steps to follow](https://www.google.com/recaptcha/intro/v3.html)

**CONS:**
They _really_ don't look nice, and so far they don't seem too common on mobile apps

## Honeypot

A new style of spam control, which helps reduce the number of form submissions, is adding a *honeypot* field. You effectively add an invisible field to your form. Bots won't know it's a honeypot field, and you can effectively ignore all submissions that have a value set for the `honeypot` field in your backend.

**PROS:**
This is a fairly easy system to implement, and can be used well in conjunction with locking accounts.

**CONS:**
When implementing this, you'll need to be careful about making your site continues to be accessibile for everyone. Folks that use screen readers may have trouble, for example.

## Security Questions

If the backend system detects the possibility that an account may be breached, we can implement an additional security question check. Ideally after the first failed login attempt, start asking an additional security question that only the user can answer correctly. If they get the answer wrong, it acts as the same as inputting the wrong password.

**PROS:**
This increases the amount of work an attacker would have to do to get a hold of a users account.

**CONS:**
The questions (i.e. _"what city were you bron in?"_) can be easy to guess if someone knows the user personally. Alternatively, the users response to the answer could change making them forget which answer they used (i.e. _"what's your favorite book?"_). The implementation is not complicated, but it does require creating and storing the responses, and is an additional set of steps the user needs to fill out during the onboarding process.

## IP Address and Device ID Validation

Your backend can keep track of IP Addresses and Device IDs where if a user logins with the same IP or Device ID, it's probably the user. However if one or both of those change in an irregular pattern, one of the following scenarios may be happening:

An attacker is trying and failing to log in to a single account using a new IP address and device ID. In this case you could put the account into a locked state until the real user can verify themselves and log back in.

An attacker makes multiple login attempts from a single source new IP address to multiple accounts on your system. In this case, identify the IP address and block all access unless you verify these are legitimate requests.

**PROS:**
This is a really effective system that uses machine learning to identiy users login patterns and keep their account safe.

**CONS:**
This requires a lot of work. I'd almost suggest trying to find an alternative option online isntead of implementing this yourself.

