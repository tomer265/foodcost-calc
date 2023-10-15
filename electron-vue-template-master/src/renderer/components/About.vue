<script setup lang="ts">
import * as Vue from "vue";
</script>

<template>
  <div>
    <img src="/vue.svg" class="logo vue" alt="Vue logo" />
  </div>
  <h4>vue version is: {{ Vue.version }}</h4>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>