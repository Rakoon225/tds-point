<script>
export default {
  name: "my-crumbs",
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    routerPush(name, param) {
      if (param == "undefined") {
        this.$router.push({
          name: name,
        });
      } else {
        this.$router.push({
          name: name,
          params: {
            service: param,
          },
        });
      }
    },
  },
};
</script>

<template>
  <nav
    class="crumbs"
    :class="{
      isOwn: this.$route.name == 'ownPage',
    }"
  >
    <span
      class="crumbs__item"
      v-for="item in crumbs"
      @click="routerPush(`${item.name}`, `${item.param}`)"
      >/{{ item.title }}</span
    >
  </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/fonts.scss' as f;

.crumbs {
  & {
    display: flex;
    position: absolute;
    right: 0;
    z-index: 100;
    gap: 20px;
    margin: 10px;

    @media (max-width: 576px) {
      gap: 5px;
      margin-bottom: 5px;
    }
  }

  &__item {
    display: block;
    color: #fbfbfb;
    font-size: 24px;
    font-family: "Montserat";
    font-weight: 500;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: #e7e7e7;
    }

    &:active {
      color: #aaaaaa;
    }

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  &.isOwn {
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
}
</style>
