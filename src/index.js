//css
import "./sass/style.scss";

//js
// import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Flickity from "flickity";
// import { debounce } from "./js/utilities/debounce";
import { viewportSize } from "./js/utilities/viewportSize";

// nav/menu
import { initHeader } from "./js/header";
import { initMenu } from "./js/menu";

// homepage
import { initAbout } from "./js/hp/about";

function init() {
    viewportSize();

    initHeader();
    initMenu();

    initAbout();
}

window.addEventListener("load", function () {
    init();
});
