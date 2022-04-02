<template>
  <div
    class="tree-item-label"
    :title="treeData.notes"
    :style="{ 'background-color': labelStyle }"
  >
    <tree-item-title v-model="title" />
    <tree-item-descriptioon v-model="description" />
    <tree-item-buttons :treeData="treeData" />
    <tree-item-flags :flags="treeData.flags" />
  </div>
</template>

<script>
import TreeItemTitle from "./TreeItemTitle.vue";
import TreeItemDescriptioon from "./TreeItemDescriptioon.vue";
import TreeItemButtons from "./TreeItemButtons.vue";
import TreeItemFlags from "./TreeItemFlags.vue";

export default {
  name: "TreeItemLabel",
  props: ["treeData"],
  components: {
    TreeItemTitle,
    TreeItemDescriptioon,
    TreeItemButtons,
    TreeItemFlags,
  },
  data() {
    return {
      title: this.treeData.title,
      description: this.treeData.description,
      titleUpdTimer: null,
      descriptionUpdTimer: null,
    };
  },
  watch: {
    treeData() {
      this.title = this.treeData.title;
      this.description = this.treeData.description;
    },
    title(value) {
      clearTimeout(this.titleUpdTimer);
      this.titleUpdTimer = setTimeout(() => {
        this.$store.dispatch("tree/updateTitle", {
          id: this.treeData.id,
          title: value,
        });
      }, 500);
    },
    description(value) {
      clearTimeout(this.descriptionUpdTimer);
      this.descriptionUpdTimer = setTimeout(() => {
        this.$store.dispatch("tree/updateDescription", {
          id: this.treeData.id,
          description: value,
        });
      }, 500);
    },
  },
  computed: {
    labelStyle() {
      return this.treeData.bgColorCSS;
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-item-label {
  border: var(--tree-secondary-color) 1px solid;
  padding: 0;
  margin: 5px 0px;
  border-radius: 5px;
  background-color: var(--tree-primary-color);
  min-width: 100px;
  max-width: 300px;
  width: 220px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;

  &.selected {
    border: red 1px dashed;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
}
</style>
