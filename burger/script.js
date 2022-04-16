let menuHamburger = [
    {name: 'Большой', price: 100, calories: 40},
    {name: 'Маленький', price: 50, calories: 20},
];
const listStuffing = [
    {name: 'с сыром', price: 10, calories: 20},
    {name: 'с салатом', price: 20, calories: 5},
    {name: 'с картофелем', price: 15, calories: 10},
];
let topping = [
    {name: 'посыпать приправой', price: 15, calories: 0},
    {name: 'полить майонезом', price: 20, calories: 5},
];

const render = (options, inputType, inputName) => (
    `<div class="product">
        <label><input type="${inputType}" name="${inputName}"> ${options.name}</label>
        <p>${options.price} \u20bd (${options.calories} кКалл)</p>
      </div>`
);

const renderProducts = () => {
    const sizeList = menuHamburger.map(size => render(size, 'radio', 'size'));
    const stuffingList = listStuffing.map(stuffing => render(stuffing, 'radio', 'stuffing'));
    const toppingList = topping.map(topping => render(topping, 'checkbox', 'topping'));

    document.querySelector('.sizes').innerHTML = sizeList.join('');
    document.querySelector('.stuffings').innerHTML = stuffingList.join('');
    document.querySelector('.topping').innerHTML = toppingList.join('');

    // document.querySelector('.total').innerHTML = renderTotal();
};

renderProducts();

// class Hamburger {
//     constructor(size, stuffing, topping) {
//         this.size = size;
//         this.kkal = stuffing;
//         this.topping = topping;
//     }
//
//
// }