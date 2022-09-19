<template>
  <nav class="navbar-component">
    <Logo class="__logo"/>

    <ul class="__nav-links">
      <li class="__link __active">About</li>
      <li class="__link">Projects</li>
      <li class="__link">Contact</li>
    </ul>
  </nav>
</template>

<script>
import Logo from "@/components/icons/Logo";

export default {
  name: "NavbarComponent",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.navbar-component {
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 0 200px;

  background-color: transparent;

  .__nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 72px;

    color: var(--color__wool);
    font-family: var(--font-family__signika);
    font-weight: var(--font-weight__regular);
    font-size: var(--font-size__subheading);

    list-style-type: none;

    .__active {
      color: var(--color__mud);
      font-weight: var(--font-weight__semi-bold);
    }
  }
}
</style>