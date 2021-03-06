"use strict";

const SLIDER_AUTOPLAY_SPEED = 1500;

/* - Main Slider - */
$(".main-slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
});

/* - Products Slider - */
$(".products-slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: SLIDER_AUTOPLAY_SPEED,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

/* - Search Modal - */
const searchBtn = document.querySelector("button.search-btn");
const searchModalCloseBtn = document.querySelector(".search-modal-content .close-btn");
const searchModalContent = document.querySelector(".search-modal-content");

searchBtn.addEventListener("click", e => {
    const navbarWidth = document.querySelector("nav.nav-links").offsetWidth;

    e.currentTarget.classList.add("modal-is-open");
    searchModalContent.classList.remove("closed");
    searchModalContent.style.left = `${navbarWidth}px`;
    searchModalContent.style.width = `calc(100% - ${navbarWidth}px)`;
});

searchModalCloseBtn.addEventListener("click", () => {
    searchBtn.classList.remove("modal-is-open");
    searchModalContent.classList.add("closed");
});