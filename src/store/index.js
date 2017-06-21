// Make sure to call Vue.use(Vuex) first if using a module system
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    r: 0,
    g: 0,
    b: 0,
    price: 0,
    percent: 0,
    imgsrc: 'http://bill.sellsuki.com/cartoon/1.jpg'
  },
  mutations: {
    incr (state) {
      state.count++
    },
    decr (state) {
      if (state.count >= 1) {
        state.count--
      }
    },
    setbg (state, color) {
      state.r = color.r
      state.g = color.g
      state.b = color.b
    },
    setPrice (state, price) {
      state.price = price
    },
    setPercent (state, percent) {
      state.percent = percent
    },
    changeImg (state) {
      if (state.count <= 25 && state.count >= 1) {
        state.imgsrc = `http://bill.sellsuki.com/cartoon/${state.count}.jpg`
      }
    },
    randomImg (state) {
      var page = Math.floor(Math.random() * 25)
      state.count = page
      state.imgsrc = `http://bill.sellsuki.com/cartoon/${state.count}.jpg`
    }
  },
  getters: {
    count: state => state.count,
    bg: state => `rgb(${state.r}, ${state.g}, ${state.b})`,
    discounted: (state) => {
      return (100 - (parseInt(state.percent))) / 100 * state.price
    },
    imgsrc: (state) => state.imgsrc
  },
  actions: {
    increment (context) {
      context.commit('incr')
    },
    decrement (context) {
      context.commit('decr')
    },
    changeBG (context, color) {
      context.commit('setbg', color)
    },
    setPrice (context, price) {
      context.commit('setPrice', price)
    },
    setPercent (context, percent) {
      context.commit('setPercent', percent)
    },
    changeImg (context) {
      context.commit('changeImg')
    },
    randomImg (context) {
      context.commit('randomImg')
    }
  }
})

export default store
