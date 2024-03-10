<script>
import HelloBlock from "@/components/UI/block/coder/HelloBlock.vue";
import AboutCoderBlock from "@/components/UI/block/coder/AboutCoderBlock.vue";
import PortfolioBlock from "@/components/UI/block/coder/PortfolioBlock.vue";

export default {
  name: "CoderPage",
  components: { HelloBlock, AboutCoderBlock, PortfolioBlock},
  methods: {
    returnData(param) {
      for (let i = 0; i < this.$store.state.coder.length; i++) {
        const element = this.$store.state.coder[i];
        if (element.id == this.$route.params.param) {
          return element[param];
        }
      }
    },
  },
};
</script>

<template>
      <my-crumbs :crumbs="[
        {
            title: 'Главная',
            name: 'home'
        },
        {
            title: 'О нас',
            name: `inf`
        }
    ]"></my-crumbs>
  <Hello-Block></Hello-Block>
  <About-Coder-Block class="block"></About-Coder-Block>
  <Portfolio-Block></Portfolio-Block>
</template>

<style lang="scss" scoped>
.block {
  & {
    margin-top: 37px;
  }
}
</style>
