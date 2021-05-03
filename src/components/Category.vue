<template>
  <div>
    <div
      v-if="getSelectedCategory.includes(parent)"
      :class="{Highlight: getSelectedCategory === parent + '/' + node.name}"
      class="Navigation"
      @click="setSelectedCategory(parent+'/'+node.name)">{{node.name}}</div>

    <span v-if="node.children && node.children.length">
      <span v-for="(child, idx) in node.children" :key="node.name+idx">
        <category class="SubCategory" :parent="parent + '/' + node.name" :node="child"/>
      </span>
    </span>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "Category",
  props: {
    parent: {type: String, default: ''},
    node: Object
  },
  computed: {
    ...mapGetters(['getSelectedCategory'])
  },
  methods: {
    ...mapMutations(['setSelectedCategory'])
  }
  // logic for highlighting, push into statemanagement path, of selected item
  // if selected item matches parent of a node, render the node
}
</script>

<style lang="scss" scoped>
.SubCategory {
  margin-left: 16px;
}

.Highlight {
  color: red;
//  font-size: 200%;
}
.Navigation {
  cursor: pointer;
}
</style>