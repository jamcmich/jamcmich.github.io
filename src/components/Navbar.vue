<template>
  <nav class="navbar-component">
    <Logo class="__logo"/>

    <ul class="__nav-links">
      <li class="__link">About</li>
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
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;

  background-color: var(--macaroon);

  .__nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 64px;

    color: var(--mud);
    font-family: var(--overclock);
    font-weight:;
    font-size: var(--paragraph);

    list-style-type: none;
  }
}
</style>