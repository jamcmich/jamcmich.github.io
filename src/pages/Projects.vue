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
    <MasonryWall :items="cardItems" :column-width="400" :gap="16">
      <template #default="{ item }">
        <div class="card">
          <h1 class="__subheading">{{ item.title }}</h1>
          <p class="__paragraph">{{ item.paragraph }}</p>
        </div>
      </template>
    </MasonryWall>
  </section>
</template>

<script>
import MasonryWall from "@yeger/vue-masonry-wall";

export default {
  name: "ProjectsPage",
  components: {
    MasonryWall,
  },
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