module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        // Paul: We explicitly didn't include variables.scss as it is automatically loaded by vuetify
        // Here we can use the newer SCSS flavor of Sass.
        // Note that there *is* a semicolon at the end of the below line
        data: `@import "@/scss/_mixins.scss";`
      }
    }
  }
}
