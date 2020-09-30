<template>
  <div class="profile-holder">
    <Header v-bind:userInfo="userInfo"></Header>
    <h1>This is a profile page {{ username }} j</h1>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "profile",
  components: { Header },
  data() {
    return {
      username: this.$route.params.userName,
      userInfo: Object,
      userConfig: Object,
    };
  },
  created() {
    this.axios
      .get(`https://api.github.com/users/${this.username}`)
      .then((res) => {
        this.userInfo = res.data;
        this.userConfig = res.config;
        console.log(res.data, res.config);
      });
  },
};
</script>
