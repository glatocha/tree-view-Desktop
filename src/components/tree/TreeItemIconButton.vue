<template>
  <i class="icon-button" :class="icon" :title="tooltip"></i>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: String,
    tooltip: String,
  },
};
</script>

<style lang="scss" scoped>
.icon-button {
  padding: 2px;
  width: 16px;
  color: var(--tree-icons-color) !important;
  text-align: center;
  cursor: pointer;
  line-height: 0.7rem;
  font-size: 0.9rem;
  height: 1rem;
}
</style>
