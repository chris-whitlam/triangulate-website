<template>
  <footer></footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>

<style scoped>
footer {
  background-color: #242a40;
  height: 6vh;
  width: 100%;
}
</style>
