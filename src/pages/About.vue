<template>
  <div class="about-page">
    <div class="__main-content">
      <img class="__img" src="@/assets/portrait.png" alt="An image of Jacob McMichael."/>
      <div class="__text-container">
        <h1>Hi, I'm<br><span>Jacob McMichael</span></h1>
        <p>I'm a <span>Frontend Web Developer</span> from California with a passion for helping individuals and
          organizations
          accomplish their goals.</p>
        <Link text="Read More"/>
      </div>
    </div>

    <div class="right-column">
      <div class="menu-container">
        <Menu/>
      </div>
    </div>
  </div>
</template>

<script>
import Link from "@/components/Link";
import Menu from "@/components/icons/Menu";

export default {
  name: "AboutPage",
  components: {
    Link,
    Menu,
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
  padding: var(--page-padding);

  background-color: var(--macaroon);
}
</style>