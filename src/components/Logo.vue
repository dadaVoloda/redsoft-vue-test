<template>
  <a class="logo" :class="{ 'logo--dark': darkLogo }">
    <img :src="require(`../assets/image/${darkLogo ? 'logo-dark' : 'logo'}.svg`)" alt="logo" />
  </a>
</template>

<script>
export default {
  props: {
    'dark-logo': Boolean,
  },
};
</script>

<style scoped lang="scss">
.logo {
  margin-right: 48px;
  &--dark {
    overflow: hidden;
    border-radius: 4%;
  }
}
</style>
