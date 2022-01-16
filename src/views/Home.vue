<template>
  <Hero />
  <Features />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Hero from "../components/organisms/Hero.vue";
import Features from "../components/organisms/Features.vue";

@Options({
  components: {
    Hero,
    Features,
  },
})
export default class Home extends Vue {}
</script>
