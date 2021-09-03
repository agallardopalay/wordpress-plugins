<?php
/**
 * The header for our theme
 * This is the template that displays all of the <head> section including banner in the home page
 *
 * @package ccus
 */

global $home_url;
global $ccus_str;
?>

<!DOCTYPE html>
<html <?php echo language_attributes(); ?>>
<head>

	<!-- Google Tag Manager -->

	<!-- End Google Tag Manager -->

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php echo esc_url( home_url('/') ); ?>xmlrpc.php">

	<?php wp_head(); ?>
	<?php include(locate_template('inc/schema.php')); ?>

</head>

<body <?php body_class( 'bg-white antialiased' ); ?>>

<!-- Page Wrapper -->
<div id="page" class="min-h-screen flex flex-col">

	<a class="sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'cccsca' ); ?></a>

	<header id="masthead" class="bg-white fixed w-full z-10 top-0 transition duration-150 ease-in-out">

		<!-- Utility Bar -->
		<div class="relative">
			<div id="nav-utility" class="flex flex-row container mx-auto items-center border-b border-ccusLightGray pl-1 pr-4">
        <div class="flex flex-grow">
<!--           <div class="search">
            <input type="text" class="search__input" placeholder="Seach..." aria-label="Search Input">
            <button class="search__button" aria-label="search button">
              <svg class="w-5 h-5 text-gray-800 duration-200 fill-current hover:text-ccusBlue focus:text-ccusBlue pb-0.5" data-icon="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" title="search">
                <path fill="currentColor" d="M508.5 481.6l-129-129a11.9 11.9 0 00-8.5-3.5h-10.3a208 208 0 10-11.6 11.7V371c0 3.2 1.3 6.2 3.5 8.5l129 129a12 12 0 0017 0l9.9-9.9a12 12 0 000-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path>
              </svg>
            </button>
          </div> -->
          <?php get_template_part('template-parts/utility-search-form', ''); ?>
        </div>

				<div class="flex flex-grow-0 sm:ml-auto sm:mt-0 justify-center content-center">
					<a class="sm:inline-flex self-center mx-4 text-ccusDarkGray hover:text-ccusBlue text-15px" href="https://consolidatedcredi.org/es" target="_blank" aria-label="Open our Spanish website in a new tab">
							<span class="sm:hidden lg:inline">&nbsp;Español</span>
					</a>

          <span class="text-ccusOrange text-21px self-center font-bold mr-1.5">CALL US TODAY</span>
          <a class="tracking-phone-click | inline-flex self-center text-ccusBlue text-large font-bold leading-tight" href="tel:<?php echo $ccus_str['default_telephone']; ?>">
            <span class="tracking-phone"><?php echo $ccus_str['default_telephone']; ?></span>
          </a>
				</div>
      </div>
    </div>
    <!-- /utility-bar -->

    <!-- Brand Bar -->
    <nav class="relative z-10 shadow-lg">
        <div class="container px-4 py-4 mx-auto">
            <div class="flex items-center justify-between">
                <div class="flex">
                    <div class="cc-logo">
                        <a href="<?=$home_url?>" title="<?=get_bloginfo();?>">
                          <img alt="<?=get_bloginfo();?>" src="<?=get_template_directory_uri() . '/public/svg/cc-logo.svg'?>" loading="lazy"  width="100%" height="60"/>
                        </a>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="flex">
                  <?php
                      if(is_nav_menu('primary')) {
                          wp_nav_menu( array(
                              'theme_location' => 'primary',
                              'depth'          => 2,
                              'menu_class'     => 'nav nav-side justify-content-center'
                          )
                        );
                      } else {
                          $menu_items = $ccus_str['main-menu'];
                          $main_menu = "";

                          $main_menu .= "<ul class='nav nav-side display-on-lg | hidden xl:flex xl:items-center' id='mainNavbar'>";
                          foreach( $menu_items as $key => $element ) {
                              $target = $element['target'] ?? '';
                              $has_target = $target ? 'target="'.$target.'"' : '';
                              $main_menu .= "<li class='nav-item'>";
                                $main_menu .= "<a href='".$element['href']."' title='".$key."' ".$has_target.">$key</a>";
                              $main_menu .= "</li>";
                          }
                          $main_menu .= "</ul>";

                          echo $main_menu;
                      }
                  ?>

                  <a href="https://members.consolidatedcreditsolutions.org/" class="members-btn | hidden xl:flex rounded-lg box-border border border-ccusBlack hover:border-0 font-normal ml-2.5 py-2.5 px-6">Members</a>


                  <!-- Mobile Hamburger Button -->
                  <div class="hidden-on-lg | flex xl:hidden">
                      <button id="hamburger-icon" type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                          </svg>
                      </button>
                  </div>
                  <!-- ./ Mobile Hamburger Button -->

                </div>
            </div>
        </div>
    </nav>
    <!-- /Brand-bar -->

    <!-- site-navigation -->
    <nav class="flex xl:hidden h-screen sm:h-auto" id="main-navigation" role="navigation">
      content here hidden menu on mobile
    </nav>
		<!-- /site-navigation -->

	</header><!-- #masthead -->

	<main id="content" role="main">
    <?php
        if (!is_404() && !is_home() && !is_front_page()) {
            get_template_part('template-parts/breadcrumbs');
        }
