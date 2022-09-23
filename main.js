const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];
productList.push({
    name: 'Bike',
    price : 120,
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike1',
    price : 120,
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike2',
    price : 120,
    img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.img);
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);