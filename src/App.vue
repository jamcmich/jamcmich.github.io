<template>
  <Navbar/>
  <About/>
</template>

<script>
import Navbar from "@/components/Navbar";
import About from "@/pages/About";

export default {
  name: "App",
  components: {
    Navbar,
    About,
  },
};
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nabla&family=Overlock:wght@900&family=PT+Sans:wght@400;700&family=Signika:wght@400;600&display=swap');

/* Global Variables */
:root {
  /* Font Families */
  --font-family__nabla: 'Nabla', cursive;
  --font-family__overlock: 'Overlock', cursive;
  --font-family__signika: 'Signika', sans-serif;
  --font-family__pt-sans: 'PT Sans', sans-serif;

  /* Font Sizes */
  --font-size__heading: 4.5rem;
  --font-size__logo: 3rem;
  --font-size__subheading: 2rem;
  --font-size__paragraph: 2rem;
  --font-size__button: 1.5rem;

  /* Font Weights */
  --font-weight__black: 900;
  --font-weight__bold: 700;
  --font-weight__semi-bold: 600;
  --font-weight__regular: 400;

  /* Colors */
  --color__pure-white: rgba(255, 255, 255, 1);
  --color__macaroon: rgba(255, 232, 214, 1);
  --color__wool: rgba(221, 190, 169, 1);
  --color__mud: rgba(99, 76, 61, 1);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 16px;
  color: var(--color__mud);

  background-color: red;
}
</style>
