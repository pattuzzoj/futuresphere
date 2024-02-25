import { lazy } from 'solid-js';
// import { PrivateRoute, privateRoutes} from './PrivateRoute';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Blogs = lazy(() => import('../pages/blogs'));
const Careers = lazy(() => import('../pages/careers'));
const Contact = lazy(() => import('../pages/contact'));
const Features = lazy(() => import('../pages/features'));
const Login = lazy(() => import('../pages/login'));
const SignUp = lazy(() => import('../pages/signup'));
const Pricing = lazy(() => import('../pages/pricing'));
const MagicLink = lazy(() => import('../pages/magic-link'));
const NotFound = lazy(() => import('../pages/404'));

export const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/blogs',
    component: Blogs,
  },
  {
    path: '/careers',
    component: Careers,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/features',
    component: Features,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/sign-up',
    component: SignUp,
  },
  {
    path: '/pricing',
    component: Pricing,
  },
  {
    path: '/magic-link',
    component: MagicLink,
  },
  {
    path: '*',
    component: NotFound,
  },
  // {
  //   component: PrivateRoute,
  //   children: privateRoutes
  // },
];