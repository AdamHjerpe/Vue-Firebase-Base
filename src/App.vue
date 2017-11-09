<template>
  <div id="app">
    <div>
      <label>Name: </label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Add</button>
    </div>
  
    <div>
      <ul>
        <li v-for="personName of names" 
        v-bind:key="personName['.key']">
        <p>{{personName.name}}</p>
        <button @click="removeName(personName['.key'])
        ">Remove</button>
        <button @click="editName(personName['.key'])
        ">Edit</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { namesRef } from './firebase';

export default {
  name: 'app',
  data () {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false})
      this.name = '';
    },
    removeName(key) {
      namesRef.child(key).remove();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid #333;
}
</style>
