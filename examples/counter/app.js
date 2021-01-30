import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

const vm = new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})

console.log(vm)