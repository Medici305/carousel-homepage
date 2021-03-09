// Access DOM
const hamburger = document.querySelector('.hamburger i');
const h1 = document.querySelector('h1');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');

// Functions
// Change bar icon to times icon
const hamburgerIconChange = () => hamburger.classList.contains('fa-bars') ? hamburger.classList.replace('fa-bars', 'fa-times') : hamburger.classList.replace('fa-times', 'fa-bars');
// Remove the title on click.
const fadeTitle = () => h1.classList.length === 0 ? h1.setAttribute('class', 'disappear') : h1.removeAttribute('class');
// Chnage nav background to white
const navBackgroundColor = () => nav.classList.length === 0 ? nav.setAttribute('class', 'navBackground') : nav.removeAttribute('class');
// Make the menu list appear onclick
const showNavbar = () => {
    if(ul.classList.length === 0) {
        ul.setAttribute('class', 'showMenu');
    } else {
        ul.removeAttribute('class');
    }
}


// Event listeners
hamburger.addEventListener('click', () => {
    fadeTitle();
    hamburgerIconChange();
    navBackgroundColor();
    showNavbar();
})