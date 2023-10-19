<script setup lang="ts">
window.electronAPI.sendMessage("Hello from App.vue!");
import { useIsLoggedInStore } from "./stores/login";
import Login from "./components/Login.vue";
import LanguageSelector from "./components/LanguageSelector.vue";

const store = useIsLoggedInStore();
</script>

<template>
  <div class="lang-selector-wrapper">  
    <LanguageSelector />
  </div>
  <div v-if="!store.isLoggedIn">
    <Login />
  </div>
</template>

<style lang="scss">
.lang-selector-wrapper{
  position: absolute;
  top: 5vh
}
</style>