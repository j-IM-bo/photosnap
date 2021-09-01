import { gsap, Power1, Power2, Power3, Power4, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initAbout() {
    const animateFrom = (elem, direction) => {
        direction = direction || 1;
        let x = 0,
            y = direction * 100;

        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";

        gsap.fromTo(
            elem,
            { x: x, y: y, autoAlpha: 0 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Power4,
                overwrite: "auto"
            }
        );
    };

    const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
    };

    gsap.utils.toArray(".reveal").forEach((elem) => {
        hide(elem);

        ScrollTrigger.create({
            trigger: elem,
            onEnter: () => {
                animateFrom(elem);
            },
            onEnterBack: () => {
                animateFrom(elem, -1);
            },
            onLeave: () => {
                hide(elem);
            }
        });
    });
}
