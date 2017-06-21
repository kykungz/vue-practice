<template lang="html">
<div class="">
  <h1>โจทย์ข้อ 3</h1>
  <div>{{ discounted }}</div>
  <input style="margin:20px" v-model="price" @change="setPrice(parseInt(price))" type="number">
  <div class="center">
      <button type="button" @click="setPercent(5)" class="myButton">5%</button>
      <button type="button" @click="setPercent(10)" class="myButton">10%</button>
      <button type="button" @click="setPercent(15)" class="myButton">15%</button>
  </div>
  <div class="center">
      <button type="button" @click="setPercent(20)" class="myButton">20%</button>
      <button type="button" @click="setPercent(30)" class="myButton">30%</button>
      <button type="button" @click="setPercent(40)" class="myButton">40%</button>
  </div>
  <div style="display: flex">

  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      price: 0
    }
  },
  computed: {
    ...mapGetters([
      'discounted'
    ])
  },
  methods: {
    ...mapActions([
      'setPrice', 'setPercent'
    ])
  }
}
</script>

<style lang="css">
</style>
