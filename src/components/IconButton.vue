<template>
  <q-btn :icon="icon" class="square" color="primary">
    <q-tooltip
      anchor="center right"
      transition-show="scale"
      transition-hide="scale"
      class="bg-accent"
      >{{ tooltip }}</q-tooltip
    >
  </q-btn>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: String,
    tooltip: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.square {
  width: 60px;
  height: 60px;
  margin: 5px;
  font-size: 20px;
}
</style>