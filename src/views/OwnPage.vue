<script>
import "intersection-observer";
export default {
  name: "Own-Page",
  data() {
    return {};
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
            entry.target.classList.add("opacity_animate_one");
          }, 100); // Задержка
        }
      });
    }, options);

    const ownElements = document.querySelectorAll(".own__video");
    ownElements.forEach((ownElement) => observer.observe(ownElement));
  },
};
</script>

<template>
  <my-crumbs
    :crumbs="[
      {
        title: 'Главная',
        name: 'home',
      },
      {
        title: 'Услуга',
        name: `sub`,
        param: $store.state.blocks[$route.params.service].id,
      },
      {
        title: 'Подробнее',
        name: `ownPage`,
      },
    ]"
  ></my-crumbs>
  <article class="own">
    <div class="own__container">
      <div class="own__inf">
        <div class="own__video">
          <video src="../assets/content/img/own/example.mp4" autoplay loop muted></video>
        </div>
        <my-accardion
          :list="$store.state.blocks[$route.params.service].sub[$route.params.id].tabs"
        ></my-accardion>
      </div>
      <div class="own__contacts">
        <list-render :list="$store.state.contacts" :param="'cont'"></list-render>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '../assets/styles/fonts.scss';

.own {
  &__container {
    padding: 80px 10px;
  }

  &__inf {
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  &__video {
    & video {
      border-radius: 5px;

      @media (min-width: 1024px) {
        max-width: 60vw;
      }

      @media (max-width: 1024px) {
        max-width: 100vw;
      }
    }
    opacity: 0;
    transition: all 3s;
    filter: blur(7px);
  }

  &__text {
    font-family: "Montserat";
    font-weight: 500;
    color: rgba($color: #fff, $alpha: 0.7);
    max-width: 100%;
    max-height: 400px;
    overflow-y: auto;
    padding: 5px;
    border-top: 1px solid rgba($color: #fff, $alpha: 0.5);
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.5);

    @media (min-width: 1024px) {
      font-size: 20px;
      line-height: 24px;
    }

    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 24px;
    }

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 20px;
    }
  }

  &__contacts {
    margin-top: 80px;
  }

  .opacity_animate_one {
    opacity: 100 !important;
    filter: blur(0px) !important;
  }
}
</style>
