Vue.component('error', {
    props: ['message'],
    template: '<div class="error" v-show="message">{{ message }}</div>'
})