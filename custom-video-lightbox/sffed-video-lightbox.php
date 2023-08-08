<?php

/**
 * Plugin Name:       SF Fed Video Lightbox
 * Description:       Block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:             Public Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-video-lightbox
 *
 * @package           create-block
 */

function create_block_custom_video_lightbox_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_custom_video_lightbox_block_init');

/**
 * Frontend assets
 */
function wp_block_custom_video_lightbox_front_end_assets()
{
	wp_enqueue_script('wp-custom-video-lightbox-block', plugin_dir_url(__FILE__) . 'main.js');
}
add_action('enqueue_block_assets', 'wp_block_custom_video_lightbox_front_end_assets');
