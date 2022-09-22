<template>
  <section class="contact-section" data-section="contact">
    <h1>Let's get in touch!</h1>

    <div class="__icon-container">
      <GitHub class="__icon" />
      <Instagram class="__icon" />
      <LinkedIn class="__icon" />
      <Twitter class="__icon" />
    </div>

    <!-- TODO: Add downloadable resume -->
    <a class="__download-resume" href="../assets/resume.pdf" title="Click here to download my resume!">
      Download Resume
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
.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  width: 100%;
  height: 100vh;
  padding: 0 200px;

  background-color: $color__macaroon;

  h1 {
    font-family: $font-family__overlock;
    font-weight: $font-weight__black;
    font-size: $font-size__heading;
    color: $color__mud;
  }

  .__icon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    .__icon {
      path {
        fill: $color__mud;
      }

      transition: all 0.4s ease;

      &:hover {
        cursor: pointer;
        transform: scale(1.25);

        path {
          fill: $color__syrup;
        }

        transition: all 0.4s ease;
      }
    }
  }

  .__download-resume {
    padding: 16px 32px;

    font-family: $font-family__mulish;
    font-size: $font-size__button;
    font-weight: $font-weight__regular;
    color: $color__mud;
    text-decoration: none;

    border: 3px solid $color__mud;
    border-radius: 4px;
    background-color: $color__wool;
  }
}
</style>