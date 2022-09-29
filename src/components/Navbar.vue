<template>
  <nav class="navbar-component">
    <a class="logo-container" href="/">
      <LogoBackground class="logo" :class="{'alternative-logo': this.activeSection % 2}" />
      <LogoForeground class="logo" :class="{'alternative-logo': this.activeSection % 2}" />
    </a>

    <ul class="nav-links">
      <li v-for="(item, index) in listItems"
          :class="[
              '__link link',
              this.activeSection % 2 ? 'alternative-link' : '',
              this.activeSection === index ? 'active' : '']"
          :key="item.id"
          :data-text="item.textContent"
          @click="scrollToSection(this.sections[index]); toggleActiveLink(index)">
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

    /* Check which section is visible and update the `activeSection` and active link properties */
    for (let i = 0; i < this.sections.length; i++) {
      if (this.isElementInViewport(this.sections[i])) {
        this.activeSection = i;
        this.toggleActiveLink(i);
      }
    }

    /* the `{ passive: false }` argument prevents scrolling while allowing us to read inputs */
    window.addEventListener("wheel", this.handleScroll, { passive: false });
  },
  watch: {
    /* If `activeSection` updates, toggle the corresponding navigation link styles */
    activeSection(newValue, oldValue) {
      if (newValue !== oldValue) this.toggleActiveLink(this.activeSection);
    },
  },
  methods: {
    debounce(callback, time) {
      window.clearTimeout(this.debounceTimer);
      this.debounceTimer = window.setTimeout(callback, time);
    },
    moveUp() {
      /* lookahead for previous `activeSection` */
      if ((this.activeSection - 1) < 0) {
        this.activeSection = this.sections.length - 1;
      } else {
        this.activeSection--;
      }

      /* Prevents subsequent scrolls from overriding the `.scrollIntoView` animation */
      if (!this.isElementInViewport(this.sections[this.activeSection])) {
        this.scrollToSection(this.sections[this.activeSection]);
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
      if (!this.isElementInViewport(this.sections[this.activeSection])) {
        this.scrollToSection(this.sections[this.activeSection]);
      }
    },
    handleScroll(event) {
      if (this.activeSection === 1) return false;
      
      event.preventDefault();
      event.stopPropagation();

      if (event.deltaY < 0) this.debounce(this.moveUp, 100);
      if (event.deltaY > 0) this.debounce(this.moveDown, 100);

      return false;
    },
    scrollToSection(element) {
      element.scrollIntoView({ behavior: "smooth" });
    },
    /* Check if `element` is in the viewport */
    isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    /* Toggle the active navigation link styles */
    toggleActiveLink(index) {
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