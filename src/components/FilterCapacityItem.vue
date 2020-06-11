<template>
  <li class="filter__item">
    <label class="filter__item-checkbox">
      <input type="checkbox" class="checkbox" />
      <span class="filter__item-title">{{ capacityFilter.capacity }} gb</span>
    </label>
  </li>
</template>

<script>
export default {
  props: {
    capacityFilter: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss">
.filter {
  &__item {
    &-checkbox {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.checkbox {
  margin-right: 10px;
  transform: scale(1.5);
  color: #000;
}
</style>