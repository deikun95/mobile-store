<template>
  <div>
    <div class="cart-body">
      <ul class="cart-body__title">
        <li class="cart-body__item">
          <div class="cart-body__img"></div>
          <div class="cart-body__description">
            <div
              class="text"
            >Apple {{cartProduct.name}} {{cartProduct.capacity}} ГБ {{cartProduct.color}}</div>
          </div>
        </li>
        <li class="cart-body__item price">{{cartProduct.price}} руб.</li>
        <li class="cart-body__item quantity">
          <button class="quantity__btn" @click="reduceHandler" :disabled="cartProduct.count === 1">-</button>
          <input type="text" class="quantity__input" :value="cartProduct.count" />
          <button class="quantity__btn" @click="increaseHandler">+</button>
        </li>
        <li class="cart-body__item total total-price">
          {{ getFullPrice }} руб.
          <button class="delete-btn" @click="deleteHandler">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // data() {
  //   return {
  //     localCount: this.cartProduct.count
  //   };
  // },
  name: "CartItem",
  props: {
    cartProduct: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(["changeCount", "deleteCartProduct"]),
    reduceHandler() {
      const newItem = {
        id: this.cartProduct.id,
        type: "minus"
      };
      this.changeCount(newItem);
    },
    increaseHandler() {
      const newItem = {
        id: this.cartProduct.id,
        type: "plus"
      };
      this.changeCount(newItem);
    },
    deleteHandler() {
      this.deleteCartProduct(this.cartProduct.id);
    }
  },
  computed: {
    getFullPrice() {
      return this.cartProduct.price * this.cartProduct.count;
    }
  }
};
</script>

<style lang="scss" scoped>
.price {
  text-align: center;
}
.delete-btn {
  margin-left: 10px;
  outline: none;
  width: 40px;
  height: 25px;
  border: none;
  border-radius: 4px;
  background-color: #e6e6e6;
  transition: all 0.3s ease;
  font-size: 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
}

.quantity {
  &__input {
    width: 40px;
    height: 25px;
    margin: 5px;
    text-align: center;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
  }
  &__btn {
    outline: none;
    width: 45px;
    height: 25px;
    border: none;
    border-radius: 4px;
    background-color: #e6e6e6;
    transition: all 0.3s ease;
    font-size: 20px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
}
.cart {
  &-body {
    border-bottom: 1px solid #e6e6e6;
    &__title {
      display: flex;
      justify-content: space-between;
    }
    &__img {
      min-width: 250px;
      height: 300px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(../assets/img/card-item.png);
    }
    &__description {
      margin: auto;
    }
    &__item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 200px;
      &:nth-of-type(1) {
        min-width: 650px;
      }
    }
  }
}
</style>