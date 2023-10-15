<script setup lang="ts">
window.electronAPI.sendMessage("Hello from App.vue!");
import { useIsLoggedInStore } from "./stores/login";
import Login from "./components/Login.vue";

const store = useIsLoggedInStore();
</script>

<template>
  <div v-if="!store.isLoggedIn">
    <Login />
  </div>
</template>

