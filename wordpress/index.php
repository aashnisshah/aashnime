<?php get_header(); ?>

<div class="row">
     <div class="col-lg-12 text-center">
          <div class="heading-section inner cover blogpost">
               <h1>My <strike>rambles</strike> Blog</h1>
               <p class="lead">Here are some of my thoughts on the different things I do.</p>
          </div>

           <div class="content">

           <?php if(have_posts()) : ?><?php while(have_posts()) : the_post(); ?>
                    <hr class="post-divider">
                    <div class="post">
                         <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                              <span class="metadata"><?php the_time('F jS, Y') ?> by 
                              <?php the_author_posts_link() ?> | 
                              <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?></span>
                         <div class="entry">
                              <?php the_excerpt(); ?>
                         </div>
                    </div>
               <?php endwhile; ?>
               <?php else : ?>
               <div class="post">
                    <h2><?php _e('Sorry, no posts matched your criteria.'); ?></h2>
               </div>
               <?php endif; ?>

          <div class="center"><?php if (function_exists("pagination")) {
              pagination($additional_loop->max_num_pages);
          } ?></div>

           </div>
     </div>
</div>

<?php get_footer(); ?>