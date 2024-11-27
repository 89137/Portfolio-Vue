import { createRouter, createWebHistory } from 'vue-router';

import HeadPage from './components/pages/HeadPage.vue';
import TheHeader from './components/nav/TheHeader.vue';
import NotFound from './components/nav/NotFound.vue';
import SubPage from './components/pages/SubPage.vue';
import ThirdPage from './components/pages/ThirdPage.vue';
import ContactPage from './components/pages/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/HeadPage' },
    {
      name: 'HeadPage',
      path: '/HeadPage',
      components: { default: HeadPage, header: TheHeader },
      meta: { title: 'HeadPage' },
    },
    {
      name: 'subpage',
      path: '/subpage',
      components: { default: SubPage, header: TheHeader },
      meta: { title: 'SubPage' },
    },
    {
      name: 'thirdpage',
      path: '/thirdpage',
      components: { default: ThirdPage, header: TheHeader },
      meta: { title: 'thirdpage' },
    },
    {
      name: 'contact',
      path: '/contact',
      components: { default: ContactPage, header: TheHeader },
      meta: { title: 'contact' },
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
