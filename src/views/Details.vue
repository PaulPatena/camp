<template>
  <v-container fluid>
    <HomeButton/>

    <v-row justify="center">
      <v-col cols="12" sm="9">
        <WarningAlert v-if="getDetailedViewIdx===undefined" message="Please select a survey in home page."/>
        <LoadingCard v-else-if="getDetailedSurvey==='loading'"/>
        <DetailTabs v-else/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoadingCard from '@/components/LoadingCard.vue';
import WarningAlert from '@/components/WarningAlert.vue';
import HomeButton from '@/components/HomeButton.vue';
import DetailTabs from '@/components/DetailTabs.vue'

export default {
  name: 'Details',
  components: {
    LoadingCard,
    WarningAlert,
    HomeButton,
    DetailTabs,
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
