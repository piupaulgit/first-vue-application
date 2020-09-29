<template>
  <p>This name is coming from parent : {{ name }}</p>
</template>

<script>
export default {
  name: "Child",
  props: ["name"],
};
</script>
