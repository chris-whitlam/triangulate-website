<template>
  <div id="contact">
    <h1>Contact</h1>
    <p>
      You can contact me via email at:
      <a href="mailto:chris.whitlam.dev@gmail.com"
        >chris.whitlam.dev@gmail.com</a
      >
    </p>
    <p>Or if you prefer you can use the form below:</p>
    <form>
      <InputField label="Email" name="email" type="email" />
      <InputField label="Message" name="message" type="textbox" />

      <Button>Send</Button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button, InputField } from "@/components/atoms";

export default defineComponent({
  components: {
    Button,
    InputField,
  },
});
</script>

<style scoped>
#contact {
  margin: 0 5% 10% 5%;
}

form {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1226px) {
  #contact {
    text-align: left;
    margin: 0 20% 5% 20%;
    max-width: 80%;
  }
}
</style>
