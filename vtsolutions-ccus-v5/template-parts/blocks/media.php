<?php
if (!isset($block)) {
    $block = null;
}
$media_type = get_field('flexible_content_media_type');

if ($media_type == 'image') {
    $single_image = get_field('flexible_content_image');
    $link_image = get_field('flexible_content_image_link_image');
    $link_url = get_field('flexible_content_image_link_image_url');
    $link_target_blank = get_field('flexible_content_image_link_blank');
    if ($single_image) {
        if ($link_image) { ?><a href="<?php echo $link_url; ?>" <?php if ($link_target_blank): echo "target='_blank'"; endif; ?> ><?php } ?>
        <img src="<?php echo $single_image['url']; ?>" alt="<?php echo $single_image['alt']; ?>"
             class="mx-auto d-block"/>
        <?php if ($link_image) { ?></a><?php }
    }

} elseif ($media_type == 'slider') {

    $rand_id = rand(0, 99);

    $sliderTrasnscript = get_field('flexible_content_slider_transition');
    if ($sliderTrasnscript == 'slide') {
        $sliderTrasnscript = '';
    }

    $cus_id = "content_carousel_" . $rand_id;
    if (get_field('flexible_content_slider_transition')) {
        $cus_id = get_field('flexible_content_slider_id');
    }

    $sliderInterval = get_field('flexible_content_slider_interval');
    $sliderPause = get_field('flexible_content_slider_pause_on_hover');
    if ($sliderPause) {
        $sliderPause = "hover";
    } else {
        $sliderPause = "false";
    }

    if (have_rows('flexible_content_slider')): ?>

        <div id="<?php echo $cus_id; ?>" class="carousel media-swiper-container swiper-container <?php echo $sliderTrasnscript; ?>"
             data-ride="carousel" data-interval="<?php echo $sliderInterval; ?>" data-pause="<?php echo $sliderPause; ?>">
            <div class="swiper-wrapper carousel-inner" role="listbox">
                <?php $active = 0; ?>
                <?php while (have_rows('flexible_content_slider')) : the_row(); ?>

                    <div class="swiper-slide carousel-item flex flex-col">
                        <?php $single_slide = get_sub_field('flexible_content_slider_slide'); ?>
                        <img src="<?php echo $single_slide['url']; ?>" alt="<?php echo $single_slide['alt']; ?>"
                             class="mx-auto d-block"/>
                        <div class="carousel-caption">
                            <?php the_sub_field('flexible_content_slider_caption'); ?>
                        </div>
                    </div>

                    <?php $active++; ?>
                <?php endwhile; ?>

            </div>

            <ol class="swiper-pagination">
                <?php for ($i = 0; $i < $active; $i++) { ?>
                    <li data-target="#<?php echo $cus_id; ?>" data-slide-to="<?php echo $i; ?>" class="<?php echo ($i == 0) ? 'active' : ''; ?>"></li>
                <?php } ?>
            </ol>

            <button class="swiper-button swiper-button-prev"></button>
            <button class="swiper-button swiper-button-next"></button>
        </div>

    <?php endif;

}
elseif ($media_type == 'youtube') {

    $rand_id = rand(0, 99);
    $video_transcript = get_field('flexible_content_youtube_video_transcript');
?>

    <div class="scalable scalable-16-9">
        <div class="scalable-content">
            <?php $video = get_field('flexible_content_youtube_id'); ?>
            <iframe src="https://www.youtube.com/embed/<?php echo $video; ?>?wmode=opaque&amp;rel=0&amp;showinfo=0"
                    frameborder="0" allowfullscreen="allowfullscreen"></iframe>

            <?php if (get_field('media_activate_schema')): ?>

                <?php
                $video_title = get_field('media_video_title');

                $video_transcript = strip_tags($video_transcript);

                $video_description = '';
                $video_upload_date = '';
                $video_family_friendly = '';
                $video_duration = '';

                // vars
                // PdDThHmMsS, where d, h, m, and s are digit sequences for the number of days, hours, minutes, and seconds, respectively
                $video_description = get_field('media_video_description');
                $video_upload_date = get_field('media_video_upload_date');
                $video_family_friendly = get_field('media_video_family_friendly');

                $video_duration = get_field('media_video_duration');
                $video_duration = explode(':', $video_duration);
                $video_duration_hour = (int)$video_duration[0];
                $hour_str = $video_duration_hour == 0 ? '' : $video_duration_hour.'H';
                $video_duration_min = (int)$video_duration[1];
                $min_str =  $video_duration_min == 0 ? '' : $video_duration_min.'M';
                $video_duration_seg = (int)$video_duration[2];
                $sec_str =  $video_duration_seg == 0 ? '' : $video_duration_seg.'S';

                $video_duration = 'PT'.$hour_str.''.$min_str.''.$sec_str;
                ?>

                <script type="application/ld+json">
                    {
                        "@context": "https://schema.org/",
                        "@type": "VideoObject",
                        "name": "<?php echo $video_title; ?>",
                        "description": "<?php echo $video_description; ?>",
                        "transcript": "<?php echo $video_transcript; ?>",
                        "uploadDate": "<?php echo $video_upload_date; ?>",
                        "duration": "<?php echo $video_duration; ?>",
                        "contentUrl": "https://www.youtube.com/v/<?php echo $video; ?>",
                        "embedUrl": "https://www.youtube.com/embed/<?php echo $video; ?>",
                        "thumbnailUrl": "https://i.ytimg.com/vi/<?php echo $video; ?>/maxresdefault.jpg",
                        "isFamilyFriendly": "<?php echo $video_family_friendly; ?>"
                    }

                </script>

            <?php endif; ?>

        </div>
    </div>

    <?php if (!empty($video_transcript)): ?>
        <button class="accordion-toggle | btn-secondary"  data-target="t-accordion">
            <?php _e('View Transcript', 'ccus')?>
        </button>
        <div class="overflow-hidden transition duration-500 ease-in-out max-h-0" data-id="t-accordion">
            <div class="bg-gray-100 p-5">
                <?php the_field('flexible_content_youtube_video_transcript');?>
            </div>
        </div>
    <?php endif;

}

elseif ($media_type == 'mfile') {

    if (get_field('flexible_content_mfile_file')): ?>

        <div class="featured-block">
            <div class="container">
                <div class="flex items-center flex-wrap">

                    <?php

                    $flexible_content_mfile_description = get_field('flexible_content_mfile_description');

                    $image = get_field('flexible_content_mfile_thumbnail');
                    $class = "col-sm-12";
                    if ($image):
                        $class = "col-xs-12 col-sm-10";
                        ?>
                        <div class="col-xs-12 col-sm-2 px-0 pb-4">
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"
                                 class="mx-auto d-block"/>
                        </div>
                    <?php endif; ?>


                    <div class="<?php echo $class; ?>">
                        <div class="flex items-center">
                            <div class="pb-4">
                                <?php echo $flexible_content_mfile_description; ?>
                            </div>
                            <div class="ml-auto px-0">
                                <?php
                                $mfile = get_field('flexible_content_mfile_file');
                                if ($mfile): ?>
                                    <div class="flex justify-end gap-6">
                                        <a href="<?php echo $mfile['url']; ?>" target="_blank"
                                           title="Open <?php echo $mfile['title']; ?>"featured-block
                                           class="btn btn-secondary whitespace-no-wrap"><?php _e('Open', 'cc-microsites'); ?></a>
                                        <a href="<?php echo $mfile['url']; ?>" target="_blank" download
                                           title="Download <?php echo $mfile['title']; ?>"
                                           class="btn btn-secondary whitespace-no-wrap"><?php _e('Download', 'cc-microsites'); ?></a>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    <?php
    endif;

}

?>

