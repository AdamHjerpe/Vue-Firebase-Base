import './firebase'; //Import firebase and initialize
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire' // Import VueFire to connect Vue with Firebase

Vue.use(VueFire); // Add Vuefire as a Vue plugin

new Vue({
  el: '#app',
  render: h => h(App)
})
