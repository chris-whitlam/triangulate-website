import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import FAQ from "../views/FAQ.vue";
import Contact from "../views/Contact.vue";
import Privacy from "../views/Privacy.vue";
import Terms from "../views/Terms.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/terms",
    name: "Terms and Conditions",
    component: Terms,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
