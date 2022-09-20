<template>
  <a>
    {{ text }}
    <ArrowUpRight :iconSize="iconSize" :iconColor="iconColor"/>
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
    iconSize: {
      type: String,
      default: "28px",
    },
    iconColor: {
      type: String,
      default: "$color__mud",
    },
    text: String,
    textColor: String,
    highlightColor: {
      type: String,
      default: "$color__wool",
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  font-family: $font-family__pt-sans;
  font-size: $font-size__button;
  font-weight: $font-weight__bold;
  color: $color__mud;

  border: none;
  background: none;

  transition: background-size 0.4s 0s ease;

  &:hover {
    cursor: pointer;

    transition: background-size 0.4s 0s ease;
  }
}
</style>