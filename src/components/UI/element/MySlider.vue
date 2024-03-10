<script>
export default {
  name: "MySlider",
  props: {
    param: {
      type: String,
      require: true,
    },
    list: {
      type: Array,
      require: true,
    },
  },
  mounted() {
    this.width = document.querySelector(".slider-card").clientWidth;
    this.points = document.querySelectorAll(".slider__point");
    this.returnIndex(0);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animation");
          }, index * 300);
        }
      });
    }, options);

    const slider = document.querySelectorAll(".slider");
    slider.forEach((slider) => observer1.observe(slider));
  },
  data() {
    return {
      position: 0,
      width: false,
      points: [],
    };
  },
  methods: {
    returnIndex() {
      let id = -(this.position / this.width);
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].classList.remove("point-active");
        if (i === id) {
          this.points[i].classList.add("point-active");
        }
      }
    },
    slidePrev() {
      if (!this.position - this.width == `-${this.width}`) {
        this.position += this.width;
      }
      document.querySelector(
        ".slider__trap"
      ).style.transform = `translateX(${this.position}px)`;
      this.returnIndex();
    },
    slideNext() {
      let length = document.querySelectorAll(".slider-card").length;
      if (this.position - this.width > -this.width * length) {
        this.position -= this.width;
      }

      document.querySelector(
        ".slider__trap"
      ).style.transform = `translateX(${this.position}px)`;
      this.returnIndex();
    },
    toSlide(evt) {
      let point = evt.target;
      let id;
      for (let i = 0; i < this.points.length; i++) {
        if (point === this.points[i]) {
          id = i;
        }
      }
      if (id || id === 0) {
        this.position = 0;
        this.position = -Number(this.width) * Number(id);

        document.querySelector(
          ".slider__trap"
        ).style.transform = `translateX(${this.position}px)`;
        this.returnIndex();
      }
    },
  },
};
</script>

<template>
  <article class="slider">
    <div class="slider__container">
      <div class="slider__trap">
        <list-render
          :param="`slider`"
          :type="'feed'"
          :list="list"
          v-if="param == 'feed'"
        ></list-render>
        <list-render
          :param="`slider`"
          :type="'portfolio'"
          :list="list"
          v-if="param == 'portfolio'"
        ></list-render>
      </div>
    </div>

    <img
      src="@/assets\content\icons\arrow-right.png"
      class="slider__row slider__row-left"
      @click="slidePrev"
    />
    <img
      src="@/assets\content\icons\arrow-right.png"
      class="slider__row slider__row-right"
      @click="slideNext"
    />
    <div class="slider__points">
      <div class="slider__point" v-for="item in list" @click="toSlide"></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.animation {
  opacity: 100 !important;
  filter: blur(0px) !important;
}
.slider {
  transition: all 1s;
  opacity: 0;
  filter: blur(4px);

  & {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      height: 600px;
    }
    @media (max-width: 768px) {
      height: 400px;
    }
  }
  &__container {
    overflow: hidden;
  }
  &__trap {
    position: relative;
    inset: 0;
    display: flex;
    transition: 0.8s;
  }
  &__row {
    cursor: pointer;
    position: absolute;
    z-index: 3;
    padding: 150px 0;

    &:hover {
      transition: 0.4s;
      filter: brightness(80%);
    }

    &:active {
      transition: 0.2s;
      filter: brightness(70%);
    }

    @media (max-width: 576px) {
      width: 30px;
    }
  }

  &__row-left {
    top: 50%;
    left: 0;
    transform: translateY(-50%) rotate(180deg);
  }

  &__row-right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  &__points {
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 5px;
    bottom: -30px;
    right: 50px;
    left: 50px;
    margin: 0 auto;
    z-index: 3;
  }

  &__point {
    background-color: rgba($color: #fff, $alpha: 0.5);
    border-radius: 30%;
    width: 14px;
    height: 10px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: rgba($color: #fff, $alpha: 0.7);
    }

    &.point-active {
      background-color: rgba($color: #fff, $alpha: 1);
    }
  }
}
</style>
