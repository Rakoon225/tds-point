<script>
export default {
  name: "CoderBlock",
};
</script>

<template>
  <article class="coder">
    <div class="coder__container">
      <my-title class="coder__title">наши программисты</my-title>
      <list-render :list="$store.state.coder" :param="`coder`"></list-render>
    </div>
  </article>
</template>

<style lang="scss" scoped>

.coder{
    &{
        margin-top: 90px;
    }
    &__title {
    @media (min-width: 576px) {
      margin-bottom: 50px;
    }
    @media (max-width: 576px) {
      margin-bottom: 25px;
    }
  }
}

</style>
