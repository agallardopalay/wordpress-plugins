<?php namespace VTSBooklets;

class OptionsPage{
    public function __construct(){
        if (function_exists('acf_add_options_page')){
            $this->setupOptions();
        }

        if(function_exists('acf_add_local_field_group')){
            $this->setupFields();
        }
    }

    protected function setupOptions(){
        acf_add_options_sub_page(array(
            'page_title' => 'Booklets Settings',
            'menu_title' => 'Booklets Settings',
            'parent' => 'edit.php?post_type=booklets',
            'capability' => 'edit_posts',
        ));
    }

    protected function setupFields(){
        acf_add_local_field_group(array (
			'key' => 'group_587d19b25f54e',
	        'title' => 'Booklets Settings',
	        'fields' => array (
		        array (
			        'key' => 'field_587d19e06b782',
			        'label' => 'Header',
			        'name' => '',
			        'type' => 'tab',
			        'instructions' => '',
			        'required' => 0,
			        'conditional_logic' => 0,
			        'wrapper' => array (
				        'width' => '',
				        'class' => '',
				        'id' => '',
			        ),
			        'placement' => 'left',
			        'endpoint' => 0,
		        ),
		        array (
			        'key' => 'field_587d19f86b783',
			        'label' => 'Header Title',
			        'name' => 'booklets_header_title',
			        'type' => 'text',
			        'instructions' => '',
			        'required' => 0,
			        'conditional_logic' => 0,
			        'wrapper' => array (
				        'width' => '',
				        'class' => '',
				        'id' => '',
			        ),
			        'default_value' => '',
			        'placeholder' => '',
			        'prepend' => '',
			        'append' => '',
			        'maxlength' => '',
		        ),
		        array (
			        'key' => 'field_58ed1dc5dcbc2',
			        'label' => 'Header Content',
			        'name' => 'booklets_header_content',
			        'type' => 'wysiwyg',
			        'instructions' => '',
			        'required' => 0,
			        'conditional_logic' => 0,
			        'wrapper' => array (
				        'width' => '',
				        'class' => '',
				        'id' => '',
			        ),
			        'default_value' => '',
			        'tabs' => 'all',
			        'toolbar' => 'full',
			        'media_upload' => 1,
			        'delay' => 0,
		        ),
		        array (
			        'key' => 'field_58ed1e6845d34',
			        'label' => 'Footer',
			        'name' => '',
			        'type' => 'tab',
			        'instructions' => '',
			        'required' => 0,
			        'conditional_logic' => 0,
			        'wrapper' => array (
				        'width' => '',
				        'class' => '',
				        'id' => '',
			        ),
			        'placement' => 'left',
			        'endpoint' => 0,
		        ),
		        array (
			        'key' => 'field_58ed1e7a45d35',
			        'label' => 'Footer Content',
			        'name' => 'booklets_footer_content',
			        'type' => 'wysiwyg',
			        'instructions' => '',
			        'required' => 0,
			        'conditional_logic' => 0,
			        'wrapper' => array (
				        'width' => '',
				        'class' => '',
				        'id' => '',
			        ),
			        'default_value' => '',
			        'tabs' => 'all',
			        'toolbar' => 'full',
			        'media_upload' => 1,
			        'delay' => 0,
		        ),
	        ),
			'location' => array(
                array(
                    array(
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'acf-options-booklets-settings',
                    ),
                ),
            ),
			'menu_order' => 0,
			'position' => 'normal',
			'style' => 'default',
			'label_placement' => 'top',
			'instruction_placement' => 'label',
			'hide_on_screen' => '',
			'active' => 1,
			'description' => '',
		));
		
		


        acf_add_local_field_group(array (
			'key' => 'group_5877c55497bce',
			'title' => 'Booklet Content',
			'fields' => array (
				array (
					'return_format' => 'array',
					'preview_size' => 'thumbnail',
					'library' => 'all',
					'min_width' => '',
					'min_height' => '',
					'min_size' => '',
					'max_width' => '',
					'max_height' => '',
					'max_size' => '',
					'mime_types' => '',
					'key' => 'field_5877c5aba8380',
					'label' => 'Banner',
					'name' => 'banner',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '20%',
						'class' => '',
						'id' => '',
					),
				),
				array (
					'default_value' => '',
					'new_lines' => 'wpautop',
					'maxlength' => 500,
					'placeholder' => '',
					'rows' => 5,
					'key' => 'field_5877c745a8384',
					'label' => 'Booklet Excerpt',
					'name' => 'booklet_excerpt',
					'type' => 'wysiwyg',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '80%',
						'class' => '',
						'id' => '',
					),
                    'default_value' => '',
					'tabs' => 'all',
					'toolbar' => 'full',
					'media_upload' => 0,
					'delay' => 0,
				),
				array (
					'return_format' => 'array',
					'library' => 'all',
					'min_size' => '',
					'max_size' => '',
					'mime_types' => '',
					'key' => 'field_5877c66aa8383',
					'label' => 'Booklet PDF',
					'name' => 'pdf',
					'type' => 'file',
					'instructions' => 'Upload Booklet PDF file.',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array (
						'width' => '',
						'class' => '',
						'id' => '',
					),
				),
			),
			'location' => array (
				array (
					array (
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'booklets',
					),
				),
			),
			'menu_order' => 0,
			'position' => 'normal',
			'style' => 'default',
			'label_placement' => 'top',
			'instruction_placement' => 'label',
			'hide_on_screen' => array (
				0 => 'the_content',
				1 => 'excerpt',
				2 => 'custom_fields',
				3 => 'discussion',
				4 => 'comments',
				5 => 'revisions',
				6 => 'author',
				7 => 'format',
				8 => 'page_attributes',
				9 => 'featured_image',
				10 => 'categories',
				11 => 'tags',
				12 => 'send-trackbacks',
			),
			'active' => 1,
			'description' => '',
		));
    }
}