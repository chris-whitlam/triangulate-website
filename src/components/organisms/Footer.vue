<template>
  <footer>
    <a class="nav-link" href="https://www.chris-whitlam.dev">ChrisWhitlamDev</a>
    <nav>
      <router-link class="nav-link" to="/privacy"> Privacy Policy </router-link>
      <router-link class="nav-link" to="/terms-of-use">
        Terms of Use
      </router-link>
    </nav>
    <p>© Christopher Whitlam | {{ date }}</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      date: new Date().getFullYear().toString(),
    };
  },
});
</script>

<style scoped>
footer {
  background-color: #242a40;
  max-width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2vh 1vw;
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
