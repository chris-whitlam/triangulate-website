<template>
  <div id="faq">
    <h1>Frequently Asked Questions</h1>
    <p><strong>1. Is Triangulate free?</strong></p>
    <p>Yes, Triangulate is totally and utterly free!</p>
    <br />
    <p><strong>2. Does Triangulate have any ads?</strong></p>
    <p>
      No, Triangulate doesn't show any ads at all while you're playing the game.
      They may get added in the future but currently there are not plans to add
      anything like this.
    </p>
    <br />
    <p><strong>3. I lost my streak! Can you get it back for me?</strong></p>
    <p>
      Unfortunately as your save data isn't stored on any servers for privacy
      reasons, we can't set your streak back.
    </p>
    <br />
    <p><strong>4. Are there any plans to release on Apple IOS?</strong></p>
    <p>There are currently no plans to release to the Apple App Store.</p>
    <br />
    <p><strong>5. The app isn't working for me. What do I do?</strong></p>
    <p>
      Sorry to hear that! Feel free to contact us so we can try to fix it as
      soon as possible with a new release.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
#faq {
  text-align: left;
  margin: 0 5% 10% 5%;
  padding-bottom: 5%;
  font-size: clamp(1em, 1.3vw, 1.5em);
}

@media (min-width: 1226px) {
  #faq {
    text-align: left;
    margin: 0 20% 5% 20%;
    padding-bottom: 1%;
    max-width: 80%;
  }
}
</style>
