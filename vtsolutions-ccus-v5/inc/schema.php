<?php
  $postid = get_the_ID();
?>

<?php
/**
* Organization Schema
**/
if (is_front_page()): ?>
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "@id": "https://largohousing.org/#organization",
      "name": "Largo Housing Hub",
      "url": "https://largohousing.org/",
      "logo": "https://largohousing.org/logo.png",
      "potentialAction": {
          "@type": "SearchAction",
          "target": "https://largohousing.org/search/?q={search_term_string}",
          "query-input": "required name=search_term_string"
      },
      "sameAs": [
          "https://www.facebook.com/LargoHousing.org/",
      ]
    }
  </script>
<?php endif; ?>

<?php
/**
 * ContactUs Schema
**/
if ($postid == 25248): ?>
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "ContactPage",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.consolidatedcreditcanada.ca/contact-us/"
    },
    "url": "https://www.consolidatedcreditcanada.ca/contact-us/",
    "headline": "Contact Us",
    "publisher": {
        "@type": "Organization",
        "@id": "https://www.consolidatedcreditcanada.ca/#organization",
        "name": "Consolidated Credit",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.consolidatedcreditcanada.ca/logo.png",
            "width": 701,
            "height": 141
        }
    }
  }
  </script>
<?php endif; ?>

<?php
/**
 * AboutUs Schema
**/
if ($postid == 9):
  $metadescription = get_post_meta(get_the_ID(), '_yoast_wpseo_metadesc', true);

  if ($metadescription == ''):
    $metadescription = wp_strip_all_tags(get_the_excerpt());
  endif;
?>

  <script type="application/ld+json">
  {
	  "@context": "http://schema.org",
	  "@type":"AboutPage",
	  "mainEntityOfPage": {
		  "@type": "WebPage",
		  "@id": "https://www.consolidatedcreditcanada/about-us/"
		},
	  "url":"https://www.consolidatedcreditcanada/about-us/",
	  "headline":"About Consolidated Credit Canada",
	  "publisher": {
		  "@type":"Organization",
		  "@id":"https://www.consolidatedcreditcanada/#organization",
		  "name":"Consolidated Credit",
		  "logo": {
			  "@type": "ImageObject",
			  "url": "https://www.consolidatedcreditcanada/logo.png", "width": 701, "height": 141
			}
		},
	  "description":"<?php echo str_replace(array("'", "\"", "&quot;"), "", htmlspecialchars($metadescription)); ?>"
	}
  </script>

 <?php endif;