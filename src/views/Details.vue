<template>
  <v-container fluid>
    <HomeButton/>

    <v-row justify="center">
      <v-col cols="12" sm="9">
        <WarningAlert v-if="getDetailedViewIdx===undefined" message="Please select a survey in home page."/>
        <LoadingCard v-else-if="getDetailedSurvey==='loading'"/>
        <v-card v-else
          class="pa-2 mb-2" :class="{'light-background': getDarkMode}"
        >
          <SurveySummary :survey="getDetailedSurvey"/>
          <SurveyThemes :themes="getDetailedSurvey.themes"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoadingCard from '@/components/LoadingCard.vue';
import SurveySummary from '@/components/SurveySummary.vue';
import WarningAlert from '@/components/WarningAlert.vue';
import HomeButton from '@/components/HomeButton.vue';
import SurveyThemes from '@/components/SurveyThemes.vue' 

export default {
  name: 'Details',
  components: {
    LoadingCard,
    SurveySummary,
    WarningAlert,
    HomeButton,
    SurveyThemes,
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
