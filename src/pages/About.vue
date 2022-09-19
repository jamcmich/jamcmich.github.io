<template>
  <div class="about-container">
    <div class="left-column">
      <Logo class="logo"/>
      <span class="crumb">About</span>
    </div>

    <div class="center-column">
      <img src="@/assets/portrait.png" alt="An image of Jacob McMichael."/>
      <div class="text-container">
        <h1>Hi, I'm<br><span>Jacob McMichael</span></h1>
        <p>I'm a <span>Frontend Web Developer</span> from California with a passion for helping individuals and
          organizations
          accomplish their goals.</p>
        <Link text="Read More"/>
      </div>
    </div>

    <div class="right-column">

    </div>
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo";
import Link from "@/components/Link";

export default {
  name: "AboutPage",
  components: {
    Logo,
    Link,
  },
};
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
  padding: 100px;

  background-color: var(--cream);

  .left-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;

    .logo {
      // styles...
    }

    .crumb {
      font-family: Overlock, cursive;
      font-size: 2rem;
      font-weight: 900;
      color: var(--salmon);
    }
  }

  .center-column {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;

    img {
      width: 80%;
      border: 3px solid var(--salmon);
      box-shadow: -12px 12px 0px var(--salmon);
    }

    .text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 4rem;

      h1 {
        font-family: Overlock, cursive;
        font-size: 4.5rem;
        font-weight: 900;
        line-height: 5rem;
        color: var(--charcoal);

        span {
          color: var(--salmon);
        }
      }

      p {
        font-family: Signika, sans-serif;
        font-size: 2rem;
        font-weight: 300;
        color: var(--charcoal);

        span {
          font-weight: 600;
        }
      }
    }
  }

  .right-column {
    min-width: 300px;
  }
}
</style>