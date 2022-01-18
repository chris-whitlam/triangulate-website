<template>
  <div id="hero">
    <div class="triangles-container">
      <Triangle class="triangle2" :rotation="-25" :color="'#0B2059'" />
      <Triangle class="triangle3" :rotation="-10" :color="'#99ADE1'" />
      <Triangle class="triangle4" :rotation="-20" :color="'#64A6E2'" />
      <Triangle class="triangle5" :rotation="5" :color="'#37425C'" />
      <Triangle class="triangle6" :rotation="30" :color="'#476F94'" />
    </div>
    <div class="logo-container">
      <img
        class="logo"
        alt="Triangulate logo"
        src="../../assets/word-logo.png"
      />
      <Triangle class="triangle1" :rotation="40" />
    </div>
    <div class="content">
      <div class="content-left">
        <h1>Puzzle your brain</h1>
        <h2>"An amazing game"</h2>
        <img
          class="google-play-download"
          alt="Get it on Google Play"
          src="../../assets/google-play-download.png"
        />
      </div>
      <div class="content-right">
        <Carousel class="carousel" :slides="slides" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Triangle from "../atoms/Triangle.vue";
import Carousel from "../molecules/Carousel.vue";

export default defineComponent({
  components: {
    Triangle,
    Carousel,
  },
  data() {
    return {
      slides: [
        "main-menu.png",
        "level-1.png",
        "level-select.png",
        "level-4.png",
        "level-complete.png",
      ],
    };
  },
});
</script>

<style scoped>
h1,
h2 {
  margin-bottom: 0;
  z-index: 10;
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

.carousel {
  position: relative;
  z-index: 10;
  overflow: hidden;
  width: min(70vw, 600px);
  height: auto;
  margin-top: 5vw;
}

#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vw;
  max-height: 1700px;
  max-width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0vh 5vw 0 5vw;
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

.logo-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.logo {
  position: inherit;
  z-index: 10;
  width: min(90%, 850px);
  height: auto;
  overflow: hidden;
}

.google-play-download {
  width: min(70%, 500px);
  height: auto;
  margin-top: 20px;
  z-index: 10;
  filter: drop-shadow(2px 2px 2px black);
}

.hero-image {
  z-index: 10;
  width: min(25rem, 90%);
  height: auto;
  margin-top: 60px;
}

.triangles-container {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.triangle1 {
  position: absolute;
  top: -150%;
  left: -12%;
  z-index: 0;
  width: 60%;
  height: auto;
}

.triangle2 {
  position: absolute;
  z-index: 0;
  top: 50vh;
  right: -10vw;
  width: min(80%, 800px);
  height: auto;
}

.triangle3 {
  position: absolute;
  z-index: 0;
  right: 0vw;
  top: -15vh;
  width: min(60%, 450px);
  height: auto;
}

.triangle4 {
  position: absolute;
  z-index: 0;
  right: -20vw;
  top: 15vh;
  width: min(70%, 400px);
  height: auto;
}

.triangle5 {
  position: absolute;
  z-index: 0;
  left: -10vw;
  top: 30vh;
  width: min(50%, 550px);
  height: auto;
}

.triangle6 {
  position: absolute;
  z-index: 0;
  top: max(100vw, 500px);
  left: -50px;
  width: min(45%, 600px);
  height: auto;
}

@media (min-width: 1226px) {
  #hero {
    height: 210vw;
    max-height: 950px;
  }
  .content {
    flex-direction: row;
    align-content: center;
    padding-top: 50px;
  }

  .carousel {
    position: relative;
    z-index: 10;
    width: 450px;
    margin-top: 2vw;
  }

  .hero-image {
    width: auto;
    height: 900px;
    margin-top: 60px;
  }

  .logo-container {
    position: block;
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

  .triangle3 {
    width: 500px;
  }

  .triangle4 {
    width: 400px;
    top: 200px;
    right: -1vw;
  }

  .triangle5 {
    width: 35vw;
    max-width: 700px;
    top: 0 !important;
    bottom: -5vw;
    right: -5vw;
  }

  .triangle6 {
    right: 60vw;
    top: 50vh;
    width: 40vw;
  }
}
</style>
