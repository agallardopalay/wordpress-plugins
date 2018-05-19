<?php
$teamMembers = new WP_Query([
    'posts_per_page' => -1,
    'post_type' => 'booklets',
    'post_status' => 'publish',
]);

?>
<?php include_once(dirname(__FILE__) . '/header.php'); ?>
    <div class="booklets">
        <div class="booklets__top clearfix">
            <div class="booklets__top__left">
                <div class="booklets__image-wrapper">
                    <div class="booklets__image"
                         style="background-image: url(<?= esc_attr(get_field('booklets-list_page-image', 'option')['url']) ?>)"></div>
                    <div class="booklets__image-shadow"></div>
                </div>
            </div>
            <div class="booklets__top__right">
                <div class="booklets__info">
                    <h3><?= esc_html(get_field('booklets-list_page-header-text', 'option')) ?></h3>

                    <div class="booklets__hr"></div>

                    <p style="margin-top: 20px;"><?= (get_field('booklets-list_page-description-text', 'option')) ?></p>
                </div>
            </div>
        </div>

        <div class="booklets__staff-list-wrapper clearfix">
            <div class="booklets__staff-list-left">
                <h3><?= esc_html(get_field('booklets-list_page-side_text', 'option')) ?></h3>
            </div>
            <div class="booklets__staff-list-right">
                <?php while ($teamMembers->have_posts()): $teamMembers->the_post(); ?><!-- Don't remove this comment
                 --><a class="booklets__staff-list-tile"
                       href="<?= esc_attr(get_post_permalink()) ?>"
                       style="background-image: url(<?= esc_attr(get_field('image')['sizes']['medium']) ?>);"
                    >
                        <div class="booklets__staff-list-tile__content"
                            <?php if (get_field('image_alt')): ?>
                                style="background-image: url(<?= esc_attr(get_field('image_alt')['sizes']['medium']) ?>);"
                            <?php endif; ?>
                        >
                            <div class="booklets__staff-list-tile__content__gradient"></div>
                            <h3><?= esc_html(get_field('first_name')) ?></h3>
                        </div>
                    </a><!-- Don't remove this comment
             --><?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
            <div class="booklets__vr"></div>
        </div>
    </div>

<?php get_footer(); ?>