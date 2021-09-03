<div class="flex items-center">
   <?php
      $heading_icon = get_field('heading_icon');
      $heading_type = get_field('heading_type');
      $heading_title = get_field('heading_title');
   ?>
   <?php if($heading_icon): ?>
      <span class="heading-icon-wrapper">
         <?php get_template_part('template-parts/svg/fa/'.$heading_icon); ?>
      </span>
   <?php endif; ?>
   <?php
      echo "<".$heading_type." class='ml-3 | VT-Heading'>".$heading_title."</".$heading_type.">";
   ?>
</div>