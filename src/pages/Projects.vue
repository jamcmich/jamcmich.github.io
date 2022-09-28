<template>
  <section class="projects-section" data-section="projects">
    <!-- Heading -->
    <h1 class="__heading">Projects</h1>

    <!-- Button Switch -->
    <div class="button-container">
      <button v-for="(item, index) in buttonItems"
              :class="['__button', activeClass(index)]"
              :key="item.id"
              @click="toggleActiveButton(index)">
        {{ item.textContent }}
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: "ProjectsPage",
  data() {
    return {
      buttonItems: [
        { textContent: "Professional" },
        { textContent: "Personal" },
      ],
      activeButton: 0,
    };
  },
  methods: {
    activeClass(index) {
      return this.activeButton === index ? "active" : "";
    },
    toggleActiveButton(index) {
      index === 0 ? this.activeButton = 0 : this.activeButton = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/pages/_projects.scss';
</style>