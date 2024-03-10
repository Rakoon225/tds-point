<script>
export default {
  name: "FeedBlock",
};
</script>

<template>
  <article class="feed">
    <div class="feed__container">
      <my-title class="feed__title">отзывы</my-title>
      <my-slider class="slider" :param="'feed'" :list="$store.state.feed.main"></my-slider>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.feed {
  & {
    margin-top: 80px;
  }
  &__title {
    @media (min-width: 576px) {
      margin-bottom: 0px;
    }
    @media (max-width: 576px) {
      margin-bottom: 25px;
    }
  }
}
</style>
