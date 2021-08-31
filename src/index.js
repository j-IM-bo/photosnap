//css
import "./sass/style.scss";

//js
// import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Flickity from "flickity";
// import { debounce } from "./js/utilities/debounce";
import { viewportSize } from "./js/utilities/viewportSize";

import { initHeader } from "./js/header";
import { initMenu } from "./js/menu";

function init() {
    viewportSize();

    initHeader();
    initMenu();
}

window.addEventListener("load", function () {
    init();
});
