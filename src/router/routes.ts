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
      {
        path: 'unternehmensleitbild',
        component: () =>
          import('pages/BetriebUnternehmen/UnternehmensleitbildView.vue'),
      },
      {
        path: 'aufbauorganisation',
        component: () =>
          import('pages/BetriebUnternehmen/AufbauorganisationView.vue'),
      },
      {
        path: 'wertschoepfungsprozesse',
        component: () =>
          import('pages/BetriebUnternehmen/WertschoepfungView.vue'),
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
        path: 'allgemein_topologien',
        component: () => import('pages/Netzwerke/AllgNetzwerktopologien.vue'),
      },
      {
        path: 'dns_dhcp',
        component: () => import('pages/Netzwerke/DnsDhcp.vue'),
      },
      {
        path: 'osi',
        component: () => import('pages/Netzwerke/OSIView.vue'),
      },
      {
        path: 'tcp_udp_ports',
        component: () => import('pages/Netzwerke/TcpUdpPorts.vue'),
      },
      {
        path: 'routing',
        component: () => import('pages/Netzwerke/Routing.vue'),
      },
      {
        path: 'verkabelung',
        component: () => import('pages/Netzwerke/KabelVerkabelung.vue'),
      },
    ],
  },
  {
    path: '/datenschutz_datensicherheit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'schutzziele',
        component: () =>
          import('pages/DatenschutzDatensicherheit/Schutzziele.vue'),
      },
      {
        path: 'tom',
        component: () => import('pages/DatenschutzDatensicherheit/TOMView.vue'),
      },
      {
        path: 'raid',
        component: () =>
          import('pages/DatenschutzDatensicherheit/RAIDView.vue'),
      },
      {
        path: 'schutzbedarfsanalys',
        component: () =>
          import('pages/DatenschutzDatensicherheit/SchutzbedarfView.vue'),
      },
    ],
  },
  {
    path: '/services',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'allgemein',
        component: () => import('pages/Serviceanfragen/AllgemeinView.vue'),
      },
      {
        path: 'vertragsarten',
        component: () => import('pages/Serviceanfragen/VertragsartenView.vue'),
      },
    ],
  },

  {
    path: '/datenbanken_programmierung',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'normalisierung',
        component: () => import('pages/Datenbanken/NormalisierungView.vue'),
      },
      {
        path: 'erm',
        component: () =>
          import('pages/Datenbanken/EntityRelationshipModell.vue'),
      },
    ],
  },

  {
    path: '/strom_ladung',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'allgemein',
        component: () => import('pages/StromLadungen/AllgemeinView.vue'),
      },
    ],
  },

  {
    path: '/projektmanagement',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'allgemein',
        component: () => import('pages/Projektmanagement/AllgemeinView.vue'),
      },
      {
        path: 'gantt',
        component: () => import('pages/Projektmanagement/GanttView.vue'),
      },
      {
        path: 'pflichtenheft_lastenheft',
        component: () => import('pages/Projektmanagement/PflichtLastView.vue'),
      },
      {
        path: 'netzplan',
        component: () => import('pages/Projektmanagement/NetzplanView.vue'),
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
