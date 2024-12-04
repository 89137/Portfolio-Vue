import { createApp } from 'vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';

import App from './App.vue';
import router from './router';
import ContactButton from './components/UI/ContactButton.vue';
import BaseCard from './components/UI/BaseCard.vue';

import '@/assets/styles/fonts.css';

const app = createApp(App);

app.component('ContactButton', ContactButton);
app.component('BaseCard', BaseCard);
app.use(SpeedInsights);

app.use(router).mount('#app');
