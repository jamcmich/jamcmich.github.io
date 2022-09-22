<template>
  <svg :width=iconSize :height=iconSize viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_8529)">
      <path d="M16.004 9.414L7.397 18.021L5.983 16.607L14.589 8H7.004V6H18.004V17H16.004V9.414Z" :fill=iconColor />
    </g>
    <defs>
      <clipPath id="clip0_2_8529">
        <rect :width=iconSize :height=iconSize fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "ArrowUpRightComponent",
  props: {
    iconSize: String,
    iconColor: String,
  },
};
</script>

<style scoped>

</style>