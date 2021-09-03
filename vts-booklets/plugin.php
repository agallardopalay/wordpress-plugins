<?php namespace VTSBooklets;

/**
 * @wordpress-plugin
 * Plugin Name:       VTS: Booklets
 * Plugin URI:        http://venturetechsolutions.com/
 * Description:       Adds pages for Booklets.
 * Version:           1.0.1
 * Author:            Venture Tech Solutions
 * Developer:		  Adrian Gallardo
 * Author URI:        http://venturetechsolutions.com/
 * License:           proprietary
 */

require_once(dirname(__FILE__) . '/acf-assets/options-page.php');
require_once(dirname(__FILE__) . '/custom-post-types/Booklets.php');
//require_once(dirname(__FILE__) . '/EnqueueScripts.php');

//Setup Options Page
new OptionsPage();

//Initialize custom post type and related pages
new Booklets();

//Enqueue Styles/Scripts
//new EnqueueScripts();