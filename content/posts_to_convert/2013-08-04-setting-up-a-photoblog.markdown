---
author: Aashni
comments: true
date: 2013-08-04 13:44:33+00:00
description: Setting Up A Photoblog
layout: post
link: http://blog.aashni.me/2013/08/setting-up-a-photoblog/
slug: setting-up-a-photoblog
title: Setting Up A Photoblog
wordpress_id: 91
categories:
- Tutorial
- Websites I Use
---

I finally finished setting up my Photoblog, [Picture Me Not](http://www.picturemenot.com). I've had it running for a few years, but have been bad at updating. While I know I won't be able to update it too frequently, I figured the whole site needed a redesign anyway and that's exactly what I did.





## Wordpress & YAPB





The entire site is run on Wordpress as I've got the most experience with it, making it super easy for me to set up. I found a plugin called [Yet Another Photo Blog](http://johannes.jarolim.com/blog/wordpress/yet-another-photoblog/), which is designed just for people who want to post pictures in their posts. The setup process, if you understand how WordPress Posts work, is pretty simple, and the plugin has many great tools to let you reformat an image to the sizes that you want to use them in. You only need to upload one image, and the YAPB plugin will take care of creating any thumbnails you'll need anywhere on your site for you.





My next step was to start designing the layout the way I had wanted it to show off my work. Here are some very brief tips on using the plugin while designing your theme or layout. The first thing to check is if the post is a YAPB post, or has an image. You can do this inside the loop by using the following function:




    
    <?php if (yapb_is_photoblog_post()): ?>
    What to do if it IS a YAPB Post
    <?php else: ?>
    What to do if it ISN'T a YAPB Post
    <?php endif ?>





You can stylize posts differently if they're a blog post, which can be useful if you're using this blog for posts other than just photoblogging. You can then use your normal Wordpress tags to set up the layout how you'd like it in terms of the Title, Meta Data information etc. To pull up the picture, use the following code:




    
    <?php echo yapb_get_thumbnail('<?div>', array('rel' => 'lightbox'), '<?/div', array('w=950', 'q=90'), 'className'); ?>





There are many components to this function. The function will output a fully coded <img src="">, so consider this while you're adding parapets in. The first and third parameter, where the `<?div>` and `<?/div>` tags are placed, are the tags you would like to appear around the image. The second parameter is an array of attributes you would like included inside your `img` tag, such as a class, rel etc. To add more than one attribute, separate each set with a comma.





The next parameter is the thumbnail configuration array, where the plugin will generate an image based on the width provided. The last parameter is the class name, which you can use to help with styling your images.





There are two other functions called `yapb_get_image();` and `yapb_image();` which have similar functionalities, however I prefer using the `yapb_thumbnail();` function as it gives you more power and functionality over the image size. This is especially useful when you upload images of different sizes from different cameras.





There are many other functions you can use to get alternate image formats (`yapb_get_alternative_image_formats();`), or get the EXIF data from an image (`yapb_get_exif();`). These, and their parameters have been explained on the [YAPB website](http://johannes.jarolim.com/blog/wordpress/yet-another-photoblog/yapb-template-functions/).





## Comment Management




Unless you really want to tackle the Wordpress Commenting template, I'd recommend you use [Disqus](http://disqus.com/) Comment System paired with [Akismet](http://akismet.com/?return=true) to help control your commenting system. Both of these are free tools and will really help you control spam comments, as well as give you a nice and clean comment system interface. They also have social media interaction, particularly for Twitter and Facebook.





In terms of setting these plugins up, you need to install them onto your site, follow the set up instructions (which is basically creating an account and then specifying settings) for each plugin, and you're done. Easy as pie.





## Social Interaction




As I mentioned before, Disqus does a great job with gathering social reactions to a post and showing them off in the comments section. However it would also be nice to post directly to Facebook and Twitter whenever you create a post. I introduce to you, [Social](http://mailchimp.com/social-plugin-for-wordpress/) by Mailchimp. The setup for this plugin is also super simple. You need to connect to your twitter or Facebook accounts and then any specific settings you'd like to activate.





This plugin works as such: you'll post a blog post, and after hitting submit it will take you to an in-betweener page where you can select which twitter and Facebook account (pages, wall etc) you'd like to post the blog to. It also integrates replies into the comments section.





## That's All Folks




That's about it! The setup process is pretty simple for setting up a personal, unique photoblog to share your pictures. Feel free to explore my [Picture Me Not](http://www.picturemenot.com/) photoblog, as well as [Like it on Facebook](http://www.facebook.com/picturemenot) and [follow it on Twitter](http://www.twitter.com/picturemenot). And if you have one, definitely share it with me as well!
