import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: './users/list',
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../components/users/users.vue'),
    children: [
      {
        path: '',
        redirect: './list',
      },
      {
        path: 'list',
        name: 'UserList',
        component: () => import('../components/users/userList.vue'),
      },
      {
        path: 'details/:userId',
        name: 'UserDetail',
        component: () => import('../components/users/userDetail.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
