<template>
  <nav class="navbar-component">
    <a class="__logo-container" href="/">
      <LogoBackground class="__logo" :class="{'__alternative-logo': this.activeSection % 2}" />
      <LogoForeground class="__logo" :class="{'__alternative-logo': this.activeSection % 2}" />
    </a>

    <!--    <ul class="__nav-links">-->
    <!--      <li class="__link __active"-->
    <!--          @click="scrollToSection($event.target.dataset.id)"-->
    <!--          data-text="About"-->
    <!--          data-id=0>-->
    <!--        About-->
    <!--      </li>-->
    <!--      <li class="__link"-->
    <!--          @click="scrollToSection($event.target.dataset.id)"-->
    <!--          data-text="Projects"-->
    <!--          data-id=1>-->
    <!--        Projects-->
    <!--      </li>-->
    <!--      <li class="__link"-->
    <!--          @click="scrollToSection($event.target.dataset.id)"-->
    <!--          data-text="Contact"-->
    <!--          data-id=2>-->
    <!--        Contact-->
    <!--      </li>-->
    <!--    </ul>-->
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
      windowHeight: window.innerHeight,
      activeSection: 0,
      activeClass: String,
    };
  },
  mounted() {
    this.sections = document.getElementsByTagName("section");

    // this.handleDebouncedScroll = this.debounce(this.handleScroll, 100);
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("mousedown", this.handleScroll);
  },
  methods: {
    // debounce(func, timeout = 300) {
    //   let timer;
    //   return (...args) => {
    //     if (!timer) {
    //       func.apply(this, args);
    //     }
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       timer = undefined;
    //     }, timeout);
    //   };
    // },
    moveUp() {
      if ((this.activeSection - 1) < 0) {
        this.activeSection = this.sections.length - 1;
      } else {
        this.activeSection--;
      }

      this.scrollToSection();
    },
    moveDown() {
      if ((this.activeSection + 1) > this.sections.length - 1) {
        this.activeSection = 0;
      } else {
        this.activeSection++;
      }

      this.scrollToSection();
    },
    handleScroll(event) {
      if (event.deltaY < 0) this.moveUp();
      if (event.deltaY > 0) this.moveDown();

      // console.log(this.sections[0]);
      // console.log(this.checkVisibleElement(this.sections[0]));
    },
    // checkVisibleElement(elem) {
    //   let rect = elem.getBoundingClientRect();
    //   let viewHeight = Math.max(document.documentElement.clientHeight, this.windowHeight);
    //
    //   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    // },
    scrollToSection() {
      this.sections[this.activeSection].scrollIntoView({behavior: "smooth"});
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