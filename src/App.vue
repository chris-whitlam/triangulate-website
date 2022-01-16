<template>
  <Header />
  <Home />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import Home from "./components/pages/Home.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    Header,
    Home,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style type="text/css">
@import url("https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:wght@300;400;500;700&family=Roboto:wght@300;400;900&display=swap");

html,
body {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #d2d2d2;
  max-width: 100vw;
  overflow-x: hidden;
}

#app {
  font-family: "Quantico", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
