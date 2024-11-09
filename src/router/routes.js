import UseHome from '@/component/UseHome.vue';
import UseRegHome from '@/Page/UseRegHome.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/RegHome'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseRegHome
  }
];
