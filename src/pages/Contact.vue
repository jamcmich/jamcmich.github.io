<template>
  <section id="contact" class="contact-section">
    <h1 class="__heading">Let's get in touch!</h1>

    <div class="icon-container">
      <a href="https://github.com/jamcmich" target="_blank">
        <GitHub class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/jacobmcmichael/" target="_blank">
        <LinkedIn class="icon" />
      </a>
      <a href="https://www.instagram.com/jamcmich.dev/" target="_blank">
        <Instagram class="icon" />
      </a>
      <a href="https://twitter.com/jamcmich" target="_blank">
        <Twitter class="icon" />
      </a>
    </div>

    <div class="button-container">
      <a class="__button resume"
         href="mailto:jacobmcmichael@gmail.com?subject=Hey%20Jake%20👋,%20I%20saw%20your%20awesome%20website%20and%20wanted%20to%20reach%20out!"
         title="Send me an email"
         target="_blank"
         rel="noopener noreferrer">
        Say Hello <span>👋</span>
      </a>
      <a class="__button resume"
         href="./resume.pdf"
         title="View my resume"
         target="_blank"
         rel="noopener noreferrer">
        View Resume <span>📄</span>
      </a>
    </div>
  </section>
</template>

<script>
import GitHub from "@/components/icons/GitHub";
import Instagram from "@/components/icons/Instagram";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";

export default {
  name: "ContactPage",
  components: {
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
  },
};
</script>

<style lang="scss">
@import "@/styles/pages/_contact.scss";
</style>