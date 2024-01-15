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
    path: '/datenbanken',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'normalisierung',
        component: () => import('pages/IT/Datenbanken/Normalisierung.vue'),
      },
      {
        path: 'erm',
        component: () => import('pages/IT/Datenbanken/ERM.vue'),
      },
      {
        path: 'arten',
        component: () => import('pages/IT/Datenbanken/Arten.vue'),
      },
      {
        path: 'sql',
        component: () => import('pages/IT/Datenbanken/SQL.vue'),
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
      {
        path: 'cyberbedrohung',
        component: () =>
          import('pages/IT/DatenschutzDatensicherheit/Cyberbedrohung.vue'),
      },
      {
        path: 'verschlusselung',
        component: () =>
          import('pages/IT/DatenschutzDatensicherheit/Verschlüsselung.vue'),
      },
    ],
  },
  {
    path: '/programmierung',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'ablaufdiagramme',
        component: () => import('pages/IT/Programmierung/Ablaufdiagramme.vue'),
      },
      {
        path: 'uml',
        component: () => import('pages/IT/Programmierung/UML.vue'),
      },
      {
        path: 'compiler-interpreter',
        component: () =>
          import('pages/IT/Programmierung/CompilerInterpreter.vue'),
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
        path: 'tcpip',
        component: () => import('pages/IT/Netzwerk/TCPIP.vue'),
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
        path: 'hardware',
        component: () => import('pages/IT/Netzwerk/NetzwerkHardware.vue'),
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
      {
        path: 'proxy',
        component: () => import('pages/IT/Netzwerk/Proxy.vue'),
      },
      {
        path: 'nat',
        component: () => import('pages/IT/Netzwerk/NAT.vue'),
      },
      {
        path: 'firewall',
        component: () => import('pages/IT/Netzwerk/Firewall.vue'),
      },
      {
        path: 'vlan',
        component: () => import('pages/IT/Netzwerk/VLAN.vue'),
      },
      {
        path: 'header',
        component: () => import('pages/IT/Netzwerk/AuswertenHeader.vue'),
      },
      {
        path: 'vpn',
        component: () => import('pages/IT/Netzwerk/VPN.vue'),
      },
      {
        path: 'wlan',
        component: () => import('pages/IT/Netzwerk/WLAN.vue'),
      },
      {
        path: 'storage',
        component: () => import('pages/IT/Netzwerk/Storage.vue'),
      },
      {
        path: 'weitere-netzwerkarten',
        component: () => import('pages/IT/Netzwerk/WeitereNetzwerkarten.vue'),
      },
      {
        path: 'protokolle',
        component: () => import('pages/IT/Netzwerk/WichtigeProtokolle.vue'),
      },
    ],
  },
  {
    path: '/rechnungen',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'speichergrossen',
        component: () => import('pages/IT/Rechnungen/Speichergrößen.vue'),
      },
      {
        path: 'strom-ladung',
        component: () => import('pages/IT/Rechnungen/StromLadung.vue'),
      },
      {
        path: 'bin-dez-hex',
        component: () => import('pages/IT/Rechnungen/BinDezHex.vue'),
      },
      {
        path: 'anderes',
        component: () => import('pages/IT/Rechnungen/AndereBerechnungen.vue'),
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
