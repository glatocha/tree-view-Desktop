<template>
  <div class="tree-items-buttons">
    <div class="section left">
      <tree-item-icon-button
        v-if="hasChildren && !treeData.isCollapsed"
        :icon="'fas fa-folder-minus'"
        :tooltip="'colapse'"
        @click.prevent="collapseTree"
      />
      <tree-item-icon-button
        v-if="hasChildren && treeData.isCollapsed"
        :icon="'fas fa-folder-plus'"
        :tooltip="'expand'"
        @click.prevent="expandTree"
      />
    </div>
    <div class="section center">
      <tree-item-icon-button
        :icon="'fas fas fa-edit'"
        :tooltip="'edit item'"
        @click.prevent="$emit('edit')"
      />
    </div>
    <div class="section right">
      <tree-item-icon-button
        :icon="'fas fa-ellipsis-h'"
        :tooltip="'add child node'"
        @click.prevent="addChild"
      />
      <tree-item-icon-button
        v-if="treeData.id"
        :icon="'fas fa-ellipsis-v'"
        :tooltip="'add sibling node'"
        @click.prevent="addSibling"
      />
      <tree-item-icon-button
        v-if="treeData.id"
        :icon="'fas fa-trash-alt'"
        :tooltip="'remove item'"
        @click.prevent="confirmDialog = true"
      />
    </div>
  </div>
  <q-dialog v-model="confirmDialog">
    <q-card>
      <q-card-section class="row items-center">
        <!-- <q-avatar icon="warning" color="primary" text-color="white" /> -->
        <q-icon name="warning" color="warning" size="lg" />
        <span class="q-ml-sm">Confirm removing the item and all children</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Cancel" color="primary" v-close-popup />
        <q-btn
          @click.prevent="removeItem"
          label="Delete"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import TreeItemIconButton from "./TreeItemIconButton.vue";
export default {
  name: "TreeItemsButtons",
  props: ["treeData"],
  data() {
    return {
      confirmDialog: false,
    };
  },
  components: {
    TreeItemIconButton,
  },
  computed: {
    hasChildren() {
      return this.treeData.children.length > 0;
    },
  },
  methods: {
    collapseTree() {
      this.$store.dispatch("tree/collapseTree", this.treeData.id);
    },
    expandTree() {
      this.$store.dispatch("tree/expandTree", this.treeData.id);
    },
    addChild() {
      this.$store.dispatch("tree/addChild", this.treeData.id);
    },
    addSibling() {
      this.$store.dispatch("tree/addSibling", this.treeData.id);
    },
    removeItem() {
      this.$store.dispatch("tree/removeItem", this.treeData.id);
      this.$store.dispatch("messages/addMessage", {
        text: `item deleted`,
        duration: 500,
        class: "warning",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-items-buttons {
  border-top: 1px solid var(--tree-secondary-color);
  padding: 1px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 0.7rem;
  //   font-size: 0.9rem;
  position: relative;
  height: 21px;
}

.section {
  width: 33%;

  &.left {
    text-align: left;
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
}
</style>
