<template>
<div id="app">
  <img src="./assets/logo.png">
  {{text}}
  {{count}}
  <button @click='increment' >Increase</button>
  <router-view></router-view>
  <hr>
  <q1></q1>
  <hr>
  <q2></q2>
  <hr>
  <q3></q3>
  <hr>
  <q4></q4>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Q1 from './components/Q1.vue'
import Q2 from './components/Q2.vue'
import Q3 from './components/Q3.vue'
import Q4 from './components/Q4.vue'

export default {
  name: 'app',
  computed: {
    text () {
      return 'Hi'
    },
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions([
      'increment'
    ])
  },
  components: {
    Q1, Q2, Q3, Q4
  }
}
</script>

<style>
.myButton {
  width: 60px;
  height: 60px;
  font-size: 20px;
}
.colorBox {
  background-color: red;
  width: 200px;
  height: 200px;
  margin: auto;
}
.center {
  margin: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
