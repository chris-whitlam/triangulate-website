<template>
  <Header />
  <div class="main">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/organisms/Header.vue";
import Footer from "./components/organisms/Footer.vue";

@Options({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
html,
body {
  margin: 0 0 0 0 !important;
  padding: 0 !important;
  overflow-x: hidden;
  max-width: 100vw;
  background-color: #e7e7e7;
}

h1 {
  text-align: center;
}

#app {
  font-family: "Quantico", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100vw;
}

.main {
  max-width: 100vw;
  margin-top: 15vh;
  min-height: 73vh;
}

@media (min-width: 700px) {
  .main {
    margin-top: 12vh;
    min-height: 76vh;
  }
}
</style>
