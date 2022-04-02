<template>
  <div class="row justify-center">
    <icon-button
      :icon="'insert_drive_file'"
      :tooltip="'New file'"
      @click.prevent="newFile"
    />
    <icon-button
      :icon="'folder_open'"
      :tooltip="'Open file'"
      @click.prevent="openFile"
    />
    <menu-separator />
    <icon-button :icon="'save'" :tooltip="'Save'" @click.prevent="saveFile" />
    <icon-button
      :icon="'save_as'"
      :tooltip="'Save as...'"
      @click.prevent="saveNewFile"
    />
    <menu-separator />
    <icon-button :icon="'tune'" :tooltip="'Settings'" />
    <menu-separator />
    <icon-button :icon="'help_outline'" :tooltip="'About'" />
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

  methods: {
    newFile() {
      //console.log("New file request");
      this.$store.dispatch("tree/initNewTree");
      this.$store.dispatch("messages/addMessage", {
        text: `new document created`,
        duration: 1000,
        class: "event",
      });
    },
    openFile() {
      const openFile = window.electron.sendMessage("ipc-rm-open-file-message");
      if (openFile !== undefined) {
        //this.$emit("file-open", openFile);
        this.$store.dispatch("tree/resetTree");
        //the timeout here is to force vue to update display with zero items
        //this is invisible to the user, but allows to reset all the components
        //otherwise loading new file actually exchange the components data instead of creating new ones
        //this was causing setting the changed flag
        setTimeout(() => {
          this.$store.dispatch("tree/loadFromFile", openFile);
          const fileName = openFile.fileName.split("\\").pop().split("/").pop();
          this.$store.dispatch("messages/addMessage", {
            text: `file opened - ${fileName}`,
            duration: 2000,
            class: "event",
          });
        }, 1);
      }
      //console.log(JSON.parse(openFile.fileContent).tree);
    },
    saveFile() {
      const settings = JSON.stringify(this.$store.getters["settings/settings"]);
      const tree = JSON.stringify(this.$store.getters["tree/getTree"]);
      console.log("tree :>> ", tree);
      const payload = {
        fileVersion: "v02",
        settings,
        tree,
      };
      const saveFile = window.electron.sendMessage(
        "ipc-rm-save-file-message",
        payload
      );
      console.log(saveFile);
    },
    saveNewFile() {
      const settings = JSON.stringify(this.$store.getters["settings/settings"]);
      const tree = JSON.stringify(this.$store.getters["tree/getTree"]);
      console.log("tree :>> ", tree);
      const payload = {
        fileVersion: "v02",
        settings,
        tree,
      };
      const saveFile = window.electron.sendMessage(
        "ipc-rm-save-file-message",
        payload
      );
      console.log(saveFile);
    },
  },
};
</script>
