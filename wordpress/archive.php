<?php get_header(); ?>

 <?php if(have_posts()) : ?><?php while(have_posts()) : the_post(); ?>
          <div class="post">
               <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <span class="metadata"><?php the_time('F jS, Y') ?> by <?php the_author_posts_link() ?> <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?></span>
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



<?php get_footer(); ?>