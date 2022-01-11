<template>
  <textarea :value="text" name="test" id="" cols="30" rows="10"></textarea>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
    text: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>