<template>
  <li class="filter__item">
    <label class="filter__item-checkbox">
      <input type="checkbox" class="checkbox" />
      <span class="filter__item-title">{{ colorFilter.color }}</span>
    </label>
  </li>
</template>

<script>
export default {
  props: {
    colorFilter: {
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