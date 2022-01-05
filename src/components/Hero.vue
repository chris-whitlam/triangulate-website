<template>
  <div class="container">
    <img class="logo" alt="Triangulate logo" src="../assets/word-logo.png" />
    <h1>Puzzle your brain</h1>
    <h2>"An amazing game"</h2>
    <img
      class="google-play-download"
      alt="Get it on Google Play"
      src="../assets/google-play-download.png"
    />
    <img class="hero-image" alt="Game Screenshot" src="../assets/test.png" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Hero extends Vue {}
</script>

<style scoped>
h1,
h2 {
  margin-bottom: 0;
}

h1 {
  font-size: min(8vw, 60px);
  color: #ccd322;
  text-shadow: 2px 2px #000000dc;
}

h2 {
  font-size: min(5vw, 40px);
  color: #242a40;
}

.container {
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: min(80%, 700px);
  height: auto;
}

.google-play-download {
  width: min(65%, 450px);
  height: auto;
  margin-top: 20px;
}

.hero-image {
  width: min(70%, 450px);
  height: auto;
  margin-top: 20px;
}
</style>
