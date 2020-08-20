require('./bootstrap');
//vuex eklentisi kaydedildi
window.Vue = require('vue');


import store from './store';

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "./components/Login.vue";
import TodoList from "./components/TodoList.vue";

const routes = [
  { path :"/" , component: Login},
  { path : "/todos" , component: TodoList},

];

const router = new VueRouter({
  mode:'history',
  routes
});


router


import ExampleComponent from './components/App.vue'
const app = new Vue({
    el: '#app',
    render: h=>h(ExampleComponent),
    store
});
