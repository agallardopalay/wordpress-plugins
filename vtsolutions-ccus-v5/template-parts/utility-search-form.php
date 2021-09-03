<?php
global $ccus_str;

$term_search = "";
if (isset($_POST['q'])):
    $term_search = strip_tags(esc_attr($_POST['q']));
    $term_search = preg_replace('/[^A-Za-z0-9\-]/', ' ', $term_search);
    $term_search = sanitize_text_field($term_search);
endif;
?>

<form class="search" id="main_search_form" role="search" method="post" action="<?=$ccus_str['search_url'];?>">
    <label class="sr-only" for="searchfield">Search Keyword</label>
    <input id="searchfield" type="search" class="search__input" placeholder="Seach..." name="q" value="<?=$term_search;?>" aria-label="Search Input">
    <button class="search__button" aria-label="search button">
      <svg class="w-5 h-5 text-gray-800 duration-200 fill-current hover:text-ccusBlue focus:text-ccusBlue pb-0.5" data-icon="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" title="search">
        <path fill="currentColor" d="M508.5 481.6l-129-129a11.9 11.9 0 00-8.5-3.5h-10.3a208 208 0 10-11.6 11.7V371c0 3.2 1.3 6.2 3.5 8.5l129 129a12 12 0 0017 0l9.9-9.9a12 12 0 000-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path>
      </svg>
    </button>

    <div id="search-spinner" class="hidden absolute text-VTDarkBlue top-1/4 left-1/2">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-VTDarkBlue inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0A12 12 0 000 12h4zm2 5.3A8 8 0 014 12H0c0 3 1.1 5.8 3 8l3-2.7z"/>
        </svg> Processing...
    </div>
</form>