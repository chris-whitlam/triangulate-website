<template>
  <header>
    <router-link class="logo" to="/">
      <img class="logo" alt="Triangulate logo" src="../../assets/logo.png" />
    </router-link>
    <nav>
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/contact">Contact</router-link>
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
  z-index: 20;
}

nav {
  margin-left: auto;
  text-align: right;
  font-size: 120%;
  text-decoration: none;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

a {
  margin-right: 7vw;
}

.logo {
  width: auto;
  height: 100%;
}

.logo:hover {
  transform: rotate(360deg);
}

@media (min-width: 1226px) {
  nav {
    font-size: 160%;
  }
}
</style>
