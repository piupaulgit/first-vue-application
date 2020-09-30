<template>
  <div class="header">
    <span class="profile-img">
      <img v-bind:src="userInfo.avatar_url" />
    </span>
    <h2>
      <a :href="userInfo.html_url" target="_blank">@{{ userInfo.login }} </a>
    </h2>

    <span class="joined"
      ><i class="far fa-calendar-alt"></i> Joined on:
      {{ userInfo.created_at }}</span
    >
    <p class="bio">{{ userInfo.bio }}</p>
    <div class="more-info">
      <div class="each-info">
        <h3>{{ userInfo.public_repos }}</h3>
        <p>REPOSITORIES</p>
      </div>
      <div class="each-info">
        <h3></h3>
        <p>FOLLOWERS</p>
      </div>
      <div class="each-info">
        <h3></h3>
        <p>FOLLOWING</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["userInfo"],
  mounted() {
    console.log(this.userInfo);
  },
};
</script>
<style>
.header {
  background: #0d276b;
  padding: 100px;
  color: #fff;
}
.profile-img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #fff;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid #fff;
  margin-bottom: 20px;
}
.profile-img img {
  max-width: 100%;
}
h2 {
  color: #fff;
}
h2 a {
  color: #fff;
}
.bio {
  padding: 15px 0;
}
.joined {
  background: #060b4c;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 20px;
  display: inline-block;
}
.joined .far {
  margin-right: 5px;
}
.more-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
}
.each-info {
  background: #060b4c;
  border-radius: 5px;
  padding: 10px;
  min-width: 200px;
  min-height: 141px;
  margin-right: 29px;
}
.each-info:last-child {
  margin-right: 0;
}
</style>
