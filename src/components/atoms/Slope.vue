<template>
  <svg
    width="1440"
    height="110"
    viewBox="0 0 1440 110"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 86L1440 0V110H0V86Z" fill="#3A518A" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      required: false,
      type: String,
      default: "#3A518A",
    },
  },
});
</script>
