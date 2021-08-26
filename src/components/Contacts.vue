<template>
  <ul class="contacts">
    <li class="contact contact--phone">
      <a href="tel:+74955555555">{{ phone }}</a>
    </li>
    <li class="contact contact--adress">
      {{ address }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  display: flex;
  margin-left: auto;
}
.contact {
  position: relative;
  padding-left: 24px;
  &:not(:last-child) {
    margin-right: 48px;
  }

  &::before {
    position: absolute;
    content: '';
    top: 2px;
    left: 0;
    width: 16px;
    height: 16px;
  }

  &--phone {
    &::before {
      background-image: url('../assets/image/phone.svg');
    }
  }
  &--adress {
    &::before {
      background-image: url('../assets/image/adress.svg');
    }
  }
}
</style>
