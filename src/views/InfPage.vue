<script>
import AboutBlock from "@/components/UI/block/inf/AboutBlock.vue";
import PermitionBlock from "@/components/UI/block/inf/PermitionBlock.vue";
import CoderBlock from "@/components/UI/block/inf/CoderBlock.vue";
import ServiceBlock from "@/components/UI/block/inf/ServiceBlock.vue";
import FeedBlock from "@/components/UI/block/inf/FeedBlock.vue";

export default {
  components: { AboutBlock, PermitionBlock, CoderBlock, ServiceBlock, FeedBlock },
  name: "InfPage",
};
</script>

<template>
  <my-crumbs
    :crumbs="[
      {
        title: 'Главная',
        name: 'home',
      }
    ]"
  ></my-crumbs>
  <about-block></about-block>
  <permition-block></permition-block>
  <coder-block id="coder"></coder-block>
  <service-block id="service"></service-block>
  <feed-block></feed-block>
</template>

<style lang="scss" scoped></style>
