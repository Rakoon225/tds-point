<script>
export default {
  name: "Hello-Block",
  methods: {
    returnData(param) {
      return this.$parent.returnData(param);
    }
  }
};
</script>

<template>
  <div class="hello">
    <div class="hello__container">
      <my-title class="hello__title">{{ returnData("title") }}</my-title>
      <my-just-title class="hello__description">{{
        returnData("description")
      }}</my-just-title>
    </div>
    <img src="@/assets/content/img/coder/proxy.webp" alt="фоновое изображение кода" class="hello__back" />
  </div>
</template>

<style lang="scss" scoped>
.hello {
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    height: 50vh;
    position: relative;
  }

  &__container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__back{
    position: absolute;
    object-fit: cover;
    width: 100vw;
    height: 100%;
    z-index: -1;
    filter: brightness(0.22);
  }

  &__description{
    font-weight: 300 !important;
    @media(max-width: 768px){
        font-size: 18px !important;
        margin-top: 5px;
    }

  }

}
</style>
