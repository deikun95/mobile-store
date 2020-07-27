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
            <CatalogFilter />
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
import CatalogFilter from "./CatalogFilter";
export default {
  components: {
    CatalogItem,
    CatalogFilter
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
    // justify-content: center;
    padding: 0 60px;
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
</style>