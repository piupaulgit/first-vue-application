<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <child
      v-bind:name="userName"
      v-on:updateEmail="updateEmail($event)"
    ></child>
    <button v-on:click="changeName('Deep')">
      click to change name(from parent to child)
    </button>
    <p>This name is coming from child : {{ emailAddress }}</p> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      userName: "Piu Paul",
      emailAddress: "piu@paul.com",
    };
  },
  methods: {
    changeName(name) {
      this.userName = name;
    },
    updateEmail(email) {
      this.emailAddress = email;
    },
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
