import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'privacy-policy',
        component: () => import('pages/PrivacyPolicy.vue'),
      },
    ],
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

      {
        path: 'pdca',
        component: () => import('pages/NIT/Projektmanagement/PDCA.vue'),
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
        path: 'kryptographie',
        component: () =>
          import('pages/IT/DatenschutzDatensicherheit/Kryptographie.vue'),
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
        path: 'programmierparadigmen',
        component: () =>
          import('pages/IT/Programmierung/ProgrammierparadigmenBegriffe.vue'),
      },
      {
        path: 'tests-vorgehensmodelle',
        component: () =>
          import('pages/IT/Programmierung/TestsVorgehensmodelle.vue'),
      },
    ],
  },
  {
    path: '/hardware',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'verkabelung',
        component: () => import('pages/IT/Hardware/Verkabelung.vue'),
      },
      {
        path: 'usv',
        component: () => import('pages/IT/Hardware/USV.vue'),
      },
      {
        path: 'storage-backup',
        component: () => import('pages/IT/Hardware/Storage.vue'),
      },
      {
        path: 'strom-ladung',
        component: () => import('pages/IT/Hardware/StromLadung.vue'),
      },
      {
        path: 'virtualisierung-cloud',
        component: () => import('pages/IT/Hardware/VirtualisierungCloud.vue'),
      },
      {
        path: 'server',
        component: () => import('pages/IT/Hardware/Serverhardware.vue'),
      },
      {
        path: 'netzwerk',
        component: () => import('pages/IT/Hardware/Netzwerk.vue'),
      },
      {
        path: 'uefi-bios',
        component: () => import('pages/IT/Hardware/UEFIBIOS.vue'),
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
        path: 'bin-dez-hex',
        component: () => import('pages/IT/Rechnungen/BinDezHex.vue'),
      },
      {
        path: 'anderes',
        component: () => import('pages/IT/Rechnungen/AndereBerechnungen.vue'),
      },
    ],
  },

  {
    path: '/anderes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'normungen-standards',
        component: () => import('pages/Anderes/NormungenStandards.vue'),
      },
      {
        path: 'imacrd',
        component: () => import('pages/Anderes/IMACRD.vue'),
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
