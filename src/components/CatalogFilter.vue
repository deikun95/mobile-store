<template>
  <div>
    <ul class="filter__list">
      <li class="filter__item--name">Цена</li>
      <FilterPriceItem
        v-for="priceFilter in getPriceFilter"
        :key="priceFilter.id"
        :priceFilter="priceFilter"
      />
    </ul>
    <ul class="filter__list">
      <li class="filter__item--name">Цвет</li>
      <FilterColorItem
        v-for="colorFilter in getColorFilter"
        :key="colorFilter.id"
        :colorFilter="colorFilter"
      />
    </ul>
    <ul class="filter__list">
      <li class="filter__item--name">Объем памяти</li>
      <FilterCapacityItem
        v-for="capacityFilter in getCapacityFilter"
        :key="capacityFilter.id"
        :capacityFilter="capacityFilter"
      />
    </ul>
    <ul class="filter__list">
      <li class="filter__item--name">Диагональ</li>
      <FIlterSizeItem
        v-for="sizeFilter in getSizeFilter"
        :key="sizeFilter.id"
        :sizeFilter="sizeFilter"
      />
    </ul>
    <div class="submit-btn">
      <div class="more__btn-place">
        <button class="more__btn">Применить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FilterPriceItem from "./FilterPriceItem";
import FilterColorItem from "./FilterColorItem";
import FIlterSizeItem from "./FIlterSizeItem";
import FilterCapacityItem from "./FilterCapacityItem";
export default {
  components: {
    FilterPriceItem,
    FilterColorItem,
    FIlterSizeItem,
    FilterCapacityItem
  },
  computed: {
    ...mapGetters(["getPriceFilter", "getColorFilter", "getSizeFilter", "getCapacityFilter"])
  }
};
</script>

<style lang="scss">
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