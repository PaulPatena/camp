<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols=12 xs=12 sm=6 lg=4
              v-for="link in videoLinks" :key="link.text">
        <v-card :dark="getDarkMode" :class="{'darkBackground': getDarkMode, 'lightBackground': !getDarkMode}">
          <div class="youtube-iframe-padding">
            <iframe :src="link.src" class="youtube-iframe-position"
                    frameborder="0" allowfullscreen></iframe>
          </div>

          <p class="subtitle pa-2">{{link.text}}</p>
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
      videoLinks: [
        { src: 'https://www.youtube.com/embed/UHfnlHlAXYU',
          text: 'IoT Smart Button having remote tracking and SMS notifications.'},
        { src: 'https://www.youtube.com/embed/sHBQciVpgmk',
          text: 'Opening my garage door using web interface connected to my microcontroller, switch and key fob.'},
        { src: 'https://www.youtube.com/embed/OsXU2uyPV80',
          text: 'Demonstrating Internet of Things by controlling LED lights using web interface.'},
        { src: 'https://www.youtube.com/embed/HG8vboyqRLM',
          text: 'Demo of a relay switch controlling a 240V supply to a lamp.'},
        { src: 'https://www.youtube.com/embed/4b6prDvchfw',
          text: 'Snake Game implemented with 4x4 switch, bare-metal arduino uno, neopixel matrix.'},
        { src: 'https://www.youtube.com/embed/Tx8GTx0hlSc',
          text: 'Snake Game implemented with gyroscrope sensors, bare-metal arduino uno, and neopixel matrix.'}]
    }
  },
  computed: {
    ...mapGetters(['getDarkMode']),
  },
}
</script>

<style lang="scss" scoped>
.youtube-iframe-padding {
  position: relative;
  padding-top: 56.25%;
}

.youtube-iframe-position {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>