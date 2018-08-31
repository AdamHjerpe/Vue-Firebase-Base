<template>
  <div id="app">
    <div>
      <label>Name: </label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Add</button>
    </div>
  
    <div>
      <ul>
        <li v-for="personName of persons" 
        v-bind:key="personName['.key']">
        <p>{{personName.name}}</p>

          <div v-if="!personName.edit">
            <button @click="removeName(personName['.key'])
            ">Remove</button>
            <button @click="setEditName(personName['.key'])
            ">Edit</button>
          </div>

          <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)
            ">Save</button>
            <button @click="cancelEdit(personName['.key'])
            ">Cancel</button>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from "./firebase";

export default {
  name: "app",
  data() {
    return {
      name: ""
    };
  },
  firebase: {
    persons: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false });
      this.name = "";
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false });
    },
    saveEdit(person) {
      const key = person[".key"];
      namesRef.child(key).set({ name: person.name, edit: false });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
