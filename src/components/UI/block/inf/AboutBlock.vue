<script>
export default {
  name: "AboutVlock",
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
                        entry.target.classList.add('animation_title');
                    },index * 300); 
                }
            });
        }, options);

        const about__container = document.querySelectorAll('.about__container');
        about__container.forEach(about__container => observer1.observe(about__container));
    }
};

</script>

<template>
  <article class="about">
    <div class="about__container">
      <div class="about__inf">
        <h1 class="about__title about__span">О нас</h1>
        <p class="about__text about__span">
          Мы команда разработчиков, специализирующихся на создании функциональных и
          эстетически привлекательных веб-сайтов.
        </p>
      </div>
      <img
        src="@/assets/content/img/inf/about/design.png"
        alt="дизайн"
        class="about__img"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>

.about {
  .animation_title{
    opacity: 100 !important;
    filter: blur(0px) !important;
  }
  & {
    display: flex;
    justify-content: center;
    padding-top: 70px;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 20px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    opacity: 0;
    filter: blur(4px);
    transition: all 1s;
  }

  &__span {
    font-family: "Montserat";
    color: #fff;
    text-shadow: -2px 2px 2px rgba(0, 0, 0, 0.97);
  }

  &__title {
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 15px;
  }

  &__text {
    font-weight: 300;

    @media (min-width: 768px) {
      font-size: 19px;
      line-height: 31px;
      max-width: 490px;
    }
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 31px;
      max-width: 90vw;
    }
  }

  &__img {
    @media (min-width: 768px) {
      width: 45%;
    }
    @media (max-width: 768px) {
      width: 100%;

      position: relative;
      top: -90px;
      z-index: -1;
    }
  }
}

</style>
