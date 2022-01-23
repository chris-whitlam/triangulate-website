<template>
  <svg
    ref="triangle"
    width="470"
    height="407"
    viewBox="0 0 470 470"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="triangle"
    :style="style"
  >
    <g filter="url(#filter0_d_4_29)">
      <path d="M234.809 0L465.005 398.713H4.61159L234.809 0Z" :fill="color" />
    </g>
    <defs>
      <filter
        id="filter0_d_4_29"
        x="0.611588"
        y="0"
        width="470"
        height="470"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4_29"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_4_29"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    color: {
      required: false,
      type: String,
      default: "#233E86",
    },
    rotation: {
      required: false,
      type: Number,
      default: 40,
    },
  },
  computed: {
    style() {
      return {
        "--start-rotation": `${this.rotation}deg`,
        "--end-rotation": `${this.rotation + 360}deg`,
      } as CSSProperties;
    },
  },
  setup() {
    const triangle = ref();

    onMounted(() => {
      if (!triangle.value) {
        return;
      }
      triangle.value.addEventListener("mouseover", () =>
        triangle.value.classList.add("animated")
      );
      triangle.value.addEventListener("animationend", () =>
        triangle.value.classList.remove("animated")
      );
    });

    return {
      triangle,
    };
  },
});
</script>

<style scoped>
.triangle {
  transform: rotate(var(--start-rotation));
}

.triangle.animated {
  animation: spin 1s;
}

@keyframes spin {
  0% {
    transform: rotate(var(--start-rotation));
  }
  100% {
    transform: rotate(var(--end-rotation));
  }
}
</style>
