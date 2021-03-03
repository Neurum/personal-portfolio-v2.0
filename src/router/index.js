import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Skills from '../views/Skills.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import PrizeWinner from '../views/PrizeWinner.vue';
import WeatherApp from '../views/WeatherApp.vue';
import PersonalSite from '../views/PersonalSite.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/prize-winner',
    name: 'PrizeWinner',
    component: PrizeWinner,
  },
  {
    path: '/weather-app',
    name: 'WeatherApp',
    component: WeatherApp,
  },
  {
    path: '/personal-site',
    name: 'PersonalSite',
    component: PersonalSite,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
