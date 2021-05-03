<template>
  <v-alert :dark="getDarkMode"
    border="left" colored-border color="warning" elevation="2"
  >
    <span class="subtitle">{{message}}</span>
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WarningAlert',
  computed: {
    ...mapGetters(['getDarkMode'])
  },
  props: {
    message: String
  }
}
</script>
