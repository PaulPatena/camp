<template>
  <v-app>
    <v-app-bar app clipped-left dense color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img src="@/assets/pp-outline.png" transition="scale-transition" width="32" @click="$router.push({name: `Home`})" style="cursor: pointer;"/>
      </div>
      
      <v-spacer></v-spacer>

      <v-btn icon title="contact Paul">
        <a href="mailto:paul@paulpatena.com" style="text-decoration: none; color: white">
            <v-icon>mdi-email</v-icon>
          </a>
      </v-btn>

      <v-btn icon title="Paul's LinkedIn account" href="https://www.linkedin.com/in/paulpatena/" target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon title="Paul's Github account" href="https://github.com/PaulPatena/personal_site_2021" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer :dark="getDarkMode" app clipped v-model="drawer" :mini-variant="mini"
      :class="{'darkBackground': getDarkMode, 'lightBackground': !getDarkMode}"
    >
      <v-list-item class="px-2">
        <v-btn icon :color="accentColor" @click.stop="mini = !mini">
          <v-icon v-if="mini" title="expand drawer">mdi-chevron-right</v-icon>
          <v-icon v-else title="minimize drawer">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item-group
            v-model="selectedItem"
            color="warning">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :title="item.title"
              link
              @click="$router.push({name: item.routeName})"
            >
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      
      <v-divider></v-divider>
      <v-list-item nav dense @click="invertDarkMode()" title="switch between dark & light theme">
        <v-list-item-icon>
          <v-icon>mdi-brightness-6</v-icon>  
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{getDarkMode ? 'Dark Mode': 'Light Mode'}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-navigation-drawer>

    <v-main :class="{'darkBackground': getDarkMode, 'lightBackground': !getDarkMode}">
      <transition name="fade-transition" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: true,
    selectedItem: 0,
    darkMode: false,
    accentColor: "orange darken-2",
    items: [
      { title: 'About Me', icon: 'mdi-account', routeName: "Home" },
      { title: 'My Certificates', icon: 'mdi-medal', routeName: "MyCerts" },
      { title: 'Home Proj Videos', icon: 'mdi-play-circle', routeName: "Videos" },
      { title: 'Home Proj Photos', icon: 'mdi-image', routeName: "Gallery" },
      { title: 'Home DIY', icon: 'mdi-hammer-screwdriver', routeName: "Diy" },
      { title: 'Atlassian', icon: 'mdi-atlassian', routeName: "Test" },
    ],
    mini: true,
  }),

  computed: {
    ...mapGetters(['getDarkMode']),
  },

  methods: {
    ...mapMutations(['invertDarkMode'])
  },

  mounted() {
    for (let i=0; i < this.items.length; i++) {
      if (this.items[i].routeName === this.$route.name) {
        this.selectedItem = i;
      }
    }
  }
};
</script>

<style lang="scss">
.darkBackground {
  background-color: #363636;
  color: #F4F4F4;
}

.lightBackground {
  background-color: #D3E6FF !important;
}

</style>
