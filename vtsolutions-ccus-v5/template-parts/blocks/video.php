<?php
if (!isset($block)) {
    $block = null;
}
$video_title = get_flexible_content_field('flexible_content_video_title', $block);
$video_id = get_flexible_content_field('flexible_content_youtube_video_id', $block);
$video_description = get_flexible_content_field('flexible_content_video_description', $block);

$rand_id = rand(0, 99);
?>

<div class="featured-video">
    <div class="container wide-container">
        <div class="row">
            <div class="col-md-5">
                <!--/Inline Styles for responsive iframe, move to css file and apply to iframe resource-->
                <div class="iframe-container" style="position:relative;height:0;padding-bottom:56.25%">
                    <iframe src="https://www.youtube.com/embed/<?php echo $video_id; ?>?rel=0" width="100%" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" class="responsive-iframe" title="<?php echo $video_title; ?>" allowfullscreen></iframe>

                    <?php if (get_flexible_content_field('flexible_content_video_video_transcript', $block)) : ?>
                        <div class="transcriptLinkContainer text-left">
                            <a href="#grow-<?php echo $rand_id; ?>" class="btn-passive btn more-button" role="button" aria-expanded="false" aria-controls="grow-<?php echo $rand_id; ?>"><?php _e('View Transcript', 'cc-microsites'); ?></a>
                        </div>
                    <?php endif; ?>

                    <?php if (get_flexible_content_field('fv_activate_schema', $block)) :
                        $video_title = get_flexible_content_field('flexible_content_video_title', $block);
                        $video_transcript = get_flexible_content_field('flexible_content_video_video_transcript', $block);

                        $video_transcript = strip_tags($video_transcript);

                        $video_description = '';
                        $video_upload_date = '';
                        $video_family_friendly = '';
                        $video_duration = '';

                            // vars
                        $video_description = get_flexible_content_field('flexible_content_video_description', $block);
                        $video_upload_date = get_flexible_content_field('fv_video_upload_date', $block);
                        $video_family_friendly = get_flexible_content_field('fv_video_family_friendly', $block);

                        $video_duration = get_flexible_content_field('fv_video_duration', $block);
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
                            "contentUrl": "https://www.youtube.com/v/<?php echo $video_id; ?>",
                            "embedUrl": "https://www.youtube.com/embed/<?php echo $video_id; ?>",
                            "thumbnailUrl": "https://i.ytimg.com/vi/<?php echo $video_id; ?>/maxresdefault.jpg",
                            "isFamilyFriendly": "<?php echo $video_family_friendly; ?>"
                        }
                        </script>

                    <?php endif; ?>

                </div>
            </div>
            <div class="col-md-7">
                <?= $video_title ? '<h2>' . $video_title .'</h2>' : '' ?>
                <?= $video_description ? $video_description : '' ?>
            </div>
        </div>

        <?php if (get_flexible_content_field('flexible_content_video_video_transcript', $block)) : ?>
            <div id='grow-<?php echo $rand_id; ?>' class="hidden-transcript" aria-expanded="false">
                <div class='transcriptWrapper'>
                    <!--Start Transcript Code Here-->
                    <div><?php the_flexible_content_field('flexible_content_video_video_transcript', $block); ?></div>
                    <!--End Transcript Code-->
                </div>
            </div>
        <?php endif; ?>

    </div>
</div>
