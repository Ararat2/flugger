"use strict";

/* - Enable detailed view - */
(image => {
    const imageCSS = window.getComputedStyle(image, false);
    const imageURL = imageCSS.backgroundImage.slice(4, -1).replace(/['"]/g, "");

    // Get the original source image
    const imageSrc = new Image();

    imageSrc.addEventListener("load", () => {
        const imageWidth = imageSrc.naturalWidth;
        const imageHeight = imageSrc.naturalHeight;
        const ratio = imageHeight / imageWidth;

        // Zoom and scan on mousemove
        image.addEventListener("mousemove", e => {
            const boxWidth = image.clientWidth;
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;
            const xPercent = x / (boxWidth / 100) + "%";
            const yPercent = y / (boxWidth * ratio / 100) + "%";

            // Update styles w/actual size
            Object.assign(image.style, {
                backgroundPosition: xPercent + " " + yPercent,
                backgroundSize: imageWidth + "px",
            });
        });

        image.addEventListener("mouseleave", () => {
            Object.assign(image.style, {
                backgroundPosition: "50% 50%",
                backgroundSize: "auto 100%",
            });
        });
    });

    imageSrc.src = imageURL;
})(document.querySelector(".product-img"));

/* - Toggle information collapse - */
const informationCollapseBtn = document.querySelector(".information-collapse-btn");

informationCollapseBtn.addEventListener("click", e => {
    e.target.classList.toggle("collapsed");

    const informationContent = document.querySelector(".information");

    informationContent.classList.toggle("d-none");
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