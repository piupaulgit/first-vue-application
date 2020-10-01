<template>
  <div class="front-page-holder">
    <child></child>
    <div class="middle-section">
      <i class="fab fa-github-square"></i>
      <h1>Find Your GitProfile</h1>
      <form @submit.stop.prevent="searchProfile(name)">
        <input type="text" placeholder="Username" v-model="name" />
      </form>
    </div>
  </div>
</template>
<script>
import Child from "./Child";
export default {
  name: "Front",
  components: { Child },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    searchProfile(name) {
      this.name = name;
      this.$router.push(`/profile/${this.name}`);
    },
  },
};
</script>
<style scoped>
.front-page-holder {
  background: #0d276b;
  min-height: 100vh;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
}
.middle-section {
  text-align: center;
}
.fab {
  font-size: 80px;
  margin-bottom: 20px;
}
h1 {
  font-size: 40px;
  margin-bottom: 30px;
}
input {
  background: #0f1563;
  border: 0;
  padding: 20px;
  color: #ffffff;
  text-align: center;
  min-width: 385px;
  font-size: 24px;
  border-radius: 3px;
}
input:focus {
  outline: none;
}
</style>
