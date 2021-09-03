<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.1.0
 * @package v-tech
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.8
 */
function vt_blocks_cgb_block_assets() {

	$styles = array('wp-editor');
	$scripts = array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor');

	$args = array(
		'type'      => 'string', // Validate and sanitize the meta value as a string.
		// Default: 'string'.
		// In 4.7 one of 'string', 'boolean', 'integer', 'number' must be used as 'type'.
		'description'    => 'Media Queries', // Shown in the schema for the meta key.
		'single'        => true, // Return a single value of the type. Default: false.
		'show_in_rest'    => true, // Show in the WP REST API response. Default: false.
	);

	// initialize meta fields that store custom css for wordpress blocks
	register_meta( 'post', 'vt_media_queries', $args );
	register_meta( 'page', 'vt_media_queries', $args );

	if (!get_option('vt_gutenberg_blocks', false)) {
		$pluginSettings = array(
			'version' => '1.1.0',
			'replaced_kofe_blocks' => false
		);
		add_option('vt_gutenberg_blocks', json_encode($pluginSettings), '', 'yes');
	}

	/**
	 * Enable Bootstrap css only for the front-end
	 */
	if (!is_admin()) {
		wp_register_style('bootstrap-grid', plugins_url( '/assets/css/bootstrap-theme.min.css', dirname( __FILE__ )));
		wp_register_script('builder-bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', array('jquery'));
		wp_enqueue_script('builder-utils', plugins_url( '/assets/js/tools.js', dirname( __FILE__ )), array('jquery'), '1.0.8', true);
		array_push($scripts, 'builder-bootstrap');
	}

	// Register block styles for both frontend + backend.
	wp_register_style(
		'vt_blocks-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		$styles, // Dependency to include the CSS after it.
		'1.0.8'
	);

	wp_register_script('load-fa', 'https://kit.fontawesome.com/77cccdd19e.js');
	array_push($scripts, 'load-fa');

	// Register block editor script for backend.
	wp_register_script(
		'vt_blocks-editor-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		$scripts, // Dependencies, defined above.
		'1.0.8',
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'vt_blocks-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		'1.0.8'
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'vt/vt-main', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'vt_blocks-style-css',
			'editor_script' => 'vt_blocks-editor-js',
			'editor_style'  => 'vt_blocks-editor-css',
			'category' 		=> 'v-tech'
		)
	);

	// Keep Extra small screen size styles at the end of queue
	add_editor_style(plugins_url( 'assets/css/bootstrap-xs.css', dirname( __FILE__ ) ));

}
// Hook: Block assets.
add_action( 'init', 'vt_blocks_cgb_block_assets' );

function plugin_loaded_action_setup() {
	if (is_admin()) {
		add_editor_style(plugins_url( '/assets/css/bootstrap-theme.min.css', dirname( __FILE__ )));
	}
}
add_action( 'plugins_loaded', 'plugin_loaded_action_setup');

/**
 * Footer Styles
 */
function vt_blocks_footer_styles() {
	/**
	 * Bootstrap xs classes
	 */
	if (!is_admin()) {
		wp_enqueue_style('bootstrap-xs-grid', plugins_url( 'assets/css/bootstrap-xs.css', dirname( __FILE__ ) ), array(), true);
	}
};
add_action( 'get_footer', 'vt_blocks_footer_styles' );



/**
 * Adds the VT Blocks block category.
 *
 * @param array $categories Existing block categories.
 *
 * @return array Updated block categories.
 */
function vt_blocks_add_custom_block_category( $categories ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'v-tech',
				'title' => 'VT Blocks',
			)
		)
	);
}
add_filter( 'block_categories', 'vt_blocks_add_custom_block_category' );

/**
 * Load Post Grid PHP
 */
require_once plugin_dir_path( __FILE__ ) . 'blocks/block-post-grid/index.php';
require_once plugin_dir_path( __FILE__ ) . 'blocks/block-template/index.php';

/**
 *
 */
function wpdocs_styles_method() {

	$post = get_post();
	$meta = get_post_meta($post->ID, 'vt_media_queries');

	if (isset($meta) && (is_array($meta) && count($meta) > 0)) {
		$custom_css = $meta[0];
	}
	else {
		$custom_css = $meta || '';
	}

	wp_add_inline_style( 'vt_blocks-style-css', $custom_css );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_styles_method' );
