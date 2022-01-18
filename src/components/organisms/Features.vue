<template>
  <div id="features">
    <Feature title="Daily Challenges">
      <p>Get new randomly generated puzzles every day</p>
      <img src="../../assets/img/daily-challenge.png" />
    </Feature>

    <Feature title="Global Leaderboards" variant="secondary">
      <p>
        Complete the daily challenge to enter in the global leaderboard. Can you
        become the best in the world?
      </p>
      <img src="../../assets/img/leaderboard.png" />
    </Feature>
    <Feature title="Over 100 Levels">
      <p>Over 100 unique puzzles to challenge your brain</p>
      <img src="../../assets/img/level-3.png" />
    </Feature>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Feature } from "../molecules";

export default defineComponent({
  components: {
    Feature,
  },
});
</script>

<style scoped>
#features {
  height: 100%;
  width: 100%;
  z-index: 10;
  position: relative;
}

img {
  height: auto;
  width: 50%;
  box-shadow: 4px 4px 5px black;
  border-radius: 8px;
}

@media (min-width: 1226px) {
  img {
    width: 25%;
    margin-top: 1em;
  }

  p {
    width: 50%;
  }
}
</style>
