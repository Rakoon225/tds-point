<script>
export default {
  name: "MyJustDesc",
};
</script>

<template>
  <p class="title"><slot></slot></p>
</template>

<style lang="scss" scoped>
.title {
  & {
    font-family: "Montserat";
    color: #fff;
    font-weight: 300;
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.97);

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
