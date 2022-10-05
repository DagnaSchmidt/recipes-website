//variables// 
const navLinks = document.getElementById('nav-links');
const navMenuBtn = document.getElementById('nav-menu-btn');
const navClose = document.getElementById('nav-close');
const navEveryLink = document.querySelectorAll('.nav__item');

//show menu on click//
if(navMenuBtn) {
    navMenuBtn.addEventListener('click', () => {
        navLinks.classList.add('show'),
        navClose.classList.add('show')
    })
}

//hide menu on close icon click// 
if(navClose) {
    navClose.addEventListener('click', () => {
        navLinks.classList.remove('show'),
        navClose.classList.remove('show')
    })
}

//hide menu while clicking on any nav link// 
if(navEveryLink) {
    navEveryLink.addEventListener('click', () => {
        navLinks.classList.remove('show'),
        navClose.classList.remove('show')
    })
}