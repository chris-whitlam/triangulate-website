import { RouteRecordRaw } from "vue-router";
import { Home, FAQ, Contact, Privacy, Terms, NotFound } from "../views/";

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
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: NotFound,
  },
];

export default routes;
