<?php
$post_id = get_the_ID();
$permalink = get_the_permalink( $post_id );
if ( ! $permalink ) {
    $permalink = '';
}
$post_title = get_the_title();
?>

    <div class="flex flex-col overflow-hidden rounded-md shadow-lg">
        <div class="relative flex-shrink-0 overflow-hidden">
            <a
                rel="external"
                href="<?php echo $permalink; ?>"
                class="related-news-image"
                title="<?php echo 'Go to this post: '.$post_title; ?>"
            >
                <img class="image-zoom-effect" src="<?php imageByID('medium', 'url', $post_id); ?>" alt="<?php echo 'Image showing this topic: '.$post_title; ?>" width="350" height="224">
            </a>
        </div>
        <div class="flex flex-col justify-between flex-1">
            <div class="relative flex flex-col justify-between flex-1 p-6 bg-white">

                <?php
                    $cats = get_the_category($post_id);
                    $count = 0;
                    if($cats) { ?>
                    <div class="absolute top-0 -mt-5 right-3">
                      <?php
                      foreach ( $cats as $cat ):

                        if($count > 3) {
                            break;
                        } else { ?>
                            <a class="card-tags | text-base font-medium text-white bg-ccusBlue hover:bg-VTOrange rounded-md border-2 border-white mr-3" href="<?php echo get_category_link($cat->cat_ID); ?>">
                                <?php echo $cat->name; ?>
                            </a>
                      <?php }

                      $count++;
                      endforeach;
                      ?>
                    </div>
                <?php } ?>

                <div class="mb-3">
                    <h3 class="mb-0">
                        <a
                            href="<?=$permalink?>"
                            class="block vt-regular-extra-font-size font-semibold leading-7 text-VTDarkBlue hover:text-VTBlueStrong"
                            title="<?php echo 'Go to this post: '.$post_title; ?>"
                        ><?=$post_title?></a>
                    </h3>

                    <?php if ( is_front_page()): ?>
                      <small class="text-gray-500">
                          Updated
                          <time datetime="<?=get_the_time('Y-m-d', $post_id); ?>"> <?=get_the_modified_date('M j, Y', $post_id);?></time>
                          <!-- /* Actualizado el
                          Last updated
                          Mis à jour le */ -->
                      </small>
                    <?php endif; ?>

                    <p class="mt-3 vt-normal-font-size text-gray-500 leading-6"><?= wp_trim_words(get_the_excerpt($post_id), 20) ?></p>
                </div>
                <div class="flex items-center flex-wrap justify-between">
                    <a
                        href="<?=$permalink?>"
                        class="text-VTDarkBlue transition-colors duration-200 hover:text-VTBlueStrong flex items-center md:mb-2 lg:mb-0"
                        title="<?php echo 'Go to this post: '.$post_title; ?>"
                    >
                        Read full article
                        <svg class="inline-block w-3 ml-1 mt-1" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" aria-hidden="true"></path></svg>
                    </a>

                    <small class="flex">
                      <svg class="w-4 h-4 mt-1 mr-1" aria-hidden="true" data-icon="stopwatch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M393.3 141.3l17.5-17.5a12 12 0 000-17l-5.7-5.7a12 12 0 00-17 0l-17.5 17.5a223.2 223.2 0 00-131.7-54.2V32h25a12 12 0 0012-12v-8a12 12 0 00-12-12h-80a12 12 0 00-12 12v8a12 12 0 0012 12h23v32.6a224 224 0 10186.4 76.7zM224 480a192 192 0 11-.2-383.8A192 192 0 01224 480zm4-128h-8a12 12 0 01-12-12V172a12 12 0 0112-12h8a12 12 0 0112 12v168a12 12 0 01-12 12z"/>
                      </svg>
                      <?=post_read_time($post_id)?>
                    </small>
                </div>
            </div>

            <?php if ( !is_front_page() && get_post_type($post_id) === 'post'): ?>
            <!-- Authority Info -->
              <div class="flex items-center py-5 px-6 bg-gray-100">
                  <?php $author_id = get_post_field( 'post_author', $post_id ); ?>
                  <div class="flex-shrink-0">
                      <?php
                        $author_name = get_the_author_meta('first_name', $author_id).' '.get_the_author_meta('last_name', $author_id);

                        if (get_field('author_picture', 'user_' . $author_id)):
                            $author_picture = get_field('author_picture', 'user_' . $author_id);
                            $author_picture = $author_picture['url'];
                        else:
                            $author_picture = get_template_directory_uri() . '/src/images/user-avatar.jpg';
                        endif;
                      ?>
                      <a href="<?=get_author_posts_url($author_id)?>">
                        <img
                          class="w-10 h-10 rounded-full"
                          content="<?=$author_picture;?>"
                          src="<?=$author_picture;?>"
                          alt="<?=$author_name?>"
                        />
                      </a>
                  </div>
                  <div class="ml-3">
                      <p class="text-sm font-medium leading-5 text-gray-900">
                        <a href="<?=get_author_posts_url($author_id)?>" class="hover:underline"><?=$author_name?></a>
                      </p>
                      <div class="text-xs leading-5 text-gray-600">
                        <time datetime="<?=get_the_time('Y-m-d', $post_id); ?>"> <?=get_the_modified_date('M j, Y', $post_id);?></time>
                      </div>
                  </div>
              </div>
            <?php endif; ?>

        </div>
    </div>

<?php

?>
