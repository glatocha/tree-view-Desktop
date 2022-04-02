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

<style lang="scss" scoped>
input {
  font-family: inherit;
  padding: 0px;
  background-color: none;
  background: none;
  border: none;
  width: calc(100% - 10px);
  font-weight: 300;
  font-size: 0.7rem;
  text-align: left;
  margin: 2px 5px 0px;
  word-break: break-word;

  &:focus {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>
