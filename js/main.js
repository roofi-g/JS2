const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        searchLine: '',
        renderProducts: [],
        isVisibleCart: false,
        cart: []
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let cartItem = this.cart.find(elem => {
                return elem.id_product === product.id_product;
            });
            if (cartItem) {
                cartItem.quantity += 1
            } else {
                let cartItem = Object.assign({ quantity: 1 }, product);
                this.cart.push(cartItem)
            }
        },
        decrease() {

        },
        filterGoods() {
            let comp = this.searchLine;
            if (comp === '') {
                this.renderProducts = this.products
                return
            };
            this.renderProducts = this.products.filter(elem => {
                return elem.product_name.toLowerCase().includes(comp.toLowerCase());
            });
            console.log(this.renderProducts);
        }
    },
    // computed: {
    //     filterGoods() {
    //         let comp = this.searchLine;
    //         return this.products.filter(elem => {
    //             if (comp === '') return true;
    //             else return elem.product_name.indexOf(comp) > -1;
    //         })
    //     }
    // },
    beforeCreate() {
        console.log('beforeCreate');
        console.log(this.products);
    },
    created() {
        console.log('created');
        console.log(this.products);
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                this.products = data;
                this.renderProducts = data;
            });
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    // beforeUpdate() {
    //     console.log('beforeUpdate');
    // },
    // updated() {
    //     console.log('updated');
    // },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
});
