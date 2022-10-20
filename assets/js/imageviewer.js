"use strict";

document.addEventListener('DOMContentLoaded', init);
const modal = document.querySelector('.modal');
const html = document.querySelector('html');

function init() {
    document.querySelectorAll("#portfolio div").forEach(el => el.addEventListener('click', delegate));
    document.querySelector('.modal').addEventListener("click", closeModal);
}

function delegate(e) {
    e.preventDefault();
    const span = document.querySelector('.modal span');
    const comment = document.querySelector('.modal p');

    html.setAttribute("style", "overflow: hidden");
    modal.setAttribute("style", "display: block");
    span.innerHTML = `<img src="${e.target.dataset.src}" />`;
    comment.innerText = `${e.target.dataset.comment}`
}

function closeModal(e) {
    e.preventDefault();

    console.log(e.target.tagName);

    if(e.target.tagName !== 'IMG' || e.target.alt === "close") {
        modal.setAttribute("style", "display: none");
        html.setAttribute("style", "overflow: auto");
    }
}