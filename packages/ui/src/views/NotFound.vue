<template>
  <div id="not-found">
    <h1>404</h1>
    <h2>We couldn't find the page you were looking for</h2>
    <p>Could one of these links be what you're looking for?</p>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/faq">FAQ</router-link></li>
      <li><router-link to="/terms">Terms &amp; Conditions</router-link></li>
      <li><router-link to="/privacy">Privacy Policy</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
#not-found {
  margin: 0 5% 10% 5%;
}

h2 {
  text-align: center;
}

li {
  line-height: 2em;
}

@media (min-width: 1000px) {
  #not-found {
    text-align: left;
    margin: 0 auto;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
