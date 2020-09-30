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
    console.log(this.$route.params.userName);
  },
};
</script>
