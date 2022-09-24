<template>
  <a :data-text=text>
    {{ text }}
    <ArrowUpRight :iconSize="iconSize" :iconColor="iconColor" />
  </a>
</template>

<script>
import ArrowUpRight from "@/components/icons/ArrowUpRight";

export default {
  name: "LinkComponent",
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
a {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  font-family: $font-family__mulish;
  font-size: $font-size__button;
  font-weight: $font-weight__bold;
  color: $color__mud;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }

  @include __highlight-on-hover(v-bind(textColor), v-bind(highlightColor));
}
</style>