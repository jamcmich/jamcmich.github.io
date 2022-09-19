<template>
  <About/>
</template>

<script>
import About from "@/pages/About";

export default {
  name: "App",
  components: {
    About,
  },
};
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Overlock:wght@900&family=PT+Sans:wght@700&family=Signika:wght@300&display=swap');

/* Global Variables */
:root {
  --salmon: rgba(203, 153, 126, 1);
  --wool: rgba(221, 190, 169, 1);
  --cream: rgba(255, 228, 207, 1);
  --forest-gray: rgba(184, 184, 165, 1);
  --forest: rgba(165, 165, 141, 1);
  --shutter-green: rgba(107, 112, 92, 1);
  --charcoal: rgba(56, 50, 46, 1);
  --sugar-milk: rgba(255, 250, 246, 1);
}

/* Credit: https://www.joshwcomeau.com/css/custom-css-reset/ */
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
  font-size: 16px;
  color: var(--charcoal);

  background-color: red;
}
</style>
