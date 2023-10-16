<script setup lang="ts">
import axios from "axios";
import { useIsLoggedInStore } from "../stores/login";
import { ref } from 'vue'

const store = useIsLoggedInStore();

const loginHandler = () => {
  store.loginSuccess();
};

const emailRules = [
  (value: string) => {
    if (!value){
      return 'Email is required'
    }

    if (!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
      return 'Invalid email'
    }
  }
]

const passwordRules = [
  (value: string) => {
    if (!value){
      return 'Password is required'
    }
  }
]
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <div class="form-line">
      <v-responsive class="mx-auto" max-width="344">
        <v-text-field
          label="Email"
          hint="Enter your email"
          :rules="emailRules"
          variant="solo-filled"
          clearable
          prepend-inner-icon="mdi-email-outline"
          validate-on="blur"
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

    <v-btn @click="loginHandler">Login</v-btn>
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