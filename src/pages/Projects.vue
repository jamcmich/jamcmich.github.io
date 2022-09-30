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
    <MasonryWall :items="!this.activeButton ? cardItems.data.professional : cardItems.data.personal"
                 :column-width="400"
                 :gap="16">
      <template v-slot="{ item }">
        <div class="card">
          <h1 class="__subheading">{{ item.title }}</h1>
          <p class="__paragraph">{{ item.paragraph }}</p>

          <div class="tag-container">
            <span v-for="tag in item.tags" :key="tag.id" class="__tag">
              {{ tag }}
            </span>
          </div>

          <img :src="item?.image?.src" :alt="item?.image?.alt" />
        </div>
      </template>
    </MasonryWall>
  </section>
</template>

<script>
import data from "@/assets/projects.js";
import MasonryWall from "@yeger/vue-masonry-wall";

export default {
  name: "ProjectsPage",
  components: {
    MasonryWall,
  },
  data() {
    return {
      buttonItems: ["Professional", "Personal"],
      cardItems: data,
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