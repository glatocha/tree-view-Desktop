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

<style lang="scss" scoped>
input {
  font-family: inherit;
  padding: 0px;
  background-color: none;
  background: none;
  border: none;
  width: calc(100% - 10px);
  font-size: 1rem;
  font-weight: 600;
  margin: 3px 5px 0px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
