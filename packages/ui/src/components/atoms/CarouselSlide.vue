<template>
  <transition name="left">
    <div v-show="visibleSlide === index" class="carousel-slide">
      <img
        class="slide-img"
        :sizes="sizes"
        :srcset="srcSet"
        :src="src"
        alt=""
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface Slide {
  name: string;
  sizes: Array<string>;
}

export default defineComponent({
  props: {
    visibleSlide: {
      type: Number,
    },
    index: {
      type: Number,
    },
    slide: {
      type: Object as PropType<Slide>,
      required: true,
    },
  },
  computed: {
    srcSet() {
      return this.slide.sizes.reduce(
        (acc: string, size: string, index: number) =>
          `${acc} ${require(`../../assets/img/${this.slide.name}/${this.slide.name}_${size}.png`)} ${size}w${
            index == this.slide.sizes.length - 1 ? "" : ","
          }`,
        ""
      );
    },
    src() {
      return `${require(`../../assets/img/${this.slide.name}/${
        this.slide.name
      }_${this.slide.sizes[this.slide.sizes.length - 1]}.png`)}`;
    },
    sizes() {
      return `(max-width: ${
        this.slide.sizes[this.slide.sizes.length - 1]
      }px) 100vw, ${this.slide.sizes[this.slide.sizes.length - 1]}px`;
    },
  },
});
</script>

<style scoped>
.slide-img {
  width: 100%;
  height: auto;
}

.left-enter-active {
  animation: leftInAnimation 0.8s ease-in-out;
}

.left-leave-active {
  animation: leftOutAnimation 0.8s ease-in-out;
}

@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
