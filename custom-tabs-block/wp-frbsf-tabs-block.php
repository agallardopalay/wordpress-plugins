<?php

/**
 * Plugin Name:        Tabs Block
 * Description:       Wordpress Guttenberg Tabs block used to display content in the www.custom.org website
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            custom Public Web team
 * Text Domain:       custom-tabs
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 * 
 */
function create_block_custom_tabs_block_init()
{
	register_block_type(__DIR__ . '/build/tabs');
	register_block_type(__DIR__ . '/build/tab');
}
add_action('init', 'create_block_custom_tabs_block_init');

/**
 * Frontend assets
 */
function wp_block_tabs_front_end_assets()
{
	wp_enqueue_script('wp-custom-tabs-block', plugin_dir_url(__FILE__) . 'main.js');
}
add_action('enqueue_block_assets', 'wp_block_tabs_front_end_assets');
