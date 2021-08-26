<template>
  <form @submit.prevent class="form" action="#">
    <input class="form__input" type="text" placeholder="Поиск по названию картины" />
    <my-button class="form__btn">Найти</my-button>
  </form>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
  components: { MyButton },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  max-width: 416px;
  width: 100%;
  margin-left: auto;
  &__input {
    flex: 1;
    padding: 0 16px;
    border: 1px solid $border-color;
    &::placeholder {
      color: #9f9f9f;
    }
  }
}
</style>
