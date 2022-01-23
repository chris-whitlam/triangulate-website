<template>
  <img :sizes="sizes" :srcset="srcSet" :src="src" :alt="image.name" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ImageConfig } from "../../assets/img/images";

export default defineComponent({
  props: {
    image: {
      type: Object as PropType<ImageConfig>,
      required: true,
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
  },
  computed: {
    srcSet() {
      return this.image.sizes.reduce(
        (acc: string, size: number, index: number) =>
          `${acc} ${require(`../../assets/img/${this.image.name}/${
            this.image.name
          }_${size.toString()}.png`)} ${size.toString()}w${
            index == this.image.sizes.length - 1 ? "" : ","
          }`,
        ""
      );
    },
    src() {
      return `${require(`../../assets/img/${this.image.name}/${
        this.image.name
      }_${this.image.sizes[this.image.sizes.length - 1]}.png`)}`;
    },
    sizes() {
      return `(max-width: ${
        this.image.sizes[this.image.sizes.length - 1]
      }px) 100vw, ${this.image.sizes[this.image.sizes.length - 1]}px`;
    },
  },
});
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
