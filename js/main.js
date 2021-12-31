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
