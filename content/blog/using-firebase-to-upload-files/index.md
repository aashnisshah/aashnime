---
author: Aashni
comments: true
date: 2018-02-12 09:26:32+00:00
layout: post
link: http://blog.aashni.me/2018/02/using-firebase-to-upload-files/
slug: using-firebase-to-upload-files
title: Using Firebase to Upload Files
wordpress_id: 398
categories:
- HTML and CSS
- Javascript
- Tutorial
---

As part of one of my Elixir Labs Projects, I need to create a form that let’s me upload files to firebase, and then display them as appropriate. I figured that would be a great topic for this week’s blog post. While I used an AngularJS project, I’ll write this post for a generic HTML/CSS/JS file instead. [Firebase](https://firebase.google.com/docs/storage/web/start) has a more in-depth article you can use to learn more about other file types, I’ll be covering a simple version specifically for image uploading.

First setup the skeleton HTML page. As Firebase integrates, the code will be added into this page.


    
    
    <html>
      <head>
        <title>Firebase File Upload | blog.aashni.me</title>
      </head>
      <body>
      </body>
    </html>
    





## Collect the Files


Before connecting with the Firebase API, setup the HTML page to ask the user for files to upload. This can be done relatively easily with an `<input>` field, and somewhere to output the files selected. At the start of the body, create a new input element with the id set to `files`.


    
    
    <input id="files" name="files[]" type="file" multiple>
    <ul id="list"></ul>
    



Next, create a Script section and within this Script section add an event listener on the input field, which calls a handleFileSelect function.


    
    
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
    



Below the event listener, create the `handleFileSelect` function that loops through all the files, and outputs the file name to the console (for now).


    
    
    function handleFileSelect(event) {
      var files = event.target.files;
      for (var i = 0; i < files.length; i++) {
        file = files[i];
        console.log(file.name);
      }
    }
    





## Connect to Firebase



Next, if you don’t already have a [Firebase](https://firebase.google.com/) account or project setup on Firebase, now would be the time to create one. Once you’re on the project page, click on the `Add Firebase to your web app` button and you’ll see some javascript code. Copy this and paste it into the bottom of your HTML file, before the closing `</body>` tag. Here’s a sample code snippet - note that you’ll need to change the values in the config section to the values related to your own project.


    
    
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
    <script>
      var config = {
        apiKey: "<API_KEY>",
        authDomain: "<PROJECT_ID>.firebaseapp.com",
        databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
        storageBucket: "<BUCKET>.appspot.com",
        messagingSenderId: "<SENDER_ID>",
      };
      firebase.initializeApp(config);
    </script>
    





## Setup Firebase Cloud Storage



Firebase’s image uploading system works by making use of Firebase’s cloud storage. This is often not turned on by default, so click on the Storage (or File) option in the Firebase Console and click to create a new Storage account. Copy the Storage Bucket key and paste it into the StorageBucket config above so that it replaces `storageBucket: ".appspot.com",`. Additionally, after the config block, instantiate and create a reference to the storage bucket by adding the following line of code.


    
    
    var storage = firebase.storage();
    var storageRef = storage.ref();
    



**NOTE: Firebase requires you to use authentication when making use of File Storage. For the purposes of this tutorial, I’m skipping over it and making my cloud storage [public](https://firebase.google.com/docs/storage/security/start#sample-rules), but this is dangerous. Follow the proper [authentication](https://firebase.google.com/docs/auth) guidelines and set this up properly.**



## Upload Files



Finally, we’re ready to write the upload file function. This function will prepare the file for upload, then make use of Firebase’s `put` API call to begin the File Upload process. We use the `storageRef(‘images/‘ + file.name)` so that the file is created under an `images` section in our storage hub.  We’ll then monitor the upload progress for three processes: monitoring the upload, catching and reporting any errors and finally what to do on success. I’ll create the shell for this below, and explain each section in more detail following this.


    
    
    var metadata = {
      contentType: 'image/jpeg'
    };
    
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function(snapshot) {
        // calculate progress as a percentage and check for upload state
      }
      }, function(error) {
        // catch an error when it happens, note: there are more error codes
      }, function() {
        // on success, display the uploaded image on the page
      )
    }
    



We make use of the idea of a `snapshot`, where a snapshot is the specific results at that moment of the upload process.
The first of the three functions is monitoring the upload process. For a small image file this may not seem necessary, but for larger files that need to be uploaded, it’s helpful to have a % of how much of the file has been uploaded. We then check the current state of the snapshot to see if it’s still running, or if the file upload process had been paused for some reason. We can check these using a case and switch check.


    
    
    // calculate progress as a percentage
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    
    // check for a change in u0pload state
    switch(snapshot.state) {
      case firebase.storage.TaskState.PAUSED:
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING:
        console.log('Upload is running');
        break;
    }
    



The second function will only get called if an error occurred. We’ll get an error code and be able to show an appropriate error message to the user depending on what error code was returned. Use [this list of error codes](https://firebase.google.com/docs/storage/web/handle-errors) as a reference for what errors Firebase returns. For now I’ll print an error message in the Console.


    
    
    switch(error.code) {
      case 'storage/bucket_not_found':
        console.log('The Bucket for this storage could not be found');
        break;
      case 'storage/unauthorized':
        console.log('User doesn\'t have access');
        break;
      case 'storage/cancelled':
        console.log('User cancelled the upload process');
        break;
      case 'storage/unknown':
        console.log('Unknown error');
        break;
    }
    



The third function gets called on a successful image upload. We’ll grab the URL that the image was uploaded to, then append the image to the list originally created at the start of this guide.


    
    
    var downloadURL = uploadTask.snapshot.downloadURL;
    console.log('the image uploaded and can be found at ' + downloadURL);
    
    var filelist = document.getElementById('list');
    var newFileListElement = document.createElement('li');
    var fileImage = document.createElement('IMG');
    fileImage.src = downloadURL;
    newFileListElement.appendChild(fileImage);
    filelist.appendChild(newFileListElement);
    



The final step would be to replace the console.log in `handleFileSelect` with a call to the `uploadFile` function instead using `uploadFile(file);`.



## Test It Out!



Voila! Test it out and let me know what happens! Here’s what my completed page looks like after I uploaded a photo of a gorgeous Siberian Husky.

[![](http://blog.aashni.me/wp-content/uploads/2018/02/Screen-Shot-2018-02-12-at-4.15.04-AM.png)](http://blog.aashni.me/wp-content/uploads/2018/02/Screen-Shot-2018-02-12-at-4.15.04-AM.png)

You can find the completed version of the code on [my Firebase File upload GitHub repository](https://github.com/aashnisshah/firebasefileupload). Make sure you update the API keys to match your own project.
