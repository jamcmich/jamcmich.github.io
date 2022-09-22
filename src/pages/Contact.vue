<template>
  <section class="contact-section" data-section="contact">
    <h1>Let's get in touch!</h1>

    <div class="__icon-container">
      <GitHub class="__icon" />
      <Instagram class="__icon" />
      <LinkedIn class="__icon" />
      <Twitter class="__icon" />
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
}
</style>