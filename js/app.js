// TODO: Menu show==========

const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

// TODO: Menu show==========

// TODO: Validate if constant exist==========
if (navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu')
    })
}

// TODO: Menu Hidden==========

// TODO: Validate if constant exist==========
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}

// TODO: REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
 
// TODO: Change Background Header

function scrollHeader(){
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);