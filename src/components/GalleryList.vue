<template>
  <ul class="gallery-list">
    <gallery-item
      v-for="item in items"
      :item="item"
      :isLoading="isLoading"
      :key="item.id"
      @buy="$emit('buy', item.id)"
    ></gallery-item>
  </ul>
</template>

<script>
import GalleryItem from './GalleryItem.vue';
export default {
  components: { GalleryItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.gallery-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 38px 0;
}
</style>
