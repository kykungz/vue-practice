<template lang="html">
  <div class="">
    <h1>โจทย์ข้อ 2</h1>
    <div style="font-size:40px">{{ count }}</div>
    <div class="">
      <button class="myButton" @click="decrement">-</button>
      <button class="myButton" @click="increment">+</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'increment', 'decrement'
    ])
  }
}
</script>

<style lang="css">
</style>
