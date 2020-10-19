import './index.pug';
// import './style.sass';
import Vue from 'vue';
import Vuex from 'vuex';
import app from './app.vue';

require.context('./../Test_task_front2', true, /\.css$/);
require.context('./../Test_task_front2', true, /\.(jpe?g|png|svg)$/);
// require.context('./../Test_task_front2/misc/images', true, /\.(jpe?g|png|svg)$/);

Vue.use(Vuex);
const products = require('../Test_task_front2/products.json');

const store = new Vuex.Store({
  state: {
    products,
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
});
const vue = new Vue({
  el: '.root',
  render: (h) => h(app),
  store,
  data: {
  },
  methods: {
  },
  mounted() {
  },
});
