import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'Home',
      },
      {
        path: '/shop',
        component: () => import('../views/Shop.vue'),
        name: 'Shop',
      },
      {
        path: '/product',
        component: () => import('../views/Product.vue'),
        name: 'Product',
        props: true,
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue'),
        name: 'Cart',
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;

//
