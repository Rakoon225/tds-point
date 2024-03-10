<script>
export default {
  name: "About-Coder-Block",
  methods: {
    returnData(param) {
      return this.$parent.returnData(param);
    },
  },
};
</script>

<template>
  <article class="about-coder">
    <div class="about-coder__container">
      <my-title>Обо мне</my-title>
      <div class="about-coder__card">
        <my-just-desc class="about-coder__p">{{ returnData("body") }}</my-just-desc>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as v;
.about-coder {
  & {
    display: flex;
    justify-content: center;
  }

  &__card {
    margin-top: 30px;
    background-color: v.$main;
    overflow: auto;
    border-left: 5px solid v.$white;
    max-height: 20vh;

    @media (min-width: 768px) {
      padding: 25px 30px;
      max-width: 80vw;
    }
    @media (max-width: 768px) {
      padding: 10px 20px;
      max-width: 95vw;

      border-top: 1px solid rgba($color: v.$white, $alpha: 0.5);
      border-bottom: 1px solid rgba($color: v.$white, $alpha: 0.5);
      border-left: none;
    }
  }

  &__p {
    text-align: justify;
    @media (max-width: 768px) {
      padding: 5px 0;
    }
  }
}
</style>
