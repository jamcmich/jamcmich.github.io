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
      default: "var(--color__mud)",
    },
    text: String,
    textColor: String,
    highlightColor: {
      type: String,
      default: "var(--color__wool)",
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

  font-family: var(--font-family__pt-sans);
  font-size: var(--font-size__button);
  font-weight: var(--font-weight__bold);
  color: var(--color__mud);

  border: none;
  background: none;

  transition: background-size 0.4s 0s ease;

  &:hover {
    cursor: pointer;

    transition: background-size 0.4s 0s ease;
  }
}
</style>