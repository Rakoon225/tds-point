<script>
export default {
  name: "contact-card",
  props: {
    item: {
      type: Object,
      requires: true,
    },
  },
  data() {
    return {
      width: 1024,
    };
  },
  mounted() {
    this.documentWidth();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity_animate");
          }, 300); // Задержка
        }
      });
    }, options);

    const opacityElement = document.querySelectorAll(".contact");
    opacityElement.forEach((opacityElement) => observer1.observe(opacityElement));
  },
  methods: {
    documentWidth() {
      this.width = window.screen.width;
    },
  },
};
</script>

<template>
  <a :href="item.item.href" v-if="item.item.name == 'phone'">
    <article class="contact">
      <div class="contact__container">
        <img
          :src="require('@/assets/content/img/contacts/' + item.item.name + '.png')"
          alt="СоцСеть"
          class="contact__image"
        />
        <div class="contact__inf">
          <span class="contact__title contact__text">{{ item.item.title }}</span>
          <a
            :href="item.item.href"
            class="contact__link contact__text"
            v-if="this.width < 576"
            >{{ item.item.sub }}</a
          >
          <div class="contact__link contact__text" v-else>{{ item.item.sub }}</div>
        </div>
      </div>
    </article>
  </a>

  <a :href="item.item.href" v-if="item.item.name != 'phone'">
    <article class="contact">
      <div class="contact__container">
        <img
          :src="require('@/assets/content/img/contacts/' + item.item.name + '.png')"
          alt="СоцСеть"
          class="contact__image"
        />
        <div class="contact__inf">
          <span class="contact__title contact__text">{{ item.item.title }}</span>
          <a :href="item.item.href" class="contact__link contact__text">{{
            item.item.sub
          }}</a>
        </div>
      </div>
    </article>
  </a>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/fonts.scss';

.opacity_animate {
  opacity: 1 !important;
}
.contact {
  & {
    opacity: 0;
    transition: opacity 2s;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);

      & .contact__image {
        filter: brightness(100%);
      }

      & .contact__text {
        color: rgba($color: #fff, $alpha: 0.9);
      }
    }
  }

  &__container {
    display: flex;
    align-items: center;
    gap: 20px;

    padding: 10px;
    border-bottom: 1px solid rgba(#fff, 0.3);
  }

  &__inf {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__image {
    width: 100px;

    filter: brightness(40%);
    transition: 0.4s;

    @media (max-width: 576px) {
      width: 70px;
    }
  }

  &__title {
    font-family: "Montserat";
    font-weight: 700;
    font-size: 25px;

    @media (max-width: 576px) {
      font-size: 23px;
    }
  }

  &__link {
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  &__text {
    font-family: "Montserat";
    color: rgba(#fff, 0.9);

    transition: 0.4s;
  }
}

a {
  text-decoration: none;
}
</style>
