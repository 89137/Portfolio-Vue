import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import Basecard from './components/UI/BaseCard.vue';

import '@/assets/styles/fonts.css';

const app = createApp(App);

app.component('base-card', Basecard);

app.use(router);

app.mount('#app');
