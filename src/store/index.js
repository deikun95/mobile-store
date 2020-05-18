import Vue from "vue";
import Vuex from "vuex";
// import { nanoid } from "nanoid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProduct: [
      // {
      //   name: "iPhone 11 Pro",
      //   color: "белый",
      //   capacity: 64,
      //   price: 69999,
      //   id: 1,
      //   count: 1,
      // },
    ],
    products: [
      {
        name: "iPhone 11 Pro",
        color: "белый",
        capacity: 64,
        price: 69999,
        id: 1,
        count: 0,
      },
      {
        name: "iPhone 11 Pro Max",
        color: "золотой",
        capacity: 512,
        price: 134999,
        id: 2,
        count: 0,
      },
      {
        name: "iPhone XR",
        color: "коралловый",
        capacity: 256,
        price: 43999,
        id: 3,
        count: 0,
      },
      {
        name: "iPhone X",
        color: "space gray",
        capacity: 128,
        price: 39999,
        id: 4,
        count: 0,
      },
      {
        name: "iPhone 8 Plus",
        color: "розовый",
        capacity: 128,
        price: 44999,
        id: 5,
        count: 0,
      },
      {
        name: "iPhone SE",
        color: "черный",
        capacity: 64,
        price: 41999,
        id: 6,
        count: 0,
      },
    ],
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getCartProduct: (state) => {
      return state.cartProduct;
    },
    getProductCount: (state) => {
      const result = state.cartProduct.reduce((acc, item) => {
        acc += item.count;
        return acc;
      }, 0);
      console.log(result);
      return result;
    },
  },
  mutations: {
    addToCart(state, payload) {
      state.cartProduct.push({ ...payload });
    },
    incrementProduct(state, payload) {
      const finded = state.cartProduct.find((prod) => prod.id === payload.id);
      finded.count += 1;
    },
    changeCount(state, payload) {
      const finded = state.cartProduct.find((prod) => prod.id === payload.id);
      if (payload.type === "minus") {
        finded.count -= 1;
      }
      if (payload.type === "plus") {
        finded.count += 1;
      }
    },
    deleteCartProduct(state, payload) {
      state.cartProduct = state.cartProduct.filter(
        (prod) => prod.id !== payload
      );
    },
  },
  actions: {
    setAddToCart: ({ commit, state }, payload) => {
      const cartItem = state.cartProduct.find((prod) => prod.id === payload.id);
      if (!cartItem) {
        commit("addToCart", payload);
      }
      commit("incrementProduct", payload);
    },
    changeCount: ({ commit }, payload) => {
      commit("changeCount", payload);
    },
    deleteCartProduct: ({ commit }, payload) => {
      commit("deleteCartProduct", payload);
    },
  },
  modules: {},
});
