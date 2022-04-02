<template>
  <div class="status-bar">
    <div class="text-small" :class="messageClass">{{ message }}</div>
    <div v-if="unsavedChanged" class="text-small">
      <q-icon name="warning" color="warning" text-color="black" />
      unsaved changes
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "---",
      messageClass: "info",
      timout: null,
    };
  },
  computed: {
    noOfMessages() {
      //console.log("messages getter fired");
      return this.$store.getters["messages/getMessages"].length;
    },
    unsavedChanged() {
      return this.$store.getters["tree/getUnsavedChanges"];
    },
  },
  watch: {
    noOfMessages(value) {
      //console.log("watcher gets fired");
      // console.log(this.$store.getters["messages/getMessages"]);
      if (value === 0) {
        this.message = "-";
        this.messageClass = "info";
      } else {
        const firstMessage = this.$store.getters["messages/getFirstMessage"];
        this.message = firstMessage.text;
        this.messageClass = firstMessage.class;
        clearTimeout(this.timout);
        this.timeout = setTimeout(() => {
          this.$store.dispatch("messages/shiftMessage");
        }, firstMessage.duration);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
}
.info {
  color: gray;
}
.warning {
  color: yellow;
}
.alarm {
  color: red;
}
.event {
  color: rgb(128, 182, 226);
}
</style>
