<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols=12 sm=9 md=6 lg=4>
        <LoadingCard v-if="!getSurveys"></LoadingCard>
        <Fragment v-else>
          <v-card
            class="pa-2 mb-2"
            v-for="(survey, survey_idx) in getSurveys"
            :key="survey.name"
            :dark="getDarkMode"
          >
            <v-card-title>{{ survey.name }}</v-card-title>
            <div class="ml-4">Responses: {{generateSurveySummary(survey)}}</div>
            <v-card-actions>
              <v-btn color="primary" text @click="loadDetailedView(survey_idx)">
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </Fragment>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { Fragment } from 'vue-fragment';
import LoadingCard from '@/components/LoadingCard.vue';

export default {
  name: 'Main',
  components: {
    Fragment,
    LoadingCard
  },
  computed: {
    ...mapGetters(['getDarkMode', 'getSurveys']),
  },
  methods: {
    ...mapMutations(['setDetailedViewIdx']),
    ...mapActions(['fetchSurveys']),
    generateSurveySummary(survey) {
      return `${survey.submitted_response_count} / ${survey.participant_count} (${survey.response_rate.toFixed(4)*100}%)`
    },
    loadDetailedView(survey_idx) {
      this.setDetailedViewIdx(survey_idx)
      this.$router.push({path: '/details'})
    }
  },
  created: function () {
    this.fetchSurveys();
  },
};
</script>
