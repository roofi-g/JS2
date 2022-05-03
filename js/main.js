class ProductList {
    constructor(container='.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.sumProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    sumProducts() {
        this.sum = this.goods.reduce((previousGood, currentGood) => previousGood + currentGood.price, 0 );
        document.querySelector('.sumProducts').innerText = `Суммарная стоимость всех товаров: ${this.sum}`;
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'img/product1.png') {
        this.title = product.title;
        this.img = img;
        this.price = product.price;

    }
    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <img src="${this.img}" alt="photo">
                <p>${this.price} \u20bd</p>
                <button class="buy-btn">Добавить</button>
            </div>`
    }
}

class Cart {
    constructor() {
    }
    addToCart(good, quantity= 1) {

    }
    clear() {

    }
}

class CartItem {
    constructor() {
    }
    removeFromCart() {

    }
    increase(quantity) {

    }
    decrease(quantity) {

    }
}

const list = new ProductList();

// const products = [
//     {id: 1, title: 'Notebook', price: 1000},
//     {id: 2, title: 'Mouse', price: 100},
//     {id: 3, title: 'Keyboard', price: 250},
//     {id: 4, title: 'Gamepad', price: 150},
// ];
//
// const renderProduct = (good, img = 'img/product1.png') => (
//     `<div class="product-item">
//                 <h3>${good.title}</h3>
//                 <img src="${img}" alt="photo">
//                 <p>${good.price}</p>
//                 <button class="by-btn">Добавить</button>
//               </div>`
// );
//
// const renderProducts = list => {
//     const productList = list.map(good => renderProduct(good));
//     document.querySelector('.products').innerHTML = productList.join('');
//
//     console.log(productList);
// };
//
// // массив преобразуется в строку, поэтому запятые
//
// renderProducts(products);