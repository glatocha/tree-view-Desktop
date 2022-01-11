<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="ItemTitle"
  />
</template>

<script>
export default {
  name: "TreeItemTitle",
  props: ["modelValue"],
};
</script>

<style lang="scss" scoped></style>
