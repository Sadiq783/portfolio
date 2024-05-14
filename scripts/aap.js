/* -------------------- Toggle icon navbar ------------------------*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".main-nav");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
});

/* scroll section active link  */

let sections = document.querySelectorAll("main, section");
let navLinks = document.querySelectorAll(".main-header nav a");



window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(".main-header .main-nav a[href*='" + id + "']").classList.add("active");

            });
        }
    });

    /* sticky navbar  */

    let header = document.querySelector(".main-header");

    header.classList.toggle("sticky", window.scrollY > 100);


    /* remove toggle icon and navbar  */

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
});

/* ---------------------- Scroll Indicator --------------------------------- */

let indicator = document.querySelector(".scroll-indicator .prograss");

window.addEventListener("scroll", () => {

    // Calcualte the total scrollable height
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Find the current vertical scroll position of the document
    let scrollTop = document.documentElement.scrollTop;

    // Calculate the vertically scrolled portion of the document in %
    let scrolled = (scrollTop / scrollHeight) * 100;

    // Change the width of the scroll indicator (prograss) according to the vertically scrolled document
    indicator.style.width = `${scrolled}%`;
});


/* ------------------------ Scroll Reveal -------------------------------------- */

ScrollReveal({
    distance: '50px',
    duration: 600,
    delay: 300,
    easing: 'ease'
});


ScrollReveal().reveal(".home-content, .about-img", {origin: 'left'});
ScrollReveal().reveal(".home-img, .about-content, .heading, .services-container, .portfolio-container, .contact form", {origin: 'right'});