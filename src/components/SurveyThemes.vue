<template>
  <v-expansion-panels
    v-model="panel"
    multiple
    :dark="getDarkMode"
  >
    <v-expansion-panel
      v-for="theme in themes"
      :key="theme.name"
    >
      <v-expansion-panel-header>{{ theme.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{theme.questions}}
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
    themes: {type: Object}
  },
  data: () => ({
    panel: [],
  }),
  computed: {
    ...mapGetters(['getDarkMode', 'getDetailedViewIdx', 'getDetailedSurvey']),
  },
  methods: {

  }
};
</script>
