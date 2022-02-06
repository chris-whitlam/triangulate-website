<template>
  <label :for="name"
    ><strong>{{ label }}</strong></label
  >
  <input :type="type" :id="name" :name="name" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
