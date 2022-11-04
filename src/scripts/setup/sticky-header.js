import Headroom from "headroom.js";

const StickyHeader = {
    init() {
        const headroom = new Headroom(document.querySelector('.js-site-header'));        
        headroom.init();

        const siteHeaderHeight = $('.js-site-header').css('height');
        $('body').css('padding-top', siteHeaderHeight);
    },
};

export default StickyHeader;
