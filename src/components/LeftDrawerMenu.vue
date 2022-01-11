<template>
  <div class="row justify-center">
    <icon-button
      :icon="'fas fa-file'"
      :tooltip="'New file'"
      @click.prevent="newFile"
    />
    <icon-button
      :icon="'fas fa-folder-open'"
      :tooltip="'Open file'"
      @click.prevent="openFile"
    />
    <menu-separator />
    <icon-button
      :icon="'fas fa-save'"
      :tooltip="'Save file'"
      @click.prevent="saveFile"
    />
    <menu-separator />
    <icon-button :icon="'fas fa-sliders-h'" :tooltip="'Settings'" />
    <menu-separator />
    <icon-button :icon="'fas fa-question-circle'" :tooltip="'About'" />
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";
import MenuSeparator from "./MenuSeparator.vue";

export default {
  name: "LeftDrawerMenu",
  components: {
    IconButton,
    MenuSeparator,
  },
  setup() {},
  methods: {
    openFile() {
      const openFile = window.electron.sendMessage("ipc-rm-open-file-message");
      if (openFile !== undefined) {
        this.$emit("file-open", openFile);
      }
      console.log(openFile);
    },
    saveFile() {
      const saveFile = window.electron.sendMessage("ipc-rm-save-file-message");
      console.log(saveFile);
    },
  },
};
</script>
