<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xs=12 sm=12 md=8 lg=6
              v-for="image in images" :key="image.src">
        <v-card :dark="getDarkMode" :class="{'darkBackground': getDarkMode}">
          <v-card-title class="font-weight-bold subheading">{{image.caption}}</v-card-title>
          <v-img contain :src="`${baseUrl}/${image.src}`"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Videos",
  data () {
    return {
      baseUrl: "https://d2f64i0vuuj86y.cloudfront.net/public_images/old-projects",
      images: [
        {
          src: 'rsz_webapps.jpg',
          caption: 'Webpage made with PHP and jQuery in 2017'
        },
        {
          src: 'rsz_asteroids.jpg',
          caption: 'Webapp made with Python2 in 2013'
        },
        {
          src: 'rsz_weather.jpg',
          caption: 'Android app made with Kotlin in 2017'
        },
        {
          src: 'rsz_todo.jpg',
          caption: 'Android app made with Kotlin in 2017'
        },
      ],
    }
  },
  computed: {
    imgHeight() {
      return `${this.$vuetify.breakpoint.height * 0.20}px`;
    },
    ...mapGetters(['getDarkMode']),
  },
}
</script>