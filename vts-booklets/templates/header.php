<?php
$primaryColor = get_field('booklets-primary_color', 'option');
?>

<?php get_header(); ?>

<style>
    .booklets {
        color: <?= get_field('booklets-text-color', 'option') ?>;
    }

    .booklets__header h1 {
        color: <?= get_field('booklets-header-text-color', 'option') ?>;
    }

    .booklets,
    .booklets .booklets__staff-list-left h3,
    .booklets .booklets__show-more {
        background: <?= get_field('booklets-background-color', 'option') ?>;
    }

    .booklets__header,
    .booklets .booklets__hr,
    .booklets .booklets__vr,
    .booklets .booklets__image-shadow {
        background: <?= $primaryColor ?>;
    }

    .booklets a {
        color: <?= $primaryColor ?>;
    }

    <?php if(!get_field('booklets-show_shadow', 'option')): ?>
    .booklets .booklets__image-shadow {
        background: transparent;
    }
    <?php endif ?>

    <?php if(!get_field('booklets-show_hr', 'option')): ?>
    .booklets .booklets__hr {
        background: transparent;
    }
    <?php endif ?>

    <?= (get_field('booklets-custom_css', 'option')) ?>
</style>

<div class="booklets__header">
    <h1><?= esc_html(get_field('booklets-header-text', 'option')) ?></h1>
</div>