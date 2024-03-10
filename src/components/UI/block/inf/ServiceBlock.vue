<script>
export default {
  name: "PermitionBlock",
};
</script>

<template>
  <article class="permition">
    <div class="permition__container">
      <my-title class="permition__title">услуги</my-title>
      <list-render :list="$store.state.blocks" :param="'service'"></list-render>
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
      margin-top: 60px;
    }
  }
  &__title {
    @media (min-width: 576px) {
      margin-bottom: 50px;
    }
    @media (max-width: 576px) {
      margin-bottom: 20px;
    }
  }
}
</style>
