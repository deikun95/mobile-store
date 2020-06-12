<template>
  <li class="filter__item">
    <label class="filter__item-checkbox" >
      <input type="checkbox" class="checkbox" v-model="checked" @click="filterHandler"/>
      <span class="filter__item-title">{{ capacityFilter.capacity }} gb</span>
    </label>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      checked: false
    };
  },
  props: {
    capacityFilter: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    ...mapActions(["getFilterValue"]),
    filterHandler() {
      const newItem = {
        ...this.capacityFilter,
        checked: !this.checked
      };
      this.getFilterValue(newItem);
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