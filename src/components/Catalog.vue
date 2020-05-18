<template>
  <div class="wrapper">
    <section class="catalog">
      <div class="container">
        <div class="content__header">
          <h2 class="content__title">
            <span class="content__title-name">Всего товаров: </span>
            <b>{{ getProducts.length }}</b>
          </h2>
        </div>
        <div class="catalog__content">
          <div class="catalog__filter">
            <ul class="filter__list">
              <li class="filter__item--name">Цена</li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">30000 - 40000</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">40000 - 50000</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">50000 - 60000</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">60000 - 70000</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">70000 - 80000</span>
                </label>
              </li>
            </ul>
            <ul class="filter__list">
              <li class="filter__item--name">Цвет</li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">Белый</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">Черный</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">Розовый</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">Оранжевый</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">Коралловый</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">Space gray</span>
                </label>
              </li>
            </ul>
            <ul class="filter__list">
              <li class="filter__item--name">Объем памяти</li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">32 gb</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">64 gb</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">128 gb</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">256 gb</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">512 gb</span>
                </label>
              </li>
            </ul>
            <ul class="filter__list">
              <li class="filter__item--name">Диагональ</li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">4.7"</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">5.5"</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">6.1"</span>
                </label>
              </li>
              <li class="filter__item">
                <label class="filter__item-checkbox">
                  <input type="checkbox" class="checkbox" />
                  <span class="filter__item-title">6.5"</span>
                </label>
              </li>
            </ul>
            <div class="submit-btn">
              <div class="more__btn-place">
                <button class="more__btn">Применить</button>
              </div>
            </div>
          </div>
          <div class="catalog__items">
            <div class="trend__content">
              <CatalogItem v-for="product in getProducts" :key="product.id" :product="product" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CatalogItem from "./CatalogItem";
export default {
  components: {
    CatalogItem
  },
  methods: {},
  computed: {
    ...mapGetters(["getProducts"])
  }
};
</script>

<style lang="scss" scoped>
.more {
  &__btn {
    outline: none;
    font-size: 15px;
    width: 130px;
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

.content {
  &__header {
    padding: 40px 0;
  }
  &__title {
    &-name {
      font-weight: normal;
    }
  }
}
.trend {
  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.catalog {
  &__content {
    margin-bottom: 40px;
    border-top: 1px solid #e6e6e6;
    display: flex;
  }
  &__filter {
    width: 250px;
    padding: 40px 0 0 40px;
    border-right: 1px solid #e6e6e6;
  }
  &__items {
    width: 79%;
    padding-top: 20px;
  }
}
.filter {
  &__list {
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
  &__item {
    margin-bottom: 15px;
    &-checkbox {
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__item--name {
    margin-bottom: 15px;
    font-weight: bold;
  }
}
.checkbox {
  margin-right: 10px;
  transform: scale(1.5);
  color: #000;
}
</style>