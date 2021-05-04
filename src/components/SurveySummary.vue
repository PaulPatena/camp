<template>
  <Fragment>
    <v-card-title>{{ survey.name }}</v-card-title>
    <div class="ml-4 mb-4">Participation: {{generateSurveySummary()}}</div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'SurveySummary',
  components: {
    Fragment,
  },
  props: {
    survey: {type: Object}
  },
  methods: {
    generateSurveySummary() {
      return `${this.survey.submitted_response_count} / ${this.survey.participant_count} (${this.survey.response_rate.toFixed(4)*100}%)`
    },
  }
}
</script>
