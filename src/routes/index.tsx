import { lazy } from 'solid-js';

const routes = [
  {
    path: ['', '/', '/home'],
    component: lazy(() => import('pages/home')),
  },
  {
    path: '/about',
    component: lazy(() => import('pages/about')),
  },
  {
    path: '/blogs',
    component: lazy(() => import('pages/blogs')),
  },
  {
    path: '/careers',
    component: lazy(() => import('pages/careers')),
  },
  {
    path: '/contact',
    component: lazy(() => import('pages/contact')),
  },
  {
    path: '/features',
    component: lazy(() => import('pages/features')),
  },
  {
    path: '/login',
    component: lazy(() => import('pages/login')),
  },
  {
    path: '/signup',
    component: lazy(() => import('pages/signup')),
  },
  {
    path: '/pricing',
    component: lazy(() => import('pages/pricing')),
  },
  {
    path: '*',
    component: lazy(() => import('pages/404')),
  },
];

export default routes;