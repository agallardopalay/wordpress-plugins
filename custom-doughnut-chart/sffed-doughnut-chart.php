<?php

/**
 * Plugin Name:       SF Fed Doughnut Chart
 * Description:       Doughnut Chart block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:             Public Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-doughnut-chart
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
function create_block_custom_doughnut_chart_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_custom_doughnut_chart_block_init');

/**
 * Frontend assets
 */
function wp_block_doughnut_chart_front_end_assets()
{
	wp_enqueue_script('material-components-web', 'https://cdn.jsdelivr.net/npm/chart.js', null, null, true);
	wp_enqueue_script('wp-custom-doughnut-chart-block', plugin_dir_url(__FILE__) . 'main.js');
}
add_action('enqueue_block_assets', 'wp_block_doughnut_chart_front_end_assets');
