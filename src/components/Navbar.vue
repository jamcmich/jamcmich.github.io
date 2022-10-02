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
          :key="item.id"
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
  watch: {
    /* If `activeSection` updates, toggle the corresponding navigation link styles */
    visibleSection(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.toggleActiveLink(this.visibleSection);
      }
    },
  },
  mounted() {
    this.sections = document.getElementsByTagName("section");
    this.getSectionInViewport(this.sections);
  },
  methods: {
    scrollToSection(id) {
      if (id !== this.visibleSection) this.sections[id].scrollIntoView({ behavior: "smooth" });
    },
    /* Toggle the active navigation link styles */
    toggleActiveLink(id) {
      const elements = document.getElementsByClassName("link");

      for (let element of elements) {
        element.id === id ? element.classList.add("active") : element.classList.remove("active");
      }
    },
    getSectionInViewport(elements) {
      const observerOptions = {
        root: null,
        threshold: [0.2], // trigger if at least `t`% of element in viewport
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.visibleSection = entry.target.id;

          return entry.target.id;
        }

        return this.visibleSection;
      }, observerOptions);

      for (let element of elements) {
        observer.observe(element);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_navbar.scss";
</style>