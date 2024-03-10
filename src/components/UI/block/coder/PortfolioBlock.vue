<script>
export default {
  name: "PortfolioBlock",
};
</script>

<template>
  <my-title class="title">Портфолио</my-title>
  <my-slider :param="'portfolio'" :list="$store.state.coder[$route.params.param].portfolio"></my-slider>
</template>

<style lang="scss" scoped>
.title{
  margin-bottom: 30px;
  margin-top: 50px;
}</style>
