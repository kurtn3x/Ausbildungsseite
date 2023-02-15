import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/betrieb_unternehmen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'allgemein',
        component: () => import('pages/BetriebUnternehmen/Allgemein.vue'),
      },
      {
        path: 'ziele',
        component: () => import('pages/BetriebUnternehmen/Ziele.vue'),
      },
      {
        path: 'management',
        component: () =>
          import('pages/BetriebUnternehmen/ManagementQualitaet.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
