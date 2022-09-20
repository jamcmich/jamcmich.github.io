<template>
  <div class="about-page">
    <div class="__main-content">
      <img class="__img" src="@/assets/portrait.png" alt="An image of Jacob McMichael."/>
      <div class="__text-container">
        <h1>Hi, I'm<br><span data-text="Jacob McMichael">Jacob McMichael</span></h1>
        <p>I'm a <span data-text="Frontend Web Developer">Frontend Web Developer</span> from California with a passion
          for helping individuals and
          organizations
          accomplish their goals.</p>
        <Link text="Read More"/>
      </div>
    </div>
  </div>
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
  height: 100%;
  padding: 0 200px;

  background-color: var(--color__macaroon);

  .__main-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 96px;

    .__img {
      width: 400px;
      box-shadow: 12px 12px 0 var(--color__wool);
    }

    .__text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 48px;

      h1 {
        font-family: var(--font-family__signika);
        font-weight: var(--font-weight__regular);
        font-size: var(--font-size__heading);
        color: var(--color__wool);
        line-height: 1.15;

        span {
          position: relative;

          font-family: var(--font-family__overlock);
          font-weight: var(--font-weight__black);
          color: var(--color__mud);

          @include __highlight-on-load(var(--color__wool));
        }
      }

      p {
        font-family: var(--font-family__pt-sans);
        font-weight: var(--font-weight__regular);
        font-size: var(--font-size__paragraph);

        max-width: 700px;

        span {
          position: relative;
          font-weight: var(--font-weight__bold);

          @include __highlight-on-load(var(--color__wool), 1s);
        }
      }
    }
  }
}
</style>