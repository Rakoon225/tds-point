<script>
export default {
  name: "list-render",
  props: {
    list: {
      type: Array,
      required: true,
    },
    param: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
  },
  methods: {
    getCurrentComponent() {
      switch (this.param) {
        case "main":
          return "block-app";
        case "sub":
          return "card-app";
        case "cont":
          return "contact-card";
        case "permition":
          return "permition-card";
        case "coder":
          return "coder-card";
        case "service":
          return "service-card";
        case "slider":
          return "slider-card";
        default:
          return null;
      }
    },
  },
};
</script>

<template>
  <div :class="'list__container list__' + param + '-container'">
    <component
      :is="getCurrentComponent()"
      v-for="(item, index) in list"
      :key="index"
      :item="{item, index, type, listLength: list.length}"
    ></component>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &__sub-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2%;
    row-gap: 30px;

    padding-top: 60px;
  }
  &__contacts-container {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }
  &__permition-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 576px) {
      gap: 55px;
    }

    @media (max-width: 576px) {
      gap: 70px;
    }
  }
  &__coder-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 576px) {
      gap: 55px;
    }

    @media (max-width: 576px) {
      row-gap: 20px;
    }
  }
  &__service-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__slider-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
}
</style>
