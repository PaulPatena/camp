<template>
  <v-expansion-panels
    v-model="panel" multiple :dark="getDarkMode"
  >
    <v-expansion-panel
      v-for="theme in themes" :key="theme.name"
    >
      <v-expansion-panel-header>{{ theme.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <ol>
          <li v-for="question in theme.questions" :key="question.description">
            {{question.description}} {{getAverageResponse(question.survey_responses)}}
          </li>            
        </ol>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script> 
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SurveyThemes',
  components: {

  },
  props: {
    themes: {type: Array}
  },
  data: () => ({
    panel: [],
  }),
  computed: {
    ...mapGetters(['getDarkMode', 'getDetailedViewIdx', 'getDetailedSurvey']),
  },
  methods: {
    getAverageResponse(survey_responses) {
      const total = {value: 0, count: 0}
      survey_responses.forEach(resp => {
        const parsedData = parseInt(resp.response_content) 
        if (!isNaN(parsedData)) {
          total.value += parseInt(resp.response_content)
          total.count += 1
        }
      });

      try {
        return (total.value / total.count).toFixed(2)
      } catch (error) {
        return 0  // handling of division by zero
      }
    }
  }
};
</script>
