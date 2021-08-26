<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="title in titles" :key="title" class="nav__item">
        <a href="#" class="nav__link">{{ title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  &__list {
    display: flex;
    padding-right: 10px;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 48px;
    }
  }

  &__link {
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
