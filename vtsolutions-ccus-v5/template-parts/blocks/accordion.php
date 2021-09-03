<?php
global $block;
// Create id attribute allowing for custom "anchor" value.
$id = 'block-form-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

$hasSchema = get_field('enable_schema');
$schemaEntities = [];
?>

<div class="my-5" data-block-id="<?=$block['id']?>">
    <?php $c=0; while( have_rows('accordion') ) : the_row(); $c++; ?>
    <?php
        $question = get_sub_field('accordion_title');
        $answer = get_sub_field('accordion_content');

        if ($hasSchema) {
            array_push($schemaEntities, array(
                "@type" => "Question",
                "name" => strip_tags($question),
                "acceptedAnswer" => array(
                    "@type" => "Answer",
                    "text" => strip_tags($answer)
                )
            ));
        }
    ?>
    <div class="relative shadow-lg mb-5">
        <button class="accordion-toggle | vt-large-font-size text-gray-800 text-left bg-gray-100 font-semibold hover:underline focus:outline-none w-full py-3 pl-5 pr-7" data-target="t-accordion-<?=$c?>">
            <?= $question ?>
        </button>
        <div class="overflow-hidden transition duration-500 ease-in-out max-h-0" data-id="t-accordion-<?=$c?>">
            <div class="p-5">
                <?= $answer ?>
            </div>
        </div>
        <span class="absolute w-5 top-5 right-5 text-gray-800 pointer-events-none">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-square-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M215.5 348.5L92.7 225.7c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l91.7 91.7 91.7-91.7c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L232.5 348.5c-4.7 4.7-12.3 4.7-17 0zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
        </span>
    </div>
    <?php endwhile; ?>
</div>
<?php if (get_field('enable_schema')): ?>
<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "FAQPage", "name": "FAQ", "mainEntity": <?= json_encode($schemaEntities) ?> }
</script>
<?php endif; ?>
