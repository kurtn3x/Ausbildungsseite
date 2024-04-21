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

      {
        path: 'projektmanagement',
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
        path: 'wiso',
        children: [
          {
            path: 'unternehmen-betriebe',
            children: [
              {
                path: 'allgemein',
                component: () =>
                  import('pages/NIT/WISO/UnternehmenBetriebe/Allgemein.vue'),
              },
              {
                path: 'aufbauorganisation',
                component: () =>
                  import(
                    'pages/NIT/WISO/UnternehmenBetriebe/Aufbauorganisation.vue'
                  ),
              },
              {
                path: 'rechtsformen',
                component: () =>
                  import('pages/NIT/WISO/UnternehmenBetriebe/Rechtsformen.vue'),
              },
              {
                path: 'ziele',
                component: () =>
                  import('pages/NIT/WISO/UnternehmenBetriebe/Ziele.vue'),
              },
            ],
          },
          {
            path: 'wirtschaft',
            children: [
              {
                path: 'markt',
                component: () => import('pages/NIT/WISO/Wirtschaft/Markt.vue'),
              },
              {
                path: 'vertrage',
                component: () =>
                  import('pages/NIT/WISO/Wirtschaft/Verträge.vue'),
              },
              {
                path: 'sektoren',
                component: () =>
                  import('pages/NIT/WISO/Wirtschaft/Sektoren.vue'),
              },
            ],
          },
          {
            path: 'arbeitsvertrag',
            component: () => import('pages/NIT/WISO/Arbeitsvertrag.vue'),
          },
          {
            path: 'sozialversicherungen',
            component: () => import('pages/NIT/WISO/Sozialversicherungen.vue'),
          },
          {
            path: 'allgemeine-notizen',
            component: () => import('pages/NIT/WISO/Allgemeines.vue'),
          },
        ],
      },
      {
        path: 'datenbanken',
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
        path: 'datenschutz-datensicherheit',
        children: [
          {
            path: 'bsi',
            children: [
              {
                path: 'schutzbedarfsanalyse',
                component: () =>
                  import(
                    'pages/IT/DatenschutzDatensicherheit/BSI/Schutzbedarfsanalyse.vue'
                  ),
              },
              {
                path: 'schutzziele',
                component: () =>
                  import(
                    'pages/IT/DatenschutzDatensicherheit/BSI/Schutzziele.vue'
                  ),
              },
              {
                path: 'sicherheitsprozess',
                component: () =>
                  import(
                    'pages/IT/DatenschutzDatensicherheit/BSI/Sicherheitsprozess.vue'
                  ),
              },
              {
                path: 'tom',
                component: () =>
                  import('pages/IT/DatenschutzDatensicherheit/BSI/TOM.vue'),
              },
            ],
          },

          {
            path: 'cyberbedrohung',
            component: () =>
              import('pages/IT/DatenschutzDatensicherheit/Cyberbedrohung.vue'),
          },
          {
            path: 'rechte',
            component: () =>
              import('pages/IT/DatenschutzDatensicherheit/Rechtliches.vue'),
          },
          {
            path: 'kryptographie',
            children: [
              {
                path: 'hashing',
                component: () =>
                  import(
                    'pages/IT/DatenschutzDatensicherheit/Kryptographie/Hashing.vue'
                  ),
              },
              {
                path: 'zertifikate',
                component: () =>
                  import(
                    'pages/IT/DatenschutzDatensicherheit/Kryptographie/Zertifikate.vue'
                  ),
              },
              {
                path: 'verschluesselung',
                component: () =>
                  import(
                    'pages/IT/DatenschutzDatensicherheit/Kryptographie/Verschlüsselung.vue'
                  ),
              },
            ],
          },
        ],
      },
      {
        path: 'programmierung',
        children: [
          {
            path: 'ablaufdiagramme',
            component: () =>
              import('pages/IT/Programmierung/Ablaufdiagramme.vue'),
          },
          {
            path: 'bubble-sort',
            component: () => import('pages/IT/Programmierung/BubbleSort.vue'),
          },
          {
            path: 'selection-sort',
            component: () =>
              import('pages/IT/Programmierung/SelectionSort.vue'),
          },
          {
            path: 'uml',
            component: () => import('pages/IT/Programmierung/UML.vue'),
          },
          {
            path: 'programmierparadigmen',
            component: () =>
              import(
                'pages/IT/Programmierung/ProgrammierparadigmenBegriffe.vue'
              ),
          },
          {
            path: 'tests-vorgehensmodelle',
            component: () =>
              import('pages/IT/Programmierung/TestsVorgehensmodelle.vue'),
          },
        ],
      },
      {
        path: 'hardware',
        children: [
          {
            path: 'verkabelung',
            children: [
              {
                path: 'simplex-duplex',
                component: () =>
                  import('pages/IT/Hardware/Verkabelung/SimplexDuplex.vue'),
              },
              {
                path: 'strukturierte-verkabelung',
                component: () =>
                  import(
                    'pages/IT/Hardware/Verkabelung/StrukturierteVerkabelung.vue'
                  ),
              },
              {
                path: 'medien-kabeltypen',
                component: () =>
                  import(
                    'pages/IT/Hardware/Verkabelung/ÜbertragungsmedienKabeltypen.vue'
                  ),
              },
              {
                path: 'leitungen',
                component: () =>
                  import('pages/IT/Hardware/Verkabelung/Leitungen.vue'),
              },
            ],
          },

          {
            path: 'storage-raid',
            children: [
              {
                path: 'raid',
                component: () =>
                  import('pages/IT/Hardware/StorageRaid/RAID.vue'),
              },
              {
                path: 'backup',
                component: () =>
                  import('pages/IT/Hardware/StorageRaid/Backup.vue'),
              },
              {
                path: 'das-nas-san',
                component: () =>
                  import('pages/IT/Hardware/StorageRaid/DASNASSAN.vue'),
              },
              {
                path: 'protokolle',
                component: () =>
                  import('pages/IT/Hardware/StorageRaid/Protokolle.vue'),
              },
              {
                path: 'begriffe',
                component: () =>
                  import('pages/IT/Hardware/StorageRaid/Begriffe.vue'),
              },
            ],
          },

          {
            path: 'strom-ladung',
            children: [
              {
                path: 'usv',
                component: () =>
                  import('pages/IT/Hardware/StromLadung/USV.vue'),
              },
              {
                path: 'formeln-einheiten',
                component: () =>
                  import('pages/IT/Hardware/StromLadung/FormelnEinheiten.vue'),
              },
              {
                path: 'berechnungen',
                component: () =>
                  import('pages/IT/Hardware/StromLadung/Berechnungen.vue'),
              },
            ],
          },

          {
            path: 'virtualisierung-cloud',
            children: [
              {
                path: 'cloud-on-premises',
                component: () =>
                  import(
                    'pages/IT/Hardware/VirtualisierungCloud/CloudOnpremises.vue'
                  ),
              },
              {
                path: 'cloud-servicemodelle',
                component: () =>
                  import(
                    'pages/IT/Hardware/VirtualisierungCloud/Servicemodelle.vue'
                  ),
              },
              {
                path: 'virtualisierung',
                component: () =>
                  import(
                    'pages/IT/Hardware/VirtualisierungCloud/Virtualisierung.vue'
                  ),
              },
            ],
          },

          {
            path: 'server',
            component: () => import('pages/IT/Hardware/Serverhardware.vue'),
          },
          {
            path: 'netzwerk',
            component: () => import('pages/IT/Hardware/Netzwerk.vue'),
          },
        ],
      },
      {
        path: 'betriebssystem',
        children: [
          {
            path: 'uefi-bios',
            component: () => import('pages/IT/Betriebssystem/UEFIBIOS.vue'),
          },
          {
            path: 'architekturen',
            component: () =>
              import('pages/IT/Betriebssystem/Architekturen.vue'),
          },
          {
            path: 'dateisysteme-dateirechte',
            component: () =>
              import('pages/IT/Betriebssystem/DateisystemeDateirechte.vue'),
          },
        ],
      },
      {
        path: 'netzwerk',
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
            path: 'ssl-tls',
            component: () => import('pages/IT/Netzwerk/SSLTLS.vue'),
          },

          {
            path: 'weitere-netzwerkarten',
            component: () =>
              import('pages/IT/Netzwerk/WeitereNetzwerkarten.vue'),
          },
          {
            path: 'protokolle',
            component: () => import('pages/IT/Netzwerk/WichtigeProtokolle.vue'),
          },
        ],
      },
      {
        path: 'rechnungen',
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
            component: () =>
              import('pages/IT/Rechnungen/AndereBerechnungen.vue'),
          },
        ],
      },

      {
        path: 'anderes',
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
