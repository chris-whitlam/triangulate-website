import { Directive } from "vue";

const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);

const ScrollAnimation: Directive = {
  beforeMount(el) {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  },
};

export default ScrollAnimation;
