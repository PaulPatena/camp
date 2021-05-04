<template>
  <v-card class="pa-2" :dark="getDarkMode">
    <v-select
      class="mt-2"
      outlined prepend-icon="mdi-account" label="respondent_id"
      :items="respondentIds" v-model="respondentId"></v-select>

    <div v-if="respondentId!==undefined" class="px-2">
      <p v-for="response in getResponsesFromId(respondentId)" :key="response.description + `-personal`" class="mb-2">
        {{response.description}} {{response.response_content}}
        <StarRating :rating="response.response_content"/>
      </p>
    </div>

  </v-card>
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
    respondentId: undefined
  }),
  computed: {
    ...mapGetters(['getDarkMode', 'getResponsesFromId']),
  },
  methods: {
  }
};
</script>
