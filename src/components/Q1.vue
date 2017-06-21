<template lang="html">
  <div>
    <h1>โจทย์ข้อ 1</h1>
      R:<input v-model='r' @change="changeBG({r,g,b})" type="number"><br>
      G:<input v-model='g' @change="changeBG({r,g,b})" type="number"><br>
      B:<input v-model='b' @change="changeBG({r,g,b})" type="number"><br>
      {{ bg }}
      <div class="colorBox" :style='`backgroundColor: ${bg}`'></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      r: 0,
      g: 0,
      b: 0
    }
  },
  computed: {
    ...mapGetters([
      'bg'
    ])
  },
  methods: {
    ...mapActions([
      'changeBG'
    ])
  }
}
</script>

<style lang="css">
</style>
