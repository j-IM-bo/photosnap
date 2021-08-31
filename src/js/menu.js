import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initMenu() {
    const body = document.getElementById("js-body"),
        overlay = document.querySelector(".js-menu-overlay"),
        menuButton = document.getElementById("js-menu-button"),
        menu = document.getElementById("js-menu"),
        menuLink = document.querySelectorAll(".menu__link"),
        menuCta = document.querySelector(".menu--button"),
        menuIsOpenClass = "menu-is-open",
        stopScrollingClass = "stop-scrolling";

    let isActive = false;

    menuButton.addEventListener("click", (e) => {
        e.preventDefault;

        isActive = !isActive;

        if (isActive) {
            body.classList.add(stopScrollingClass);
            overlay.classList.add(menuIsOpenClass);
            menuButton.classList.add(menuIsOpenClass);
            menu.classList.add(menuIsOpenClass);
            gsap.to(menuLink, {
                duration: 0.5,
                y: 0,
                stagger: 0.1,
                ease: Power4.easeInOut
            });
            menuCta.classList.add(menuIsOpenClass);
        } else {
            body.classList.remove(stopScrollingClass);
            overlay.classList.remove(menuIsOpenClass);
            menuButton.classList.remove(menuIsOpenClass);
            menu.classList.remove(menuIsOpenClass);
            gsap.to(menuLink, { y: 105, stagger: 0.1 });
            menuCta.classList.remove(menuIsOpenClass);
        }
    });
}
