<?php

/**
 * Plugin Name:       SF Fed Curated Related Content
 * Description:       Manually curated related content.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:             Public Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-curated-related-content
 *
 * @package           create-block
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
  exit;
}

function custom_curated_related_content_block_content($attr)
{
  $allPosts = [];

  $displayViewMoreButton = $attr['displayViewMoreButton'];
  $displayAuthorInfo = $attr['displayAuthorInfo'];
  $displayThumbnail = $attr['displayThumbnail'];
  $numberOfVisibleItems = $attr['numberOfVisibleItems'];
  $counter = 0;

  if (count($attr['allSelectedPosts']) > 0) {
    foreach ($attr['allSelectedPosts'] as $post) {
      array_push($allPosts, get_post($post['id']));
    }
  }

  $output = '';
  if (!empty($allPosts)) {
    $output = '<div ' . get_block_wrapper_attributes() . '>';
    $output .= '<h2 class="custom-related-content-headline">Related:</h2>';

    foreach ($allPosts as $index => $post) {
      $counter = $index;
      $output .= '<article class="custom-curated-related-content-article' . ($index >= $numberOfVisibleItems && $displayViewMoreButton ? ' hidden' : '') . '">';
      $output .= '<div class="custom-curated-related-content-card">';

      if ($displayThumbnail) {
        if (has_post_thumbnail($post->ID)) {
          $imageId = get_post_thumbnail_id($post->ID);
          $imageAlt = get_post_meta($imageId, '_wp_attachment_image_alt', TRUE);
          $imageTitle = get_the_title($imageId);
          $customAttr = ['class' => 'custom-thumbnail-image', 'alt' => $imageAlt, 'title' => $imageTitle];
          $imageRender = wp_get_attachment_image($imageId, 'medium', false, $customAttr);
        } else {
          $imageRender = '<img src="' . plugin_dir_url(__FILE__) . 'src/public/images/default-thumbnail.jpeg' . '" alt=" Thumbnail" class="custom-thumbnail-image" />';
        }

        $output .= '<div class="custom-curated-related-content-thumbnail">' . $imageRender . '</div>';
      }

      $divClassName = ($displayThumbnail ? 'custom-curated-related-content-header' : 'custom-curated-related-content-header-full');
      $output .= '<div class="' . $divClassName . '">';
      $output .= '<header>';

      // Categories
      $categories = get_the_category($post->ID);
      if (!empty($categories)) {
        $output .= '<div class="custom-category">';
        $output .= '<p>';
        $output .= strtoupper(get_post_type($post->ID));
        foreach ($categories as $index => $category) {
          $output .= '<span>' . ($index ? ', ' : ': ');
          $output .= '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
          $output .= '</span>';
        }
        $output .= '</p>';
        $output .= '</div>';
      }

      // Metadata
      $url = esc_url(get_permalink($post->ID));
      $title = $post->post_title ? $post->post_title : '';

      $output .= '<a href=' . $url . ' class="custom-linked-headline">';
      $output .= '<h3 class="custom-headline">' . $title . '</h3>';
      $output .= '</a>';


      // Author's Information
      if ($displayAuthorInfo) {
        $author_id = get_post_field('post_author', $post->ID);
        $authorUrl = esc_url(get_author_posts_url($author_id));
        $authorFName = get_the_author_meta('first_name', $author_id);
        $authorLName = get_the_author_meta('last_name', $author_id);

        $output .= '<div class="custom-byline">';
        $output .= '<address class="custom-author test">';
        $output .= '<a rel="author" href="' . $authorUrl . '">';
        $output .= $authorFName . ' ' . $authorLName;
        $output .= '</a>';
        $output .= '</address>';
        $output .= '</div>';
      }

      $output .= '</header>';
      $output .= '</div>'; // .custom-curated-related-content-header
      $output .= '</div>'; // .custom-curated-related-content-card
      $output .= '</article>';
    }

    if ($displayViewMoreButton && ($counter + 1) > $numberOfVisibleItems) {
      $output .= '<button class="custom-view-more-btn">
        <span>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L6 15L1 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M8 21L13 15L8 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path opacity="0.3" d="M25 1L25 29" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="0.1 6" />
        </svg>
        </span>
        View More
      </button>';
    }
    $output .= '</div>';
  }
  return $output;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_curated_related_content_block_init()
{
  // register_block_type( __DIR__ . '/build' );
  register_block_type(__DIR__ . '/build', array(
    'render_callback' => 'custom_curated_related_content_block_content'
  ));
}
add_action('init', 'create_block_custom_curated_related_content_block_init');

function custom_curated_related_content_block_front_end_assets()
{
  wp_enqueue_script('custom-curated-related-content-block-js', plugin_dir_url(__FILE__) . 'src/main.js');
}
add_action('enqueue_block_assets', 'custom_curated_related_content_block_front_end_assets');
