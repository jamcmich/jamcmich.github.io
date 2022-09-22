<template>
  <Navbar />
  <About />
  <Projects />
  <Contact />
</template>

<script>
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default {
  name: "App",
  components: {
    Navbar,
    About,
    Projects,
    Contact,
  },
};
</script>

<style lang="scss">
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Overlock:wght@400;700;900&family=Signika:wght@400;500;600;700&display=swap'); /* Credit: https://www.joshwcomeau.com/css/custom-css-reset/ */

/* 1. Use a more-intuitive box-sizing model. */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
* {
  margin: 0;
}

/* 3. Allow percentage-based heights in the application */
html, body {
  height: 100%;
}

/* Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Remove built-in form typography styles */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Create a root stacking context */
#root, #__next {
  isolation: isolate;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  font-size: 16px;
  color: $color__mud;

  background-color: red;
}
</style>
