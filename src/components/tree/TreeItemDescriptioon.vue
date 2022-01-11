<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="ItermDescription"
  />
</template>

<script>
export default {
  name: "TreeItemDescription",
  props: ["modelValue"],
};
</script>

<style lang="scss" scoped></style>
