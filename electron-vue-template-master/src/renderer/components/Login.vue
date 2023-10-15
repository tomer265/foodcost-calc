<script setup lang="ts">
import axios from "axios";
import { useIsLoggedInStore } from "../stores/login";

const store = useIsLoggedInStore();

const loginHandler = () => {
  store.loginSuccess();
};
</script>

<template>
  <v-form>
    <v-text-field
      label="Email"
      prepend-icon="fa:fas fa-lock"
      variant="solo-filled"
    ></v-text-field>
    <button @click="loginHandler">Login</button>
  </v-form>
</template>