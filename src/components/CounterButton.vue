<template lang="html">
  <div class="">
    <button @click="emitIncrement()" type="button" name="button">{{ number }}</button>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    emitIncrement () {
      this.$emit('increment')
    }
  }
}
</script>

<style lang="css">

</style>
