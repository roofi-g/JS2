let menuHamburger = [
    {size: 'Большой', price: 100, calories: 40},
    {size: 'Маленький', price: 50, calories: 20},
];

const listStuffing = [
    {stuffing: 'с сыром', price: 10, calories: 20},
    {stuffing: 'с салатом', price: 20, calories: 5},
    {stuffing: 'с картофелем', price: 15, calories: 10},
];

let topping = [
    {topping: 'посыпать приправой', price: 15, calories: 0},
    {topping: 'полить майонезом', price: 20, calories: 5},
];

const renderHamburgerSize = (size) => (
    `<div class="hamburgerSize">
        <label><input type="radio" name="size"> ${size.size}</label>
        <p>${size.price} \u20bd (${size.calories} кКалл)</p>
      </div>`
);

const renderListStuffing = (stuffing) => (
    `<div class="hamburgerStuffing">
        <label><input type="radio" name="stuffing"> ${stuffing.stuffing}</label>
        <p>${stuffing.price} \u20bd (${stuffing.calories} кКалл)</p>
      </div>`
);

const renderProducts = () => {
    const sizeList = menuHamburger.map(size => renderHamburgerSize(size));
    const stuffingList = listStuffing.map(stuffing => renderListStuffing(stuffing));
    document.querySelector('.sizes').innerHTML = sizeList.join('');
    document.querySelector('.stuffings').innerHTML = stuffingList.join('');
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