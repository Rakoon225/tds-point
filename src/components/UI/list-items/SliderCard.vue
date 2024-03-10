<script>
export default {
  name: "SliderCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <article class="slider-card feed" v-if="this.item.type == 'feed'">
    <div class="slider-card__container">
      <section class="slider-card__user">
        <img
          :src="
            require(`@/assets/content/img/inf/feed/avatar${item.item.id}.jpg`)
          "
          alt="аватар"
          class="slider-card__avatar"
        />
        <div class="slider-card__inf">
          <my-just-thin>{{ item.item.date }}</my-just-thin>
          <my-just-title>{{ item.item.user }}</my-just-title>
        </div>
      </section>
      <my-just-desc class="slider-card__text">{{
        item.item.feedback
      }}</my-just-desc>
    </div>
  </article>

  <article class="slider-card portfolio" v-if="this.item.type == 'portfolio'">
    <div class="slider-card__container">
      <div class="slider-card__text">
        <my-just-title class="slider-card__title">{{
          item.item.title
        }}</my-just-title>
        <my-just-thin
          >ссылка на сайт:
          <a :href="item.item.link" class="slider-card__link">{{
            item.item.link
          }}</a></my-just-thin
        >
      </div>
      <div class="slider-card__img-container">
        <img
          :src="
            require(`@/assets/content/img/coder/slider/${item.item.id}.jpg`)
          "
          alt="изображение сайта"
          class="slider-card__img"
        />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
$avatar__size: 80px;
$large-screen: 1024px;
$medium-screen: 768px;
$small-screen: 576px;
$white: rgba(255, 255, 255, 1);
$gradient-core: #353535;

.slider-card {
  display: flex;
  justify-content: center;
  width: 100vw;

  &__container {
    display: flex;
    flex-direction: column;
    border: 1px solid $white;
    border-radius: 5px;
    background: linear-gradient(0deg, $gradient-core, $gradient-core),
      linear-gradient(0deg, $white, $white);

    @media (max-width: $small-screen) {
      max-width: none;
      width: 100%;
      border-left: none;
      border-right: none;
      border-radius: 0;
      padding: 25px 0;
    }
  }

  &__text {
    overflow-y: auto;
    @media (max-width: $large-screen) {
      align-self: center;
      max-width: 600px;
    }
  }

  &__avatar {
    width: $avatar__size;
    height: $avatar__size;
    border-radius: 25px;
    object-fit: cover;
  }

  &__link {
    text-decoration: underline;
  }
}

.feed .slider-card {
  &__container {
    row-gap: 25px;
    width: 1000px;
    height: 300px;
    padding: 30px;
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: flex-start;
  }
  &__inf {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
  }

  &__text {
    max-height: 200px;
    max-width: 800px;
  }
}

.portfolio .slider-card {
  &__container {
    row-gap: 15px;
    width: 100vh;
    padding: 10px;
    @media (max-width: $small-screen) {
      row-gap: 5px;
      padding: 20px 0;
    }
  }
  &__img-container {
    width: 90%;
    overflow: hidden;
    position: relative;
    align-self: center;
    border-radius: 5px;

    @media (min-width: $medium-screen) {
      height: 500px;
    }
    @media (max-width: $medium-screen) {
      height: 250px;
    }
  }
  &__img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: brightness(80%);
  }
  &__text {
    padding: 10px;
  }
  &__title {
    margin-bottom: 4px;
  }
}
</style>
