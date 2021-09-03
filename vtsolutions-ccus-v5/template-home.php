<?php
/**
 * Template Name: Home Page Template
 *
 * @package ccus
 */
if (!defined('ABSPATH')) exit;

global $lang;
global $home_url;

$permalink = get_permalink( get_the_ID() );
if ( ! $permalink ) {
    $permalink = '';
}

get_header();
?>

    <!-- As Featured in Logo section -->
    <div class="container flex flex-wrap md:flex-no-wrap justify-center items-center py-4">
      <?php get_template_part('template-parts/svg/featured-in-logos'); ?>
    </div>
    <!-- End of Featured Logos Style -->


<?php
    get_template_part('template-parts/home/debt-relief-steps');
    // get_template_part('template-parts/home/trustpilot-reviews');


get_footer();