<template>
  <footer>
    <a class="nav-link" href="https://www.chris-whitlam.dev">ChrisWhitlamDev</a>
    <nav>
      <router-link class="nav-link" to="/privacy-policy">
        Privacy Policy
      </router-link>
      <router-link class="nav-link" to="/terms-of-use">
        Terms of Use
      </router-link>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Footer extends Vue {}
</script>

<style scoped>
footer {
  background-color: #242a40;
  height: 8vh;
  max-width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1vh 1vw;
}

nav {
  display: flex;
  justify-content: space-between;
}

.nav-link {
  color: white;
  text-align: center;
  width: fit-content;
  padding: 0 10px;
}
</style>
