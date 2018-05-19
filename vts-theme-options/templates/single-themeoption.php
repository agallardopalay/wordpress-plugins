<?php include_once(dirname(__FILE__) . '/header.php'); ?>

    <div class="booklets">
        <div class="booklets__go-back">
            <a href="/booklets">&lt; BACK TO THE BOOKLETS</a>
        </div>

        <div class="booklets__top booklets__top--less">
            <div class="booklets__top__left">
                <div class="booklets__image-wrapper">
                    <div class="booklets__image"
                         style="background-image: url(<?= esc_attr(get_field('image')['url']) ?>)"></div>
                    <div class="booklets__image-shadow"></div>
                </div>
            </div>
            <div class="booklets__top__right">
                <div class="booklets__top__right__content">
                    <div class="booklets__info">
                        <h3><?= esc_html(get_field('first_name')) ?> <?= esc_html(get_field('last_name')) ?></h3>

                        <?php if (get_field('position')): ?>
                            <p class="booklets__position"><?= esc_html(get_field('position')) ?></p>
                        <?php endif; ?>

                        <div class="booklets__hr"></div>

                        <?php if (get_field('phone')): ?>
                            <div>P. <?= esc_html(get_field('phone')) ?></div>
                        <?php endif; ?>

                        <?php if (get_field('email')): ?>
                            <div class="booklets__email">
                                E. <a href="mailto:<?= esc_attr(get_field('email')) ?>">
                                    <?= esc_html(get_field('email')) ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="booklets__social-icons">
                            <?php if (get_field('social_facebook')): ?>
                                <a href="<?= esc_attr(get_field('social_facebook')) ?>" target="_blank">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            <?php endif; ?>


                            <?php if (get_field('social_linkedin')): ?>
                                <a href="<?= esc_attr(get_field('social_linkedin')) ?>" target="_blank">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            <?php endif; ?>


                            <?php if (get_field('social_twitter')): ?>
                                <a href="<?= esc_attr(get_field('social_twitter')) ?>" target="_blank">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            <?php endif; ?>


                            <?php if (get_field('social_instagram')): ?>
                                <a href="<?= esc_attr(get_field('social_instagram')) ?>" target="_blank">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="booklets__bio">
                        <?= (get_field('bio')) ?>
                    </div>
                </div>

                <a href="#" class="booklets__show-more hidden">READ MORE &gt;</a>
            </div>
        </div>

        <div class="clearfix"></div>

        <div class="booklets__bottom">
            <?php
            $facts = get_field('facts');

            if ($facts):

                $factCount = count($facts);

                $factHalf = ceil($factCount / 2);

                $factsLeft = array_slice($facts, 0, $factHalf);
                $factsRight = array_slice($facts, $factHalf);

                ?>
                <h3 class="booklets__facts_title">Interesting Facts</h3>
                <div class="booklets__facts clearfix">
                    <div class="booklets__facts__left">
                        <?php foreach ($factsLeft as $fact): ?>
                            <div class="booklets__fact">
                                <h3><?= esc_html($fact['question']) ?></h3>
                                <div><?= ($fact['answer']) ?></div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="booklets__facts__right">
                        <?php foreach ($factsRight as $fact): ?>
                            <div class="booklets__fact">
                                <h3><?= esc_html($fact['question']) ?></h3>
                                <div><?= ($fact['answer']) ?></div>
                            </div>
                        <?php endforeach; ?>
                    </div>

                    <div class="booklets__vr"></div>
                </div>
            <?php endif; ?>
        </div>
    </div>

<?php get_footer(); ?>