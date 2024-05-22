import HomePage from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/Login.vue';
import AddResto from './components/Add.vue';
import UpdateResto from './components/Update.vue';

const routes = [
  {
    name: 'Home',
    component: HomePage,
    path: '/',
  },
  {
    name: 'SignUp',
    component: SignUp,
    path: '/sign-up',
  },
  {
    name: 'Login',
    component: LoginPage,
    path: '/login',
  },
  {
    name: 'Add',
    component: AddResto,
    path: '/add',
  },
  {
    name: 'Update',
    component: UpdateResto,
    path: '/update/:id',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
