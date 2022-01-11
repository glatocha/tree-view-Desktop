<template>
  <div id="TreeItem">
    <tree-item-title v-model="title" />
    <tree-item-descriptioon v-model="description" />
  </div>
</template>

<script>
import TreeItemDescriptioon from "./TreeItemDescriptioon.vue";
import TreeItemTitle from "./TreeItemTitle.vue";
export default {
  name: "TreeItem",
  components: {
    TreeItemTitle,
    TreeItemDescriptioon,
  },
  data() {
    return {
      title: "default title",
      description: "default description",
    };
  },
};
</script>

<style lang="scss" scoped>
#TreeItem {
}
</style>
