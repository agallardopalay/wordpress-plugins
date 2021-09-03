<div class="mx-auto my-5">
    <div class="font-semibold">Table of Contents</div>
    <nav class="flex flex-wrap w-full justify-center border-t border-b border-gray-300 py-5">
        <?php
        // Loop through rows.
        while( have_rows('table_of_content') ) : the_row();
            // Load sub fields values.
            $icon = get_sub_field('item_icon');
            $label = get_sub_field('item_lable');
            $target = get_sub_field('item_section_id');
            ?>
            <li class="table-nav-item">
                <a class="flex text-secondary hover:text-gray-600 hover:no-underline" href="#<?=$target?>" title="Go to <?=$label?>">
                    <?php
                    if($icon):
                        get_template_part('template-parts/svg/fa/'.$icon);
                    endif;
                    echo "<span class='".($icon ? 'pl-2' : '')."'>".$label."</span>";
                    ?>
                </a>
            </li>
        <?php endwhile; ?>
    </nav>
</div>
