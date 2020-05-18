<template>
  <div class="main">
    <div class="promo">
      <div class="promo__img"></div>
    </div>

    <section class="section trend">
      <div class="container">
        <div class="title">
          <h2 class="title__name">Популярные товары</h2>
        </div>
        <div class="trend__content">
          <div class="card trend__content-card">
            <router-link to="/item">
              <div class="card__img"></div>
              <div class="card__description">
                <div class="card__text">
                  <span class="card__text-title">iPhone 11 Pro</span>
                  <span class="card__text-price">
                    <b>69999 руб.</b>
                  </span>
                </div>
              </div>
            </router-link>
            <div class="card__btn">
              <div class="submit__btn-place">
                <button class="submit__btn"></button>
                <div class="submit__text">Добавить в корзину</div>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <router-link to="/item">
              <div class="card__img"></div>
              <div class="card__description">
                <div class="card__text">
                  <span class="card__text-title">iPhone 11 Pro</span>
                  <span class="card__text-price">
                    <b>69999 руб.</b>
                  </span>
                </div>
              </div>
            </router-link>
            <div class="card__btn">
              <div class="submit__btn-place">
                <button class="submit__btn"></button>
                <div class="submit__text">Добавить в корзину</div>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <router-link to="/item">
              <div class="card__img"></div>
              <div class="card__description">
                <div class="card__text">
                  <span class="card__text-title">iPhone 11 Pro</span>
                  <span class="card__text-price">
                    <b>69999 руб.</b>
                  </span>
                </div>
              </div>
            </router-link>
            <div class="card__btn">
              <div class="submit__btn-place">
                <button class="submit__btn"></button>
                <div class="submit__text">Добавить в корзину</div>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <router-link to="/item">
              <div class="card__img"></div>
              <div class="card__description">
                <div class="card__text">
                  <span class="card__text-title">iPhone 11 Pro</span>
                  <span class="card__text-price">
                    <b>69999 руб.</b>
                  </span>
                </div>
              </div>
            </router-link>
            <div class="card__btn">
              <div class="submit__btn-place">
                <button class="submit__btn"></button>
                <div class="submit__text">Добавить в корзину</div>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <router-link to="/item">
              <div class="card__img"></div>
              <div class="card__description">
                <div class="card__text">
                  <span class="card__text-title">iPhone 11 Pro</span>
                  <span class="card__text-price">
                    <b>69999 руб.</b>
                  </span>
                </div>
              </div>
            </router-link>
            <div class="card__btn">
              <div class="submit__btn-place">
                <button class="submit__btn"></button>
                <div class="submit__text">Добавить в корзину</div>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <router-link to="/item">
              <div class="card__img"></div>
              <div class="card__description">
                <div class="card__text">
                  <span class="card__text-title">iPhone 11 Pro</span>
                  <span class="card__text-price">
                    <b>69999 руб.</b>
                  </span>
                </div>
              </div>
            </router-link>
            <div class="card__btn">
              <div class="submit__btn-place">
                <button class="submit__btn"></button>
                <div class="submit__text">Добавить в корзину</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section news">
      <div class="container">
        <div class="title">
          <h2 class="title__name">Последние новости</h2>
        </div>
        <div class="news__content">
          <div class="news__card">
            <div class="news__card-img">
              <div class="news__text">Врачи спасли котенка с помощью iPhone</div>
            </div>
          </div>
          <div class="news__card">
            <div class="news__card-img">
              <div class="news__text">Врачи спасли котенка с помощью iPhone</div>
            </div>
          </div>
          <div class="news__card">
            <div class="news__card-img">
              <div class="news__text">Врачи спасли котенка с помощью iPhone</div>
            </div>
          </div>
        </div>
        <div class="more__btn-place">
          <button class="more__btn">Все новости</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss" scoped>
.submit {
  padding: 40px 0 84px 0;

  &__text {
    color: white;
    position: absolute;
    font-size: 15px;
    z-index: 5;
    user-select: none;
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

.more {
  &__btn-place {
    margin: 5px 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__btn {
    outline: none;
    font-size: 15px;
    width: 170px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #e6e6e6;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
}
.news {
  &__content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  &__text {
    opacity: 0;
    color: rgb(241, 241, 241);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
  &__card {
    height: 270px;
    background-color: rgb(241, 241, 241);
    margin-right: 10px;
    transition: all 0.3s ease;
    &:last-child {
      margin-right: 0;
    }
    &-img {
      background-image: url(../assets/img/card-item.png);
      height: 270px;
      background-size: cover;
      background-repeat: no-repeat;
      background-color: #242424;
    }
    &:hover {
      cursor: pointer;
      & .news__text {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(90, 90, 90, 0.7);
        color: white;
        font-size: 20px;
        opacity: 1;
      }
    }
    &:nth-of-type(1) {
      flex-grow: 1;
      &:hover {
        flex-grow: 2;
        &:nth-of-type(2) {
          flex-grow: 1;
        }
        &:nth-of-type(3) {
          flex-grow: 1;
        }
      }
    }
    &:nth-of-type(2) {
      flex-grow: 1;
      &:hover {
        flex-grow: 2;
        &:nth-of-type(1) {
          flex-grow: 1;
        }
        &:nth-of-type(3) {
          flex-grow: 1;
        }
      }
    }
    &:nth-of-type(3) {
      flex-grow: 1;
      &:hover {
        flex-grow: 2;
        &:nth-of-type(1) {
          flex-grow: 1;
        }
        &:nth-of-type(2) {
          flex-grow: 1;
        }
      }
    }
  }
}
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
  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &-card {
      margin: 0 20px 20px 20px;
      &:nth-last-child(-n + 3) {
        margin: 0 20px;
      }
    }
  }
}
.promo {
  &__img {
    height: 538px;
    background-image: url(../assets/img/header-promo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>