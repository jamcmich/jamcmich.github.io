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
    textSize: {
      type: String,
      default: "28px",
    },
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
      default: "24px",
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
@use "@/styles/_mixins.scss" as *;

a {
  font-size: v-bind(textSize) !important;
  color: v-bind(textColor);

  @include __underline-on-hover(v-bind(textColor), v-bind(highlightColor));
}
</style>