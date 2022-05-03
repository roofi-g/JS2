const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url) => {
//     return new Promise(((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status !== 200) {
//                     console.log('Error');
//                 } else {
//                     resolve(xhr.responseText);
//                 }
//             }
//         };
//         xhr.send();
//     })
//     );
// }

class ProductList {
    constructor(cart, container = '.products') {
        this.container = document.querySelector(container);
        this._goods = [];
        this._productsObjects = [];
        this.cart = cart;

        this._render();
        this.getProducts()
            .then((data) => {
                this._goods = data;
                this._render();
                console.log(this.getTotalPrice());
            });
        // this.addToCart();
    }

    getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    getTotalPrice() {
        return this._productsObjects.reduce((accumulator, good) => accumulator + good.price, 0);
    }

    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product, this.cart);
            console.log(productObject);

            productObject.render(this.container);
            this._productsObjects.push(productObject);
        }
    }
}

class ProductItem {
    constructor(product, cart, img = 'https://via.placeholder.com/200x150') {
        this.id_product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;
        this.img = img;
        this.cart = cart;


    }

    render(container) {
        let buttonId = `by-item${this.id_product}`;


        container.insertAdjacentHTML('beforeend', `<div class="product-item" data-id="${this.id_product}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.product_name}</h3>
                      <p>${this.price} \u20bd</p>
                      <button id="${buttonId}" class="buy-btn">Купить</button>
                  </div>
              </div>`);

        document.getElementById(buttonId).addEventListener('click', () => {
            this.cart.addToCart(this);
            console.log('click');
        });
    }
}

class Cart {
    constructor(container = '.cart') {
        this.container = document.querySelector(container);
        this._goods = [];
        this.getProductsToCart()
            .then((data) => {
                this._goods = data.contents;
                this._render();
            });
    }

    getProductsToCart() {
        return fetch(`${API}/getBasket.json`)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    addToCart(productItem) {
        this._goods.push({
            id_product : productItem.id_product,
            product_name : productItem.product_name,
            price : productItem.price,
        })
        this._render()
    }

    delete(cartItem) {
        this._goods = this._goods.filter((value) => {
            if (cartItem === value.id_product) return false
            else return true
        })
        this._render()
    }

    _render() {
        this.container.innerHTML = '';
        for (const product of this._goods) {
            const cartItem = new CartItem(product, this);
            console.log(cartItem);

            cartItem.render();
        }
    }
}

class CartItem {
    constructor(product, cart) {
        this.cart = cart;
        this.id_product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;

    }

    render() {
        let buttonId = `cart-item${this.id_product}`;
        this.cart.container.insertAdjacentHTML('beforeend', `<div class="cart-item" data-id="${this.id_product}">
                  <h3>${this.product_name}</h3>
                  <p>${this.price} \u20bd</p>
                  <button id="${buttonId}" class="buy-btn">Удалить</button>
              </div>`)

        document.getElementById(buttonId).addEventListener('click', () => {
            this.removeFromCart();
            console.log('click');
        });
    }

    removeFromCart() {
        this.cart.delete(this.id_product);
    }
    increase(quantity) {

    }
    decrease(quantity) {

    }
}


const cart = new Cart();
const list = new ProductList(cart);
