<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-btn text :dark="getDarkMode" @click="$router.push({path: '/'})">
          <v-icon class="mr-2">mdi-home</v-icon>Home
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="9" md="6" lg="4">
        <v-card v-if="!getSurveys" class="pa-2 text-center" :dark="getDarkMode">
          <v-progress-circular color="primary" size="50" indeterminate />
          <p class="my-2 body-1">Fetching data, please wait.</p>
        </v-card>
        <Fragment v-else>
          <h1>hello world</h1>
          <!-- <v-card
            v-for="survey in getSurveys"
            :key="survey.name"
            class="pa-2 mb-2"
            :dark="getDarkMode"
          >
            <v-card-title>{{ survey.name }}</v-card-title>

              <div class="ml-4">Response: {{generateSurveySummary(survey)}}</div>
            <v-card-actions>
              <v-btn color="primary" text @click="reserve">
                Details
              </v-btn>
            </v-card-actions>
          </v-card> -->
        </Fragment>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Fragment } from "vue-fragment";

export default {
  name: "Details",
  components: {
    Fragment,
  },
  computed: {
    ...mapGetters(["getDarkMode", "getSurveys"]),
  },
  methods: {
    ...mapActions(["fetchSurveys"]),
    generateSurveySummary(survey) {
      return `${survey.submitted_response_count} / ${survey.participant_count} (${survey.response_rate.toFixed(4)*100}%)`
    }
  },
  created: function () {
    this.fetchSurveys();
  },
};
</script>
