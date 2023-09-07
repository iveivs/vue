import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import myStore from "@/store" // для второго варианта подключения

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store(myStore) // для второго варианта подключения
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     },
//     decrement (state) {
//       state.count--
//     },
//   }
// })

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     },
//     decrement (state) {
//       state.count--
//     }
//   }
// })

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
