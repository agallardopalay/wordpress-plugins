<?php

if (empty($formValues)) {
    return;
}

?>
<p style="font-family:Arial; font-size:14px;">The following information has been submitted from the <b>Ask The Expert</b> section of the website.</p>
<table style="border-collapse:collapse; font-family:Arial; font-size:14px;">
    <?php
        foreach ($formValues as $key => $formFieldValue) {
            ?><tr><td style="text-align:right; padding-right:7px;"><?= $key ?>:</td><td><?= $formFieldValue ?></td></tr><?php
        }
    ?>
</table>
