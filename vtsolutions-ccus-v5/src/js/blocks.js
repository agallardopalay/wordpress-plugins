import SmoothScroll from 'smooth-scroll';

function InitTableContentBlock() {
    const scroll = new SmoothScroll('nav .table-nav-item a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
        offset: function (anchor, toggle) {
            return 70;
        },
    });
}

export const initBlocksScripts =  function() {
    InitTableContentBlock();
};
