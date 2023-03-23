const hamburder = document.querySelector('.header .nav-bar .nav-list .hamburder');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('header.container');

hamburder .addEventListener('click',() => {
    hamburder.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});