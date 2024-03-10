<script>
export default {
  name: "PermitionCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer1 = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animation');
                    },index * 300); 
                }
            });
        }, options);

        const card_animation = document.querySelectorAll('.card_animation');
        card_animation.forEach(card_animationElement => observer1.observe(card_animationElement));
    }
};
</script>

<template>
  <article class="permition-card card_animation">
    <div class="permition-card__container">
      <img
        :src="require(`@/assets/content/img/inf/permition/permition${item.item.id+1}.webp0`)"
        alt="иконка"
        class="permition-card__img"
      />
      <div class="permition-card__body">
        <my-just-title class="permition-card__title">{{ item.item.title }}</my-just-title>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.animation{
    opacity: 100 !important;
    filter: blur(0px) !important;
  }
.permition-card {
  & {
    transition: all 3s;;
    filter: blur(7px);
    opacity: 0;
    @media (min-width: 576px) {
        max-width: 300px;
        min-width: 300px;
    }

    @media (max-width: 576px) {
        min-width: none;
        max-width: none;
        width: 100%;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    padding: 15px 50px;

    border: 5px solid #fff;
    border-radius: 15px;

    @media (max-width: 576px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
  }

  &__img {
    position: relative;

    background-color: #fff;
    border-radius: 25%;

    @media (min-width: 576px) {
      width: 100px;
      padding: 15px;
      top: -60px;
    }
    @media (max-width: 576px) {
      width: 100px;
      padding: 15px;
      top: -60px;
    }
  }

  &__title{
    position: relative;
    top: -20px;
  }
}
</style>
