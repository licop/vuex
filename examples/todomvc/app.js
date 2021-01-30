import Vue from 'vue'
import store from './store'
import App from './components/App.vue'

const vm = new Vue({
  store, // inject store to all children
  el: '#app',
  render: h => h(App)
})
console.log(vm);
