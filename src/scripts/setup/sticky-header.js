import Headroom from "headroom.js";

const StickyHeader = {
    init() {
        const headroom = new Headroom(document.querySelector('.js-site-header'));        
        headroom.init();
    },
};

export default StickyHeader;
