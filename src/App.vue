<template>
  <v-app>
    <v-app-bar app clipped-left dense color="primary" dark>
      <div class="d-flex align-center">
        <v-img src="@/assets/pp-outline.png" transition="scale-transition" width="32"/>
      </div>
      
      <v-spacer></v-spacer>

      <v-btn icon title="switch between dark & light theme" :color="iconColor" @click="invertDarkMode()">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>

      <v-btn icon title="Paul's Github account" href="https://github.com/PaulPatena/personal_site_2021" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main :class="{'dark-background': getDarkMode, 'light-background': !getDarkMode}">
      <home></home>
    </v-main>
  </v-app>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
import Home from './views/Home.vue'
export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    drawer: true,
    selectedItem: 0,
    darkMode: false,
    accentColor: "orange darken-2",
    items: [
      { title: 'About Me', icon: 'mdi-account', routeName: "Home" },
      { title: 'My Certificates', icon: 'mdi-medal', routeName: "MyCerts" },
      { title: 'Home Proj Videos', icon: 'mdi-play-circle', routeName: "Videos" },
      { title: 'Home Proj Photos', icon: 'mdi-image', routeName: "Gallery" },
      { title: 'Home DIY', icon: 'mdi-hammer-screwdriver', routeName: "Diy" },
      { title: 'Atlassian', icon: 'mdi-atlassian', routeName: "Test" },
    ],
    mini: true,
  }),

  computed: {
    ...mapGetters(['getDarkMode']),
    iconColor: function() {
      return this.getDarkMode ? "#000000" : "#FFFFFF"
    }
  },

  methods: {
    ...mapMutations(['invertDarkMode'])
  },

  mounted() {
    for (let i=0; i < this.items.length; i++) {
      if (this.items[i].routeName === this.$route.name) {
        this.selectedItem = i;
      }
    }
  }
};
</script>

<style lang="scss">
.dark-icon {
  color: $dark-color;
}

.dark-background {
  background-color: $dark-color;
}

.light-background {
  background-color: $light-color !important;
}

</style>
