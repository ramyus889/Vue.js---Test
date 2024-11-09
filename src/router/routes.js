import UseHome from '@/component/UseHome.vue';
import UseLogin from '@/Page/UseLogin.vue';
import UseReg from '@/Page/UseReg.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/Reg'
  },
  {
    path: '/Login'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseReg
  },
  {
    path: `${routeUrl[2].path}`,
    component: UseLogin
  }
];
