import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import.meta.glob([
    '/src/assets/img/**',
]);

createApp(App).mount('#app');
