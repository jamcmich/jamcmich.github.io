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

<style lang="scss" scoped>
.contact-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 0 200px;

  background-color: $color__macaroon;

  h1 {
    color: $color__mud;
  }
}
</style>