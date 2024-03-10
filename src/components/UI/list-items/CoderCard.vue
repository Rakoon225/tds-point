<script>
export default {
  name: "CoderCard",
  props: {
    item: {
      type: Object,
      require: true,
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

        const animation = document.querySelectorAll('.coder-card');
        animation.forEach(animation => observer1.observe(animation));
    },
  methods: {
    goCoder(who){
      this.$router.push({
        name: "coder",
        params: {
          param: who,
        },
      });
    }
  }
};
</script>

<template>
  <article class="coder-card">
    <div class="coder-card__container">
      <div class="coder-card__avatar">
        <img
          :src="require(`@/assets/content/img/inf/coder/avatar${item.item.id + 1}.jpg`)"
          alt="аватар"
          class="coder-card__img"
        />
        <div class="coder-card__body">
          <my-just-title>{{ item.item.title }}</my-just-title>
          <my-just-desc>{{ item.item.description }}</my-just-desc>
        </div>
      </div>
      <my-just-button class="coder-card__button" @click="goCoder(item.item.id)">портфолио</my-just-button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .animation_card{
    opacity: 100 !important;
    filter: blur(0px) !important;
  }
.coder-card {
  opacity: 0;
    filter: blur(4px);
    transition: all 1s;
  & {
    background: linear-gradient(0deg, #363636, #363636),
      linear-gradient(0deg, #a2a2a2, #a2a2a2);
    padding: 15px;
    border: 1px solid rgba(161, 161, 161, 1);

    @media (min-width: 576px) {
      min-width: 450px;
      border-radius: 10px;
    }
    @media (max-width: 576px) {
      min-width: 80%;
      border-radius: 0px;
      padding-left: 25px;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__avatar {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-bottom: 70px;

    @media (max-width: 576px) {
      padding-left: 15px;
    }
  }

  &__img {
    width: 100px;
    height: 95px;
    object-fit: cover;
    border-radius: 15px;
  }

  &__button {
    align-self: center;

    max-width: 95%;
    width: 100%;
  }
}
</style>
