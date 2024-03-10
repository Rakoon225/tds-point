<script>
export default {
  name: "MyTitle",
};
</script>

<template>
  <h2 class="title"><slot></slot></h2>
</template>

<style lang="scss" scoped>
.title {
  & {
    text-align: center;

    font-family: "Montserat";
    color: #fff;
    font-weight: 500;
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.97);

    @media (min-width: 768px) {
      font-size: 35px;
    }

    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
}
</style>
