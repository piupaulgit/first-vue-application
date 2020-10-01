<template>
  <div class="container">
    <h2>Top Repos</h2>
    <ul>
      <li v-for="repo in reposInfo" :key="repo.name">
        <div class="each-repo-holder">
          <h3>
            <span><i class="far fa-bookmark"></i></span>{{ repo.name }}
          </h3>
          <p>{{ repo.description }}</p>
          <p>{{ repo.language }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Repos",
  props: ["reposInfo"],
  mounted() {
    // this.axios.get(`${this.userInfo.repos_url}`).then((res) => {
    //   console.log(res);
    // });
    // console.log(this.userInfo.repos_url);
  },
};
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-left: -20px;
  margin-right: -20px;
}
ul li {
  display: inline-block;
  width: 29%;
  padding: 20px;
  vertical-align: top;
}
.each-repo-holder {
  border-radius: 21px;
  background: #f0f0f0;
  box-shadow: 32px 32px 67px #d1d1d1, -32px -32px 67px #ffffff;
  padding: 30px;
  min-height: 180px;
  text-align: left;
}
h2 {
  font-size: 40px;
  text-align: left;
  color: #333;
}
h3 {
  margin-bottom: 13px;
}
h3 + p {
  font-size: 13px;
  margin-bottom: 10px;
}
h3 i {
  margin-right: 10px;
}
.container {
  max-width: 90%;
  margin: 0 auto;
}
</style>
