<?php

$postType = get_query_var('post_type');
$posts = get_posts(array(
    'post_type' => $postType,
    'post_status' => 'publish',
    'order' => 'DESC',
    'orderby' => 'date',
));

if (!empty($posts)) { ?>

    <div class="container flex flex-col items-center justify-center px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">
        <div class="grid max-w-lg gap-5 mx-auto mt-6 md:grid-cols-2 md:max-w-none">
            <?php

            foreach ($posts as $post) {
                the_post();
                get_template_part('template-parts/post-grid-content');
            }

            wp_reset_postdata();
            the_posts_pagination( array('mid_size'  => 3,'prev_text' => __( 'Prev'),'next_text' => __( 'Next'),) );
            ?>
        </div>
    </div>
    <?php
} else {
    ?><div class="container flex px-4 pt-2 pb-8 mx-auto sm:px-6 lg:px-8">No data has been found</div><?php
}

?>
