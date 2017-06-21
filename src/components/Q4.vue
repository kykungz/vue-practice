<template lang="html">
<div class="">
  <h1>โจทย์ข้อ 4+5</h1>
  <div class="">
    <img :src="imgsrc" alt="">
  </div>
  <span class="">
    <button class="myButton" @click="a">-</button>
    <span style="font-size:40px">{{ count }}</span>
    <button class="myButton" @click="increment();changeImg();">+</button>
  </span>
  <div class="">
    <button @click="randomImg" >Random</button>
  </div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'count', 'imgsrc'
    ])
  },
  methods: {
    ...mapActions([
      'decrement', 'increment', 'changeImg', 'randomImg'
    ]),
    a () {
      this.decrement()
      this.changeImg()
    }
  }
}
</script>

<style lang="css">
img {
  height: 300px;
}
</style>
