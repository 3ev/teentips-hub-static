import Headroom from "headroom.js";

const StickyHeader = {
    init() {
        const headroom = new Headroom(document.querySelector('.js-site-header'));        
        headroom.init();
    },
};

export default StickyHeader;

var headroom = new Headroom(
    document.querySelector('.site-header'),
    {
        // vertical offset in px before element is first unpinned
        offset : 300,
        // or you can specify tolerance individually for up/down scroll
        tolerance : {
            up : 5,
            down : 0,
        },
    }
);

// initialise
headroom.init();
