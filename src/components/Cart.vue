<template>
  <div class="wrapper">
    <section class="cart">
      <div class="container">
        <div class="cart-topline" v-if="getCartProduct.length">
          <ul class="cart-topline__title">
            <li class="cart-topline__item">
              <span>Наименование товара</span>
            </li>
            <li class="cart-topline__item">Цена</li>
            <li class="cart-topline__item">Количество</li>
            <li class="cart-topline__item">Общая стоимость</li>
          </ul>
        </div>
        <div class="content__header" v-if="!getCartProduct.length">
          <h2 class="content__title">
            <span class="content__title-name">Ваша корзина пуста</span>
          </h2>
        </div>
        <CartItem
          v-for="cartProduct in getCartProduct"
          :key="cartProduct.id"
          :cartProduct="cartProduct"
        />
      </div>
    </section>
    <section class="submit" v-if="getCartProduct.length">
      <div class="submit__btn-place" >
        <button class="submit__btn"></button>
        <div class="submit__text">Оформить заказ</div>
      </div>
    </section>
    <section class="submit" v-if="!getCartProduct.length">
      <router-link to="/catalog">
      <div class="submit__btn-place">
        <button class="submit__btn"></button>
        <div class="submit__text">Перейти в каталог</div>
      </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem";
export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(["getCartProduct"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  &__title {
    text-align: center;
    &-name {
      font-weight: normal;
    }
  }
}
.submit {
  padding: 40px 0 84px 0;
  &__text {
    color: white;
    position: absolute;
    font-size: 15px;
    z-index: 5;
  }
  &__btn-place {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:after {
      content: "";
      display: block;
      opacity: 0;
      width: 145px;
      height: 45px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      transition: all 0.2s ease;
    }
    &:hover {
      cursor: pointer;

      &:after {
        content: "";
        display: block;
        width: 145px;
        opacity: 1;
        height: 45px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
      }
    }
  }
  &__btn {
    position: absolute;
    color: white;
    outline: none;
    font-size: 15px;
    width: 145px;
    height: 45px;
    border: none;
    border-radius: 4px;
    background-color: #e83587;
    transition: all 0.2s ease;
  }
}

.cart {
  padding: 40px 0;
  &-topline {
    &__title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      padding: 20px 0;
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