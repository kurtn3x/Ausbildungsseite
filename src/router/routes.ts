import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/projektmanagement',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'gantt',
        component: () => import('pages/NIT/Projektmanagement/Gantt.vue'),
      },
      {
        path: 'netzplan',
        component: () => import('pages/NIT/Projektmanagement/Netzplan.vue'),
      },
      {
        path: 'pflichten-lastenheft',
        component: () =>
          import('pages/NIT/Projektmanagement/PflichtenLastenheft.vue'),
      },
      {
        path: 'projekt',
        component: () => import('pages/NIT/Projektmanagement/Projekt.vue'),
      },
    ],
  },

  {
    path: '/qualitatsmanagement',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'systeme-methoden',
        component: () =>
          import('pages/NIT/Qualitätsmanagement/SystemeMethoden.vue'),
      },
      {
        path: 'pdca',
        component: () => import('pages/NIT/Qualitätsmanagement/PDCA.vue'),
      },
    ],
  },
  {
    path: '/wirtschaft',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'kostenrechnung',
        component: () => import('pages/NIT/Wirtschaft/Kostenrechnung.vue'),
      },
      {
        path: 'markt',
        component: () => import('pages/NIT/Wirtschaft/Markt.vue'),
      },
      {
        path: 'vertrage',
        component: () => import('pages/NIT/Wirtschaft/Verträge.vue'),
      },
    ],
  },
  {
    path: '/unternehmen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'aufbauorganisation',
        component: () => import('pages/NIT/Unternehmen/Aufbauorganisation.vue'),
      },
      {
        path: 'unternehmen-betriebe',
        component: () =>
          import('pages/NIT/Unternehmen/UnternehmenBetriebe.vue'),
      },
      {
        path: 'leitbild',
        component: () => import('pages/NIT/Unternehmen/Leitbild.vue'),
      },
      {
        path: 'rechtsformen',
        component: () => import('pages/NIT/Unternehmen/Rechtsformen.vue'),
      },
      {
        path: 'wertschopfung',
        component: () => import('pages/NIT/Unternehmen/Wertschöpfung.vue'),
      },
      {
        path: 'ziele',
        component: () => import('pages/NIT/Unternehmen/Ziele.vue'),
      },
    ],
  },

  {
    path: '/datenschutz-datensicherheit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'raid',
        component: () => import('pages/IT/DatenschutzDatensicherheit/RAID.vue'),
      },
      {
        path: 'schutzbedarfsanalyse',
        component: () =>
          import(
            'pages/IT/DatenschutzDatensicherheit/Schutzbedarfsanalyse.vue'
          ),
      },
      {
        path: 'schutzziele',
        component: () =>
          import('pages/IT/DatenschutzDatensicherheit/Schutzziele.vue'),
      },
      {
        path: 'sicherheitsprozess',
        component: () =>
          import('pages/IT/DatenschutzDatensicherheit/Sicherheitsprozess.vue'),
      },
      {
        path: 'tom',
        component: () => import('pages/IT/DatenschutzDatensicherheit/TOM.vue'),
      },
    ],
  },
  {
    path: '/netzwerk',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'allgemein',
        component: () => import('pages/IT/Netzwerk/Allgemein.vue'),
      },
      {
        path: 'osi',
        component: () => import('pages/IT/Netzwerk/OSI.vue'),
      },
      {
        path: 'strukturierte-verkabelung',
        component: () =>
          import('pages/IT/Netzwerk/StrukturierteVerkabelung.vue'),
      },
      {
        path: 'topologien',
        component: () => import('pages/IT/Netzwerk/Topologien.vue'),
      },
      {
        path: 'dns',
        component: () => import('pages/IT/Netzwerk/DNS.vue'),
      },
      {
        path: 'dhcp',
        component: () => import('pages/IT/Netzwerk/DHCP.vue'),
      },
      {
        path: 'mac',
        component: () => import('pages/IT/Netzwerk/MAC.vue'),
      },
      {
        path: 'switch-hub',
        component: () => import('pages/IT/Netzwerk/SwitchHub.vue'),
      },
      {
        path: 'routing',
        component: () => import('pages/IT/Netzwerk/Routing.vue'),
      },
      {
        path: 'ipv4',
        component: () => import('pages/IT/Netzwerk/IPv4.vue'),
      },
      {
        path: 'ipv4subnetting',
        component: () => import('pages/IT/Netzwerk/IPv4Subnetting.vue'),
      },
      {
        path: 'ipv6',
        component: () => import('pages/IT/Netzwerk/IPv6.vue'),
      },
      {
        path: 'ipv6subnetting',
        component: () => import('pages/IT/Netzwerk/IPv6Subnetting.vue'),
      },
      {
        path: 'tcpudp',
        component: () => import('pages/IT/Netzwerk/TcpUdpPorts.vue'),
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
