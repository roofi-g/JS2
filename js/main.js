const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        errorMessage: undefined,
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.errorMessage = 'Произошла ошибка'
                    console.error(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});
