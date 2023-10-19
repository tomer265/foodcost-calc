<script setup lang="ts">
import { ref } from 'vue'
const availableLangs = [["HE", "/israel.png"], ["EN", "/united-kingdom.png"]]

const presentedLang = ref(availableLangs[0])

const selectLangHandler = (selectedLang: any) =>{
    presentedLang.value = selectedLang
}
</script>

<template>
<div>
    <div class="presented-lang">
        <img :src="presentedLang[1]" style="width:5vw" />
    </div>
    <div  class="lang-menu">
        <div v-for="lang in availableLangs" v-bind:key="lang[0]" @click="selectLangHandler(lang)">
            <img :src="lang[1]" style="width:5vw" />
        </div>
    </div>
</div>
</template>

<style lang="scss">
.lang-menu{
    opacity: 0;
}
.presented-lang:hover ~ .lang-menu{
    opacity: 1;
}
</style>