export function initPricingToggle() {
    const toggle = document.getElementById("js-toggle"),
        cards = document.getElementById("js-pricing-cards"),
        toggleContainer = document.getElementById("js-toggle-container");

    toggle.addEventListener("change", (e) => {
        cards.classList.toggle("show-yearly");
        toggleContainer.classList.toggle("show-yearly");
    });
}
