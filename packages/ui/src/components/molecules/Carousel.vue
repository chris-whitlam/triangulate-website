<template>
  <div>
    <img
      class="android-frame"
      sizes="(max-width: 1112px) 70vw, 1112px"
      srcset="
        ../../assets/img/android-frame/android-frame_200.png   200w,
        ../../assets/img/android-frame/android-frame_445.png   445w,
        ../../assets/img/android-frame/android-frame_611.png   611w,
        ../../assets/img/android-frame/android-frame_720.png   720w,
        ../../assets/img/android-frame/android-frame_944.png   944w,
        ../../assets/img/android-frame/android-frame_1043.png 1043w,
        ../../assets/img/android-frame/android-frame_1112.png 1112w
      "
      src="../../assets/img/android-frame/android-frame_1112.png"
      alt=""
    />

    <div class="carousel-slide-container">
      <CarouselSlide
        class="carousel-slide"
        v-for="(slide, index) in slides"
        :key="slide.name"
        :index="index"
        :visibleSlide="visibleSlide"
        :slide="slide"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CarouselSlide, { Slide } from "../atoms/CarouselSlide.vue";

export default defineComponent({
  props: {
    slides: {
      required: true,
      type: Array as PropType<Slide[]>,
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
</style>
