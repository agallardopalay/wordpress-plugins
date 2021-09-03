<?php
/**
 * Initializing ccus global variables
 */
function init_global_vars() {
    global $ccus_str;
    $ccus_str = get_lang_object();

    global $countryCode;
    $countryCode = "us";

    global $home_url;
    $home_url = esc_url(home_url('/'));

    global $site_url;
    $site_url = get_site_url();

    wp_cache_set('has_lead_form', false);
    wp_cache_set('add_ate_form', false);
}
add_action('init', 'init_global_vars');


/**
 * The Static Content for ccus theme
 *
 * Defining messages and variable's value to all the theme static strings
 * Way of use: $ccus_str['tsa_siteid'];
 * @return array[]
 */
function get_lang_object() {

    $home_url = esc_url(home_url('/'));

    return array(
        // MOBILE VALUES
        'partnerid_mobile' => '98010',
        'default_telephone_mobile' => '(844) 222-0924',

        //ALL OTHER REGIONAL VALUES
        'regVar' => 'en-us',
        'gtm' => 'GTM-P4SJV8W', // CALLS NEW GTM UTC GTM-NH78V45
        //'gtmUnivCont' => 'GTM-NH78V45',

        'partnerid' => '98009',
        'pidSwitchLang' => '97654',
        'default_telephone' => '(844) 276-1544',
        'facebook_link' => 'https://www.facebook.com/consolidatedcredit',
        'twitter_link' => 'https://twitter.com/consolidatedus',
        'youtube_link' => 'https://www.youtube.com/consolidatedcreditcs',
        'linkedin_link' => 'https://www.linkedin.com/company/consolidated-credit/',
        'pinterest_link' => 'https://www.pinterest.com/consolidatedcs/',
        'whatsapp_link' => '',
        'google_plus_link' => 'https://plus.google.com/u/0/+ConsolidatedCreditCS',
        'instagram_link' => 'https://www.instagram.com/consolidatedcreditus/',
        'trustpilot_link' => $home_url . 'reviews/',
        'tsa_siteid' => '2045',
        'search_url' => $home_url . 'search/',

        //HOME PAGE LINKS
        'debt_relief_url' => $home_url . 'credit-counselling/',
        'in_community_url' => $home_url . 'about-us/community-outreach/',
        'financial_wellness_url' => 'https://kofetime.ca/',
        'financial_news_url' => $home_url . 'financial-news/',
        'main-menu' => array(
            'Find Debt Relief' => array(
                'href' => $home_url . 'credit-card-debt-relief/',
            ),
            'Credit Smart' => array(
                'href' => $home_url . 'how-does-credit-work/',
            ),
            'Personal Finance' => array(
                'href' => $home_url . 'personal-finance-help/',
            ),
            'Housing Counseling' => array(
                'href' => $home_url . 'housing/',
            ),
            'Resource Center' => array(
                'href' => $home_url . 'financial-education/',
            ),
            'Who We Are' => array(
                'href' => $home_url . 'about-us/',
            ),
        ),
        'credibility-logos' => array(
            'caccs' => array(
                'class-width'  => 'w-20',
                'aria-label'   => 'Open popup window about Canadian Association of Credit Counselling Services (CACCS)',
                'aria-content' => 'We are a proud member of the Canadian Association of Credit Counselling Services (CACCS), the national voice for not-for-profit credit counselling services. As a CACCS member, you can trust that our trained credit counsellors strive to provide the best in professional, independent and unbiased personal finance services. We’ve helped hundreds of thousands of Canadians find relief from debt. Call us today to find out if we can help you.',
            ),
            'toronto' => array(
                'class-width'  => 'w-40',
                'aria-label'   => 'Open popup window about the Toronto Board of Trade.',
                'aria-content' => 'Consolidated Credit Counselling Services of Canada is proud to be a member and support the Toronto Board of Trade. Founded in 1845, the Toronto Board of Trade is Canada’s largest local chamber of commerce. We share their vision, passion and commitment to serving the community and to foster economic and social welfare of the City of Toronto. Call us today and see what we can do for you.',
            ),
            'cca' => array(
                'class-width'  => 'w-16',
                'aria-label'   => 'Open popup window about the accreditation by the Canadian Centre for Accreditation',
                'aria-content' => 'Consolidated Credit Counselling Services of Canada is accredited by the Canadian Centre for Accreditation – a national organization responsible for ensuring excellence in community service. We meet CCA’s high standards of service and accountability. Give us a call today and find out what we can do for you. <a href="https://www.canadiancentreforaccreditation.ca/" target="_blank" aria-label="Open canadiancentreforaccreditation.ca website in a new window">Click here to learn more.</a>',
            ),
            'oaccs' => array(
                'class-width'  => 'w-20',
                'aria-label'   => 'Open popup window about: We are proud members of the Ontario Association of Credit Counselling Services (OACCS).',
                'aria-content' => 'We are proud members of the Ontario Association of Credit Counselling Services (OACCS). OACCS sets the standard of required expertise for the financial counselling industry and the only organization to offer the exclusive professional designation of Accredited Financial Counsellor Canada (AFCC). With over 500,000 people helped, you can be assured that we can find the right solution for you. Call us today.',
            ),
            'bbb' => array(
                'class-width'  => 'w-20',
                'aria-label'   => 'Open popup window about our A+ rating with the Better Business Bureau',
                'aria-content' => 'Time tested and customer trusted. Consolidated Credit Counselling Services has been a BBB Accredited Business since 2008 and has a current A+ rating. Call us today and see what we can do for you. <a href="https://www.bbb.org/ca/on/north-york/profile/credit-and-debt-counseling/consolidated-credit-counseling-services-of-canada-inc-0107-1176071" target="_blank" aria-label="Open our Better Business Burerau profile in a new window">View the Consolidatedcredit.ca BBB review status.</a>',
            ),
            'mbt' => array(
                'class-width'  => 'w-20',
                'aria-label'   => 'Open popup window about: Markham Board of Trade',
                'aria-content' => 'Markham Board of Trade (MBT) is the premier business association serving the local business community, representing over 700 members, from large corporations to small entrepreneurial ventures. For over 37 years, MBT has helped to enhance the success of its members by offering exclusive programs and services to assist them in growing their networks and their businesses. MBT is a non-profit organization which has been established to promote community, commercial and industrial growth, and to advocate on behalf of businesses with all levels of government.',
            ),
        ),
        'footer-menu' => array(
            'Managing Credit' => array(
                'slug'=> 'managing_credit',
                'items' => array(
                  'Credit Score' => $home_url . 'credit-score/',
                  'Credit Report' => $home_url . 'credit-report/',
                  'Budgeting' => $home_url . 'budgeting/',
                  'Debt Settlement' => $home_url . 'debt-settlement/',
                  'Glossary'=> $home_url . 'glossary/',
                )
            ),
            'Resources' => array(
                'slug'=> 'resources',
                'items' => array(
                  'Financial News' => $home_url . 'financial-news/',
                  'Ask the Experts' => $home_url . 'ask-the-experts/',
                  'Debt Stories' => $home_url . 'debt-stories/',
                  'Calculators' => $home_url . 'calculators/',
                  'Videos' => $home_url . 'videos/',
                )
            ),
            'Locations' => array(
                'slug'=> 'locations',
                'items' => array(
                  'British Columbia' => $home_url . 'locations/british-columbia/',
                  'Alberta' => $home_url . 'locations/alberta/',
                  'Ontario' => $home_url . 'locations/ontario/',
                  'Quebec' => $home_url . 'locations/quebec/',
                  'All locations...' => $home_url . 'locations/',
                )
            ),
            'Our Company' => array(
                'slug'=> 'our_company',
                'target' => '_blank',
                'items' => array(
                  'About Us' => $home_url . 'about-us/',
                  'Contact Us' => $home_url . 'contact-us/',
                  'Scholarship' => $home_url . 'scholarship-program/',
                  'Member Login' => 'https://members.consolidatedcredit.ca/',
                )
            ),
        ),
        'footer-links' => array(
            'Community Outreach' => $home_url . 'about-us/community-outreach/',
            'Privacy Policy' => $home_url . 'privacy-statement/',
            'Accessibility' => $home_url . 'accessibility/',
            'GDPR Compliance' => $home_url . 'gdpr/',
            //'Sitemap' => $home_url . 'sitemap/',
        )
      //END OF THE ARRAY
    );

}
