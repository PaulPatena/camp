<template>
  <v-card class="pa-2 text-center" :dark="getDarkMode">
    <v-progress-circular color="primary" size="50" indeterminate />
    <p class="my-2 body-1">Fetching data, please wait.</p>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoadingCard',
  computed: {
    ...mapGetters(['getDarkMode'])
  }
}
</script>
