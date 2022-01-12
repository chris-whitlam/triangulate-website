<template>
  <header>
    <img class="logo" alt="Triangulate logo" src="../assets/logo.png" />
    <nav>
      <a>About</a>
      <a>Contact</a>
    </nav>
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
  height: 5%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  align-items: center;
}

nav {
  color: white;
  margin-left: auto;
  text-align: right;
  font-size: 120%;
}

a {
  margin-right: 7vw;
}

.logo {
  width: auto;
  height: 100%;
}

@media (min-width: 1226px) {
  nav {
    font-size: 160%;
  }
}
</style>
