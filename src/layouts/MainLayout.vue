<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar rounded>
            <img src="../assets/favicon.png" />
          </q-avatar>
          TreeView{{ fileName ? " - " : "" }}{{ fileName }}
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      behavior="desktop"
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="70"
    >
      <left-drawer-menu />
    </q-drawer>

    <q-drawer
      show-if-above
      behavior="desktop"
      v-model="rightDrawerOpen"
      side="right"
      bordered
      :width="70"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <tree-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <status-messages />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import LeftDrawerMenu from "../components/LeftDrawerMenu.vue";
import TreeView from "../components/TreeView.vue";
import StatusMessages from "../components/StatusMessages.vue";

export default {
  components: {
    LeftDrawerMenu,
    TreeView,
    StatusMessages,
  },
  data() {
    return {};
  },
  computed: {
    fileName() {
      return this.$store.getters["tree/getFileName"];
    },
  },
  setup() {
    const leftDrawerOpen = ref(true);
    const rightDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.q-toolbar {
  min-height: unset;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>
