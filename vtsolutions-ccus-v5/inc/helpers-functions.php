<?php


/**
 * Return Image src(url) or HTML image by post ID
 * @param $size
 * @param $type
 * @param false $pid
 * @param string $classes
 */
function imageByID($size, $type, $pid = false, $classes = '') {
    wp_reset_query();
    wp_reset_postdata();
    global $lang;

    if ($lang == 'fr_CA'):
        $image_name = 'no-thumb-fr.jpg';
    else:
        $image_name = 'no-thumb-ca.jpg';
    endif;

    // Variables
    $image_id = 0;
    $first_img = '';
    $image_thumb = array();
    $html = new stdClass();
    $default_img = get_stylesheet_directory_uri() . '/src/images/' . $image_name;

    if ($pid === false && !is_single()) {
        global $post;
        $pid = $post->ID;
    }

    $content = get_post_field('post_content', $pid);

    ob_start();
    ob_end_clean();

    // If there's a featured image, show it
    if (get_the_post_thumbnail($pid) != '') {
        if ($type == 'url') {
            echo get_the_post_thumbnail_url($pid, $size);
        } else {

            $img_url = get_the_post_thumbnail_url($pid, $size);
            $att_id = get_post_thumbnail_id($pid);
            $alt_str = "Related Post Image";
            $image_alt = get_post_meta($att_id, '_wp_attachment_image_alt', true);
            if ($image_alt == '') {
                $alt_str = get_the_title($att_id);
            } else {
                $alt_str = $image_alt;
            }

            echo "<img src='" . $img_url . "' alt='" . $alt_str . "' class='" . $classes . "' >";
        }
    } else { // No featured image, so we get the first image inside the post content
        //if the post is an infographic, take the Square banner thumb field.
        require_once('simple_html_dom.php');
        $html = new simple_html_dom();
        $html->load($content);
        $first_img = $html->find('img', 0);

        if (!empty($first_img) && $first_img !== null) {

            //let's get the correct image dimensions
            $image_id = url_get_image_id($first_img->src);
            $image_thumb = wp_get_attachment_image_src($image_id, $size);

            // if we've found an image, correctly display it
            if ($image_thumb) {
                if ($type == 'url') {
                    echo $image_thumb[0];
                } else {
                    echo '<img src="' . $image_thumb[0] . '" alt="' . $first_img->alt . '" class="' . $classes . '" />';
                }
            } else {
                //if no image (i.e. from an external source), echo the first image in the content;
                if ($type == 'url') {
                    echo $first_img->src;
                } else {
                    echo '<img src="' . $first_img->src . '" alt="' . $first_img->alt . '" class="' . $classes . '" />';
                }
            }

        } else {
            if ($type == 'url') {
                echo $default_img;
            } else {
                echo '<img src="' . $default_img . '" alt="' . get_the_title($pid) . '"  class="' . $classes . '" />';
            }
            //Print default image if no featured or content image was found.
        }

    }//End of else (No featured image)
}

/**
 * @param $image_url
 * @return int|mixed
 */
function url_get_image_id($image_url)
{
    global $wpdb;
    $attachment = $wpdb->get_col($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE guid='%s';", $image_url));
    if (isset($attachment[0])) {
        return $attachment[0];
    } else {
        return 0;
    }
}

function renderTickerSlides($ticker_results, $lang) {
    foreach ($ticker_results as $ticker) { ?>

        <div class="swiper-slide">
        <?php if ($lang == 'es_ES'):
            $en_str = array("hours", "hour", "minutes", "minute", "seconds", "second");
            $es_str = array("horas", "hora", "minutos", "minuto", "segundos", "segundo");
            $timeStr = str_replace($en_str, $es_str, $ticker->EnTime);
        ?>
            Ayudamos a <?php echo $ticker->FirstName . ' ' . $ticker->LastInitial; ?> con <?php echo $ticker->TotalDebt; ?> en <?php echo $ticker->State; ?> hace <?php echo $timeStr ?>
        <?php elseif ($lang == 'en_CA'): ?>
            <?php echo $ticker->FirstName . ' ' . $ticker->LastInitial; ?> got help with <?php echo $ticker->TotalDebt; ?> in <?php echo $ticker->State; ?> <?php echo $ticker->EnTime; ?> ago
        <?php elseif ($lang == 'fr_CA'): ?>
            Nous aidons maintenant <?php echo $ticker->FirstName . ' ' . $ticker->LastInitial; ?> avec <?php echo $ticker->TotalDebt; ?> en <?php echo $ticker->State; ?>
        <?php else: ?>
            <?php echo $ticker->FirstName . ' ' . $ticker->LastInitial; ?> got help with <?php echo $ticker->TotalDebt; ?> in <?php echo $ticker->State; ?> <?php echo $ticker->EnTime; ?> ago
        <?php endif; ?>
        </div><?php
    }
}

/**
 * @param Boolean $render
 */
function get_ticker_items($render = false)
{

    //$lang = 'en_CA';
    global $lang;
    /* if (isset($_POST['lang'])) {
        $lang = $_POST['lang'];
    } */

    $host_api = 'https://tools.consolidatedcredit.ca/scrolling-leads/json/8f1bf5d4-1b57-4353-829b-6c3aac18c85a/';
    $result = get_transient('get_ticker_items');

    if ( !$result ) {
        // make service reviews request
        $response = wp_remote_post(
            $host_api,
            array(
                'timeout' => 3,
            )
        );

        if(is_array($response) && !is_wp_error($response)) {
            $result = $response['body'];
            set_transient( 'get_ticker_items', $response['body'], 1 * DAY_IN_SECONDS );
        }
    }

    $result = json_decode($result);

    if (isset($result->Leads)) {
        $results = $result->Leads;

        ob_start();
        $ticker_results = $results;

        if (isset($ticker_results)):
            renderTickerSlides($ticker_results, $lang);
        endif;

        $output = ob_get_clean();

        if ($render) {
            echo $output;
        }
        else {
            echo json_encode(array('html' => $output));
            exit();
        }
    } else {
        echo json_encode(array('html' => ''));
        exit();
    }
}

add_action("wp_ajax_get_ticker_items", "get_ticker_items");
add_action("wp_ajax_nopriv_get_ticker_items", "get_ticker_items");


/**
 * Function to create a pagination
 * @return string html with links to move foward and backward
 * Example of use: Used in the Search template to paginate the search reslt
 */
function pagination($url = '', $title = '', $page = 1, $count = 0, $limit = 0, $offset = 0)
{
    $pages = intval($count / $limit);
    $query = (stristr($url, "?") ? "&" : "?") . 'pp=';

    if ($count % $limit) {
        $pages++;
    }
    if ($pages > 9) {
        $start = $page < 5 ? 1 : ($page - 4);
        if ($page < 5) {
            $finish = 9;
        } else {
            if (($page + 5) > $pages) {
                $finish = $pages;
                $start = $pages - 8;
            } else {
                $finish = $page + 4;
            }
        }
    } else {
        $start = 1;
        $finish = $pages;
    }

    $html = '<nav class="text-center mt-16" role="navigation"><h3 class="screen-reader-text">' . __("Posts navigation", "cccsca") . '</h3><div class="nav-links">';
    if ($page > 5) {
        $html .= '<a href="' . $url . '" class="page-numbers">' . __("&laquo; First", "cccsca") . '</a>';
    }
    if ($page != 1) {
        $html .= '<a href="' . $url . ($page == 2 ? '' : ($query . ($page - 1))) . '" class="prev page-numbers">' . __("Previous", "cccsca") . '</a>';
    }
    while ($start <= $finish) {
        $html .= ($page == $start ? '<span class="page-numbers current">' : ('<a href="' . $url . ($start == 1 ? '' : ($query . $start)) . '" class="page-numbers">')) . format_number($start, false) . ($page == $start ? '</span>' : '</a>');
        $start++;
    }
    if ($page != $pages && $pages != 0) {
        $html .= '<a href="' . $url . $query . ($page + 1) . '" class="next page-numbers">' . __("Next", "cccsca") . '</a>';
    }
    if ($finish < $pages) {
        $html .= '<a href="' . $url . $query . ($pages) . '" class="page-numbers">' . __("Last &raquo;") . '</a>';
    }
    if ($pages != 0) {
        $html .= '<p>' . __('Listing ', 'cccsca') . format_number($offset + 1) . ' - ' . format_number(($offset + $limit > $count ? $count : $offset + $limit), false) . __(' of ', 'cccsca');
    }
    $html .= format_number($count, false) . ' ' . $title . '</p></div></nav>';

    return $html;
}

function format_number($number, $fractional = false)
{
    if ($fractional) {
        $number = sprintf('%.2f', $number);
    }
    while (true) {
        $replaced = preg_replace('/(-?\d+)(\d\d\d)/', '$1,$2', $number);
        if ($replaced != $number) {
            $number = $replaced;
        } else {
            break;
        }
    }
    return $number;
}


/**
 * Remove archive labels.
 *
 * @param string $title Current archive title to be displayed.
 * @return string Modified archive title to be displayed.
 */
function cccaca_archive_title($title)
{
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_author()) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif (is_post_type_archive()) {
        $title = post_type_archive_title('', false);
    } elseif (is_tax()) {
        $title = single_term_title('', false);
    }

    return $title;
}

add_filter('get_the_archive_title', 'cccaca_archive_title');


/* Function to get Vimeo and Youtube default image */
// $thumb_size = 'thumbnail_small' | 'thumbnail_medium' | 'thumbnail_large'];
function getVideoThumb($vid, $video_type, $thumb_size = 'thumbnail_large')
{
    $source = "https://img.youtube.com/vi/" . $vid . "/sddefault.jpg";
    if ($video_type == 'vimeo') {
        $arr_vimeo = unserialize(file_get_contents("https://vimeo.com/api/v2/video/" . $vid . ".php"));
        $source = $arr_vimeo[0][$thumb_size];
    }

    return $source;
}


/* Getting the post's minute read string */
function post_read_time($pid)
{

    if (!function_exists('YoastSEO')) {
        return false;
    }

    global $lang;
    $minutes = (string)YoastSEO()->meta->for_post($pid)->estimated_reading_time_minutes;
    $mword = '';
    $extra = ' read ';

    if ($lang === 'es_ES') {
        $mword = 'minuto';
        $extra = ' de lectura ';
    } else {
        $mword = 'minute';

        if ($lang === 'fr_CA') {
            $extra = ' de lecture ';
        }
    }

    if ($minutes > 1) {
        $mword .= 's';
    }

    return $minutes . ' ' . $mword . '' . $extra;
}



/**
 * Prints HTML with meta information for the current post-date/time and author.
*/
function vt_posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
        $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
    }

    $time_string = sprintf( $time_string,
        esc_attr( get_the_date( 'c' ) ),
        esc_html( get_the_date() ),
        esc_attr( get_the_modified_date( 'c' ) ),
        esc_html( get_the_modified_date() )
    );

    $posted_on = sprintf(
        esc_html_x( __('Posted on', 'cccsca').' %s', 'post date', 'cccsca' ),
            '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
        );

    $byline = sprintf(
        esc_html_x( __('by', 'cccsca').' %s', 'post author', 'cccsca' ),
            '<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
    );

    echo '<span class="posted-on">' . $posted_on . ' | ' . $byline . '</span>'.' ('.post_read_time( get_the_ID() ).')' ; // WPCS: XSS OK.
}