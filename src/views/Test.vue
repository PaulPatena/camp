<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols=12>
        {{getSelectedCategory}}
        <category :node="categories"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
import Category from '../components/Category.vue';

export default {
  name: "Test",
  data: () => ({
    categories: {
      name: "Inventory",
      children: [
        {name: "Computers", children: [
          {name: "Laptops", children: [{name: "Mac"}, {name: "Windows"}] }, 
          {name: "Chromebooks", children: [{name: "HP"}, {name: "Lenovo"}] }, 
        ]},
        {name: "Phones", children: [
          {name: "Samsung", children: [{name: "S21"}, {name: "Note10"}]},
          {name: "Apple", children: [{name: "iPhone12"}, {name: "iPhonePro"}]},
        ]}
      ]
    }
  }),
  components: {
    Category
  },
  computed: {
    ...mapGetters(['getDarkMode', 'getSelectedCategory']),
  },
}
</script>

<style lang="scss" scoped>
.youtube-iframe-padding {
  position: relative;
  padding-top: 56.25%;
}

.youtube-iframe-position {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>