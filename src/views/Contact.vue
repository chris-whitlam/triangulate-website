<template>
  <div id="contact">
    <h1>Contact</h1>
    <p>
      You can contact us via email at:
      <a href="mailto:chris.whitlam.dev@gmail.com"
        >chris.whitlam.dev@gmail.com</a
      >
    </p>
    <p>Or, if you prefer, you can use the form below:</p>
    <form @submit.prevent="handleSubmit">
      <label for="email"><strong>Email</strong></label>
      <input
        id="email"
        name="email"
        v-model="email"
        placeholder="john.smith@example.com"
      />
      <span
        v-for="error of v$.email.$errors"
        :key="error.$uid"
        class="error-message"
        >{{ error.$message }}</span
      >
      <label class="form-item" for="message"><strong>Message</strong></label>
      <textarea
        id="message"
        name="message"
        v-model="message"
        placeholder="Enter your message here..."
      ></textarea>
      <span
        v-for="error of v$.message.$errors"
        :key="error.$uid"
        class="error-message"
        >{{ error.$message }}</span
      >
      <div class="form-item form-submission">
        <Button type="submit">Send</Button>
        <span
          class="output-message"
          :style="{ color: errorMessage ? 'red' : 'green' }"
          >{{ errorMessage || successMessage }}</span
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { Button } from "../components/atoms";
import postRequest from "@/utils/postRequest";

export default defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Button,
  },
  data() {
    return {
      email: "",
      message: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      message: { required },
    };
  },
  methods: {
    async handleSubmit() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }

      this.errorMessage = "";
      this.successMessage = "";

      const data = {
        email: this.email,
        message: this.message,
      };

      try {
        await postRequest("/api/contact", data);
        this.successMessage = "Message sent!";
        this.email = "";
        this.message = "";
        this.v$.$reset();
      } catch (error: any) {
        this.errorMessage = error.error;
      }
    },
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

.error-message {
  margin-top: 5px;
  color: red;
}

.success-message {
  color: green;
}

.output-message {
  font-size: 1.5em;
}

.form-submission {
  display: flex;
  justify-content: space-between;
}

.form-item {
  margin-top: 20px;
}

label {
  font-size: 1em;
}

input {
  margin-top: 5px;
  border-radius: 5px;
  padding: 0.5em;
  font-size: 1.2em;
  font-family: inherit;
}

textarea {
  margin-top: 5px;
  border-radius: 5px;
  padding: 0.5em;
  font-size: 1.2em;
  max-width: 100%;
  resize: none;
  height: 10em;
  font-family: inherit;
}

@media (min-width: 1000px) {
  #contact {
    text-align: left;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
