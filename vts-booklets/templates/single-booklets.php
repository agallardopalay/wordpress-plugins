<?php include_once(dirname(__FILE__) . '/header.php'); ?>

    <div class="booklets">
        <div class="booklets__go-back">
            <a href="/booklets">&lt; BACK TO THE BOOKLETS</a>
        </div>

        <div class="booklets__top booklets__top--less">
            <div class="card">
				<div id="primary" class="content-area card-block">
					<main id="main" class="site-main" role="main">

							<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>		

								<div class="entry-content">

									<?php the_title( '<h1 class="entry-title">', '</h1>' );?>
									
									<?php 

										$image = get_field('banner');

										if( !empty($image) ): ?>

											<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="img-fluid"/>

									<?php endif; ?>
									
									<hr>
									
									<?php 

										$excerpt = get_field('booklet_excerpt');

										if( !empty($excerpt) ): ?>

											<?php echo $excerpt;?>

									<?php endif; ?>
									
									<?php 

										$file = get_field('pdf');

										if( $file ): ?>
										
											<a href="<?php echo $file['url']; ?>"><i class="fa fa-file-text" aria-hidden="true"></i> <?php echo $file['filename']; ?></a>

									<?php endif; ?>
									
								</div><!-- .entry-content -->
								
							</article><!-- #post-## -->	

						

					</main><!-- #main -->
				</div><!-- #primary -->		
			</div>

        <div class="clearfix"></div>

        
    </div>

<?php get_footer(); ?>