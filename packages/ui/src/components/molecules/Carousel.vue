<template>
  <div>
    <Image class="android-frame" :image="images.androidFrame" />
    <div class="carousel-slide-container">
      <CarouselSlide
        class="carousel-slide"
        v-for="(slide, index) in slides"
        :key="slide.name"
        :index="index"
        :visibleSlide="visibleSlide"
        :image="slide"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CarouselSlide, Image } from "../atoms/index";
import images, { ImageConfig } from "../../assets/img/images";

export default defineComponent({
  props: {
    slides: {
      required: true,
      type: Array as PropType<ImageConfig[]>,
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
  components: { CarouselSlide, Image },
  data() {
    return {
      visibleSlide: 0,
      images,
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
</style>
