"use strict";

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