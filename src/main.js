import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import ContactButton from './components/UI/ContactButton.vue';

import '@/assets/styles/fonts.css';

const app = createApp(App);

app.component('ContactButton', ContactButton);

app.use(router).mount('#app');
