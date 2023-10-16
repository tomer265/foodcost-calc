<script setup lang="ts">
import axios from "axios";
import { useIsLoggedInStore } from "../stores/login";

const store = useIsLoggedInStore();

const loginHandler = () => {
  store.loginSuccess();
};

const emailRules = [
  (v) =>
    v.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) || "Invalid Email address",
];
</script>

<template>
  <v-form>
    <div class="form-line">
      <v-responsive class="mx-auto" max-width="344">
        <v-text-field
          label="Email"
          hint="Enter your email"
          :rules="emailRules"
          variant="solo-filled"
          clearable
          prepend-inner-icon="mdi-email-outline"
        ></v-text-field>
      </v-responsive>
      <div class="form-line">
        <v-responsive class="mx-auto" max-width="344">
          <v-text-field
            label="Password"
            hint="Enter your password"
            variant="solo-filled"
            clearable
            prepend-inner-icon="mdi-key-variant"
          ></v-text-field>
        </v-responsive>
      </div>
    </div>

    <button @click="loginHandler">Login</button>
  </v-form>
</template>

<style lang="scss" scoped>
form {
  padding: 0;
  width: 50vw;
  margin: auto;

  .form-line {
    justify-content: center;
    align-items: center;
  }
}
</style>