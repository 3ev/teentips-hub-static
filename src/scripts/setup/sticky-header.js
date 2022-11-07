import Headroom from 'headroom.js';

const StickyHeader = {
    init() {
        const headroom = new Headroom(document.querySelector('.js-site-header'),
        {
            offset : 100,
            tolerance : {
                up : 5,
                down : 0,
            },
        });        
        headroom.init();

        this.setPlacement();
        window.addEventListener('resize', this.setPlacement);
    },
    setPlacement() {
        const siteHeaderHeight = $('.js-site-header').css('height');
        $('body').css('padding-top', siteHeaderHeight);
    },
};

export default StickyHeader;
