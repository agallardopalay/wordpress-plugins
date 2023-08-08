<?php

/**
 * Plugin Name:       SF Fed Table Of Content
 * Description:       Custom Table Of Content block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:             Public Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-table-of-content
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_table_of_content_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_custom_table_of_content_block_init');

/**
 * Front-end assets
 */
function wp_block_toc_front_end_assets()
{
	/**
	 * TODO:
	 * Move the table-of-content script to a global position 
	 * if we want to add it anywhere else regardless of the use of this block
	 */
	wp_enqueue_script('wp-custom-toc-script', plugin_dir_url(__FILE__) . 'table-of-content.min.js');
	wp_enqueue_script('wp-custom-table-of-content-block', plugin_dir_url(__FILE__) . 'main.js');
}
add_action('enqueue_block_assets', 'wp_block_toc_front_end_assets');
