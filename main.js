const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
 /*   
    if (desktopMenu.className.includes('inactive')) {
        desktopMenu.classList.toggle('inactive');
    } else {
        desktopMenu.classList.toggle('inactive');
    } 
*/
}