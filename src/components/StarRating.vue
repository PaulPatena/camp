<template>
  <v-rating
    color="yellow darken-3"
    half-increments
    length="5"
    readonly
    size="20"
    :value="roundedRating"
    :title="rating + ` out of 5`"
  ></v-rating>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {type: String}
  },
  data: () => ({
    fuckme: 0,
  }),
  computed: {
    roundedRating: function () {
      return Math.round(parseFloat(this.rating)*2)/2; // Round off to nearest 0.5
    }
  }
}
</script>
