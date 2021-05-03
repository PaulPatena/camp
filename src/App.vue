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

      <v-btn icon title="source code for this project" href="https://github.com/PaulPatena/personal_site_2021" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main :class="{'dark-background': getDarkMode, 'light-background': !getDarkMode}">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: "App",
  computed: {
    ...mapGetters(['getDarkMode']),
    iconColor: function() {
      return this.getDarkMode ? "#000000" : "#FFFFFF"
    }
  },
  methods: {
    ...mapMutations(['invertDarkMode'])
  },
};
</script>

<style lang="scss">
.dark-background {
  background-color: $dark-color;
}

.light-background {
  background-color: $light-color !important;
}
</style>
