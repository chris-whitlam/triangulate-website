<template>
  <div id="features">
    <Feature title="Daily Challenges">
      <div class="feature-description">
        <p>
          Our unique algorithms create new challenges for you every day to try
          and solve.
        </p>
        <p>
          Each day you complete a daily challenge you'll increase your streak.
          Can you get the longest streak?
        </p>
      </div>
      <Image :image="images.dailyChallenge" />
    </Feature>

    <Feature title="Global Leaderboards" variant="secondary">
      <div class="feature-description">
        <p>
          Complete the daily challenge in the fastest time and you'll be the top
          of the global leaderboard.
        </p>
        <p>
          Not the fastest? No worries, complete it in the fewest moves possible
          and you'll be at the top of the leaderboard too!
        </p>
      </div>
      <Image :image="images.leaderboard" />
    </Feature>
    <Feature title="Levels">
      <div class="feature-description">
        <p>
          Plenty of hand crafted levels to challenge your brain. Plenty of
          gamemodes to keep things interesting:
        </p>
        <ul>
          <li>
            <strong>Speed Run</strong> - Complete the level before time runs out
          </li>
          <li>
            <strong>Strategist</strong> - Complete the level within a set amount
            of moves
          </li>
        </ul>
      </div>
      <Image :image="images.level3" />
    </Feature>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Feature } from "../molecules";
import { Image } from "../atoms";
import images from "../../assets/img/images";

export default defineComponent({
  components: {
    Feature,
    Image,
  },
  data() {
    return {
      images,
    };
  },
});
</script>

<style scoped>
#features {
  height: 100%;
  width: 100%;
  z-index: 10;
  position: relative;
  text-align: center;
}

img {
  height: auto;
  width: 80%;
  box-shadow: 4px 4px 5px black;
  border-radius: 8px;
  margin-top: 5%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  padding-bottom: 1em;
}

.feature-description {
  font-size: clamp(1em, 2.5vw, 1.8em);
  line-height: 2em;
}

@media (min-width: 700px) {
  img {
    width: 50%;
    margin-top: 1em;
    margin-top: 0;
  }
}

@media (min-width: 1226px) {
  img {
    width: 20%;
    margin-top: 1em;
    margin-top: 0;
  }

  li {
    padding-bottom: 0;
  }

  .feature-description {
    font-size: 1.2em;
    line-height: 2.5em;
    max-width: 50%;
  }

  p {
    padding-top: 5%;
  }
}
</style>
