<script>
import { RouterView } from "vue-router";
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  components: { HeaderApp, FooterApp },
  methods: {
    isMain(){
      if(this.$route.name == 'home'){
        return true
      }else{
        return false
      }
    },
    isGradient(){
      if(this.$route.name != 'home'){
        return true
      }else{
        return false
      }
    }
  },
};
</script>

<template>
  <div
    class="wrapper"
    :class="{
      'wrapper-black': isMain(),
      'wrapper-gradient': isGradient()
    }"
  >
    <header-app></header-app>
    <main>
      <router-view></router-view>
    </main>
    <footer-app></footer-app>
  </div>
</template>

<style lang="scss">
@use "assets/styles/vars.scss" as v;
@use "assets/styles/class.scss" as c;

html {
  height: 100%;
  scroll-snap-type: proximity;
  scroll-behavior: smooth;
}

* {
  padding: 0;
  margin: 0;
}

body {
  background-attachment: fixed;
  box-sizing: border-box;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

.wrapper {
  &-gradient {
    background-image: v.$grey;
  }
  &-black {
    background-color: black;
  }
}
</style>
