<template>
  <div class="wrapper">
    <header class="header">
      <div class="container header__container">
        <logo></logo>
        <navbar :titles="linkTitles"></navbar>
        <search></search>
      </div>
    </header>

    <main class="main">
      <section class="gallery">
        <div class="container">
          <h1 class="title">{{ mainTitle }}</h1>
          <gallery-list :items="items" :isLoading="isLoading" @buy="addToCart"></gallery-list>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__container">
        <logo :darkLogo="darkLogo"></logo>
        <navbar :titles="linkTitles"></navbar>
        <contacts :phone="phone" :address="address"></contacts>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import Navbar from './components/Navbar.vue';
import Search from './components/Search.vue';
import Contacts from './components/Contacts.vue';
import GalleryList from './components/GalleryList.vue';

export default {
  components: { Logo, Navbar, Search, Contacts, GalleryList },
  data() {
    return {
      linkTitles: ['Каталог', 'Доставка', 'Оплата', 'Контакты', 'О галерее'],
      items: [
        {
          id: 1,
          title: '«Рождение Венеры» Сандро Боттичелли',
          image: 'picture1.jpg',
          oldPrice: '2 000 000 $',
          price: '1 000 000 $',
          soldOut: false,
          isOnCart: false,
        },
        {
          id: 2,
          title: '«Тайная вечеря» Леонардо да Винчи',
          image: 'picture2.jpg',
          oldPrice: '',
          price: '3 000 000 $',
          soldOut: false,
          isOnCart: false,
        },
        {
          id: 3,
          title: '«Сотворение Адама» Микеланджело',
          image: 'picture3.jpg',
          oldPrice: '2 000 000 $',
          price: '1 000 000 $',
          soldOut: false,
          isOnCart: false,
        },
        {
          id: 4,
          title: '«Урок анатомии» Рембрандт',
          image: 'picture4.jpg',
          oldPrice: '1231231',
          price: '123123',
          soldOut: true,
          isOnCart: false,
        },
      ],
      mainTitle: 'Картины эпохи Возрождения',
      phone: '+7 (495) 555-55-55',
      address: 'г. Москва, ул. Расплетина, 24',
      darkLogo: true,
      isLoading: false,
    };
  },
  methods: {
    addToCart(id) {
      const item = this.items.find((item) => item.id === id);
      item.isOnCart = !item.isOnCart;
      localStorage[item.id] = item.isOnCart;
    },
  },

  mounted() {
    const newArr = Object.entries({ ...localStorage })
      .filter((arr) => arr[1] === 'true')
      .map((el) => el[0]);
    this.items
      .filter((item) => newArr.includes(item.id.toString()))
      .forEach((item) => (item.isOnCart = true));
  },
};
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid $border-color;
  &__container {
    display: flex;
    align-items: center;
    min-height: 96px;
  }
}

.gallery {
  padding: 45px 0;
}

.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
}

.footer {
  color: #555;
  background-color: #eceaea;
  &__container {
    display: flex;
    align-items: center;
    min-height: 96px;
  }
}
</style>
