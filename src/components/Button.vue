<template>
  <a class="__button" :data-text=text>
    {{ text }}
    <ArrowUpRight :iconSize="iconSize" :iconColor="iconColor" />
  </a>
</template>

<script>
import ArrowUpRight from "@/components/icons/ArrowUpRight";

export default {
  name: "ButtonComponent",
  components: {
    ArrowUpRight,
  },
  props: {
    text: String,
    textColor: {
      type: String,
      default: "red",
    },
    highlightColor: {
      type: String,
      default: "red",
    },
    iconSize: {
      type: String,
      default: "28px",
    },
    iconColor: {
      type: String,
      default: (props) => props.textColor,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_button.scss';
</style>