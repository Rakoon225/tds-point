<script>
export default {
  name: "MyJustTitle",
};
</script>

<template>
  <h4 class="title"><slot></slot></h4>
</template>

<style lang="scss" scoped>
.title {
  & {
    font-family: "Montserat";
    color: #fff;
    font-weight: 400;
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.97);

    @media (min-width: 768px) {
      font-size: 25px;
    }

    @media (max-width: 768px) {
      font-size: 23px;
      line-height: 23px;
    }
  }
}
</style>
