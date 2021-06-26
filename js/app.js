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


// TODO: Video File=======

const videoFile = document.getElementById('video_file');
const videoButton = document.getElementById('video_button');
const videoIcon = document.getElementById('video-icon');


function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play();
        
        // we change icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')

    } else {
        // video pause
        videoFile.pause();
 
        // we change the icon
        videoFile.classList.remove('ri-pause-line');
        videoFile.classList.add('ri-play-line')
    }
}
 
videoButton.addEventListener('click', playPause);

function finalVideo() {
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener('ended', finalVideo);