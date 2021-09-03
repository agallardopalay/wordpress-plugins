<?php namespace VTSThemeOptions;

/**
 * @wordpress-plugin
 * Plugin Name:       VTS: Theme Options
 * Plugin URI:        http://venturetechsolutions.com/
 * Description:       Adds Theme Options Page.
 * Version:           1.0.1
 * Author:            Venture Tech Solutions
 * Developer:		  Adrian Gallardo
 * Author URI:        http://venturetechsolutions.com/
 * License:           proprietary
 */

require_once(dirname(__FILE__) . '/acf-assets/options-page.php');
require_once(dirname(__FILE__) . '/EnqueueScripts.php');

//Setup Options Page
new OptionsPage();

//Enqueue Styles/Scripts
new EnqueueScripts();