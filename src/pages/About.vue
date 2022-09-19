<template>
  <div class="about-container">
    <LogoComponent class="logo"/>
  </div>
</template>

<script>
import LogoComponent from "@/components/icons/Logo";

export default {
  name: "AboutPage",
  components: {
    LogoComponent,
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

  .logo {
    position: sticky;
    top: 100px;
    left: 100px;
  }
}
</style>