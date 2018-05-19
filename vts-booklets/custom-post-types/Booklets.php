<?php namespace VTSBooklets;

class Booklets{
    protected $post_type = 'booklets';
    
    protected $slug = 'booklets';
    
    public function __construct(){
        \add_action('init', [$this, 'register']);
        \add_filter('archive_template', [$this, 'archive_template'], 10, 1);
        \add_filter('single_template', [$this, 'single_template'], 10, 1);
        \add_filter('wp_title', [$this, 'fix_title'], 99);
        \add_filter('pre_get_document_title', [$this, 'fix_title'], 99);
    }

    public function fix_title($title){
        $title = str_replace('Booklets Archive', 'Booklets', $title);

        return $title;
    }

    function archive_template($template){
        if (is_post_type_archive($this->post_type)){

            $plugin_path = dirname(dirname(__FILE__)) . '/templates/';

            $template_name = 'archive-booklets.php';

            if(file_exists(get_stylesheet_directory() . '/' . $template_name)) {
                $template = get_stylesheet_directory() . '/' . $template_name;
                return $template;
            }else{
                return $plugin_path . $template_name;
            }

        }

        return $template;
    }

    function single_template($single_template){
        global $post;

        if ($post->post_type === $this->post_type){

            $plugin_path = dirname(dirname(__FILE__)) . '/templates/';

            $template_name = 'single-booklets.php';

            if(file_exists(get_stylesheet_directory() . '/' . $template_name)) {
                $single_template = get_stylesheet_directory() . '/' . $template_name;
                return $single_template;
            }else{
                return $plugin_path . $template_name;
            }

        }

        return $single_template;
    }

    public function register(){

        $labels = array(
           'name'                => _x( 'Booklets', 'Post Type General Name', 'vts' ),
           'singular_name'       => _x( 'Booklet', 'Post Type Singular Name', 'vts' ),
           'menu_name'           => __( 'Booklets', 'vts' ),
           'parent_item_colon'   => __( 'Parent Booklet', 'vts' ),
           'all_items'           => __( 'All Booklets', 'vts' ),
           'view_item'           => __( 'View Booklet', 'vts' ),
           'add_new_item'        => __( 'Add New Booklet', 'vts' ),
           'add_new'             => __( 'Add New', 'vts' ),
           'edit_item'           => __( 'Edit Booklet', 'vts' ),
           'update_item'         => __( 'Update Booklet', 'vts' ),
           'search_items'        => __( 'Search Booklet', 'vts' ),
           'not_found'           => __( 'Not Found', 'vts' ),
           'not_found_in_trash'  => __( 'Not found in Trash', 'vts' ),
       );


        register_post_type($this->post_type, [
            'label' => 'Booklets',
            'labels' => $labels,
            'public' => true,
			'show_in_rest' => false,
            'show_ui' => true,
            'has_archive' => true,
            'capability_type' => 'post',
            'query_var' => true,
            'menu_icon' => 'dashicons-book-alt',
            'hierarchical' => true,
            'rewrite' => [
                'slug' => $this->slug,
                'with_front' => false,
            ],
            'supports' => [
                'title',
                'revisions',
            ],
        ]);
    }
}