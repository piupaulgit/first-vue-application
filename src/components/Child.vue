<template>
  <div>
    <p>This name is coming from parent : {{ name }}</p>
    <button v-on:click="updateEmail()">Click in child</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["name"],
  methods: {
    updateEmail() {
      this.$emit("updateEmail", "deep@karmakar.com");
    },
  },
};
</script>
