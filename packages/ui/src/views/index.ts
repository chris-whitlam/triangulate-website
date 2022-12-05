import { default as Loading } from "./Loading.vue";
import { defineAsyncComponent } from "vue";

export const Home = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "home" */ "./Home.vue"),
  loadingComponent: Loading,
});

export const NotFound = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "not-found" */ "./NotFound.vue"),
  loadingComponent: Loading,
});

export const Privacy = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "privacy" */ "./Privacy.vue"),
  loadingComponent: Loading,
});

export const Terms = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "terms" */ "./Terms.vue"),
  loadingComponent: Loading,
});

export const FAQ = defineAsyncComponent({
  loader: () => import(/* webpackChunkName: "faq" */ "./FAQ.vue"),
  loadingComponent: Loading,
});
