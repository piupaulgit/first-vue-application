<template>
  <h1>This is a profile page {{ username }} j {{ name }}</h1>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      username: this.$route.params.userName,
      name: "pop",
    };
  },
  created() {
    this.axios
      .get(`https://api.github.com/users/${this.username}`)
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
