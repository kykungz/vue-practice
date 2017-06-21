<template lang="html">
  <div @click="headerClick" :style="`background: ${color};`">
    <h1>Header {{ color }}</h1>
    <hr>
  </div>
</template>

<script>
export default {
  props: ['color'],
  methods: {
    headerClick () {
      this.$emit('headerClick')
    }
  }
}
</script>

<style lang="css">
</style>
