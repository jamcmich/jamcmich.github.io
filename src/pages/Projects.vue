<template>
  <section class="projects-section" data-section="projects">
    <!-- Heading -->
    <h1 class="__heading">Projects</h1>

    <!-- Button Switch -->
    <div class="button-container">
      <button v-for="(item, index) in buttonItems"
              :key="item.id"
              :class="['__button', activeClass(index)]"
              @click="toggleActiveButton(index)">
        {{ item }}
      </button>
    </div>

    <!-- Dynamic Content -->
    <div class="card-container">
      <div v-for="(item, index) in cardItems"
           :key="item.id"
           class="card"
           @click="console.log(index)">
        <h1 class="__subheading">{{ item.title }}</h1>
        <p class="__paragraph">{{ item.paragraph }}</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "ProjectsPage",
  data() {
    return {
      buttonItems: ["Professional", "Personal"],
      cardItems: [
        {
          title: "Project Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Project Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sagittis euismod malesuada at volutpat et, consectetur.",
        },
        {
          title: "Project Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sagittis euismod malesuada at volutpat et, consectetur. Vel nunc lacus, lacus in eu eget proin facilisi.",
        },
        {
          title: "Project Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sagittis euismod malesuada at volutpat et, consectetur. Vel nunc lacus, lacus in eu eget proin facilisi.",
        },
        {
          title: "Project Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sagittis euismod malesuada at volutpat et, consectetur. Vel nunc lacus, lacus in eu eget proin facilisi.",
        },
        {
          title: "Project Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh sagittis euismod malesuada at volutpat et, consectetur. Vel nunc lacus, lacus in eu eget proin facilisi.",
        },
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