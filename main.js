const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', () => {
    toggleClass(desktopMenu);
});
burgerMenu.addEventListener('click', () => {
    toggleClass(mobileMenu);
});
menuCarritoIcon.addEventListener('click', () => {
    toggleClass(aside);
});


/* function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
   
    if (desktopMenu.className.includes('inactive')) {
        desktopMenu.classList.toggle('inactive');
    } else {
        desktopMenu.classList.toggle('inactive');
    } 

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
} */

/* Mi solucion para que solo se pueda abrir uno */
function toggleClass(openElement) {
    let inactiveItems = [desktopMenu, mobileMenu, aside];
        for (const item of inactiveItems) {
            if (item != openElement  && !item.classList.contains('inactive')) {
                item.classList.toggle('inactive');
            }
        }
    openElement.classList.toggle('inactive');
}
