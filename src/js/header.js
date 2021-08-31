import { gsap, Power1, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function initHeader() {
    const header = document.getElementById("js-header");

    const showHeader = gsap
        .from(header, {
            yPercent: -100,
            paused: true,
            duration: 0.2
        })
        .progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showHeader.play() : showHeader.reverse();
        }
    });
}
