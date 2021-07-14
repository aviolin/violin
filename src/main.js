import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import './styles/main.css';

createApp(App).use(router).mount('#app');
