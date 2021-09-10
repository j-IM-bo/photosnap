//css
import "./sass/style.scss";

//js
// import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Flickity from "flickity";
// import { debounce } from "./js/utilities/debounce";
// import { viewportSize } from "./js/utilities/viewportSize";

// Global variables
const pricingToggle = document.getElementById("js-pricing-toggle");

// nav/menu
import { initHeader } from "./js/header";
import { initMenu } from "./js/menu";

// homepage
import { initAbout } from "./js/hp/about";

// pricing page
import { initPricingToggle } from "./js/pp/pricing-toggle";

function init() {
    initHeader();
    initMenu();
    initAbout();

    if (typeof pricingToggle != "undefined" && pricingToggle != null) {
        initPricingToggle();
    }
}

window.addEventListener("load", function () {
    init();
});
