<template>
  <h1>{{ msg }}</h1>
  <button class="btn" @click="count++">count is: {{ count }}</button>
  <p>Edit <code class="my-code">components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>

h1 {
  @apply font-bold;
  @apply text-4xl;
}

.btn {
  @apply text-white;
  @apply bg-green-500;
  @apply rounded;
  @apply py-3 px-6;
  @apply m-3;
  @apply text-lg;
}

.my-code {
  @apply bg-gray-200;
  @apply py-0.5 px-1;
  @apply text-sm;
  @apply align-middle;
}

</style>
