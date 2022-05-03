const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (good, img = 'img/product1.png') => (
    `<div class="product-item">
                <h3>${good.title}</h3>
                <img src="${img}" alt="photo">
                <p>${good.price}</p>
                <button class="by-btn">Добавить</button>
              </div>`
);

const renderProducts = list => {
    const productList = list.map(good => renderProduct(good));
    document.querySelector('.products').innerHTML = productList.join('');

    console.log(productList);
};

// массив преобразуется в строку, поэтому запятые

renderProducts(products);