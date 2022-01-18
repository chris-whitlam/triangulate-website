<template>
  <div class="feature-container">
    <Slope v-if="variant === 'primary'" class="slope" />
    <SlopeUpsideDown v-if="variant === 'secondary'" class="slope" />
    <div class="feature" :style="featureStyle">
      <h2>{{ title }}</h2>
      <div class="feature-content" :style="featureContentStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, StyleValue } from "vue";
import { Slope, SlopeUpsideDown } from "../atoms";

const styles = {
  primary: {
    "--background-color": "#3a518a",
    "--text-color": "white",
  },
  secondary: {
    "--background-color": "none",
    "--text-color": "#3a518a",
  },
};

type Variant = "primary" | "secondary";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },
    variant: {
      required: false,
      type: String as PropType<Variant>,
      default: "primary",
    },
  },
  components: {
    Slope,
    SlopeUpsideDown,
  },
  computed: {
    featureStyle() {
      return styles[this.variant] as StyleValue;
    },
    featureContentStyle() {
      return {
        "--flex-direction": this.variant === "primary" ? "row-reverse" : "row",
      } as StyleValue;
    },
  },
});
</script>

<style scoped>
h2 {
  line-height: 0em;
  font-size: 2rem;
}
.feature {
  width: 100%;
  margin-top: -10px;
  padding: 2% 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.slope {
  width: 100vw;
  height: auto;
}

.feature-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 5% 5% 5%;
}

@media (min-width: 1226px) {
  h2 {
    font-size: 3rem;
  }

  .feature {
    font-size: 1.4rem;
  }
  .feature-content {
    justify-content: space-around;
    flex-direction: var(--flex-direction);
    padding: 0 5% 0% 5%;
  }
}
</style>
