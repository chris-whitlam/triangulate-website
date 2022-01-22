<template>
  <button><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
button {
  position: relative;
  padding: 5px 15px;
  float: left;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 600;
  color: #242a40;
  text-decoration: none;
  background-color: #ccd322;
  text-shadow: 2px 2px #aaaf1b;
  border: none;
  border-bottom: 5px solid #aaaf1b;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  width: fit-content;
}

button:hover,
button:active {
  -webkit-transform: translate(0px, 5px);
  -ms-transform: translate(0px, 5px);
  transform: translate(0px, 5px);
  border-bottom: 1px solid #aaaf1b;
}

@media (min-width: 1226px) {
  button {
    font-size: 2em;
  }
}
</style>
