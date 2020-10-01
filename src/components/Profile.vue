<template>
  <div class="profile-holder">
    <Header v-bind:userInfo="userInfo"></Header>
    <Repos v-bind:reposInfo="reposInfo"></Repos>
  </div>
</template>
<script>
import Header from "./Header";
import Repos from "./Repos";
export default {
  name: "profile",
  components: { Header, Repos },
  data() {
    return {
      username: this.$route.params.userName,
      userInfo: Object,
      userConfig: Object,
      reposInfo: Object,
    };
  },
  created() {
    this.axios
      .get(`https://api.github.com/users/${this.username}`)
      .then((res) => {
        this.userInfo = res.data;
        this.userConfig = res.config;
        this.axios.get(`${this.userInfo.repos_url}`).then((repoRes) => {
          this.reposInfo = repoRes.data;
        });
      });
  },
};
</script>
