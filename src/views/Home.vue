<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xs="12" sm="9" lg="5">
        <v-card class="lightBackground pa-2 elevation-0">
          <v-img src="https://d2f64i0vuuj86y.cloudfront.net/public_images/paul_logo.png"></v-img>
        </v-card>
        <br>
        <v-img src="https://d2f64i0vuuj86y.cloudfront.net/public_images/certs/pluralsight.png"></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="9" lg="6">
        <v-card class="elevation-6" :dark="getDarkMode" :class="{'darkBackground': getDarkMode, 'lightBackground': !getDarkMode}">
          <v-container fluid>
            <v-row>
              <v-col cols="4">
                <a href="https://www.credly.com/badges/0c10a8e5-d58d-4c8b-93b5-fd0e9203f429" target="_blank">
                  <v-img contain src="https://d2f64i0vuuj86y.cloudfront.net/public_images/aws-certified-solutions-architect-associate.png"></v-img>
                </a>
              </v-col>
              <v-col cols="4">
                <a href="https://www.credly.com/badges/a83a06e7-a2d1-44ca-864e-e06a77b7eb04" target="_blank">
                  <v-img contain src="https://d2f64i0vuuj86y.cloudfront.net/public_images/aws-certified-developer-associate.png"></v-img>
                </a>

              </v-col>
              <v-col cols="4">
                <a href="https://d2f64i0vuuj86y.cloudfront.net/public_images/certs/scrum.jpg" target="_blank">
                  <v-img contain src="https://d2f64i0vuuj86y.cloudfront.net/public_images/seal-csm.png"></v-img>
                </a>
              </v-col>
            </v-row>
          </v-container>

          <section class="pa-4">
            <h1 class="display-1 font-weight-medium">My Short Story</h1>
            <ul class="mt-2">
              <li>A passionate developer that constantly learns new technology to apply in software solutions.</li>
              <li>An experienced lead that takes pride in mentoring people and improving processes.</li>
              <li>Extensive 13+ years of work experience across different software disciplines such as web development,  pc applications, embedded software, and devops.</li>
              <li>Expertise in front-end development with either React (Redux and React-hooks) or Vue (VueJS, Vuex, Vue-Router, and Vuetify) frameworks.</li>
              <li>Skilled in Python for developing applications, web servers, orchestrators and build scripts.</li>
              <li>Experienced working with cloud services from AWS and GCP.</li>
              <li>An advocate of design-first approach, creating diagrams (sequence, state, composition, etc) and communicating solutions prior to diving into code.</li>
              <li>Experienced in configuring code build pipelines and managing generated artifacts.</li>

            </ul>
            <h1 class="mt-4 display-1 font-weight-medium">Skills and Qualifications</h1>
            <ol class="mt-2">
              <li>Programming Languages: C, C++11, Python, Javascript ES6/7</li>
              <li>User Interface: Vue JS, Vuex, Vue-router, Vuetify, React, Redux, React-hooks, ECharts, SocketIO, REST, HTML, CSS, JS, jQuery, Sass, Cypress</li>
              <li>Backend: Python Flask, NodeJS + Express, PostgreSQL, MongoDB</li>
              <li>Solution Design: PlantUML, DrawIO</li>
              <li>Project Management: Scrum, JIRA Administration, Miro Board, Confluence </li>
              <li>Source Control: Git, Bitbucket, Fisheye, Crucible</li>
              <li>Build Tools: Docker, TeamCity, Artifactory, Kubernetes</li>
            </ol>
          </section>
        </v-card>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
import {mapGetters} from 'vuex';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Main',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters(['getDarkMode']),
  },
}
</script>
