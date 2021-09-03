<?php

/**
 * Registering ACF Blocks
 */

if( function_exists('acf_register_block_type') ) {
    add_action('acf/init', 'register_acf_block_types');
}
// Register blocks
function register_acf_block_types() {
    // Featured Booklet
    acf_register_block_type(
        array(
            'name'              => 'booklet',
            'title'             => __('Booklet', 'cccsca'),
            'description'       => __('A custom block for Booklet', 'cccsca'),
            'render_template'   => 'template-parts/blocks/booklet.php',
            'icon'              => '<svg style="width: 20px;" aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-newspaper fa-w-18"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path></svg>',
            'keywords'          => array('booklet', 'publication', 'finance'),
        )
    );

    // Table of Content
    acf_register_block_type(
        array(
            'name'              => 'table_of_content',
            'title'             => __('Table of Content', 'cccsca'),
            'description'       => __('Insert a Table of Content to easily navigate through the content', 'cccsca'),
            'render_template'   => 'template-parts/blocks/table_of_content.php',
            'icon'              => '<svg style="width: 20px;" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="blinds-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496,480H16a16,16,0,0,0,0,32H496a16,16,0,0,0,0-32ZM16,352H80.36a79.29,79.29,0,0,1-14.75-32H16a16,16,0,0,0,0,32Zm480-32H222.39a79.29,79.29,0,0,1-14.75,32H496a16,16,0,0,0,0-32ZM496,0H16A16,16,0,0,0,0,16V80A16,16,0,0,0,16,96H128v64H16a16,16,0,0,0,0,32H128v66.94a48,48,0,1,0,32,0V96H496a16,16,0,0,0,16-16V16A16,16,0,0,0,496,0ZM144,320a16,16,0,1,1,16-16A16,16,0,0,1,144,320ZM480,64H32V32H480Zm16,96H192v32H496a16,16,0,0,0,0-32Z"></path></svg>',
            'keywords'          => array('table of contnet', 'content', 'links', 'navigation'),
        )
    );

    // Heading with Icon
    acf_register_block_type(
        array(
            'name'              => 'vt_heading',
            'title'             => __('VT Heading', 'cccsca'),
            'description'       => __('Insert a Title with an icon infront', 'cccsca'),
            'render_template'   => 'template-parts/blocks/heading.php',
            'icon'              => '<svg style="width: 20px;" aria-hidden="true" focusable="false" data-prefix="far" data-icon="h-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h340a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-50-292v232c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12v-92H152v92c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V140c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v92h144v-92c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12z"></path></svg>',
            'keywords'          => array('heading', 'title', 'content'),
        )
    );


    // Heading with Icon
    acf_register_block_type(
        array(
            'name'              => 'vt_accordion',
            'title'             => __('VT Accordion', 'cccsca'),
            'description'       => __('Use this tool to grup content inside accordion items', 'cccsca'),
            'render_template'   => 'template-parts/blocks/accordion.php',
            'icon'              => '<svg style="width: 20px;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>',
            'keywords'          => array('title', 'content', 'group'),
        )
    );

    // Lead Form
    acf_register_block_type(
        array(
            'name'              => 'form',
            'title'             => __('Lead Form', 'cccsca'),
            'description'       => __('Insert a lead form', 'cccsca'),
            'render_template'   => 'template-parts/blocks/form.php',
            'icon'              => '<svg width="24" height="24" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="address-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-address-card fa-w-18 fa-2x"><path fill="currentColor" d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z" class=""></path></svg>',
            'keywords'          => array('form', 'content', 'lead'),
        )
    );

    // ATE Form
    acf_register_block_type(
        array(
            'name'              => 'ate_form',
            'title'             => __('Ask The Experts Form', 'cccsca'),
            'description'       => __('Ask The Experts Form', 'cccsca'),
            'render_template'   => 'template-parts/blocks/ate-form.php',
            'keywords'          => array('form', 'content', 'ask-the-expert'),
        )
    );

    // Scolarship Form
    acf_register_block_type(
        array(
            'name'              => 'scholarship_form',
            'title'             => __('Scholarship Form', 'cccsca'),
            'description'       => __('Scholarship Form', 'cccsca'),
            'render_template'   => 'template-parts/blocks/scolarship-form.php',
            'keywords'          => array('form', 'content', 'scholarship'),
        )
    );

    // Media
    acf_register_block_type(array(
        'name'              => 'fc_media',
        'title'             => __('fc_media'),
        'description'       => __('Block Media'),
        'render_template'   => 'template-parts/blocks/media.php',
        'category'          => 'fc',
        'icon'              => '<svg width="24" height="24" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="address-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-address-card fa-w-18 fa-2x"><path fill="currentColor" d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z" class=""></path></svg>',
        'keywords'          => array( 'media', 'gallery', 'video', 'youtube' ),
    ));

    acf_register_block_type(array(
        'name'				=> 'cta',
        'title'				=> 'Call To Action',
        'description'		=> 'A call to action content block.',
        'category'			=> 'formatting',
        'render_template'   => 'template-parts/blocks/cta.php',
    ));

    // Highlighted Content
    acf_register_block_type(array(
        'name'              => 'calculator',
        'title'             => __('calculator'),
        'description'       => __('Calculator Block'),
        'render_template'   => 'template-parts/blocks/calculator.php',
        'category'          => 'fc',
        'icon'              => '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 460 460" style="enable-background:new 0 0 460 460;" xml:space="preserve"> <g id="XMLID_241_"> <path d="M369.635,0H90.365C73.595,0,60,13.595,60,30.365v399.27C60,446.405,73.595,460,90.365,460h279.27 c16.77,0,30.365-13.595,30.365-30.365V30.365C400,13.595,386.405,0,369.635,0z M108.204,343.61v-43.196 c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196 C111.001,349.858,108.204,347.06,108.204,343.61z M108.204,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196 c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C111.001,262.858,108.204,260.06,108.204,256.61 z M308.891,421H151.109c-11.046,0-20-8.954-20-20c0-11.046,8.954-20,20-20h157.782c11.046,0,20,8.954,20,20 C328.891,412.046,319.937,421,308.891,421z M208.402,294.165h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196 c0,3.451-2.797,6.248-6.248,6.248h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196 C202.154,296.963,204.951,294.165,208.402,294.165z M202.154,256.61v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196 c3.451,0,6.248,2.797,6.248,6.248v43.196c0,3.451-2.797,6.248-6.248,6.248h-43.196C204.951,262.858,202.154,260.06,202.154,256.61 z M345.548,349.858h-43.196c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196 c3.451,0,6.248,2.797,6.248,6.248v43.196h0C351.796,347.061,348.999,349.858,345.548,349.858z M345.548,262.858h-43.196 c-3.451,0-6.248-2.797-6.248-6.248v-43.196c0-3.451,2.797-6.248,6.248-6.248h43.196c3.451,0,6.248,2.797,6.248,6.248v43.196h0 C351.796,260.061,348.999,262.858,345.548,262.858z M354,149.637c0,11.799-9.565,21.363-21.363,21.363H127.364 C115.565,171,106,161.435,106,149.637V62.363C106,50.565,115.565,41,127.364,41h205.273C344.435,41,354,50.565,354,62.363V149.637 z"/> </g> </svg>',
        'keywords'          => array( 'calculator' ),
    ));

}

/**
 * Define ACF for the Blocks
 */
if (function_exists('acf_add_local_field_group')) {

    acf_add_local_field_group(
        array(
            'key' => 'group_5b942f7965bd2',
            'title' => 'fc_button',
            'fields' => array(
                array(
                    'key' => 'field_5b942f7965bd8',
                    'label' => 'Button Label',
                    'name' => 'fc_button_label',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_5b94398ee2c50',
                    'label' => 'Align',
                    'name' => 'fc_button_align',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'text-left' => 'Left',
                        'text-center' => 'Center',
                        'text-right' => 'Right',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_5b942f7965bd9',
                    'label' => 'Link Type',
                    'name' => 'fc_highlighted_content_link_type',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'internal' => 'Internal',
                        'external' => 'External',
                        'file' => 'Media File',
                        'modal' => 'Modal Window',
                        'modaltrigger' => 'Modal Trigger',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_5b942f7965bda',
                    'label' => 'Button URL',
                    'name' => 'fc_button_url_external',
                    'type' => 'url',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b942f7965bd9',
                                'operator' => '==',
                                'value' => 'external',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_5b942f7965bdb',
                    'label' => 'Button URL',
                    'name' => 'fc_button_url_internal',
                    'type' => 'page_link',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b942f7965bd9',
                                'operator' => '==',
                                'value' => 'internal',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'post_type' => array(
                        0 => 'page',
                    ),
                    'taxonomy' => '',
                    'allow_null' => 0,
                    'allow_archives' => 0,
                    'multiple' => 0,
                ),
                array(
                    'key' => 'field_5b942f7965bdc',
                    'label' => 'Media File',
                    'name' => 'fc_button_media_file',
                    'type' => 'file',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b942f7965bd9',
                                'operator' => '==',
                                'value' => 'file',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'return_format' => 'url',
                    'library' => 'all',
                    'min_size' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_5b942f7965bdd',
                    'label' => 'Modal Title',
                    'name' => 'fc_button_modal_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b942f7965bd9',
                                'operator' => '==',
                                'value' => 'modal',
                            ),
                        ),
                    ),
                    'wrapper' => array(
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
                array(
                    'key' => 'field_5b942f7965bde',
                    'label' => 'Modal Content',
                    'name' => 'fc_button_modal_content',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b942f7965bd9',
                                'operator' => '==',
                                'value' => 'modal',
                            ),
                        ),
                    ),
                    'wrapper' => array(
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
                array(
                    'key' => 'field_5b942f7965bdf',
                    'label' => 'Modal ID',
                    'name' => 'fc_button_modal_id',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b942f7965bd9',
                                'operator' => '==',
                                'value' => 'modaltrigger',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'LeadForm' => 'Lead Form',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-button',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58b70c1f61245',
            'title' => 'fc_media',
            'fields' => array(
                array(
                    'key' => 'field_58b70c2861246',
                    'label' => 'Media Type',
                    'name' => 'flexible_content_media_type',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'image' => 'Single Image',
                        'slider' => 'Slider',
                        'youtube' => 'Youtube Video',
                        'mfile' => 'File',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58b70c6961247',
                    'label' => 'Single Image',
                    'name' => 'flexible_content_image',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'image',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
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
                ),
                array(
                    'key' => 'field_58b85e5eb954b',
                    'label' => 'Link Image?',
                    'name' => 'flexible_content_image_link_image',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'image',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_58b85e84b954c',
                    'label' => 'URL',
                    'name' => 'flexible_content_image_link_image_url',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'image',
                            ),
                            array(
                                'field' => 'field_58b85e5eb954b',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_5b76d5e960b90',
                    'label' => 'Open in a new Tab?',
                    'name' => 'flexible_content_image_link_blank',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'image',
                            ),
                            array(
                                'field' => 'field_58b85e5eb954b',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_58f1337672721',
                    'label' => 'Transition',
                    'name' => 'flexible_content_slider_transition',
                    'type' => 'select',
                    'instructions' => 'The animation for slider transition.',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'slider',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'slide' => 'Default (Slide)',
                        'vertical' => 'Vertical Slide',
                        'carousel-fade' => 'Fade',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58f76fc6b9b11',
                    'label' => 'Interval',
                    'name' => 'flexible_content_slider_interval',
                    'type' => 'number',
                    'instructions' => 'Delay between slides.',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'slider',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => 5000,
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'min' => '',
                    'max' => '',
                    'step' => '',
                ),
                array(
                    'key' => 'field_58f774e58d830',
                    'label' => 'Pause on hover?',
                    'name' => 'flexible_content_slider_pause_on_hover',
                    'type' => 'true_false',
                    'instructions' => 'Pauses the cycling on mousehover.',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'slider',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_58f7c5338c438',
                    'label' => 'ID',
                    'name' => 'flexible_content_slider_id',
                    'type' => 'text',
                    'instructions' => 'Slider ID',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'slider',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_58b70c8461248',
                    'label' => 'Slider',
                    'name' => 'flexible_content_slider',
                    'type' => 'repeater',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'slider',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'collapsed' => '',
                    'min' => 0,
                    'max' => 0,
                    'layout' => 'table',
                    'button_label' => 'Add Slide',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_58b83fa6e1719',
                            'label' => 'Slide',
                            'name' => 'flexible_content_slider_slide',
                            'type' => 'image',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '20',
                                'class' => '',
                                'id' => '',
                            ),
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
                        ),
                        array(
                            'key' => 'field_58b83fd8e171a',
                            'label' => 'Caption',
                            'name' => 'flexible_content_slider_caption',
                            'type' => 'wysiwyg',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '80',
                                'class' => '',
                                'id' => '',
                            ),
                            'default_value' => '',
                            'tabs' => 'all',
                            'toolbar' => 'basic',
                            'media_upload' => 0,
                            'delay' => 0,
                        ),
                    ),
                ),
                array(
                    'key' => 'field_5b69e1a668520',
                    'label' => 'Video Title',
                    'name' => 'media_video_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'youtube',
                            ),
                        ),
                    ),
                    'wrapper' => array(
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
                array(
                    'key' => 'field_58b70c9761249',
                    'label' => 'Youtube ID',
                    'name' => 'flexible_content_youtube_id',
                    'type' => 'text',
                    'instructions' => 'Enter youtube video ID',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'youtube',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_5b69d8adf4671',
                    'label' => 'Activate Schema?',
                    'name' => 'media_activate_schema',
                    'type' => 'true_false',
                    'instructions' => 'This option activates VideoObject Schema.',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'youtube',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_5b69da109a719',
                    'label' => 'Video Description',
                    'name' => 'media_video_description',
                    'type' => 'textarea',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69d8adf4671',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'maxlength' => '',
                    'rows' => 4,
                    'new_lines' => '',
                ),
                array(
                    'key' => 'field_5b69da489a71a',
                    'label' => 'Upload Date',
                    'name' => 'media_video_upload_date',
                    'type' => 'date_picker',
                    'instructions' => 'Use the upload date from Youtube',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69d8adf4671',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'display_format' => 'm/d/Y',
                    'return_format' => 'Y-m-d',
                    'first_day' => 1,
                ),
                array(
                    'key' => 'field_5b69dacc9a71b',
                    'label' => 'Family Friendly?',
                    'name' => 'media_video_family_friendly',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69d8adf4671',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'True' => 'True',
                        'False' => 'False',
                    ),
                    'default_value' => array(
                        0 => 'True',
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_5b69db039a71c',
                    'label' => 'Video Duration',
                    'name' => 'media_video_duration',
                    'type' => 'time_picker',
                    'instructions' => 'hours (hh) : minutes (mm) : seconds (ss)',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69d8adf4671',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'display_format' => 'H:i:s',
                    'return_format' => 'H:i:s',
                ),
                array(
                    'key' => 'field_58f12273bfb25',
                    'label' => 'Video Transcript',
                    'name' => 'flexible_content_youtube_video_transcript',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'youtube',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'tabs' => 'all',
                    'toolbar' => 'basic',
                    'media_upload' => 0,
                    'delay' => 0,
                ),
                array(
                    'key' => 'field_59079d10054e3',
                    'label' => 'File thumbnail',
                    'name' => 'flexible_content_mfile_thumbnail',
                    'type' => 'image',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'mfile',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '20%',
                        'class' => '',
                        'id' => '',
                    ),
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
                ),
                array(
                    'key' => 'field_59079344417bd',
                    'label' => 'File',
                    'name' => 'flexible_content_mfile_file',
                    'type' => 'file',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'mfile',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '80',
                        'class' => '',
                        'id' => '',
                    ),
                    'return_format' => 'array',
                    'library' => 'all',
                    'min_size' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_59079f6b9b304',
                    'label' => 'File Description',
                    'name' => 'flexible_content_mfile_description',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b70c2861246',
                                'operator' => '==',
                                'value' => 'mfile',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'tabs' => 'all',
                    'toolbar' => 'basic',
                    'media_upload' => 0,
                    'delay' => 0,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-media',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58b7245c8be40',
            'title' => 'fc_highlighted_content',
            'fields' => array(
                array(
                    'key' => 'field_58efdd64c4c3f',
                    'label' => 'Modal ID',
                    'name' => 'flexible_content_button_modal_id',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b7264c8be44',
                                'operator' => '==',
                                'value' => 'modaltrigger',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'LeadForm' => 'Lead Form',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58b724d68be41',
                    'label' => 'Text',
                    'name' => 'flexible_content_highlighted_content_text',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_595160f8f7930',
                    'label' => 'Text Only?',
                    'name' => 'highlighted_content_text_only',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_5951617df7931',
                    'label' => 'Inline CTA?',
                    'name' => 'highlighted_content_inline_cta',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_595160f8f7930',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '20',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_59516209f7932',
                    'label' => 'Left Column',
                    'name' => 'highlighted_content_left_column',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_595160f8f7930',
                                'operator' => '==',
                                'value' => '1',
                            ),
                            array(
                                'field' => 'field_5951617df7931',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '40',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_5951625ff7934',
                    'label' => 'Right Column (Shortcode)',
                    'name' => 'highlighted_content_right_column_shortcode',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_595160f8f7930',
                                'operator' => '==',
                                'value' => '1',
                            ),
                            array(
                                'field' => 'field_5951617df7931',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '40',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_58b724ef8be42',
                    'label' => 'Button Label',
                    'name' => 'highlighted_content_button_label',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_58b7264c8be44',
                    'label' => 'Link Type',
                    'name' => 'flexible_content_highlighted_content_link_type',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'internal' => 'Internal',
                        'external' => 'External',
                        'file' => 'Media File',
                        'modal' => 'Modal Window',
                        'modaltrigger' => 'Modal Trigger',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58b7250c8be43',
                    'label' => 'Button URL',
                    'name' => 'flexible_content_button_url_external',
                    'type' => 'url',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b7264c8be44',
                                'operator' => '==',
                                'value' => 'external',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58b726948be45',
                    'label' => 'Button URL',
                    'name' => 'flexible_content_button_url_internal',
                    'type' => 'page_link',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b7264c8be44',
                                'operator' => '==',
                                'value' => 'internal',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'post_type' => array(
                        0 => 'page',
                        1 => 'post',
                        2 => 'webinars-seminars',
                    ),
                    'taxonomy' => array(
                    ),
                    'allow_null' => 0,
                    'allow_archives' => 0,
                    'multiple' => 0,
                ),
                array(
                    'key' => 'field_58ee82e721f8a',
                    'label' => 'Media File',
                    'name' => 'flexible_content_button_media_file',
                    'type' => 'file',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b7264c8be44',
                                'operator' => '==',
                                'value' => 'file',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'return_format' => 'url',
                    'library' => 'all',
                    'min_size' => '',
                    'max_size' => '',
                    'mime_types' => '',
                ),
                array(
                    'key' => 'field_591b414d6547d',
                    'label' => 'Modal Title',
                    'name' => 'flexible_content_button_modal_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b7264c8be44',
                                'operator' => '==',
                                'value' => 'modal',
                            ),
                        ),
                    ),
                    'wrapper' => array(
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
                array(
                    'key' => 'field_58ee830d21f8b',
                    'label' => 'Modal Content',
                    'name' => 'flexible_content_button_modal_content',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58b7264c8be44',
                                'operator' => '==',
                                'value' => 'modal',
                            ),
                        ),
                    ),
                    'wrapper' => array(
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
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-highlighted-content',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58b71db82760b',
            'title' => 'fc_featured_video',
            'fields' => array(
                array(
                    'key' => 'field_58b7210e2760c',
                    'label' => 'Video Title',
                    'name' => 'flexible_content_video_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_58b7213c2760d',
                    'label' => 'Youtube Video ID',
                    'name' => 'flexible_content_youtube_video_id',
                    'type' => 'text',
                    'instructions' => 'Enter youtube video ID. Ex: <b>nK4FdomLJ0A</b>',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_5b69dbe450ef4',
                    'label' => 'Activate Schema?',
                    'name' => 'fv_activate_schema',
                    'type' => 'true_false',
                    'instructions' => 'This option activates VideoObject Schema.',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_5b69eb64e0a71',
                    'label' => 'Upload Date',
                    'name' => 'fv_video_upload_date',
                    'type' => 'date_picker',
                    'instructions' => 'Use the upload date from Youtube',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69dbe450ef4',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'display_format' => 'm/d/Y',
                    'return_format' => 'Y-m-d',
                    'first_day' => 1,
                ),
                array(
                    'key' => 'field_5b69eba0e0a73',
                    'label' => 'Video Duration',
                    'name' => 'fv_video_duration',
                    'type' => 'time_picker',
                    'instructions' => 'hours (hh) : minutes (mm) : seconds (ss)',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69dbe450ef4',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'display_format' => 'H:i:s',
                    'return_format' => 'H:i:s',
                ),
                array(
                    'key' => 'field_58b723807bba3',
                    'label' => 'Video Description',
                    'name' => 'flexible_content_video_description',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'tabs' => 'all',
                    'toolbar' => 'full',
                    'media_upload' => 0,
                    'delay' => 0,
                ),
                array(
                    'key' => 'field_5b69eb82e0a72',
                    'label' => 'Family Friendly?',
                    'name' => 'fv_video_family_friendly',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 1,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_5b69dbe450ef4',
                                'operator' => '==',
                                'value' => '1',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        'True' => 'True',
                        'False' => 'False',
                    ),
                    'default_value' => array(
                        0 => 'True',
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'return_format' => 'value',
                    'ajax' => 0,
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58fe0ffe583e0',
                    'label' => 'Video Transcript',
                    'name' => 'flexible_content_video_video_transcript',
                    'type' => 'wysiwyg',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-featured-video',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58d2d83f442ab',
            'title' => 'fc_success_story',
            'fields' => array(
                array(
                    'key' => 'field_58d2d853442ac',
                    'label' => 'Success Story',
                    'name' => 'flexible_content_success_story_story',
                    'type' => 'post_object',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'post_type' => array(
                        0 => 'success-stories',
                    ),
                    'taxonomy' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'return_format' => 'object',
                    'ui' => 1,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-success-story',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58efe33dbef9c',
            'title' => 'fc_success_story_slider',
            'fields' => array(
                array(
                    'key' => 'field_5a5cc3088344a',
                    'label' => 'Interval',
                    'name' => 'flexible_content_success_story_slides_interval',
                    'type' => 'select',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'choices' => array(
                        1000 => '1 Second',
                        2000 => '2 Seconds',
                        3000 => '3 Seconds',
                        4000 => '4 Seconds',
                        5000 => '5 Seconds',
                        6000 => '6 Seconds',
                        7000 => '7 Seconds',
                        8000 => '8 Seconds',
                        9000 => '9 Seconds',
                        10000 => '10 Seconds',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 0,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_5a5cc3388344b',
                    'label' => 'Show controls?',
                    'name' => 'flexible_content_success_story_slides_show_controls',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '50',
                        'class' => '',
                        'id' => '',
                    ),
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
                array(
                    'key' => 'field_58efe356bef9d',
                    'label' => 'Success Story Slides',
                    'name' => 'flexible_content_success_story_slides',
                    'type' => 'repeater',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'collapsed' => '',
                    'min' => 0,
                    'max' => 0,
                    'layout' => 'table',
                    'button_label' => 'Add Slide',
                    'sub_fields' => array(
                        array(
                            'key' => 'field_58efe376bef9e',
                            'label' => 'Success Story Slide',
                            'name' => 'flexible_content_success_story_slide',
                            'type' => 'post_object',
                            'instructions' => '',
                            'required' => 0,
                            'conditional_logic' => 0,
                            'wrapper' => array(
                                'width' => '',
                                'class' => '',
                                'id' => '',
                            ),
                            'post_type' => array(
                                0 => 'success-stories',
                            ),
                            'taxonomy' => array(
                            ),
                            'allow_null' => 0,
                            'multiple' => 0,
                            'return_format' => 'object',
                            'ui' => 1,
                        ),
                    ),
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-success-story-slider',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58e3d39fcf5bd',
            'title' => 'fc_calculator',
            'fields' => array(
                array(
                    'key' => 'field_58e3d3afcf5be',
                    'label' => 'Calculator',
                    'name' => 'flexible_content_calculator_calculator',
                    'type' => 'select',
                    'instructions' => 'Please insert only one Calculator per page for better performance.',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'wpml_cf_preferences' => 0,
                    'choices' => array(
                        'debt-management-comparison' => 'Debt Management Comparison',
                        'credit-card-payoff' => 'Credit Card Payoff',
                        'loan-cost' => 'Loan Savings',
                        'monthly-biweekly-payments' => 'Monthly vs Bi-weekly Payments',
                        'debt-income-ratio' => 'Debt to Income',
                        'mortgage' => 'Mortgage Payment',
                        'mortgage-prequal' => 'Mortgage Prequalifying',
                        'rent-or-buy' => 'Rent or Buy?',
                        'savings' => 'Simple Savings',
                        'solutions-debt' => 'Solutions Debt',
                        'debt-management' => 'Debt Management',
                    ),
                    'default_value' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 1,
                    'ajax' => 0,
                    'return_format' => 'value',
                    'placeholder' => '',
                ),
                array(
                    'key' => 'field_58e54b419937e',
                    'label' => 'Calculator Title',
                    'name' => 'flexible_content_calculator_calculator_title',
                    'type' => 'text',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58e3d3afcf5be',
                                'operator' => '!=',
                                'value' => 'debt-management-comparison',
                            ),
                            array(
                                'field' => 'field_58e3d3afcf5be',
                                'operator' => '!=',
                                'value' => 'credit-card-payoff',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '75',
                        'class' => '',
                        'id' => '',
                    ),
                    'wpml_cf_preferences' => 0,
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'maxlength' => '',
                ),
                array(
                    'key' => 'field_5b4f7a898f580',
                    'label' => 'Expand?',
                    'name' => 'flexible_content_calculator_show_calculator',
                    'type' => 'true_false',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => array(
                        array(
                            array(
                                'field' => 'field_58e3d3afcf5be',
                                'operator' => '!=',
                                'value' => 'debt-management-comparison',
                            ),
                            array(
                                'field' => 'field_58e3d3afcf5be',
                                'operator' => '!=',
                                'value' => 'credit-card-payoff',
                            ),
                        ),
                    ),
                    'wrapper' => array(
                        'width' => '25',
                        'class' => '',
                        'id' => '',
                    ),
                    'wpml_cf_preferences' => 0,
                    'message' => '',
                    'default_value' => 0,
                    'ui' => 1,
                    'ui_on_text' => '',
                    'ui_off_text' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-calculator',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_58e518f718261',
            'title' => 'fc_map',
            'fields' => array(
                array(
                    'key' => 'field_58e5194018262',
                    'label' => 'Center X',
                    'name' => 'flexible_content_map_center_x',
                    'type' => 'text',
                    'instructions' => 'Center Coordinates First, ex. for Florida, 28',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_58e51a9618263',
                    'label' => 'Center Y',
                    'name' => 'flexible_content_map_center_y',
                    'type' => 'text',
                    'instructions' => 'Center Coordinates Second, ex. for Florida, -84',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_5b479a3e41f67',
                    'label' => 'Map Zoom',
                    'name' => 'flexible_content_map_map_zoom',
                    'type' => 'number',
                    'instructions' => 'From 1 to 11',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'prepend' => '',
                    'append' => '',
                    'min' => '',
                    'max' => '',
                    'step' => '',
                ),
                array(
                    'key' => 'field_58e51afb18265',
                    'label' => 'State Name',
                    'name' => 'flexible_content_map_state_name',
                    'type' => 'text',
                    'instructions' => 'Full Name of State, used in geo_help_merge for state name',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
                array(
                    'key' => 'field_58e51b1618266',
                    'label' => 'State Abbreviation',
                    'name' => 'flexible_content_map_state_abbreviation',
                    'type' => 'text',
                    'instructions' => 'Formal 2 letter state abbreviation, ex. FL',
                    'required' => 1,
                    'conditional_logic' => 0,
                    'wrapper' => array(
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
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-map',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_5aeb3f1770cb3',
            'title' => 'fc_video_playlist',
            'fields' => array(
                array(
                    'key' => 'field_5aeb403970cb5',
                    'label' => 'Video Playlist',
                    'name' => 'video_to_playlist',
                    'type' => 'post_object',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'post_type' => array(
                        0 => 'video-playlist',
                    ),
                    'taxonomy' => array(
                    ),
                    'allow_null' => 0,
                    'multiple' => 0,
                    'return_format' => 'object',
                    'ui' => 1,
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/fc-video-playlist',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );

    acf_add_local_field_group(
        array(
        'key' => 'group_600aff81773c3',
        'title' => 'CTA Block',
        'fields' => array(
            array(
                'key' => 'field_600aff8613dd4',
                'label' => 'CTA Content',
                'name' => 'cta_content',
                'type' => 'wysiwyg',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
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
            array(
                'key' => 'field_600affb713dd6',
                'label' => 'Button',
                'name' => 'button',
                'type' => 'link',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'return_format' => 'array',
            ),
            array(
                'key' => 'field_601063705ab33',
                'label' => 'Form',
                'name' => 'form',
                'type' => 'select',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => array(
                    array(
                        array(
                            'field' => 'field_6010634e5ab32',
                            'operator' => '==',
                            'value' => '1',
                        ),
                    ),
                ),
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'choices' => array(
                    'none' => 'None',
                    'lead-form' => 'Lead Form',
                    'ate-form' => 'Ask The Expert Form',
                ),
                'default_value' => 'none',
                'allow_null' => 1,
                'multiple' => 0,
                'ui' => 0,
                'return_format' => 'value',
                'ajax' => 0,
                'placeholder' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'block',
                    'operator' => '==',
                    'value' => 'acf/cta',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    )
    );

    acf_add_local_field_group(
        array(
            'key' => 'group_6025f9e12a13c',
            'title' => 'Calculator Block',
            'fields' => array(
                array(
                    'key' => 'field_6025f9f0c64b8',
                    'label' => 'Calculator Content',
                    'name' => 'calculator_content',
                    'type' => 'textarea',
                    'instructions' => '',
                    'required' => 0,
                    'conditional_logic' => 0,
                    'wrapper' => array(
                        'width' => '',
                        'class' => '',
                        'id' => '',
                    ),
                    'default_value' => '',
                    'placeholder' => '',
                    'maxlength' => '',
                    'rows' => '',
                    'new_lines' => '',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'block',
                        'operator' => '==',
                        'value' => 'acf/calculator',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        )
    );
}

/**
 * @param string $fieldId
 * @param bool $block
 * @return bool|mixed
 */
function get_flexible_content_field($fieldId, $block = false) {

    if (isset($block) && $block['id']) {
        return get_field($fieldId);
    }

    return get_sub_field($fieldId);
}

/**
 * @param string $fieldId
 * @param bool $block
 */
function the_flexible_content_field($fieldId, $block = false) {
    if (isset($block) && $block['id']) {
        the_field($fieldId);
    }
    else {
        the_sub_field($fieldId);
    }
}
