"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadPortfolio();
    VanillaTilt.init(document.querySelectorAll("#portfolio div"), {
        max: 15,
        speed: 400,
        scale: 1.05
    });
    document.querySelectorAll(".img-gradient").forEach(el => el.addEventListener('mouseover', removeGradient));
    document.querySelectorAll(".img-gradient").forEach(el => el.addEventListener('mouseout', addGradient));
}

if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.write(`<script src="assets/js/vanilla-tilt.js"></script>`);
}

function loadPortfolio() {
    const parent = document.getElementById("portfolio")

    images.forEach((listItem)=> {
        parent.insertAdjacentHTML('afterbegin', `
            <div class="img-gradient" data-src="assets/media/portfolio/${listItem["src"]}" data-comment="${listItem["figcap"]}">
                <img src="assets/media/portfolio/${listItem["src"]}"/>
            </div>
        `)
    })
}

function removeGradient(e) {
    e.preventDefault();
    e.target.classList.remove("add");
    e.target.classList.add("remove");
}

function addGradient(e) {
    e.preventDefault();
    e.target.classList.remove("remove");
    e.target.classList.add("add");
}