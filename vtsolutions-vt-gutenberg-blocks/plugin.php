<?php
/**
 * Plugin Name: VT Gutenberg Blocks
 * Plugin URI: https://bitbucket.org/vtsolutions/vt-gutenberg-blocks/src/master/
 * Description: VT-Blocks — is a VentureTech Gutenberg plugin created via create-guten-block.
 * Author: Igor Bencheci
 * Author URI: http://www.igorbencheci.com/
 * Version: 1.0.3
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'src/shortcodes/shortcodes.php';

/**
 * Initialize the blocks
 */
function vt_blocks_loader() {

	$vt_blocks_includes_dir = plugin_dir_path( __FILE__ ) . 'includes/';

	require_once $vt_blocks_includes_dir . 'layout/layout-functions.php';
	require_once $vt_blocks_includes_dir . 'layout/class-component-registry.php';
	require_once $vt_blocks_includes_dir . 'layout/register-layout-components.php';

	/**
	 * REST API Endpoints for Layouts.
	 */
	require_once $vt_blocks_includes_dir . 'layout/layout-endpoints.php';
}
add_action( 'plugins_loaded', 'vt_blocks_loader' );


/**
 * Register Meta Box
 */
function rm_register_meta_box() {
	add_meta_box( 'rm-meta-box-id', esc_html__( 'Source REST-API url', 'vt' ), 'rm_meta_box_callback', 'page', 'side', 'high' );
}
add_action( 'add_meta_boxes', 'rm_register_meta_box');

/**
 *	Script to copy/paste
 */
function rm_meta_box_callback() {
	$rest_url = get_rest_url(null, '/wp/v2/pages/'.get_the_ID());
	$outline = '
<script>
	function copyRESTLink() {
		var copyText = document.getElementById("page_rest_url");
		copyText.select();
		document.execCommand("copy");
	}

	function clipboardRESTLink() {
		var tooltip = document.getElementById("page_rest_submit");
		tooltip.innerHTML = "Copied";
	}
</script>';
	$outline .= '<a href="'.$rest_url.'" target="_blank" style="display: block;word-break: break-all;">'.$rest_url.'</a>';
	$outline .= '<input type="text" id="page_rest_url" style="opacity:0; height:10px"; value="'. $rest_url .'" />';
	$outline .= '<div><button id="page_rest_submit" onclick="copyRESTLink();" onmouseout="clipboardRESTLink();">Copy</button></div>';

	echo $outline;
}


add_action("wp_ajax_vt_find_and_replace_old_blocks", "vt_find_and_replace_old_blocks");
add_action("wp_ajax_nopriv_vt_find_and_replace_old_blocks", "vt_find_and_replace_old_blocks");

function vt_find_and_replace_old_blocks() {
	global $wpdb;

	$replaceCollection = array(
		"kofe/" => "vt/",
		"wp-block-kofe-cta" => "wp-block-vt-cta",
		"wp-block-kofe-container" => "wp-block-vt-container",
		"kofe/container" => "vt/container",
		"kofe/ab-columns" => "vt/ab-columns",
		"kofe/ab-column" => "vt/ab-column",
		"wp-block-kofe-ab-columns" => "wp-block-vt-ab-columns"
	);

	$results = [];
	foreach ($replaceCollection as $key => $collection) {
		$sql = "UPDATE wp_posts SET post_content = REPLACE(post_content, '$key', '$collection') WHERE post_content LIKE '%$key%'";
		$wpdb->get_results($sql);
		$results[$key] = $sql;
	}

	$pluginOptions = json_decode(get_option('vt_gutenberg_blocks', ''), true);
	$pluginOptions['replaced_kofe_blocks'] = true;
	update_option('vt_gutenberg_blocks', json_encode($pluginOptions));

	echo json_encode($results);
	die();
}

/**
 *
 */
function my_error_notice() {

	$pluginOptions = json_decode(get_option('vt_gutenberg_blocks', ''), true);

	if ( boolval($pluginOptions['replaced_kofe_blocks']) ) return;

	$nonce = wp_create_nonce("vt_find_and_replace_old_blocks");
	?>
	<script>
		jQuery(document).ready( function() {
			jQuery("#vt_find_and_replace_old_blocks").click( function(e) {
				e.preventDefault();
				var nonce = jQuery(this).attr("data-nonce");
				jQuery.ajax({
					type : "post",
					dataType : "json",
					url : "<?= admin_url( 'admin-ajax.php' )?>",
					data : { action: "vt_find_and_replace_old_blocks", nonce: nonce },
					success: function(response) {
						jQuery("#vt-gutenberg-admin-notice").append("<p><strong>Old blocks successfully replaced</strong></p>" );
						console.log('response', response);
					}
				});
			});
		});
	</script>
	<div id="vt-gutenberg-admin-notice" class="error notice">
		<p>Action to update/replace VT plugin</p>
		<p class="submit">
			<input id="vt_find_and_replace_old_blocks" data-nonce="<?= $nonce ?>" type="submit" name="Submit" value="Run Find & Replace" class="button button-primary"/>
		</p>
	</div>
	<?php
}

add_action( 'admin_notices', 'my_error_notice' );
