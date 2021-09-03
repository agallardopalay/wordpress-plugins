<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package ccus
 */

?>

<section class="article-content">
    <?php if ( 'post' === get_post_type() ) : ?>
        <div class="entry-meta fullArticle mb-5">
            <?php vt_posted_on(); ?>
        </div>
    <?php endif; ?>

    <?php
    the_content( sprintf(
        wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'ccus' ), array( 'span' => array( 'class' => array() ) ) ),
        the_title( '<span class="screen-reader-text">"', '"</span>', false )
    ) );
    ?>
</section>
