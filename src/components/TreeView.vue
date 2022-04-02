<template>
  <div v-if="treeExists" class="tree-view">
    <tree-item :treeItemId="0" />
  </div>
</template>

<script>
import TreeItem from "./tree/TreeItem.vue";

export default {
  name: "TreeView",
  components: { TreeItem },
  data() {
    return {};
  },
  computed: {
    treeExists() {
      console.log("count :>> ", this.$store.getters["tree/getItemsCount"]);
      return this.$store.getters["tree/getItemsCount"];
    },
  },
  created() {
    this.$store.dispatch("tree/initNewTree");
    this.$store.dispatch("settings/initSetting");
  },
};
</script>

<style lang="scss" scoped>
.tree-view {
  margin-left: 20px;
}
</style>
