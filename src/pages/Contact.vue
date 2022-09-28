<template>
  <section class="contact-section" data-section="contact">
    <h1 class="__heading">Let's get in touch!</h1>

    <div class="icon-container">
      <GitHub class="icon" />
      <Instagram class="icon" />
      <LinkedIn class="icon" />
      <Twitter class="icon" />
    </div>

    <!-- TODO: Add downloadable resume -->
    <a class="__button" href="../assets/resume.pdf" title="Click here to download my resume!">
      Resume
    </a>
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