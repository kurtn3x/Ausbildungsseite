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
      {
        path: 'unternehmensrechtsformen',
        component: () =>
          import('pages/BetriebUnternehmen/Unternehmensrechtsformen.vue'),
      },
    ],
  },
  {
    path: '/netzwerke',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'ipv4',
        component: () => import('pages/Netzwerke/IPV4View.vue'),
      },
      {
        path: 'mac_switch_hub',
        component: () => import('pages/Netzwerke/MacSwitchHub.vue'),
      },
      {
        path: 'ipv6',
        component: () => import('pages/Netzwerke/IPV6View.vue'),
      },
      {
        path: 'netzwerktopologien',
        component: () => import('pages/Netzwerke/AllgNetzwerktopologien.vue'),
      },
      {
        path: 'dns',
        component: () => import('pages/Netzwerke/DNSView.vue'),
      },
      {
        path: 'dhcp',
        component: () => import('src/pages/Netzwerke/DHCPView.vue'),
      },
      {
        path: 'osi',
        component: () => import('pages/Netzwerke/OSIView.vue'),
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
