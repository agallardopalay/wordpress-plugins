<?php namespace VTSThemeOptions;

class ThemeOptions{
   /* protected $post_type = 'booklets';
    
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
        if(is_post_type_archive($this->post_type)){
            $template = dirname(dirname(__FILE__)) . '/templates/archive-booklets.php';
        }

        return $template;
    }

    function single_template($single_template){
        global $post;

        if ($post->post_type === $this->post_type){
            $single_template = dirname(dirname(__FILE__)) . '/templates/single-booklets.php';
        }

        return $single_template;
    }

    public function register(){
        register_post_type($this->post_type, [
            'label' => 'Booklets',
            'public' => true,
            'show_ui' => true,
            'has_archive' => true,
            'capability_type' => 'post',
            'query_var' => true,
            'menu_icon' => 'dashicons-admin-home',
            'hierarchical' => true,
            'rewrite' => [
                'slug' => $this->slug,
            ],
            'supports' => [
                'title',
            ],
        ]);
    }
	*/
}