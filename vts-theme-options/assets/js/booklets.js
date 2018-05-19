/// <reference path="jquery.d.ts" />
jQuery(document).ready(function ($) {
    var expanded = false;
    var $btnShowMore = $('.booklets__show-more');
    var $container = $('.booklets__top__right');
    var $containerContent = $('.booklets__top__right__content');
    $btnShowMore.on('click', function (e) {
        e.preventDefault();
        expanded = true;
        $('.booklets__top').removeClass('booklets__top--less');
    });
    function onResize() {
        if (expanded)
            return;
        $btnShowMore.toggleClass('hidden', $containerContent.height() < $container.height());
    }
    onResize();
    $(window).on('resize', onResize);
});
//# sourceMappingURL=booklets.js.map