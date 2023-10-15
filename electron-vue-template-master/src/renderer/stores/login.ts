import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIsLoggedInStore = defineStore('login', () => {
    const isLoggedIn = ref(false);
    const loginSuccess = () => {
        isLoggedIn.value = true;
    }
    const logout = () => {
        isLoggedIn.value = false;
    }

    return { isLoggedIn, loginSuccess, logout }
});