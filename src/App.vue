<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <child v-bind:name="userName"></child>
    <button v-on:click="changeName('Deep')">click to change name</button>
  </div>
</template>

<script>
import Child from "./components/Child";
export default {
  name: "App",
  components: { Child },
  data() {
    return {
      userName: "Piu Paul",
    };
  },
  methods: {
    changeName: function (name) {
      this.userName = name;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
