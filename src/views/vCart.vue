<template>
  <div class="wrapper">
    <section class="cart">
      <div class="container">
        <div class="cart-topline">
          <ul class="cart-topline__title">
            <li class="cart-topline__item">
              <span>Наименование товара</span>
            </li>
            <li class="cart-topline__item">Цена</li>
            <li class="cart-topline__item">Количество</li>
            <li class="cart-topline__item">Общая стоимость</li>
          </ul>
        </div>
        <div class="cart-body">
          <ul class="cart-body__title">
            <li class="cart-body__item">
              <div class="cart-body__img"></div>
              <div class="cart-body__description">
                <div class="text">Apple iPhone 11 Pro Max 256 ГБ тёмно-зелёный</div>
              </div>
            </li>
            <li class="cart-body__item price">69999 руб.</li>
            <li class="cart-body__item quantity">
              <button class="quantity__btn">-</button>
              <input type="text" class="quantity__input" value="1" />
              <button class="quantity__btn">+</button>
            </li>
            <li class="cart-body__item total total-price">69999 руб.</li>
          </ul>
        </div>
        <div class="cart-body">
          <ul class="cart-body__title">
            <li class="cart-body__item">
              <div class="cart-body__img"></div>
              <div class="cart-body__description">
                <div class="text">Apple iPhone 11 Pro Max 256 ГБ тёмно-зелёный</div>
              </div>
            </li>
            <li class="cart-body__item price">69999 руб.</li>
            <li class="cart-body__item quantity">
              <button class="quantity__btn">-</button>
              <input type="text" class="quantity__input" value="1" />
              <button class="quantity__btn">+</button>
            </li>
            <li class="cart-body__item total total-price">69999 руб.</li>
          </ul>
        </div>
        <div class="cart-body">
          <ul class="cart-body__title">
            <li class="cart-body__item">
              <div class="cart-body__img"></div>
              <div class="cart-body__description">
                <div class="text">Apple iPhone 11 Pro Max 256 ГБ тёмно-зелёный</div>
              </div>
            </li>
            <li class="cart-body__item price">69999 руб.</li>
            <li class="cart-body__item quantity">
              <button class="quantity__btn">-</button>
              <input type="text" class="quantity__input" value="2" />
              <button class="quantity__btn">+</button>
            </li>
            <li class="cart-body__item total total-price">69999 руб.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="submit">
      <div class="submit__btn-place">
        <div class="submit__cover">
          <div>
            <button class="submit__btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.submit {
  padding: 40px 0 84px 0;
  &__btn-place {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    position: relative;
    color: white;
    outline: none;
    font-size: 15px;
    width: 145px;
    height: 45px;
    border: none;
    border-radius: 4px;
    background-color: #e83587;
    transition: all 0.3s ease;
    &:hover {
      cursor: pointer;
    }
  }
}
.price {
  text-align: center;
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
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
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