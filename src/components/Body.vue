<template>
  <div class="main">
    <Hero />
    <Features />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "./Hero.vue";
import Features from "./Features.vue";

@Options({
  components: {
    Hero,
    Features,
  },
})
export default class Body extends Vue {}
</script>

<style scoped>
.main {
  margin-top: 7rem;
}

@media (min-width: 1226px) {
  .main {
    margin-top: 10rem;
  }
}
</style>
