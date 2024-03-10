<script>
export default {
  name: "",
  methods: {
    goInf() {
      this.$router.push({ name: "inf" });
    },
    goInfProg() {
      this.$router.push({ name: "inf" }).then(() => this.$nextTick(() => {
        const element = document.getElementById('coder');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }));
    },
    goInfService() {
      this.$router.push({ name: "inf" }).then(() => this.$nextTick(() => {
        const element = document.getElementById('service');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }));
    },
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <nav class="footer__links">
        <span class="footer__link" @click="goInfService">Услуги</span>
        <span class="footer__link">Новости</span>
        <span class="footer__link" @click="goInf">О нас</span>
        <span class="footer__link" @click="goInfProg">Наши программисты</span>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/styles/fonts.scss';

.footer {
  & {
    height: 150px;
    margin-top: 70px;
    border-top: 1px solid rgba($color: #fff, $alpha: 0.5);
  }

  &__container {
    padding-top: 20px;
    max-width: 100vw;
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    padding-top: 10px;
  }

  &__link {
    color: rgba($color: #fff, $alpha: 0.7);
    font-family: "Montserat";
    font-weight: 500;
    font-size: 15px;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: rgba($color: #fff, $alpha: 0.9);
    }
    &:active {
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}
</style>
