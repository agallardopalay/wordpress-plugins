<?php
if (!defined('ABSPATH')) exit;
/**
 * The main template file.
 *
 * @package ccus
 */
get_header();
?>
    <div class="theme-page-template">
        <div class="row container single-container px-0 py-0">

            <div class="col-sm-12 float-left md:px-6 py-6">
                <!-- <div class="w-full container"> -->
                    <h1 class="mt-10">
                      <?php
                        _e('Financial News', 'cccsca');

                        $pagednumber = get_query_var('paged');
                        if($pagednumber > 1):
                            echo '(Page '. get_query_var('paged').')';
                        endif;
                      ?>
                    </h1>
                <!-- </div> -->

                <div class="container flex flex-col items-center justify-center px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">
                    <div class="grid max-w-lg gap-5 mx-auto mt-6 mb-10 md:grid-cols-2 md:max-w-none">
                      <?php
                        $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

                        $the_query = new WP_Query( array(
                          'post_type' => 'post',
                          'post_status' => 'publish',
                          'posts_per_page' => get_option('posts_per_page'),
                          'order' => 'DESC',
                          'orderby' => 'date',
                          'paged' => $paged,
                        ) );

                        if ( $the_query->have_posts() ) :
                            while ( $the_query->have_posts() ) :
                                $the_query->the_post();
                                get_template_part('template-parts/post-grid-content');
                            endwhile;
                            wp_reset_postdata();
                        endif;
                      ?>
                    </div>

                    <?php
                      the_posts_pagination( array('mid_size'  => 3,'prev_text' => __( 'Prev'),'next_text' => __( 'Next'),) );
                    ?>
                </div>
            </div>

            <div class="clear-both"></div>
        </div>
    </div>

<?php
get_footer();
