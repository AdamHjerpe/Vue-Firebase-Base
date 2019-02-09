import './firebase' // Import firebase and initialize
import Vue from 'vue' // Import Vue library
import App from './App.vue' // Import the actual app
import VueFire from 'vuefire' // Import VueFire to connect Vue with Firebase

Vue.use(VueFire) // Add Vuefire as a Vue plugin

new Vue({
  render: h => h(App)
}).$mount('#app')
