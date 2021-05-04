<template>
  <v-card class="pa-2 mb-2" :class="{'light-background': getDarkMode}">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-1 basil--text">
        {{getDetailedSurvey.name}}
      </h1>
    </v-card-title>
    <p class="text-center">Participation: {{generateSurveySummary()}}</p>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item + `-title`"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, idx) in items"
        :key="item + `content`"
        background-color="transparent"
      >
        <v-card flat :class="{'light-background': getDarkMode}">
          <v-card-text >
            <SurveyThemes v-if="idx===0" :themes="getDetailedSurvey.themes"/>
            <SurveyRespondents v-else :respondentIds="getRespondentIds"/>
            <!-- TODO: Componentize common-code shared between SurveyThemes and SurveryRespondents -->
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import SurveyThemes from './SurveyThemes.vue';
import SurveyRespondents from './SurveyRespondents.vue';

export default {
  name: 'DetailTabs',
  data: function () {
    return {
      tab: null,
      items: [
        'Themes', 'Participants'
      ],
    }
  },
  computed: {
    ...mapGetters(['getDarkMode', 'getDetailedSurvey', 'getRespondentIds'])
  },
  methods: {
    generateSurveySummary() {
      return `${this.getDetailedSurvey.submitted_response_count} / ${this.getDetailedSurvey.participant_count}` +
        ` (${this.getDetailedSurvey.response_rate.toFixed(4)*100}%)`
    },
  },
  components: {
    SurveyThemes,
    SurveyRespondents,
  }
}
</script>