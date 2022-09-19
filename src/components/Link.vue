<template>
  <a>
    {{ text }}
    <ArrowUpRight :iconSize="iconSize"/>
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
      default: "30px",
    },
    text: String,
    textColor: String,
    highlightColor: {
      type: String,
      default: "var(--salmon)",
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

  font-family: 'PT Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--charcoal);

  border: none;
  background: none;
  background-repeat: no-repeat;
  background-size: 0 40%;
  background-position: 0 90%;

  transition: background-size 0.4s 0s ease;

  &:hover {
    background: linear-gradient(120deg, var(--salmon) 0%, var(--salmon) 100%);
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-position: 0 90%;

    cursor: pointer;

    transition: background-size 0.4s 0s ease;
  }
}
</style>