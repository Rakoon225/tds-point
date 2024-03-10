<script>
export default {
  name: "ServiceCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goSub(param) {
      this.$router.push({
        name: "sub",
        params: {
          service: param,
        },
      });
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
                        entry.target.classList.add('animation_card');
                    },index * 300); 
                }
            });
        }, options);

        const animation = document.querySelectorAll('.animation');
        animation.forEach(animation => observer1.observe(animation));
    }
};
</script>

<template>
  <article class="service-card animation" v-if="item.item.name != 'main'">
    <div class="service-card__container">
      <div class="service-card__body">
        <div class="service-card__text">
          <my-just-title>{{ item.item.title }}</my-just-title>
          <my-just-desc>{{ item.item.description }}</my-just-desc>
        </div>
        <my-just-button @click="goSub(item.item.id)">подробнее</my-just-button>
      </div>
      <img
        alt="изображение услуги"
        :src="require(`@/assets/content/img/inf/service/service${item.item.id}.jpg`)"
        class="service-card__img"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .animation_card{
    opacity: 100 !important;
    filter: blur(0px) !important;
  }
  .animation{
    opacity: 0;
    filter: blur(4px);
    transition: all 2s;
  }
.service-card {
  & {
    position: relative;
    overflow: hidden;

    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.25);
    background: linear-gradient(0deg, #363636, #363636),
      linear-gradient(0deg, #a2a2a2, #a2a2a2);

    @media (max-width: 576px) {
        height: 250px;

        border: 1px solid rgba(255, 255, 255, 1);
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    padding: 25px;
    max-width: 45%;
    z-index: 1;

    @media (max-width: 768px) {
      max-width: 65%;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-bottom: 50px;
  }

  &__img {
    object-fit: cover;
    @media (min-width: 768px) {
      height: 300px;
      width: 350px;
    }
    @media (max-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: none;
      width: none;
      filter: brightness(45%);

      z-index: 0;
    }
  }
}
</style>
