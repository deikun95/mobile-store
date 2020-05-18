<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__content">
          <div class="logo header__logo">
            <img src="./assets/img/logo-restore.svg" alt />
          </div>
          <div class="navbar header__navbar">
            <ul class="navbar__list">
              <li class="navbar__item">
                <router-link to="/" class="navbar__link">Главная</router-link>
              </li>
              <li class="navbar__item">
                <router-link to="/catalog" class="navbar__link">Каталог</router-link>
              </li>
              <li class="navbar__item">
                <router-link to="/contacts" class="navbar__link">Контакты</router-link>
              </li>
              <li class="navbar__item">
                <a class="navbar__link" href>Личный кабинет</a>
              </li>
            </ul>
          </div>
          <div class="cart-icon navbar__cart">
            <router-link to="/cart" class="navbar__link">
              <i>
                <div v-if="getProductCount" class="cart-icon__number">
                  <span class="cart-icon__text">{{ getProductCount }}</span>
                </div>
                <svg
                  class="icon navbar__icon"
                  height="456pt"
                  viewBox="0 -13 456.75885 456"
                  width="456pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"
                  />
                  <path
                    d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"
                  />
                  <path
                    d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"
                  />
                </svg>
              </i>
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="footer__info">
          <h2 class="footer__text">Best mobile store in your city</h2>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Main",
  computed: {
    ...mapGetters(["getProductCount"])
  }
};
</script>

<style lang="scss">
/** Base styles */
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #ffffff;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: Roboto, serif;
}
.container {
  max-width: 1240px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
}
.section {
  overflow: hidden;
  padding: 5px 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 75vh;
}

.main {
  flex-grow: 1;
}
/** Base styles */

/** Components(Elements) styles */

.title {
  text-align: center;
  margin: 40px 0;
  &__name {
    font-size: 32px;
    font-weight: lighter;
  }
}
.cart-icon {
  position: relative;
  &:hover .navbar__icon {
    fill: #cf4dbe;
  }
  &__number {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #e83587;
    top: -10px;
    right: 2px;
    z-index: 1;
    text-align: center;
    padding: 1px 0;
  }
  &__text {
    color: white;
    font-style: normal;
  }
}

.icon {
  display: block;
  width: 35px;
  height: 35px;
}

.navbar {
  &__icon {
    fill: white;
    transition: all 0.3s ease;
  }
  &__list {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    padding-right: 40px;
  }
  &__icon {
    display: block;
    position: absolute;
    top: -7px;
    left: -45px;
  }
  &__link {
    display: inline-block;
    transition: all 0.3s ease;
    &:hover {
      color: #cf4dbe;
    }
  }
}
/** Components(Elements) styles */

/** Grid, Conteinters styles */
.header {
  color: #fff;
  background-color: #242424;
  padding: 20px 0;
  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.footer {
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  text-align: center;
  background-color: #f7f7f7;
  border-top: 1px solid #e6e6e6;
  &__text {
    font-size: 16px;
    font-weight: normal;
    color: #222;
  }
}
/** Grid, Conteinters styles */
</style>