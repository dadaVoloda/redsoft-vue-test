module.exports = {
  publicPath: '/redsoft-vue-test/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/style.scss";`,
      },
    },
  },
};
