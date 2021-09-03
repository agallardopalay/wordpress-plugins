<?php
/**
 * Server-side rendering for the post grid block
 *
 * @since   1.1.7
 * @package Atomic Blocks
 */

/**
 * Renders the post grid block on server.
 *
 * @param String $attributes  Pass the block attributes.
 * @return mixed
 */
function vt_blocks_render_block_core_latest_posts( $atts ) {

    $attributes = shortcode_atts( array(
        'template' => '',
        'source' => '',
    ), $atts );

    $template = $attributes['template'];
    $source = $attributes['source'];

	if (function_exists('get_current_screen')) {
		return '';
	}

	if ($template === 'source' && $source !== null) {
		$response = wp_remote_get($source);
		if ( is_array( $response ) ) {
			$body = json_decode($response['body']);

			if ($body && !empty($body->acf) && !empty($body->acf->content_block)) {
				ob_start();
				render_consolidated_credit($body);
				return ob_get_clean();
			}

			return $body->content->rendered;


		}
		else {
			return '';
		}
	}
	else {
		return do_shortcode('[template_shortcode template="'. $template .'"]');
	}
}

function template_part_shortcode($args) {
	$template = $args['template'];
	ob_start();
	get_template_part($template);
	return ob_get_clean();
}
add_shortcode( 'template_shortcode', 'template_part_shortcode' );

/**
 * Registers the post grid block on server
 */
function vt_blocks_register_block_core_latest_posts() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'vt/template',
		array(
			'attributes'      => array(
				'categories'          => array(
					'type' => 'string',
				),
				'className'           => array(
					'type' => 'string',
				),
				'template'            => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'source'      => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'id'                  => array(
					'type' => 'number',
				),
			),
			'render_callback' => 'vt_blocks_render_block_core_latest_posts',
		)
	);
}
add_action( 'init', 'vt_blocks_register_block_core_latest_posts' );


/**
 * Create API fields for additional info
 */
function vt_blocks_register_rest_fields() {
	/* Add landscape featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src',
		array(
			'get_callback'    => 'vt_blocks_get_image_src_landscape',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add square featured image source */
	register_rest_field(
		array( 'post', 'page' ),
		'featured_image_src_square',
		array(
			'get_callback'    => 'vt_blocks_get_image_src_square',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	/* Add author info */
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback'    => 'vt_blocks_get_author_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
add_action( 'rest_api_init', 'vt_blocks_register_rest_fields' );


/**
 * Get landscape featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 * @return mixed
 */
function vt_blocks_get_image_src_landscape( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-landscape',
		false
	);
	return isset($feat_img_array[0]) ? $feat_img_array[0] : '';
}

/**
 * Get square featured image source for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 * @return mixed
 */
function vt_blocks_get_image_src_square( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-square',
		false
	);
	return isset($feat_img_array[0]) ? $feat_img_array[0] : '';
}

/**
 * Get author info for the rest field
 *
 * @param String $object  The object type.
 * @param String $field_name  Name of the field to retrieve.
 * @param String $request  The current request object.
 * @return mixed
 */
function vt_blocks_get_author_info( $object, $field_name, $request ) {
	/* Get the author name */
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	/* Get the author link */
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	/* Return the author data */
	return $author_data;
}


/**
 * @param $data
 */
function render_consolidated_credit($data) {
	if( ! empty( $data->acf ) ) {

		$flag_container = 1;
		$prev_class = "container";

		foreach( $data->acf->content_block as $item ){

			$helper_class = $item->content_block_layout;

			if($helper_class != 'container' && $helper_class != 'container-fluid'){
				if($flag_container == 1){
					echo '<div class="container mixed">';
					echo '<div class="row">';
					echo '<div class="'.$helper_class.'">';
				}else{
					echo '<div class="'.$helper_class.' last">';
					$flag_container = 0;
				}
			}else{
				if($prev_class != 'container' && $prev_class != 'container-fluid'){
					echo '</div><!--/row-->';
					echo '</div><!--/container-->';
				}
				echo '<div class="'.$helper_class.' new">';
			}

			$template_es = false;
			$template_name = basename( get_page_template() );
			if (strpos($template_name, 'es') !== false || strpos($template_name, 'ES') !== false) {
				$template_es = true;
			}

			foreach( $item->flexible_content as $flex_content ){

				if($template_es){ //It uses Spanish template (temp.theme-cces-1.php)

					//Calculator Block
					if($flex_content->acf_fc_layout == "flexible_content_calculator"){
						$calculator = $flex_content->flexible_content_calculator_calculator;

						if(locate_template( 'template-parts/flexible-content-calculator-'.$calculator.'-es.php' )){
							include(locate_template( 'template-parts/flexible-content-calculator-'.$calculator.'-es.php' ) );
						}
					}

				}else{

					if($flex_content->acf_fc_layout == "flexible_content_calculator"){
						$calculator = $flex_content->flexible_content_calculator_calculator;

						if(locate_template( 'template-parts/flexible-content-calculator-'.$calculator.'.php' )){
							include(locate_template( 'template-parts/flexible-content-calculator-'.$calculator.'.php' ) );
						}
					}

				}//End of else when page uses English template (temp.theme-1.php)


				//Content Block
				if($flex_content->acf_fc_layout == "flexible_content_content"){
					include(locate_template('template-parts/flexible-content-content.php'));
				}

				//Financial News Block
				if($flex_content->acf_fc_layout == "flexible_content_financial_news"){
					include(locate_template('template-parts/flexible-content-financial-news.php'));
				}

				//Flexible Content Media Block
				if($flex_content->acf_fc_layout == "flexible_content_media"){
					include(locate_template('template-parts/flexible-content-media.php'));
				}

				//Events Block
				if($flex_content->acf_fc_layout == "flexible_content_event"){
					include(locate_template('template-parts/flexible-content-events.php'));
				}

				//Booklet Block
				if($flex_content->acf_fc_layout == "flexible_content_booklets"){
					include(locate_template('template-parts/flexible-content-booklets.php'));
				}

				//Blue Strip Block
				if($flex_content->acf_fc_layout == "flexible_content_highlighted_content"){
					include(locate_template('template-parts/flexible-content-highlighted.php'));
				}

				//Ask the Experts Block
				if($flex_content->acf_fc_layout == "flexible_content_ask_the_experts"){
					include(locate_template('template-parts/flexible-content-ask-the-experts.php'));
				}

				//Infographic Block
				if($flex_content->acf_fc_layout == "flexible_content_infographics"){
					include(locate_template('template-parts/flexible-content-infographics.php'));
				}

				//Map Block
				if($flex_content->acf_fc_layout == "flexible_content_map"){
					include(locate_template('template-parts/flexible-content-map.php'));
				}

				//Featured Video Block
				if($flex_content->acf_fc_layout == "flexible_content_featured_video"){
					include(locate_template('template-parts/flexible-content-fvideo.php'));
				}

				//Education Video Block
				if($flex_content->acf_fc_layout == "flexible_content_education_video"){
					include(locate_template('template-parts/flexible-content-education-video.php'));
				}

				//Success Story Block
				if($flex_content->acf_fc_layout == "flexible_content_success_story"){
					include(locate_template('template-parts/content-success-story.php'));
				}

				//Success Story Slider
				if($flex_content->acf_fc_layout == "flexible_content_success_story_slider"){
					include(locate_template('template-parts/flexible-content-success-story-slider.php'));
				}

				//Profile of Success Block
				if($flex_content->acf_fc_layout == "flexible_content_profile_of_success"){
					include(locate_template('template-parts/flexible-content-profile-of-success.php'));
				}

				//Case Study Block
				if($flex_content->acf_fc_layout == "flexible_content_case_study"){
					include(locate_template('template-parts/flexible-content-case-study.php'));
				}

				//Playlist Block
				if($flex_content->acf_fc_layout == "flexible_content_video_playlist"){
					include(locate_template('template-parts/flexible-content-video-playlist.php'));
				}

				//Flexible Content Education Quizes
				if($flex_content->acf_fc_layout == "flexible_content_education_quiz"){
					include(locate_template('template-parts/flexible-content-education-quiz.php'));
				}

				//Separator Block
				if($flex_content->acf_fc_layout == "flexible_content_separator"){
					$transparent = $flex_content->flexible_content_separator_transparent_separator;
					if($transparent == true):
						$transparent = 'class="separator"';
					else:
						$transparent = '';
					endif;

					echo "<hr ".$transparent."/>";
				}

			}

			if($helper_class != 'container' && $helper_class != 'container-fluid'){
				echo '</div>';
				$flag_container = 0;
			}else{
				echo '</div>';
				$flag_container = 1;
			}

			$prev_class = $helper_class;

		}
	}
}
