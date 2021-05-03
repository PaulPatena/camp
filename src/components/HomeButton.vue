<template>
  <v-row>
    <v-col>
      <v-btn text :dark="getDarkMode" @click="$router.push({ path: '/' })">
        <v-icon class="mr-2">mdi-home</v-icon>Home
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeButton',
  computed: {
    ...mapGetters(['getDarkMode'])
  }
}
</script>
