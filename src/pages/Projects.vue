<template>
  <section class="projects-section" data-section="projects">
    <p>Hello World</p>
  </section>
</template>

<script>

export default {
  name: "ProjectsPage",
};
</script>

<style lang="scss" scoped>
.projects-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 0 200px;

  background-color: $color__jacobean;
}
</style>