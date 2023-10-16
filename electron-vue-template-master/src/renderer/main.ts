import { createApp } from 'vue'
import './style.css';
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(pinia);
app.mount('#app');
