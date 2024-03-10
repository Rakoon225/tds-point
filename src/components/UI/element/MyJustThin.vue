<script>
export default {
  name: "MyJustThin",
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
    font-weight: 300;
    text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.97);

    @media (min-width: 768px) {
      font-size: 17px;
    }

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
}
</style>
