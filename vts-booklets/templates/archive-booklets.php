<?php
$booklets = new WP_Query([
    'posts_per_page' => -1,
    'post_type' => 'booklets',
    'post_status' => 'publish',
]);

?>
<?php include_once(dirname(__FILE__) . '/header.php'); ?>
    <div class="booklets">
        <div class="booklets-list-wrapper clearfix">
            <div class="booklets-list-left">
                <h3><?= esc_html(get_field('booklets-header-text', 'option')) ?></h3>
            </div>
            <div class="booklets-list-right">
                <?php while ($booklets->have_posts()): $booklets->the_post(); ?><!-- Don't remove this comment
                 -->
				 <div class="col-sm-4">
					<div class="card">
						<div class="content-area card-block">
							<main class="site-main">

									<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>		

										<div class="entry-content">

											<?php the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );?>
											
											<?php 

												$image = get_field('banner');

												if( !empty($image) ): ?>
													<a href="<?php echo esc_url( get_permalink() );?>">
														<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="img-fluid"/>
													</a>
											<?php endif; ?>
											
											<hr>
											
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
				</div>
				 <!-- Don't remove this comment
             --><?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
            <div class="booklets__vr"></div>
        </div>
    </div>

<?php get_footer(); ?>