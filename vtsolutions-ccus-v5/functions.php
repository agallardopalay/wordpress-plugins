<?php
//Global variable to manage the javascript versioning
define('S_VERSION', date('m.d.y.g.i'));
define('DOMAIN', 'consolidatedcredit.ca');

/**
 * Get data from the tailpress.json file.
 *
 * @param mixed $key The key to retrieve.
 *
 * @return mixed|null
 */
function tailpress_get_data($key = null)
{
    $config = json_decode(file_get_contents(get_stylesheet_directory() . '/tailpress.json'), true);

    if ($key === null) {
        return filter_var_array($config, FILTER_SANITIZE_STRING);
    }

    $option = filter_var($config[$key], FILTER_SANITIZE_STRING);
    return $option ?? null;
}


/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function ccus_setup()
{

    // Switch default core markup for search form, comment form, and comments
    // to output valid HTML5.
    add_theme_support(
        'html5',
        array(
            'search-form',
            'gallery',
            'caption',
        )
    );

    /*
    * Let WordPress manage the document title.
    * By adding theme support, we declare that this theme does not use a
    * hard-coded <title> tag in the document head, and expect WordPress to
    * provide it for us.
    */
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Add support for core custom logo.
    add_theme_support('custom-logo', array(
        'height' => 250,
        'width' => 250,
        'flex-width' => true,
        'flex-height' => true,
    ));

    // This theme uses wp_nav_menu() in one location. =============================== /
    add_theme_support('menus');

    register_nav_menus(array(
        'primary' => esc_html__('Primary', 'ccus'),
        'footer' => __('Footer Menu', 'ccus'),
    ));

    // Nav Walker
    require_once get_template_directory() . '/inc/class-wp-tailwind-navwalker.php';

    // End of Dynamic menu ========================================================== /


    /**
     * Register new sidebar to add saving info to the top of the page.
     *
     */
    function ccus_widget_init() {

      register_sidebar( array(
        'name'          => 'Saving Top Line',
        'id'            => 'saving_top_line',
        'before_widget' => '<div class="bg-primary text-center text-white p-4">',
        'after_widget'  => '</div>',
      ) );

    }
    add_action( 'widgets_init', 'ccus_widget_init' );


    // Block editor.
    add_theme_support('align-wide');

    add_theme_support('wp-block-styles');

    add_theme_support('editor-styles');
    add_editor_style();

    $tailpress = tailpress_get_data();

    $colors = array_map(function ($color, $hex) {
        return array(
            'name' => ucfirst($color),
            'slug' => $color,
            'color' => $hex,
        );
    }, array_keys($tailpress['colors']), $tailpress['colors']);

    $font_sizes = array_map(function ($size, $px) {
        return array(
            'name' => ucfirst($size),
            'size' => $px,
            'slug' => $size
        );
    }, array_keys($tailpress['fontSizes']), $tailpress['fontSizes']);

    // add tag and category support to pages
    register_taxonomy_for_object_type('post_tag', 'page');
    register_taxonomy_for_object_type('category', 'page');

    // Enable Editor Styles
    add_theme_support('editor-styles');

    add_theme_support('editor-color-palette', $colors);
    add_theme_support('editor-font-sizes', $font_sizes);

    // to generate file run "npm run unminify"
    add_editor_style(get_template_directory_uri() . '/public/css/bundle.min.css');
    add_editor_style(get_template_directory_uri() . '/public/css/dashboard.min.css');

    //Set show_avatars option in 0 to remove the Profile Picture section from the user admin Dashboard
    update_option('show_avatars', 0);
}
add_action('after_setup_theme', 'ccus_setup');

require get_template_directory() . '/inc/strings.php';
require get_template_directory() . '/inc/helpers-functions.php';
require get_template_directory() . '/inc/blocks/blocks-generator.php';
require get_template_directory() . '/inc/shortcodes.php';

/**
 * Custom Logo properties to change the WP Login page
 */
// Changes Logo URL
function my_login_logo_url()
{
    return get_bloginfo('url');
}

add_filter('login_headerurl', 'my_login_logo_url');

//Changes the Logo title inside the Login Page
function my_login_logo_url_title()
{
    return get_bloginfo('name');
}

add_filter('login_headertext', 'my_login_logo_url_title');

// Changes Logo Image with CSS
/* function my_login_logo()
{ ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url('<?php echo get_template_directory_uri() . '/public/svg/cc-logo.svg'?>');
            height: 40px;
            width: 320px;
            background-size: 100%;
            background-repeat: no-repeat;
            padding-bottom: 30px;
        }

        #login .submit {
            text-align: left !important;
        }

        #login .submit #wp-submit {
            float: none;
            width: 100%;
            background-color: #e8730b;
            color: #fff;
            text-transform: uppercase;
            border-color: #e8730b;
            box-shadow: none;
            text-shadow: none;
            border-radius: 0;
            font-weight: bold;
            padding: 10px;
            height: auto;
            font-size: 16px;
            line-height: 25px;
        }
    </style>
<?php } */

//add_action('login_enqueue_scripts', 'my_login_logo');


/**
 * Hides WP [Custom Fields] menu option for non-admin users
 */
function my_acf_show_admin($show)
{
    return current_user_can('manage_options');
}

add_filter('acf/settings/show_admin', 'my_acf_show_admin');


/**
 * Enqueue Styles and Scripts for the entire website
 */
function ccus_scripts() {
    if (is_front_page()) {
        wp_enqueue_style('main-css', get_template_directory_uri() . '/public/css/home.min.css', array(), S_VERSION);
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-block-style');
    } else {
        wp_enqueue_style('main-css', get_template_directory_uri() . '/public/css/bundle.min.css', array(), S_VERSION);
    }
}
add_action('wp_enqueue_scripts', 'ccus_scripts');


function prefix_add_footer_scripts() {
    wp_enqueue_script('main-js', get_template_directory_uri() . '/public/js/bundle.min.js', array(), S_VERSION, true);

};
add_action( 'get_footer', 'prefix_add_footer_scripts' );



/**
 * Removing administration menu items to non-admin users
 */
function manage_admin_menu()
{
    $roles = wp_get_current_user()->roles;

    if ($roles[0] == 'wpseo_manager') {
        remove_menu_page('plugins.php');                //Plugins
        remove_menu_page('users.php');                  //Users
        remove_menu_page('tools.php');                  //Tools
        remove_menu_page('options-general.php');        //Settings
        remove_menu_page('theme-general-settings.php');       //Hide Theme Settings page
    }
}
add_action('admin_menu', 'manage_admin_menu');

/**
 *  Filter to sync any ACF changes on dev to prod
 */
if (function_exists('acf_update_setting(')) {
    acf_update_setting('save_json', get_stylesheet_directory() . '/acf-json');
    acf_append_setting('load_json', get_stylesheet_directory() . '/acf-json');
}