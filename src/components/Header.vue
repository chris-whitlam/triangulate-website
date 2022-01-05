<template>
  <header>
    <img class="logo" alt="Triangulate logo" src="../assets/logo.png" />
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Header extends Vue {}
</script>

<style scoped>
header {
  background-color: #242a40;
  padding: 10px;
  height: 5vh;
}

.logo {
  width: auto;
  height: 100%;
}
</style>
