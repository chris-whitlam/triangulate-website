<template>
  <transition name="left">
    <div v-show="visibleSlide === index" class="carousel-slide">
      <Image className="slide-img" :image="image" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Image from "./Image.vue";
import { ImageConfig } from "../../assets/img/images";

export default defineComponent({
  props: {
    visibleSlide: {
      type: Number,
    },
    index: {
      type: Number,
    },
    image: {
      type: Object as PropType<ImageConfig>,
      required: true,
    },
  },
  components: {
    Image,
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
