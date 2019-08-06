<?php get_header(); ?>

<div class="row">
     <div class="col-lg-12 text-center">

          <?php if(have_posts()) : ?>
               <?php while(have_posts()) : the_post(); ?>
                    <div class="heading-section inner cover blogpost">
                         <h1><?php the_title(); ?></h1>
                    </div>

                    <div class="content">
                         <?php the_content(); ?>
                    </div>
               <?php endwhile; ?>
          <?php else : ?>
               <div class="heading-section inner cover blogpost">
                    <h1>Sorry!</h1>
               </div>
               <div class="content">
                    <h2><?php _e('Sorry, no posts matched your criteria.'); ?></h2>
               </div>
          <?php endif; ?>

     </div>
</div>

<?php get_footer(); ?>