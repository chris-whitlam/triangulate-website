<template>
  <div id="loading">
    <h1>Loading...</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
#loading {
  margin: 0 5% 10% 5%;
}

@media (min-width: 1000px) {
  #loading {
    text-align: left;
    margin: 0 auto;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
