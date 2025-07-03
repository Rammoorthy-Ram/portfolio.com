// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }
// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }
// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// // Toggle navbar on menu click
// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Remove active classes on scroll
// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar on menu click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Remove active classes on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
