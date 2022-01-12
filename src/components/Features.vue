<template>
  <section></section>
  <section></section>
  <section></section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>

<style scoped>
section {
  height: 70vh;
  width: 100%;
}

section:nth-of-type(2n-1) {
  background-color: #3a518a;
}

.content {
  height: 100%;
  width: 100%;
}
</style>
