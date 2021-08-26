<template>
  <li class="item" :class="{ 'item--soldout': item.soldOut }">
    <img :src="require(`../assets/image/${item.image}`)" alt="picture" />
    <div class="item__descr">
      <h2 class="item__title">{{ item.title }}</h2>
      <div class="item__buy" v-if="!item.soldOut">
        <div class="item__price">
          <p class="item__old-price" v-if="item.oldPrice">{{ item.oldPrice }}</p>
          <p class="item__new-price">{{ item.price }}</p>
        </div>
        <my-button
          class="item__btn"
          :class="{ 'item__btn--added': item.isOnCart }"
          @click="fetchPost"
        >
          {{ isNewLoading ? 'загрузка...' : item.isOnCart ? 'В корзине' : 'Купить' }}
        </my-button>
      </div>
      <p v-else class="item__soldout">Продана на аукционе</p>
    </div>
  </li>
</template>

<script>
import axios from 'axios';
import MyButton from './MyButton.vue';
export default {
  components: { MyButton },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isNewLoading: this.isLoading,
      isOnCartNew: this.isOnCart,
    };
  },
  methods: {
    async fetchPost() {
      try {
        if (!this.isOnCartNew) {
          this.isNewLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
          console.log(response.data);
          this.isNewLoading = false;
        }
        this.isOnCartNew = !this.isOnCartNew;
        localStorage[this.item.id] = this.isOnCartNew;
        this.$emit('buy', this.item.id);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  max-width: 280px;
  border: 1px solid $border-color;
  &--soldout {
    opacity: 0.5;
  }

  img {
    min-height: 160px;
    object-fit: cover;
  }

  &__descr {
    padding: 20px 24px 24px 24px;
  }

  &__title {
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 22px;
  }

  &__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__old-price {
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #a0a0a0;
    text-decoration: line-through;
  }

  &__new-price {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
  }

  &__soldout {
    margin-top: 34px;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
  }

  &__btn {
    width: 118px;

    &--added {
      position: relative;
      padding-left: 23px;
      background-color: #5b3a32;
      &::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        top: 50%;
        transform: translateY(-50%);
        left: 8px;
        background-image: url('../assets/image/check.svg');
      }
    }
  }
}
</style>
