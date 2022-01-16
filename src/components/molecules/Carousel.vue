<template>
  <div>
    <img
      class="android-frame"
      :src="`${require(`../../assets/img/android-frame2.png`)}`"
      alt=""
    />
    <div class="carousel-slide-container">
      <CarouselSlide
        class="carousel-slide"
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlide="visibleSlide"
      >
        <img
          class="slide-img"
          :src="`${require(`../../assets/img/${slide}`)}`"
          alt=""
        />
      </CarouselSlide>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CarouselSlide from "../atoms/CarouselSlide.vue";

export default defineComponent({
  props: {
    slides: {
      required: true,
      type: Array as PropType<string[]>,
    },
    autoPlay: {
      required: false,
      type: Boolean,
      default: true,
    },
    autoPlaySeconds: {
      required: false,
      type: Number,
      default: 5,
    },
  },
  components: { CarouselSlide },
  data() {
    return {
      visibleSlide: 0,
    };
  },
  methods: {
    next() {
      this.visibleSlide =
        this.visibleSlide + 1 >= this.slides.length ? 0 : this.visibleSlide + 1;
    },
  },
  mounted() {
    if (!this.autoPlay) {
      return;
    }

    window.setInterval(() => {
      this.next();
    }, this.autoPlaySeconds * 1000);
  },
});
</script>

<style scoped>
.android-frame {
  width: 100%;
  height: auto;
  z-index: 50;
}

.carousel-slide {
  position: absolute;
  z-index: -1;
  width: 98%;
  top: 4%;
  left: 1%;
}

.slide-img {
  width: 100%;
  height: auto;
}
</style>
