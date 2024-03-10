<script>
import "intersection-observer";
export default {
  name: "BlockApp",
  props: {
    item: {
      type: Object,
      required: true,
    },
    totalCount: {
      type: Number,
      required: false,
    },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate__fadeInDown");
          }, 100); // Задержка
        }
      });
    }, options);

    const titleElements = document.querySelectorAll(".service__title");
    titleElements.forEach((titleElement) => observer.observe(titleElement));

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-gradient");
          }, 1300); // Задержка
        }
      });
    }, options);

    const buttonElement = document.querySelectorAll(".service__button");
    buttonElement.forEach((buttonElement) => observer2.observe(buttonElement));

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate__bounceInUp");
          }, 2000); // Задержка
        }
      });
    }, options);

    const scrollElement = document.querySelectorAll(".service__scroll");
    scrollElement.forEach((scrollElement) => observer3.observe(scrollElement));
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
    goInf() {
      this.$router.push({
        name: "inf",
      });
    },
  },
};
</script>

<template>
  <div class="service" :id="`block_${item.index}`">
    <div class="service__container container --left">

      <video class="service__animation service__animation--display" autoplay muted loop playsinline>
        <source
          :src="
            require(`/src/assets/content/animations/original/${item.index + 1}.webm`)
          "
          type="video/webm"
        />
        <source
          :src="require(`/src/assets/content/animations/original/${item.index + 1}.mp4`)"
          type="video/mp4"
        />
      </video>

      <video class="service__animation service__animation--phone" autoplay muted loop playsinline>
        <source
          :src="
            require(`/src/assets/content/animations/${item.index + 1}.webm`)
          "
          type="video/webm"
        />
        <source
          :src="require(`/src/assets/content/animations/${item.index + 1}.mp4`)"
          type="video/mp4"
        />
      </video>


      <div class="service__body">
        <span class="service__title animate__animated">{{
          item.item.title
        }}</span>
        <my-button
          v-if="item.item.name != 'main'"
          class="service__button"
          @click="goSub(item.item.id)"
          ><span>Подробнее</span></my-button
        >
        <my-button v-else class="service__button" @click="goInf"
          ><span>Подробнее</span></my-button
        >
      </div>

      <a :href="`#block_${0}`" v-if="item.listLength - 1 == item.index">
        <div class="service__scroll">
          <img
            class="animate__animated animate__shakeY animate__infinite infinite"
            src="@/assets/content/icons/scroll-rotated.svg"
            alt="scroll"
          />
          <span>наверх</span>
        </div>
      </a>
      <a :href="`#block_${item.index + 1}`">
        <div
          v-if="item.index + 1 != $store.state.blocks.length"
          class="service__scroll"
        >
          <img
            class="animate__animated animate__shakeY animate__infinite infinite"
            src="@/assets\content\icons\scroll.svg"
            alt="scroll"
          />
          <span>пролестните вниз</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/vars.scss" as v;

.service {
  &__container {
    height: 100vh;
    position: relative;

    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }

  .service__animation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;

    @media (min-width: 768px) {
      width: 50%;

      &--display{
        display: block;
      }
      &--phone{
        display: none;
      }
    }

    @media (max-width: 768px) {
      width: 80%;

      &--display{
        display: none;
      }
      &--phone{
        display: block;
      }
    }

    @media (max-width: 576px) {
      top: 40vh;
      width: 100%;
    }


  }

  &__scroll {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 5;

    font-family: "Montserat";
    font-weight: 500;
    color: #fff;
    font-size: 30px;

    padding: 5px;
    bottom: 30px;
    right: 0px;
    cursor: pointer;

    opacity: 0;
    transition: opacity 3s;

    &:hover {
      color: #cccccc;
    }

    &:active {
      color: #a4a4a4;
    }

    @media (max-width: 1024px) {
      font-size: 25px;
    }

    @media (max-width: 768px) {
      right: 20px;
      font-size: 22px;

      & img {
        width: 45px;
      }
    }

    @media (max-width: 576px) {
      right: 20px;

      font-size: 18px;

      & img {
        width: 35px;
      }
    }
  }

  &__title {
    display: block;

    font-family: "Montserat";
    font-weight: 500;
    max-width: 1200px;
    font-size: 120px;
    line-height: 120px;
    color: #fff;
    cursor: default;
    text-shadow: -5px 0px 7px black;
    transition: opacity 1s;
    opacity: 0;

    @media (max-width: 1024px) {
      line-height: 90px;
      font-size: 75px;
    }

    @media (max-width: 768px) {
      font-size: 95px;
      line-height: 85px;
    }

    @media (max-width: 576px) {
      font-size: 46px;
      line-height: 56px;
      padding-right: 10px;
    }

    @media (max-width: 375px) {
      font-size: 40px;
      line-height: 46px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    gap: 20px;

    bottom: 20%;
    left: 15px;

    @media (max-width: 576px) {
    }
  }

  &__button {
    padding: 10px 17px;
    max-width: 230px;
    font-size: 25px;
    border-radius: 10px;
  }

  .animate-gradient {
    background: linear-gradient(
      149deg,
      rgba(24, 187, 156, 1) 0%,
      hsl(0, 0%, 0%) 0%,
      hsl(0, 0%, 21%) 65%,
      hsl(0, 0%, 27%) 100%
    );
    animation: gradient 1s infinite linear; // 1s - скорость анимации
    background-size: 400%; // Можно менять и подбирать интенсивность
    animation-iteration-count: 1;
    transition: background-size 0.3s;
  }
  .animate-gradient:hover {
    background-size: 100%; // Можно менять и подбирать интенсивность
  }

  @keyframes gradient {
    0% {
      background-position: 80% 0%;
    }
    50% {
      background-position: 20% 100%;
    }

    50% {
      background-position: 20% 100%;
    }
    0% {
      background-position: 80% 0%;
    }
  }

  .animate__bounceInUp {
    opacity: 1;
  }
  .animate__shakeY {
    --animate-duration: 6s;
  }
}
</style>
