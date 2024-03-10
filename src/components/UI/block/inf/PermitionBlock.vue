<script>
export default {
  name: "PermitionBlock",
};
</script>

<template>
  <article class="permition">
    <div class="permition__container">
      <my-title class="permition__title">преимущества</my-title>
      <list-render :list="$store.state.permition" :param="'permition'"></list-render>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.permition {
  & {
    @media (min-width: 576px) {
      margin-top: 80px;
    }
    @media (max-width: 576px) {
      margin-top: 10px;
    }
  }
  &__title {
    @media (min-width: 576px) {
      margin-bottom: 100px;
    }
    @media (max-width: 576px) {
      margin-bottom: 80px;
    }
  }
}
</style>
