import { createApp } from 'vue';
import App from './App.vue';

import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import './styles/main.css';

createApp(App).mount('#app');
Splitting();

/* const anim = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target === DOM.footerLinks) {
        document.querySelectorAll(".footer__link").forEach(ele => {
          ele.classList.add("animate-in");
        });
      } else {
        entry.target.classList.add("animate-in");
      }
    } else {
      if (entry.target === DOM.footerLinks) {
        document.querySelectorAll(".footer__link").forEach(ele => {
          ele.classList.remove("animate-in");
        });
      }
    } 
  });
} */