import Headroom from 'headroom.js';

const StickyHeader = {
    init() {
        this.$body = $('body');
        const obj = this;

        const headroom = new Headroom(document.querySelector('.js-site-header'),
        {
            offset : 100,
            tolerance : {
                up : 5,
                down : 0,
            },
            onPin : function() {
                obj.$body.addClass('headroom-is-pinned');
            },
            onUnpin : function() {
                obj.$body.removeClass('headroom-is-pinned');
            },
        });        
        headroom.init();

        this.setPlacement();
        $(window).on('resize', () => {
            this.setPlacement();
        });
    },
    setPlacement() {
        const siteHeaderHeight = $('.js-site-header').outerHeight();
        this.$body.css('padding-top', siteHeaderHeight + 'px');
        const socialPaneOffset = siteHeaderHeight + 20;
        $( `<style type="text/css">.headroom-is-pinned .social-share-pane { top: ${socialPaneOffset}px; }</style>` ).appendTo('head')
    },
};

export default StickyHeader;
