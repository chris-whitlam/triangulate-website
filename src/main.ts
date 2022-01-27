import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ScrollAnimation } from "./directives";

const app = createApp(App);

app.use(router).mount("#app");

app.directive("scrollAnimation", ScrollAnimation);
