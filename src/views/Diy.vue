<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols=12 md=9>
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            :height="imgHeight"
          >
            <v-carousel-item
              v-for="i in 7"
              :key="`diy-${i}`"
            >
              <v-sheet
                height="100%"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div>
                    <v-img :height="imgHeight" contain :src="`${baseUrl}/${i}.jpg`"></v-img>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Diy',

  data: () => ({
    baseUrl: "https://d2f64i0vuuj86y.cloudfront.net/public_images/diy",
  }),

  computed: {
    imgHeight() {
      let factor = 0.9;
      if (this.$vuetify.breakpoint.height > 2*this.$vuetify.breakpoint.width) {
        factor = 0.35; // portrait mobile devices
      } else if (this.$vuetify.breakpoint.height > this.$vuetify.breakpoint.width) {
        factor = 0.5; // tablet or squarish devices
      }
      return `${this.$vuetify.breakpoint.height * factor}px`;
    },
    ...mapGetters(['getDarkMode']),
  },
}
</script>