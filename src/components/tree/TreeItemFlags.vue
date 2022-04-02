<template>
  <ul :class="flagsClass" v-html="flagsHTML"></ul>
</template>

<script>
export default {
  name: "TreeItemFlags",
  props: ["flags"],
  computed: {
    flagsHTML() {
      var flagsHTML = "";
      const customFlags = this.$store.getters["settings/flags"];
      //console.log("customFlags :>> ", customFlags);
      //console.log("this.flags :>> ", this.flags);
      this.flags.forEach((element, index) => {
        if (element) {
          flagsHTML += `<li title="${customFlags[index].name}">${customFlags[index].htmlTag}</li>`;
        }
      });
      //console.log("flagsHTML :>> ", flagsHTML);
      return flagsHTML;
    },
    flagsClass() {
      var count = 0;
      this.flags.forEach((element, index) => {
        if (element) {
          count++;
        }
      });
      if (count > 2) {
        return "flags-small";
      } else {
        return "flags-big";
      }
    },
    noOfFlags() {
      var count = 0;
      this.flags.forEach((element, index) => {
        if (element) {
          count++;
        }
      });
      return count;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  background: none;
  margin: 0;
  margin-left: 5px;
  /* margin-top: 5px; */
  left: 100%;
  max-height: 100%;
  top: 0%;
  padding: 0;
}
ul >>> i {
  display: flex;
  margin: 3px;
  align-items: center;
  justify-content: center;
  color: var(--flags-color);
}

.flags-small >>> i {
  font-size: 1rem;
  max-height: 30%;
}

.flags-big >>> i {
  font-size: 1.6rem;
  max-height: 40%;
}
</style>
