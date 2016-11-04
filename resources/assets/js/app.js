window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');


import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './components/App.vue';
import store from './store/index';
import router from './routes.js';

Vue.use(VueResource);
Vue.component('app', App);


const app = new Vue({
    router,
    store
}).$mount('#app');
