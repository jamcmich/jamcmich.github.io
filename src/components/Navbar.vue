<template>
  <nav class="navbar-component">
    <a class="logo-container" href="">
      <LogoBackground class="logo" :class="{'alternative-logo': this.visibleSection === 'projects'}" />
      <LogoForeground class="logo" :class="{'alternative-logo': this.visibleSection === 'projects'}" />
    </a>

    <ul class="nav-links">
      <li v-for="(item, index) in listItems"
          :class="['__link link',
                  this.visibleSection === 'projects' ? 'alternative-link' : '',
                  item.toLowerCase() === this.visibleSection ? 'active' : '']"
          :key="index"
          :data-text="item"
          @click="scrollToSection(this.sections[index].id)">
        {{ item }}
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
        "About",
        "Projects",
        "Contact",
      ],
      sections: [],
      visibleSection: "",
    };
  },
  /* React to state changes */
  watch: {
    /**
     * Toggle active link in navbar
     * @param newValue
     * @param oldValue
     */
    visibleSection(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.toggleActiveLink(this.visibleSection);
      }
    },
  },
  /* After the component has been mounted */
  mounted() {
    this.sections = document.getElementsByTagName("section");

    setTimeout(() => {
      /* Calculate the height of Project section after DOM nodes are rendered via Masonry plugin */
      this.getSectionInViewport(this.sections);
      this.scrollToSection("about");
    }, 100);
  },
  methods: {
    /**
     * Click event for navbar section scrolling
     * @param id  Corresponding section element id
     */
    scrollToSection(id) {
      if (id !== this.visibleSection) this.sections[id].scrollIntoView({ behavior: "smooth" });
    },
    /**
     * Toggle active navbar links
     * @param id  Corresponding link element id
     */
    toggleActiveLink(id) {
      const elements = document.getElementsByClassName("link");

      for (let element of elements) {
        element.id === id ? element.classList.add("active") : element.classList.remove("active");
      }
    },
    /**
     * Calculate which sections are visible in the viewport
     * @param elements  Collection of HTML elements
     */
    getSectionInViewport(elements) {

      /* Loop over HTMLCollection */
      for (let element of elements) {
        const elementHeight = element.clientHeight;

        /* Assign a default threshold */
        let threshold = 0.9;

        /* If the element's height > viewport's height, create a unique threshold for the element */
        if (elementHeight > (window.innerHeight * threshold)) {
          threshold = (((window.innerHeight * threshold) / elementHeight) * threshold).toFixed(2);
        }

        /* IntersectionObserver options */
        const observerOptions = {
          root: null,
          threshold: threshold, // trigger if at least `t`% of element in viewport
        };

        /* IntersectionObserver */
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            this.visibleSection = entry.target.id;

            return entry.target.id;
          }

          return this.visibleSection;
        }, observerOptions);

        observer.observe(element);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_navbar.scss";
</style>