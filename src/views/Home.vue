<!--
Copyright (c) 2021 reiya0104 (Student)
This software is released under the MIT License, see LICENSE.
-->

<template>
  <div class="home">
    <img alt="Vue logo" class="mx-auto" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
