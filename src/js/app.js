import sayHello from './lib/sayHello.js';

sayHello();

import FullPageScroll from './FullPageScroll';

const MyFullPage = new FullPageScroll({
    section: '.js-fullpage-section',
    nav: true,
    navPosition: 'left',
    navBox: '.js-fullpage-navigation',
    activePage: 1,
    controlPrev: '.js-prev',
    controlNext: '.js-next',
    scrollingSpeed: 500,
    animationTime: 1000
});

