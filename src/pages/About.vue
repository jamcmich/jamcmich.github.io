<template>
  <section class="about-section" data-section="about">
    <div class="content-container">
      <img src="../assets/portrait.png" alt="An image of Jacob McMichael." />

      <div class="hero-container">
        <h1 class="__subheading">
          Hello, I'm
          <br>

          <span class="__heading" data-text="Jacob McMichael">
            Jacob McMichael
          </span>
        </h1>
        <p class="__paragraph">I'm a <span data-text="Frontend Web Developer">Frontend Web Developer</span> from
                               California with a passion
                               for helping individuals and
                               organizations
                               accomplish their goals.</p>
        <Button text="Read More" textColor="rgba(99, 76, 61, 1)" highlightColor="rgba(221, 190, 169, 1)" />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "AboutPage",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/pages/_about.scss";
</style>