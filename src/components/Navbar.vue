<template>
  <nav class="navbar-component">
    <a class="__logo-container" href="/">
      <LogoBackground class="__logo" />
      <LogoForeground class="__logo" />
    </a>

    <ul class="__nav-links">
      <li class="__link __active" :class="updateNavigationLinks()" data-text="About">About</li>
      <li class="__link" :class="updateNavigationLinks()" data-text="Projects">Projects</li>
      <li class="__link" :class="updateNavigationLinks()" data-text="Contact">Contact</li>
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
      isMoving: false,
      isMovingDelay: 1000,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },
  methods: {
    /* Section Scrolling Reference: https://webdeasy.de/en/programming-vue-js-fullpage-scroll/ */
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");

      for (let i = 0; i < sections.length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    /**
     * Handle the 'mousewheel' event for other browsers
     */
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.isMoving) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.isMoving) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    /**
     * Handle the 'DOMMouseScroll' event for Firefox
     */
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.isMoving) {
        this.moveUp();
      } else if (e.detail < 0 && !this.isMoving) {
        this.moveDown();
      }

      return false;
    },
    /**
     * Move to the previous section or the last section if you're on the first section
     */
    moveDown() {
      this.isMoving = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    /**
     * Move to the next section or the first section if you're on the last section
     */
    moveUp() {
      this.isMoving = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    /**
     * Changes the navigation links' colors and `active` class to contrast the background depending on the current section
     */
    updateNavigationLinks() {
      let links = document.getElementsByClassName("__link");

      for (let i = 0; i < links.length; i++) {
        this.activeSection % 2
            ? links[i].classList.add("__alternative-link")
            : links[i].classList.remove("__alternative-link");

        this.activeSection === i
            ? links[i].classList.add("__active")
            : links[i].classList.remove("__active");
      }

      return {
        __altLink: this.activeSection % 2,
      };
    },
    /**
     * Scrolls to the passed section id if the section exists and the delay is over
     */
    async scrollToSection(id, force = false) {
      console.log(this.isMoving);

      if (this.isMoving && !force) return false;

      this.activeSection = id;
      this.isMoving = true;

      // get section and scroll into view if it exists
      let section = document.getElementsByTagName("section")[id];
      if (await section) {
        document.getElementsByTagName("section")[id].scrollIntoView({behavior: "smooth"});
        this.updateNavigationLinks();
      }

      setTimeout(() => {
        this.isMoving = false;
      }, this.isMovingDelay);
    },
    /**
     * Handles the 'touchstart' event on mobile devices
     */
    touchStart(e) {
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },
    /**
     * Handles the 'touchmove' event on mobile devices
     */
    touchMove(e) {
      if (this.isMoving) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },
  },
  /**
   * mounted() hook executes after page load and call the section offset calculation and registers all events
   */
  mounted() {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }

    this.calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener("wheel", this.handleMouseWheel, {passive: false}); // Other browsers

    window.addEventListener("touchstart", this.touchStart, {passive: false}); // mobile devices
    window.addEventListener("touchmove", this.touchMove, {passive: false}); // mobile devices
  },
  /**
   * unmounted() hook executes on page destroy and removes all registered event listeners
   */
  unmounted() {
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.removeEventListener("wheel", this.handleMouseWheel, false);  // Other browsers

    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
};
</script>

<style lang="scss" scoped>
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
    }

    /* Foreground */
    .__logo:nth-child(2) {
      position: absolute;
      top: 45%;
      left: 45%;
      transform: translate(-50%, -50%);

      opacity: 100%;

      transition: all 0.1s ease, opacity 0.4s ease 0.2s;
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

      @include __highlight-on-hover($color__mud, $color__wool);
    }

    .__alternative-link {
      color: $color__macaroon;

      @include __highlight-on-hover($color__mud, $color__syrup);
    }

    .__active {
      color: $color__mud;
      font-weight: $font-weight__medium;
    }
  }
}
</style>