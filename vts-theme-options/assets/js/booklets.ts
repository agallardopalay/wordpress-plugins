/// <reference path="jquery.d.ts" />

jQuery(document).ready(function($)
{
    var expanded = false;

    var $btnShowMore = $('.meet-the-team__show-more');

    var $container = $('.meet-the-team__top__right');

    var $containerContent = $('.meet-the-team__top__right__content');

    $btnShowMore.on('click', function(e)
    {
        e.preventDefault();

        expanded = true;

        $('.meet-the-team__top').removeClass('meet-the-team__top--less');
    });

    function onResize()
    {
        if(expanded) return;

        $btnShowMore.toggleClass('hidden', $containerContent.height() < $container.height());
    }

    onResize();

    $(window).on('resize', onResize);
});