<template>
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.49437 8.90625C8.49437 8.1296 9.12397 7.5 9.90062 7.5H21.1701C21.9468 7.5 22.5764 8.1296 22.5764 8.90625V20.1758C22.5764 20.9524 21.9468 21.582 21.1701 21.582C20.3935 21.582 19.7639 20.9524 19.7639 20.1758V12.3012L9.90062 22.1645C9.35144 22.7137 8.46106 22.7137 7.91188 22.1645C7.36271 21.6153 7.36271 20.7249 7.91188 20.1758L17.7751 10.3125H9.90062C9.12397 10.3125 8.49437 9.6829 8.49437 8.90625Z"
          fill="#38322E"/>
  </svg>
</template>

<script>
export default {
  name: "ArrowUpRightComponent",
  props: {
    iconSize: String,
  },
};
</script>

<style scoped>
svg {
  width: v-bind(iconSize);
  height: v-bind(iconSize);
}
</style>