<template>
  <section class="about-page">
    <div class="__main-content">
      <img class="__img" src="@/assets/portrait.png" alt="An image of Jacob McMichael." />
      <div class="__text-container">
        <h1>Hi, I'm<br><span data-text="Jacob McMichael">Jacob McMichael</span></h1>
        <p>I'm a <span data-text="Frontend Web Developer">Frontend Web Developer</span> from California with a passion
           for helping individuals and
           organizations
           accomplish their goals.</p>
        <Link text="Read More" textColor="rgba(99, 76, 61, 1)" highlightColor="rgba(221, 190, 169, 1)" />
      </div>
    </div>
  </section>
</template>

<script>
import Link from "@/components/Link";

export default {
  name: "AboutPage",
  components: {
    Link,
  },
};
</script>

<style lang="scss" scoped>
.about-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 0 200px;

  background-color: $color__macaroon;

  .__main-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 96px;

    .__img {
      width: 400px;
      box-shadow: 12px 12px 0 $color__wool;
    }

    .__text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 48px;

      h1 {
        font-family: $font-family__signika;
        font-weight: $font-weight__regular;
        font-size: $font-size__heading;
        color: $color__wool;
        line-height: 1.15;

        span {
          position: relative;

          font-family: $font-family__overlock;
          font-weight: $font-weight__black;
          color: $color__mud;

          @include __highlight-on-load($color__wool);
        }
      }

      p {
        font-family: $font-family__pt-sans;
        font-weight: $font-weight__regular;
        font-size: $font-size__paragraph;

        max-width: 700px;

        span {
          position: relative;
          font-weight: $font-weight__bold;

          @include __highlight-on-load($color__wool, 1s);
        }
      }
    }
  }
}
</style>