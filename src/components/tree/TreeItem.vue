<template>
  <div class="tree-item-header">
    <tree-item-label :treeData="treeData" />
  </div>
  <div v-if="!treeData.isCollapsed" class="tree">
    <ul class="tree-ul">
      <li v-for="(child, index) in treeData.children" :key="index">
        <tree-item :treeItemId="child" />
      </li>
    </ul>
  </div>
</template>

<script>
import TreeItemLabel from "./TreeItemLabel.vue";

export default {
  name: "TreeItem",
  props: ["treeItemId"],
  components: {
    TreeItemLabel,
  },
  data() {
    return {};
  },
  computed: {
    treeData() {
      return this.$store.getters["tree/getItem"](this.treeItemId);
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-item-header {
  display: flex;

  &::before {
    position: absolute;
    content: "";
    width: 15px;
    border-left: var(--tree-lines-color) 1px solid;
    border-bottom: var(--tree-lines-color) 1px solid;
    left: -14px;
    height: 10px;
    border-bottom-left-radius: 5px;
    top: 8px;
    z-index: -1;
  }
}
.tree-ul {
  list-style-type: none;
  margin: 0px 0px 0px 30px;
  padding: 0;
  position: relative;

  > li {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      height: calc(100% + 5px);
      border-left: var(--tree-lines-color) 1px solid;
      left: -14px;
      top: -5px;
      z-index: -1;
    }

    /* last item line does not go all the way down */
    &:last-child:before {
      height: 13px;
    }
  }
}
</style>
