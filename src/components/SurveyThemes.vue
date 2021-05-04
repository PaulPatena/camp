<template>
    <v-expansion-panels
      v-model="panel" multiple :dark="getDarkMode"
    >
      <div class="mb-2">
        <v-btn text color="primary" @click="expandAll()" class="mr-2">Expand All</v-btn>
         <v-btn text color="primary" @click="collapseAll()">Collapse All</v-btn>
      </div>
      <v-expansion-panel
        v-for="theme in themes" :key="theme.name"
      >
        <v-expansion-panel-header>{{ theme.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <li v-for="question in theme.questions" :key="question.description" class="mb-2">
            {{question.description}}
            <StarRating :rating="getAverageResponse(question.survey_responses)"/>
          </li>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { mapGetters } from 'vuex';
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'SurveyThemes',
  components: {
    StarRating,
  },
  props: {
    themes: {type: Array}
  },
  data: () => ({
    panel: [],
  }),
  computed: {
    ...mapGetters(['getDarkMode']),
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
    },
    expandAll () {
      this.panel = this.themes.map((theme, idx) => idx)
    },
    // Reset the panel
    collapseAll () {
      this.panel = []
    },
  }
};
</script>
