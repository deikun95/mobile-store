<template>
      <div class="card trend__content-card">
        <router-link to="/item">
          <div class="card__img"></div>
          <div class="card__description">
            <div class="card__text">
              <span class="card__text-title">{{product.name}}</span>
              <span class="card__text-price">
                <b>{{product.price}} руб.</b>
              </span>
            </div>
          </div>
        </router-link>
        <div class="card__btn">
          <div class="submit__btn-place" @click="addToCartHandler">
            <button class="submit__btn"></button>
            <div class="submit__text">Добавить в корзину</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(['setAddToCart']),
    addToCartHandler() {
      return this.setAddToCart(this.product)
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 275px;
  height: 360px;
  padding: 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  &__img {
    margin: 0 auto;
    background-image: url(../assets/img/card-item.png);
    width: 240px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  &__text {
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 25px;
    color: black;
  }
  &__btn {
    margin: 20px 0;
  }
}

.trend {
    &-card {
      margin: 0 20px 20px 20px;
      &:nth-last-child(-n + 3) {
        margin: 0 20px;
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
      width: 170px;
      height: 30px;
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
        width: 170px;
        opacity: 1;
        height: 30px;
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
    width: 170px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #e83587;
    transition: all 0.2s ease;
  }
}
</style>