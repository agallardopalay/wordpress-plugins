<?php
/**
 * @wordpress-plugin
 * Plugin Name:       VTS: Alt Text Scanner
 * Plugin URI:        http://venturetechsolutions.com/
 * Description:       Check for missing alternative text on uploaded images.
 * Version:           1.0.3
 * Author:            Venture Tech Solutions
 * Developer:		  Adrian Gallardo
 * Author URI:        http://venturetechsolutions.com/
 * License:           proprietary
 */


if(!class_exists('WP_List_Table')){
    require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}



class VTS_Alt_Text_Image_Table extends WP_List_Table {

    function __construct(){
        global $status, $page;
                
        //Set parent defaults
        parent::__construct( array(
            'singular'  => 'image', 
            'plural'    => 'images',
            'ajax'      => false        //does this table support ajax?
        ) );
        
    }


	function column_default($item, $column_name){
        switch($column_name){
            case 'alt':
            case 'url':
			case 'id':
			case 'title':
			case 'edit':
                return $item[$column_name];
            default:
                return print_r($item,true); //Show the whole array for troubleshooting purposes
        }
    }

    function get_columns(){
        $columns = array(
            'id'    => 'ID',
            'url'   => 'Thumbnail',
			'title' => 'Title',
            'alt'   => 'Alt',
			'edit'  => 'Manage'
        );
        return $columns;
    }


   
    function get_sortable_columns() {
        $sortable_columns = array(
            'title'  => array('title',false),     //true means it's already sorted
        );
        return $sortable_columns;
    }


  
    function prepare_items() {
        global $wpdb; //This is used only if making any database queries

		$counter = 0;

		$query_images_args = array(
		    'post_type' => 'attachment', 
			'post_mime_type' =>'image', 
			'post_status' => 'inherit', 
			'posts_per_page' => -1,
		);

		$query_images = new WP_Query($query_images_args);
		$images = array();
		foreach ( $query_images->posts as $image) {
			$altText = get_post_meta($image->ID, '_wp_attachment_image_alt', true);
			$imagetitle = get_the_title($image->ID);
			
			if(strlen($altText) === 0 || $altText == $imagetitle || strlen($altText) < 5) {
				$imgObj = array(
					'id'    => $image->ID,
					'alt'   => $altText,
					'title' => $imagetitle,
					'url'   => '<a href="'.admin_url().'upload.php?item='.$image->ID.'"><img src="'.wp_get_attachment_thumb_url($image->ID).'"/></a>',
					'edit'  => '<a href="'.admin_url().'upload.php?item='.$image->ID.'">Manage</a>'
				);

				$counter++;				
				$images[]= $imgObj;
			}
		}
	

		if(isset($_REQUEST['items_perpage'])):
			$per_page = $_REQUEST['items_perpage'];
		else:
			$per_page = 20;
		endif;
        
       
        $columns = $this->get_columns();
        $hidden = array();
        $sortable = $this->get_sortable_columns();
       
        $this->_column_headers = array($columns, $hidden, $sortable);
        
        $this->process_bulk_action();
        
		$data = $images;
                
        function usort_reorder($a,$b){
            $orderby = (!empty($_REQUEST['orderby'])) ? $_REQUEST['orderby'] : 'title';
            $order = (!empty($_REQUEST['order'])) ? $_REQUEST['order'] : 'asc';
            $result = strcmp($a[$orderby], $b[$orderby]);
            return ($order==='asc') ? $result : -$result;
        }
        usort($data, 'usort_reorder');
        
        
        $current_page = $this->get_pagenum();
      
        $total_items = count($data);
      
        $data = array_slice($data,(($current_page-1)*$per_page),$per_page);
      
        $this->items = $data;
        
        $this->set_pagination_args( array(
            'total_items' => $total_items,                  
            'per_page'    => $per_page,                     
            'total_pages' => ceil($total_items/$per_page)   
        ) );
    }


}


function vts_add_menu_items(){
    add_menu_page('Alt Text Scanner', 'Alt Text Scanner', 'activate_plugins', 'vts_list_images', 'vts_render_list_page', 'dashicons-images-alt2');
} add_action('admin_menu', 'vts_add_menu_items');



function vts_render_list_page(){
    
    $vtsListTable = new VTS_Alt_Text_Image_Table();
    $vtsListTable->prepare_items();
    
    ?>
    <div class="wrap">
        
        <h2>Alt Text Scanner</h2>
        
        <h4><span>The following images do not have Alt Text or have problems associated with them:</span></h4> 
        
		<form id="images-filter" method="get">
            <!-- For plugins, we also need to ensure that the form posts back to our current page -->
            <input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ?>" />

			<label for="items_perpage">Number of items per page:</label>
			<input type="number" step="1" min="1" max="999" class="screen-per-page" id="items_perpage" name="items_perpage" maxlength="3" value="<?php echo $_REQUEST['items_perpage'];?>"/>

			<input type="submit" id="post-query-submit" class="button button-primary" value="Apply">
        	<div style="margin-top: -35px;">
				<?php $vtsListTable->display() ?>
			</div>
        </form>
        
    </div>
    <?php
}