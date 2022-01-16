<template>
  <transition name="left">
    <div v-show="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    visibleSlide: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
});
</script>

<style scoped>
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
