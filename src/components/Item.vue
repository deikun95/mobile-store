<template>
  <div class="wrapper">
    <section class="item">
      <div class="container">
        <div class="content__header">
          <h2 class="content__title">
            <span class="content__title-name">iPhone 11 Pro Max 64 gb</span>
          </h2>
        </div>
        <div class="content__item">
          <div class="content__img">
            <img src="../assets/img/item.jpg" alt class="item-img" />
          </div>
          <div class="content__description">
            <div class="description__text">
              <ul class="description__list">
                <li class="description__item--name">Основные характеристики:</li>
                <div class="description__specs">
                  <div class="description__specs-title">
                    <li class="description__item">
                      <span class="description__item-title">Объем постоянной памяти:</span>
                    </li>
                    <li class="description__item">
                      <span class="description__item-title">Цвет:</span>
                    </li>
                    <li class="description__item">
                      <span class="description__item-title">Диагональ:</span>
                    </li>
                  </div>
                  <div class="description__specs-title">
                    <li class="description__item">
                      <span class="description__item-title">64 gb</span>
                    </li>
                    <li class="description__item">
                      <span class="description__item-title">коралловый</span>
                    </li>
                    <li class="description__item">
                      <span class="description__item-title">6.1"</span>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div class="description__price">
              <div class="description__price-text"><span class="price-text">69999 руб.</span></div>
              <div class="description__price-btn">
                <div class="submit__btn-place">
                  <button class="submit__btn"></button>
                  <div class="submit__text">Добавить в корзину</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
        width: 170px;
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
    width: 170px;
    height: 45px;
    border: none;
    border-radius: 4px;
    background-color: #e83587;
    transition: all 0.2s ease;
  }
}
.content {
  &__header {
    padding: 40px 0;
  }
  &__title {
    &-name {
      font-weight: normal;
    }
  }
  &__item {
    display: flex;
    border-top: 1px solid #e6e6e6;
    padding-top: 40px;
  }
  &__img {
    display: flex;
  }
  &__description {
    width: 100%;
    height: 500px;
  }
}
.description {
  &__list {
    margin-bottom: 30px;
  }
  &__item {
    margin-bottom: 20px;
  }
  &__item--name {
    font-size: 25px;
    margin-bottom: 35px;
    font-weight: normal;
  }
  &__specs {
    display: flex;
    &-title {
      width: 100%;
    }
    &-name {
      width: 100%;
    }
  }
  &__text {
    border-bottom: 1px solid #e6e6e6;
  }
  &__price {
    padding: 45px 0;
    display: flex;
    align-items: center;
    &-text{
      width: 31%;
      display: flex;
      align-items: center;
    }
    &-btn{
      width: 100%;
    }
  }
}
.price{
  &-text{
    font-size: 25px;
  }
}
.item {
  &-img {
    width: 500px;
    height: 340px;
  }
}
</style>