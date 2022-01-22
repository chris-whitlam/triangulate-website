<template>
  <Hero />
  <Features />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "../components/organisms/Hero.vue";
import Features from "../components/organisms/Features.vue";

export default defineComponent({
  components: {
    Hero,
    Features,
  },
});
</script>
