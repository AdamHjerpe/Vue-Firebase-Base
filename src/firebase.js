import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyCpO_9zsZoLvj1gBcUQ-rK8OMtJdoY0m5I",
    authDomain: "fir-vue-199a8.firebaseapp.com",
    databaseURL: "https://fir-vue-199a8.firebaseio.com",
    projectId: "fir-vue-199a8",
    storageBucket: "fir-vue-199a8.appspot.com",
    messagingSenderId: "368975589989"
  });

  export const db = app.database();
  export const namesRef = db.ref('persons');