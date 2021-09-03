<?php

/**
 * @return string with the HTML to inject the phonenumber
 */
function vt_phonenumber_func() {
  return '<a class="tracking-phone-click" href="tel:7272545353"><span class="tracking-phone">(727) 254-5353</span></a>';
}
add_shortcode( 'PHONE_NUMBER', 'vt_phonenumber_func');