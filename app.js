// Access DOM
const hamburger = document.querySelector('.hamburger i');
const h1 = document.querySelector('h1');
const p = document.querySelector('.top-right .text p')
const h2 = document.querySelector('h2');
const nav = document.querySelector('nav');
const ul = document.querySelector('ul');
const prev = document.querySelector('.left');
const next = document.querySelector('.right');
const topLeft = document.querySelector('.top-left');
let currentIndex = 0;

// Array
let images = [
    {
        image: '../../images/desktop-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        desc: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: '../../images/desktop-image-hero-2.jpg',
        title: 'We are available all across the globe',
        desc: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: '../../images/desktop-image-hero-3.jpg',
        title: ' Manufactured with the best materials',
        desc: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

// Functions
// Change bar icon to times icon
const hamburgerIconChange = () => hamburger.classList.contains('fa-bars') ? hamburger.classList.replace('fa-bars', 'fa-times') : hamburger.classList.replace('fa-times', 'fa-bars');
// Remove the title on click.
const fadeTitle = () => h2.classList.length === 0 ? h2.setAttribute('class', 'disappear') : h2.removeAttribute('class');
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

// Next button functionality
next.addEventListener('click', () => {
    currentIndex === (images.length - 1) ? currentIndex = (currentIndex % (images.length - 1)) : currentIndex++;
    topLeft.style.backgroundImage = `url(${images[currentIndex].image})`;
    h1.innerHTML = images[currentIndex].title;
    p.innerHTML = images[currentIndex].desc;
})

// Previous button functionality 
prev.addEventListener('click', () => {
    currentIndex <= 0 ? currentIndex = (images.length - 1) : currentIndex--;
    topLeft.style.backgroundImage = `url(${images[currentIndex].image})`;
    h1.innerHTML = images[currentIndex].title;
    p.innerHTML = images[currentIndex].desc;
})