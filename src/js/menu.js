import { gsap, Power1, Power2, Power3, Power4 } from "gsap";

export function initMenu() {
    const menuButton = document.getElementById("js-menu-button"),
        menu = document.getElementById("js-menu"),
        menuDivider = document.querySelector(".menu__divider"),
        menuLink = document.querySelectorAll(".menu__link"),
        menuCta = document.querySelector(".menu--button"),
        menuIsOpenClass = "menu-is-open";

    let isActive = false;

    menuButton.addEventListener("click", (e) => {
        e.preventDefault;

        isActive = !isActive;

        if (isActive) {
            menuButton.classList.add(menuIsOpenClass);
            menu.classList.add(menuIsOpenClass);
            gsap.to(menuLink, {
                duration: 0.5,
                y: 0,
                stagger: 0.1,
                ease: Power4.easeInOut
            });
            menuDivider.classList.add(menuIsOpenClass);
            menuCta.classList.add(menuIsOpenClass);
        } else {
            menuButton.classList.remove(menuIsOpenClass);
            menu.classList.remove(menuIsOpenClass);
            gsap.to(menuLink, { y: 105, stagger: 0.1 });
            menuDivider.classList.remove(menuIsOpenClass);
            menuCta.classList.remove(menuIsOpenClass);
        }
    });
}
