<template>
<div class="hello">
  <header-view :color="color" @headerClick="changeColor()"></header-view>
  <h1>{{msg}}</h1>
  <input v-model="color">
  <hr>
  <counter-button :number="count" @increment="plus()"> </counter-button>
</div>
</template>

<script>
import HeaderView from './Header'
import CounterButton from './CounterButton'

export default {
  name: 'hello',
  data () {
    return {
      color: '#F00',
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  components: {
    HeaderView, CounterButton
  },
  methods: {
    changeColor () {
      this.color = '#FFF'
    },
    plus () {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
