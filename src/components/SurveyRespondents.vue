<template>
    <v-expansion-panels
      v-model="panel" multiple :dark="getDarkMode"
    >
      <div class="mb-2">
        <v-btn text color="primary" @click="expandAll()" class="mr-2">Expand All</v-btn>
         <v-btn text color="primary" @click="collapseAll()">Collapse All</v-btn>
      </div>
      <v-expansion-panel
        v-for="respondentId in respondentIds" :key="respondentId + `-respondent`"
      >
        <v-expansion-panel-header>Respondent: {{ respondentId }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <li v-for="response in getResponsesFromId(respondentId)" :key="response.description + `-personal`" class="mb-2">
            {{response.description}} {{response.response_content}}
            <StarRating :rating="response.response_content"/>
          </li>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { mapGetters } from 'vuex';
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'SurveyRespondents',
  components: {
    StarRating,
  },
  props: {
    respondentIds: {type: Array}
  },
  data: () => ({
    panel: [],
  }),
  computed: {
    ...mapGetters(['getDarkMode', 'getResponsesFromId']),
  },
  methods: {
    expandAll () {
      this.panel = this.respondentIds.map((id, idx) => idx)
    },
    // Reset the panel
    collapseAll () {
      this.panel = []
    },
  }
};
</script>
