---
author: Aashni
comments: true
date: 2013-07-10 11:22:07+00:00
description: Simple Login/Logout System in PHP
layout: post
link: http://blog.aashni.me/2013/07/simple-loginlogout-system-in-php/
slug: simple-loginlogout-system-in-php
title: Simple Login/Logout System in PHP
wordpress_id: 55
categories:
- Contests and Hackathons
- Projects
- Summer 2013
- Tutorial
---

I've been working on recoding the #PickMe project I started at the CUTC Hackathon. I decided to start from the ground up, and literally create the site form scratch. And so I began coding the Login/Logout section of the site. I plan on making this all PHP based, with the use of a MySQL Database.

The first thing you need to do is create your Database setup. Make sure you keep track of the database username, password and host server. You will then create at least one table that contains an ID field, username and password. Depending on what else you want to store for the users, you may want to add extra fields such as email address, name, company etc. I'll leave this up to you.

In your MySQL Manager, create a database, then create a new table with as such:

    
    CREATE TABLE Users
    (
    userID int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (userID)
    )



This table is called `Users` and has three fields. `userID` is the ID key to keep users distinct. It will automatically be increased every time a new user is created and is classed as the primary key for this table. Username and Password are both set to be not empty, and have a size of 255 characters.

Once you've created your table, we can now start coding the pages. We will create four pages, the first is the `config.php`config.php


The Config page is where we connect to our database. I prefer writing it as it's own page, then including it into other pages as it's needed as this reduces the amount of code needed overall, and also means that we don't have to update database information in multiple places. Remember to update the values to fit your database requirements.


    
    <?php
    $database = &quot;database_name&quot;; // the name of the database.
    $server = &quot;localhost&quot;; // server to connect to.
    $user = &quot;database_user&quot;; //
    mysql username to access the database with.
    $pass = &quot;database_password&quot;; // mysql password to access the database with.
    
    /* creating new mysql link */
    $mysqli = new mysqli($server, $user, $pass, $database);
    
    /* connecting to database */
    if(mysqli_connect_errno()) {
         printf(&quot;Failed to connect to MySql: %s\n&quot;, mysqli_connect_error());
         exit();
    }
    
    /* change to pickme_db database */
    $mysqli->select_db(&quot;users&quot;); // select the users table ?>





## login.php


The next page we will create is the login page. On this page, we will first include the config.php page so that we can connect to the database. We then perform checks to see if the user is already logged in, and if they are we pass them on to the admin.php page. We then perform user checks to see if the password they submitted is accurate, and finally, we have the login form.

    
    <?php
    
         include("config.php");
    
         if (!isset($_SESSION)) {
              session_start();
         }
    
         if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']=='yes'){
              // logged in
              header("location: admin.php");
              exit();
         }
    
         /* check to see if user attempted logging in */
         if($_GET["atmpt"] != NULL){
              if($_GET["atmpt"] == 2){
              // forgotten password
              $error .= "Did you forget your password?<br>";
         }
    
         /* get username and password */
         $username = $_POST["username"];
         $password = $_POST["password"];
    
         /* MySQL Injection prevention */
         $username = mysqli_real_escape_string($mysqli, stripslashes($username));
         $password = mysqli_real_escape_string($mysqli, stripslashes($password));
    
         /* check for user in database */
         $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'"; // replace "users" with your table name
         $result = mysqli_query($mysqli, $query);
         $count = $result->num_rows;
         if($count > 0){
              //successfully logged in
              $_SESSION['username']=$username;
              $_SESSION['loggedin']='yes';
              header("location:admin.php");
              exit();
         } else {
              // Login Failed
              $error .=  "Wrong Username or Password";
              $_SESSION['loggedin']='no';
              $atmpt = 2;
         }
    } else {
         $atmpt = 1;
    }
    
    ?>
    
    
    <!doctype html>
    <html>
         <head>
              <title>Log In</title>
         </head>
         <body>
    
         <h1>Log In</h1>
    
         <p>Enter your details below to log in to your account.</p>
    
         <span><?php echo $error ?></span>
    
         <form action="login.php?atmpt=1" method="post">
         <table>
              <tr>
                   <td>Username</td>
                   <td><input type="text" name="username"></td>
              </tr>
              <tr>
                   <td>Password</td>
                   <td><input type="password" name="password"></td>
              </tr>
              <tr>
                   <td colspan="2"><input type="submit" value="Log In"></td>
              </tr>
         </table>
         </form>
    
         </body>
    </html>
    
    





## admin.php


If the user successfully logs in to their account, they are redirected to the admin.php page. Since this page is only for people that are logged in, we want to make a check to see that a user is logged in. If a user is trying to access the page without being logged in, we redirect them back to the login page. Otherwise we display the admin page content.


    
    <?php
         if (!file_exists('config.php')) {
              echo 'Error. Database file does not exist.';
         } else {
              require_once('config.php');
         }
    
         if (!isset($_SESSION)) {
              session_start();
         }
    
         if(!isset($_SESSION['loggedin']) && $_SESSION['loggedin']=='no'){
              // not logged in
              header("location: login.php");
              exit();
         } else {
              $_SESSION['loggedin'] = 'yes';
         }
    
    ?>
    
    <!doctype html>
         <html>
         <head>
              <title>Admin Page</title>
         </head>
         <body>
    
         <h1>Admin page</h1>
         <p>Congratulations! You have successfully logged in.</p>
         <p>Would you like to <a href="logout.php">log out</a>?</p>
         </body>
     </html>
    





## logout.php


To let a user log out, we need to destroy their user session and then redirect them to the login page as follows.

    
    
    <?php
    
         session_start();
         session_destroy();
         header("location:login.php");
         exit();
    
    ?>
    






## Everything Else


This is a really simple login system setup. You will need to create some extra security controls, such as what to do when someone has tried entering their password incorrectly too many times, or how to avoid people accessing other parts of your website. You should also consider trying to set up a Registration page, as well as a "forgot your email page" as well.
