let navToggle = document.querySelector(".menu");
let nav = document.querySelector("nav");

let toggleBars = document.querySelector(".menu i");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("showNav");

    nav.classList.contains("showNav")
        ?
        toggleBars.classList.replace('fa-bars', 'fa-xmark')
        :
        toggleBars.classList.replace('fa-xmark', 'fa-bars')

});