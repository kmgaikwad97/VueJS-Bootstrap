<template>
  <h2>User Component</h2>
  <button v-on:click="getUser('userName')">Send Data To Parent</button>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      userName: "Kshitij",
    };
  },
  props: {
    getUser: Function,
  },
};
</script>