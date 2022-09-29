<template>
  <nav class="navbar-component">
    <a class="logo-container" href="/">
      <LogoBackground class="logo" :class="{'alternative-logo': this.activeSection % 2}" />
      <LogoForeground class="logo" :class="{'alternative-logo': this.activeSection % 2}" />
    </a>

    <ul class="nav-links">
      <li v-for="(item, index) in listItems"
          :class="['__link link', alternateClass(), activeClass(index)]"
          :key="item.id"
          :data-text="item.textContent"
          @click="scrollToSection(index); toggleActiveLink(index)">
        {{ item.textContent }}
      </li>
    </ul>
  </nav>
</template>

<script>
import LogoBackground from "@/components/icons/LogoBackground";
import LogoForeground from "@/components/icons/LogoForeground";

export default {
  name: "NavbarComponent",
  components: {
    LogoBackground,
    LogoForeground,
  },
  data() {
    return {
      listItems: [
        { textContent: "About" },
        { textContent: "Projects" },
        { textContent: "Contact" },
      ],
      sections: [],
      activeSection: 0,
    };
  },
  mounted() {
    this.debounceTimer = 0;
    this.sections = document.getElementsByTagName("section");

    /* Check which section is visible on load, update the `activeSection`, set the active link */
    let sections = this.sections;

    for (let i = 0; i < sections.length; i++) {
      if (this.isElementInViewport(i, 75)) {
        // TODO: Add a way to compare which of two elements (if more than one) is most visible, and then scroll to it.
        this.activeSection = i;
        // TODO: Scroll to top of most visible element on refresh
        break;
      }
    }

    /* the `{ passive: false }` argument prevents scrolling while allowing us to read inputs */
    window.addEventListener("wheel", this.handleScroll, { passive: false });
  },
  watch: {
    /* If `activeSection` updates, toggle the corresponding navigation link styles */
    activeSection(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.toggleActiveLink(this.activeSection);
        this.scrollToSection(this.activeSection);
      }
    },
  },
  methods: {
    debounce(callback, time) {
      window.clearTimeout(this.debounceTimer);
      this.debounceTimer = window.setTimeout(callback, time);
    },
    alternateClass() {
      return this.activeSection % 2 ? "alternative-link" : "";
    },
    activeClass(index) {
      return this.activeSection === index ? "active" : "";
    },
    moveUp() {
      /* lookahead for previous `activeSection` */
      if ((this.activeSection - 1) < 0) {
        this.activeSection = this.sections.length - 1;
      } else {
        this.activeSection--;
      }

      /* Prevents subsequent scrolls from overriding the `.scrollIntoView` animation */
      if (!this.isElementInViewport(this.activeSection)) {
        this.scrollToSection(this.activeSection);
        // TODO: Set timeout to prevent over-scrolling before arriving at next section.
      }
    },
    moveDown() {
      /* lookahead for next `activeSection` */
      if ((this.activeSection + 1) > this.sections.length - 1) {
        this.activeSection = 0;
      } else {
        this.activeSection++;
      }

      /* Prevents subsequent scrolls from overriding the `.scrollIntoView` animation */
      if (!this.isElementInViewport(this.activeSection)) {
        this.scrollToSection(this.activeSection);
        // TODO: Set timeout to prevent over-scrolling before arriving at next section.
      }
    },
    handleScroll(event) {
      if (this.isElementInViewport(1, 40)) return false;

      event.preventDefault();
      event.stopPropagation();

      if (event.deltaY < 0) this.debounce(this.moveUp, 100);
      if (event.deltaY > 0) this.debounce(this.moveDown, 100);

      return false;
    },
    scrollToSection(index) {
      this.sections[index].scrollIntoView({ behavior: "smooth" });
    },
    /*
    * Check if `element` is in the viewport
    * params { element index, threshold of visible element as percentage (0 - 100) }
    * */
    isElementInViewport(index, threshold = 75) {
      let rect = this.sections[index].getBoundingClientRect(),
          windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      return !(
          Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < threshold ||
          Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < threshold
      );
    },
    /* Toggle the active navigation link styles */
    toggleActiveLink(index) {
      this.activeSection = index;

      let elements = document.getElementsByClassName("link");

      for (let i = 0; i < elements.length; i++) {
        i === index
            ? elements[i].classList.add("active")
            : elements[i].classList.remove("active");
      }
    },
  },
  unmounted() {
    window.removeEventListener("wheel", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_navbar.scss";
</style>