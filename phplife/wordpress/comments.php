<?php // Do not delete these lines

if ('comments.php' == basename($_SERVER['SCRIPT_FILENAME'])) die ('Please do not load this page directly. Thanks!');

if (!empty($post->post_password)) { // if there's a password

	if ($_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password) {  // and it doesn't match the cookie

?>



<h2><?php _e('Sorry, this post is Password Protected'); ?></h2>

<p><?php _e('You will need to enter the password to view comments.'); ?></p>



<?php return;

	}

}



	/* This variable is for alternating comment background */



$oddcomment = 'alt';



?>



<!-- You can start editing here. -->



<?php if ($comments) : ?>

	<h2>There <?php comments_number('are no responses', 'is one response', 'are % responses' );?> on &#8220;<?php the_title(); ?>&#8221;</h2><br>



<ol class="commentlist">

<?php foreach ($comments as $comment) : ?>




<div class="commentmetadata">

<h4><?php comment_author_link() ?> posted this on <?php comment_date('F jS, Y') ?> <?php edit_comment_link('Edit Comment','',''); ?></h4>

 		<?php if ($comment->comment_approved == '0') : ?>

		<?php _e('Your comment is awaiting moderation.'); ?>

 		<?php endif; ?>





<?php comment_text() ?>

</div>


<?php /* Changes every other comment to a different class */

	if ('alt' == $oddcomment) $oddcomment = '';

	else $oddcomment = 'alt';

?>



<?php endforeach; /* end for each comment */ ?>

	</ol>



<?php else : // this is displayed if there are no comments so far ?>



<?php if ('open' == $post->comment_status) : ?>

	<div class="commentmetadata"><div class="commentHeader">There are currently no comments. Why don't you add one?</div></div>

	<?php else : // comments are closed ?>

	<div class="commentmetadata"><div class="commentHeader">Comments Closed</div>Unfortunately comments have been closed on this post. But there are <a href="http://www.enchantmenot.org/blog" target="_blank">many other posts</a> that you can comment on</div>


	<?php endif; ?>

<?php endif; ?>





<?php if ('open' == $post->comment_status) : ?>



		<h3 id="respond">Leave a Reply</h3>



<?php if ( get_option('comment_registration') && !is_user_logged_in() ) : ?>
<p>You must be <a href="<?php echo wp_login_url( get_permalink() ); ?>">logged in</a> to post a comment.</p>
<?php else : ?>
 
<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
 
<?php if ( is_user_logged_in() ) : ?>
 
<p>Logged in as <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Log out of this account">Log out &raquo;</a></p>
 
<?php else : //this is where we setup the comment input forums ?>
 
<p><input type="text" name="author" id="author" value="Name" size="15" tabindex="1" <?php if ($req) echo "aria-required='true'"; ?>>

 
<input type="text" name="email" id="email" value="Email" size="15" tabindex="2" <?php if ($req) echo "aria-required='true'"; ?>>

 
<input type="text" name="url" id="url" value="Website" size="15" tabindex="3"></p>
 
<?php endif; ?>
 
<!--<p><small><strong>XHTML:</strong> You can use these tags: <code><?php echo allowed_tags(); ?></code></small></p>-->
 
<p><textarea name="comment" id="comment" cols="640px" rows="10" tabindex="4"></textarea></p>
 
<p><input name="submit" type="submit" id="submitComment" tabindex="5" value="comment">
<?php comment_id_fields(); ?>
</p>
<?php do_action('comment_form', $post->ID); ?>
 
</form>
 
<?php endif; // If registration required and not logged in ?>
</div>
 
<?php endif; // if you delete this the sky will fall on your head ?>