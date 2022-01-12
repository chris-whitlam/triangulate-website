<template>
  <div class="container">
    <img class="logo" alt="Triangulate logo" src="../assets/word-logo.png" />
    <div class="content">
      <div class="content-left">
        <h1>Puzzle your brain</h1>
        <h2>"An amazing game"</h2>
        <img
          class="google-play-download"
          alt="Get it on Google Play"
          src="../assets/google-play-download.png"
        />
      </div>
      <div class="content-right">
        <img
          class="hero-image"
          alt="Game Screenshot"
          src="../assets/test.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Triangle } from "../assets/triangle.svg";

@Options({})
export default class Hero extends Vue {}
</script>

<style scoped>
h1,
h2 {
  margin-bottom: 0;
}

h1 {
  font-size: min(9vw, 60px);
  color: #ccd322;
  text-shadow: 2px 2px #000000dc;
}

h2 {
  font-size: min(6vw, 40px);
  color: #242a40;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  height: 210vw;
  max-height: 1200px;
  overflow: hidden;
  padding: 0 3vw;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 5vw 0 5vw;
}

.content-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.content-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: min(95%, 850px);
  height: auto;
}

.google-play-download {
  width: min(70%, 500px);
  height: auto;
  margin-top: 20px;
}

.hero-image {
  width: min(25rem, 90%);
  height: auto;
  margin-top: 60px;
}

@media (min-width: 1226px) {
  .container {
    height: 210vw;
    max-height: 900px;
  }
  .content {
    flex-direction: row;
    align-content: center;
    padding-top: 50px;
  }

  .hero-image {
    width: auto;
    height: 900px;
    margin-top: 60px;
  }

  .content-left {
    margin-top: 0;
    margin-bottom: 250px;
    margin-right: 50px;
  }

  .content-right {
    margin-top: 0;
    margin-left: 50px;
  }
}
</style>
