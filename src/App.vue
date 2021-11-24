<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/hoge">Hoge</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-center;
  /* color: #2c3e50; */
  @apply text-blue-900;
  @apply mt-16;
}

#nav {
  @apply p-8;
}

#nav a {
  @apply font-bold;
  @apply text-blue-900;
}

#nav a.router-link-exact-active {
  @apply bg-green-500;
}
</style>

