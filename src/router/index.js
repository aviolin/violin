import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue';
import Students from '../components/Students.vue';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/students',
    name: 'Students',
    component: Students,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      return { top: 0 }
    }
  }
});

export default router;