// import external dependencies
import 'jquery';
import {domReady} from '@roots/sage/client';
import Collapse from 'bootstrap/js/dist/collapse' // eslint-disable-line no-unused-vars

// Import components
import Carousel from './setup/carousel';
import MultiCarousel from './setup/multi-carousel';
import StickyHeader from './setup/sticky-header';
import NavOver from './setup/nav-over';
import NoJS from './setup/no';
import MobileNav from './setup/mobile-navigation';
import TopicNav from './setup/topic-navigation';

/**
 * app.main
 */
const main = async (err) => {
    if (err) {
        // handle hmr errors
        console.error(err);
    }

    NoJS.init();
    Carousel.init();
    MultiCarousel.init();
    StickyHeader.init();
    NavOver.init();
    TopicNav.init();

    $('.js-mobile-navigation__trigger').each(function() {
        const $html = $('html, body');
        const $trigger = $(this);
        new MobileNav($trigger, $html);
    });
    
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
// import.meta.webpackHot?.accept(main);
