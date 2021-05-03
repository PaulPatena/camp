<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-btn text :dark="getDarkMode" @click="$router.push({ path: '/' })">
          <v-icon class="mr-2">mdi-home</v-icon>Home
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="9">
        <v-alert v-if="getDetailedViewIdx===undefined" :dark="getDarkMode"
          border="left" colored-border color="warning" elevation="2"
        >
          <span class="subtitle">Please select a survey in home page</span>
        </v-alert>
        <LoadingCard v-else-if="getDetailedSurvey === 'loading'"></LoadingCard>
        <Fragment v-else>
          <v-card
            class="pa-2 mb-2"
            :dark="getDarkMode"
          >
            <v-card-title>{{ getDetailedSurvey.name }}</v-card-title>
            <!-- <div class="ml-4">Response: {{generateSurveySummary(survey)}}</div> -->

          </v-card>
        </Fragment>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Fragment } from 'vue-fragment';
import LoadingCard from '@/components/LoadingCard.vue';

export default {
  name: 'Details',
  components: {
    Fragment,
    LoadingCard,
  },
  computed: {
    ...mapGetters(['getDarkMode', 'getDetailedViewIdx', 'getDetailedSurvey']),
  },
  methods: {
    ...mapActions(['fetchDetailedSurvey']),
  },
  created: function () {
    this.fetchDetailedSurvey()
  },
};
</script>
