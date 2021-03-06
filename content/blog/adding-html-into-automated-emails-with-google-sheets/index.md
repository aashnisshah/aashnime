---
author: Aashni
comments: true
date: 2020-08-02 23:47:14+00:00
description: Bootstrapping and using Google Sheets and Google App Scripts to automate your emails? This guide dives into how to make your automated emails look nicer by adding HTML tags in them, allowing you to include images and add some styling.
layout: post
link: https://aashni.me/blog/adding-html-into-automated-emails-with-google-sheets/
slug: adding-html-into-automated-emails-with-google-sheets
title:
  "Adding HTML into Automated Emails with Google Sheets"
categories:
  - automation
  - Google Products
  - Google Sheets
  - Google App Scripts
---

A couple of weeks ago I wrote a post on [automating emails using Google Sheets and Google App Scripts](../blog/automating-emails-using-google-sheets-and-google-app-scripts) so that I could send out birthday wishes to the 140+ members of my family. Since then we've wanted to spruce up the emails by adding some basic styles and incorporating an image in the email as well, however that required a bit of tweaking.

# Previous Code

As a refresher, here's the code I shared last time that I'll be building on top of.

```javascript
  function sendBirthdayEmails() {
    var numRows = 1000    // Number of Rows
    var numColumns = 5    // Number of Columns
    var nameCol = 2       // 0-indexed Column for your name
    var emailCol = 3      // 0-indexed Column for your email
    var birthdayCol = 4   // 0-indexed Column for your birthday
    var spreadSheetUrl = <INSERT_GOOGLE_SHEET_URL_HERE>
    
    var ss = SpreadsheetApp.openByUrl(spreadSheetUrl);
    var sheet = ss.getSheetByName(<INSERT_NAME_OF_SHEET_HERE>);
    var dataRange = sheet.getRange(2, 1, numRows, numColumns);
    var data = dataRange.getValues();
    
    for (var i in data) {
      var row = data[i];
      var emailAddress = row[emailCol];
      if (isTodaySpecial(row[birthdayCol])) {
        var subject = 'Happy Birthday ' + row[nameCol];
        var message = 'Happy Birthday ' + row[nameCol] + "!\n\nHope you have a splendid day!\n\nHugs from Aashni!";
        MailApp.sendEmail(emailAddress, subject, message);
      }
    }
  }

  function isTodaySpecial(dbDate) {
    var today = new Date();
    var specialDate = new Date(dbDate);
    
    var isTodaySpecial = today.getDate() === specialDate.getDate() && today.getMonth() === specialDate.getMonth()
    return isTodaySpecial
  }
```

# Upload Image and Change Permissions
To start, upload your image into the same folder as your Sheet and App Script. Next right click on the image and change the share permissions to allow **everyone with the link** to view the image.

A link to your file will appear. Part of this link includes the id. Copy this image ID as you'll need it in the next step.

```javascript
https://drive.google.com/file/d/<IMAGE_ID>/view?usp=sharing
```

# Add Image to App Script
In your script you can now add the following line to access the image within the script. Swap the `<IMAGE_ID>` with the one you copied above.

```javascript
var picture = DriveApp.getFileById('<IMAGE_ID>');
```

You can now access the image using `picture` in your code. There are two important functions we'll need to access: `picture.getId()` and `picture.getBlob()`. The `getID()` will grab the file ID in order to generate your photo URL, and is helpful when you want to use the image as part of the email. `picture.getBlob()` gets a blob of the data and is helpful when you want to attach the image as an attachment.

To incorporate the image into your message, you can do so as follows. Note the `cid:` in the src tag.

```html
<img src='cid:"+ picture.getId() + "' />
```

You can then add any other HTML text you'd like in your message, for example:

```html
let htmlMessage = '<h1>Hello ' + row[nameCol] + '!</h1>Hope you have a <i>wonderful</i> birthday!<br /><br /><img src='cid:"+ picture.getId() + "' /><br /><br />From Aashni'
```

# Use HTML In Your Email

The next change focuses on the `MailApp` command used to actually send out the email. Previously we used `MailApp.sendEmail(emailAddress, subject, message);`. What we want to do instead is to pass in an object to the `sendEmail()` and use `htmlBody` for the message.

```javascript
  MailApp.sendEmail({
    to: <RECEPIENT_EMAIL>, 
    subject: subject, 
    body: <PLAINTEXT_MESSAGE>,
    htmlBody: htmlMessage   
  });
```

# Include Images as an Attachment

If you'd like to include an image or other file as an attachment, you can also do that through `MailApp`. Create a new `inlineImages` object to store the document blobs:

```javascript
var inlineImages = {};
inlineImages[picture.getId()] = picture.getBlob();
```

Then pass that on to `MailApp`.

```javascript
  MailApp.sendEmail({
    to: <RECEPIENT_EMAIL>, 
    subject: subject, 
    body: <PLAINTEXT_MESSAGE>,
    htmlBody: htmlMessage,
    inlineImages: inlineImages    
  });
```

Voila! 