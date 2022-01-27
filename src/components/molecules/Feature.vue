<template>
  <div class="feature-container">
    <Slope v-if="variant === 'primary'" class="slope" />
    <SlopeUpsideDown v-if="variant === 'secondary'" class="slope" />
    <div class="feature" :style="featureStyle">
      <div v-scrollAnimation :style="slideIn">
        <h2>{{ title }}</h2>
        <div class="feature-content" :style="featureContentStyle">
          <slot></slot>
        </div>
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
    slideIn() {
      return {
        "--slide-from": this.variant === "primary" ? "100%" : "-100%",
      } as StyleValue;
    },
  },
});
</script>

<style scoped>
h2 {
  line-height: 1em;
  font-size: clamp(2em, 5vw, 4em);
  text-overflow: unset;
  padding-top: 1rem;
}

.feature {
  max-width: 100%;
  margin-top: -10px;
  padding: 2% 2% 5%;
  background-color: var(--background-color);
  color: var(--text-color);
}

.before-enter {
  opacity: 0;
  transform: translateX(var(--slide-from));
  transition: all 0.7s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
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

.slide-enter-from {
  opacity: 0;
}

.slide-enter-to {
  opacity: 1;
}

.slide-enter-active {
  transition: all 2s ease;
}

@media (min-width: 1226px) {
  h2 {
    font-size: 3rem;
  }

  .feature {
    font-size: 1.4rem;
    padding: 2% 10% 5%;
  }
  .feature-content {
    justify-content: space-around;
    flex-direction: var(--flex-direction);
    padding: 0 5% 0% 5%;
  }
}
</style>
