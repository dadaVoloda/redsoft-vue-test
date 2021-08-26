<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.btn {
  color: #fff;
  width: 122px;
  height: 48px;
  font-weight: 700;
  background-color: #403432;
  transition: 0.2s;
  &:hover {
    background-color: #776763;
  }
}
</style>
