<template>
  <nav class="navbar-component">
    <a class="__logo-container" href="/">
      <LogoBackground class="__logo" :class="{'__alternative-logo': this.activeSection % 2}" />
      <LogoForeground class="__logo" :class="{'__alternative-logo': this.activeSection % 2}" />
    </a>

    <ul class="__nav-links">
      <li v-for="(item, index) in listItems"
          :class="[
              '__link',
              this.activeSection % 2 ? '__alternative-link' : '',
              index === this.activeSection ? '__active' : '']"
          :key="item.id"
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
      let elements = document.getElementsByClassName("__link");

      for (let i = 0; i < elements.length; i++) {
        i === index
            ? elements[i].classList.add("__active")
            : elements[i].classList.remove("__active");
      }
    },
  },
  unmounted() {
    window.removeEventListener("wheel", this.handleScroll);
  },
};
</script>

<style lang="scss">
.navbar-component {
  position: fixed;
  z-index: 1000;
  top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 0 200px;

  background-color: transparent;

  .__logo-container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;

    background-color: transparent;
    outline: 2px solid transparent;

    text-decoration: none;
    cursor: pointer;

    transition: all 0.1s ease 0.2s;

    /* Background */
    .__logo:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      transition: all 0.2s ease;

      path {
        fill: $color__wool;

        transition: fill 0.4s ease;
      }
    }

    /* Foreground */
    .__logo:nth-child(2) {
      position: absolute;
      top: 45%;
      left: 45%;
      transform: translate(-50%, -50%);

      opacity: 100%;

      transition: all 0.1s ease, opacity 0.4s ease 0.2s;

      path {
        fill: $color__pure-white;

        transition: fill 0.4s ease;
      }
    }

    /* Background */
    .__alternative-logo:nth-child(1) {
      path {
        fill: $color__syrup;

        transition: fill 0.4s ease;
      }
    }

    /* Foreground */
    .__alternative-logo:nth-child(2) {

      transition: fill 0.4s ease;
    }

    &:hover {
      transition: all 0.1s ease 0.2s;

      /* Foreground */
      .__logo:nth-child(2) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        opacity: 0;

        transition: all 0.1s ease, opacity 0.4s ease 0.2s;
      }
    }
  }

  .__nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 72px;

    color: $color__wool;
    font-family: $font-family__signika;
    font-weight: $font-weight__regular;
    font-size: $font-size__paragraph;

    list-style-type: none;

    .__link {
      position: relative;
      cursor: pointer;

      transition: color 0.4s ease;

      @include __highlight-on-hover($color__mud, $color__wool);
    }

    .__alternative-link {
      color: $color__macaroon;

      transition: color 0.4s ease;

      @include __highlight-on-hover($color__mud, $color__syrup);
    }

    .__active {
      color: $color__mud;
      font-weight: $font-weight__medium;

      transition: color 0.4s ease;
    }
  }
}
</style>