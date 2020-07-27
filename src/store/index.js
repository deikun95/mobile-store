import Vue from "vue";
import Vuex from "vuex";
// import { nanoid } from "nanoid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    checked: [],
    cartProduct: [],
    filteredProducts: [],
    filter: {
      color: {
        title: "Цвет",
        items: [
          {
            id: 1,
            payload: { value: "Белый" },
          },
        ],
      },
    },
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
    priceFilter: [
      {
        id: 1,
        minPrice: 30000,
        maxPrice: 40000,
        checked: "",
      },
      {
        id: 2,
        minPrice: 40000,
        maxPrice: 50000,
        checked: "",
      },
      {
        id: 3,
        minPrice: 50000,
        maxPrice: 60000,
        checked: "",
      },
    ],
    colorFilter: [
      {
        id: 1,
        color: "Белый",
      },
      {
        id: 2,
        color: "Черный",
      },
      {
        id: 3,
        color: "Золотой",
      },
    ],
    capacityFilter: [
      {
        id: 1,
        capacity: 64,
        checked: "",
      },
      {
        id: 2,
        capacity: 128,
        checked: "",
      },
      {
        id: 3,
        capacity: 512,
        checked: "",
      },
    ],
    sizeFilter: [
      {
        id: 1,
        size: "4.7",
      },
      {
        id: 2,
        size: "5.8",
      },
      {
        id: 3,
        size: "6.5",
      },
    ],
  },
  getters: {
    getProducts: (state) => {
      if (!state.checked.length) {
        return state.products;
      }
      return state.filteredProducts;
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
    getPriceFilter: (state) => {
      return state.priceFilter;
    },
    getColorFilter: (state) => {
      return state.colorFilter;
    },
    getSizeFilter: (state) => {
      return state.sizeFilter;
    },
    getCapacityFilter: (state) => {
      return state.capacityFilter;
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
    filterProducts(state, payload) {
      console.log(payload);
      if (payload.checked === true && !state.checked.length) {
        state.checked.push(1);
        const filteredProducts = state.products.filter(
          (prod) => prod.capacity === payload.capacity
        );
        state.filteredProducts.push(...filteredProducts);
      } else if (payload.checked === true && state.checked.length) {
        const filteredProducts = state.products.filter(
          (prod) => prod.capacity === payload.capacity
        );
        if (filteredProducts !== state.filteredProducts) {
          state.filteredProducts.push(...filteredProducts);
        }
        console.log(1);
      } else if (payload.checked === false && state.filteredProducts.length) {
        state.filteredProducts = state.filteredProducts.filter(
          (prod) => prod.capacity !== payload.capacity
        );
      }
      if (!state.filteredProducts.length) {
        state.checked = [];
      }

      console.log(state);
      // return (state.filteredProducts = []);
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
    getFilterValue: ({ commit }, payload) => {
      commit("filterProducts", payload);
      console.log(payload)
    },
  },
  modules: {
    
  },
});
