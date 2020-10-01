<template>
  <div>
    <!-- <p>This name is coming from parent : {{ name }}</p>
    <button v-on:click="updateEmail()">Click in child</button> -->
    <div class="form-group" v-for="(input, k) in inputs" :key="k">
      <input type="text" class="form-control" v-model="input.name" />
      <span>
        <button
          class="fas fa-minus-circle"
          @click="remove(k)"
          v-show="k || (!k && inputs.length > 1)"
        ></button>
        <button
          @click="add(k)"
          v-show="k == inputs.length - 1"
          :disabled="input.name.trim().length === 0"
        >
          add
        </button>
      </span>
    </div>
    <button v-on:click="submit()">submit</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["name"],
  data: function() {
    return {
      tagName: [],
      inputs: [
        {
          name: "",
        },
      ],
    };
  },
  methods: {
    updateEmail() {
      this.$emit("updateEmail", "deep@karmakar.com");
    },
    add() {
      this.inputs.push({ name: "" });
      console.log(this.inputs);
    },
    remove(index) {
      this.inputs.splice(index, 1);
      console.log(this.inputs);
    },
    submit() {
      const arr = [];
      this.inputs.filter((item) => {
        arr.push(item.name);
      });
      this.tagName = arr.join(",");
      console.log(this.tagName);
    },
  },
};
</script>
