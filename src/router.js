import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/pages/HomePage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import ProjectsPage from './components/pages/ProjectsPage.vue';
import CVPage from './components/pages/CVPage.vue';
import ContactPage from './components/pages/ContactPage.vue';
import TheHeader from './components/nav/TheHeader.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      components: { default: HomePage, header: TheHeader },
    },
    {
      path: '/about',
      components: { default: AboutPage, header: TheHeader },
    },
    {
      path: '/projects',
      components: { default: ProjectsPage, header: TheHeader },
    },
    {
      path: '/cv',
      components: { default: CVPage, header: TheHeader },
    },
    {
      path: '/contact',
      components: { default: ContactPage, header: TheHeader },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
