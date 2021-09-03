<?php
  global $site_url;
  global $ccus_str;
?>

</main>


<footer class="">

    <!-- Credibility Logos Section --->
    <div class="container flex flex-wrap md:flex-no-wrap justify-center items-center py-3">
        <a href='#' aria-label='Open a Credibility modal to see MCAfee description and site protection' role='button'
           class='w-24 flex-shrink-0 transition-all transform hover:scale-125 m-4 md:mx-7 lg:mx-12 xl:mx-7'
        >
            <img src="<?= get_template_directory_uri() . '/public/svg/mcafee-logo.svg' ?>" alt="Open a Credibility modal to see MCAfee description and site protection" loading="lazy" width="100%" height="40"/>
        </a>

        <?php
        $credibility_logos = $ccus_str['credibility-logos'];

        foreach ($credibility_logos as $key => $logo):
            echo "<a id='" . $key . "-logo'
                    href='#dynamic-modal'
                    aria-label='" . $logo['aria-label'] . "'
                    aria-content='" . $logo['aria-content'] . "'
                    aria-identifier='" . $key . "'
                    aria-width='" . $logo['class-width'] . "'
                    role='button'
                    class='activate-modal | " . $logo['class-width'] . " flex-shrink-0 transition-all transform hover:scale-125 m-4 md:mx-7 lg:mx-12 xl:mx-7'
                  >";
            ?><img id="<?= $key ?>" src="<?= get_template_directory_uri() . '/public/svg/' . $key . '-logo.svg' ?>"
                   alt="<?= $logo['aria-label'] ?>" loading="lazy" width="100%" height="100%"/><?php
            echo "</a>";
        endforeach;
        ?>
    </div>

    <!-- Modal HTML -->
    <div id="credibility-modal" class="modal">
        <div class="modal__content" id="modal__content">
            <div id="svg-container"></div>
            <a id="close-modal" title="<?php _e("Close the Modal", "cccsca") ?>"
               aria-label="<?php _e('Close Modal', 'cccsca'); ?>">&times;</a>

            <div id="credModalBody" class="modal-body">
                <div id="theContent"></div>

                <div id="modal-phone-wrapper" class="mb-2">
                    <?php _e("Call Us:", "cccsca") ?>
                    <a class="tracking-phone-click no-animation show" href="tel:<?= $ccus_str['default_telephone'] ?>">
                      <span class="tracking-phone | text-VTDarkBlue text-2xl font-bold tracking-wide">
                        <?php echo $ccus_str['default_telephone']; ?>
                      </span>
                    </a>
                </div>

                <a id="modal-cta"
                   href="#LeadForm"
                   data-dismiss="modal"
                   class="btn btn-ccusOrange modal-trigger activate-modal"
                   data-modal-id="lead-form-template"
                   data-js="true"><?php _e("Free Debt Consultation", "cccsca") ?></a>
            </div>
        </div>
    </div><!-- #/credibility-modal -->
    <!-- ./Credibility Logos Section -->


</footer>

</div><!-- Page Wrapper -->

<?php
do_action('ccus_before_wp_footer');
wp_footer();
do_action('ccus_after_wp_footer');
?>

</body>
</html>
