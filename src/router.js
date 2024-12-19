import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('HomePage')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: loadPage('HomePage')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadPage('HomePage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('HomePage')
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
