// import external dependencies
import 'jquery';
import {domReady} from '@roots/sage/client';

// Import components
import Carousel from './setup/carousel';
import StickyHeader from './setup/sticky-header';
import NavOver from './setup/nav-over';


/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  Carousel.init();
  StickyHeader.init();
  NavOver.init();

};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
// import.meta.webpackHot?.accept(main);
