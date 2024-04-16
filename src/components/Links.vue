<template>
  <q-expansion-item
    dense-toggle
    label="Projektmanagement"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/projektmanagement/projekt"
        label="Das Projekt"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/projektmanagement/projekt' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/projektmanagement/pflichten-lastenheft"
        label="Lasten- & Pflichtenheft"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/projektmanagement/pflichten-lastenheft'
            ? 'active'
            : ''
        "
      />
      <q-btn
        dense
        flat
        to="/projektmanagement/netzplan"
        label="Der Netzplan"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/projektmanagement/netzplan' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/projektmanagement/gantt"
        label="Das Gantt-Diagramm"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/projektmanagement/gantt' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/projektmanagement/pdca"
        label="Der PDCA-Zyklus"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/projektmanagement/pdca' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Unternehmen"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/unternehmen/unternehmen-betriebe"
        label="Unternehmen & Betriebe"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/unternehmen/unternehmen-betriebe' ? 'active' : ''
        "
      />
      <q-btn
        dense
        flat
        to="/unternehmen/aufbauorganisation"
        label="Aufbauorganisation"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/unternehmen/aufbauorganisation' ? 'active' : ''
        "
      />
      <q-btn
        dense
        flat
        to="/unternehmen/leitbild"
        label="Leitbild"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/unternehmen/leitbild' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/unternehmen/rechtsformen"
        label="Rechtsformen"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/unternehmen/rechtsformen' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/unternehmen/wertschopfung"
        label="Wertschöpfung"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/unternehmen/wertschopfung' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/unternehmen/ziele"
        label="Ziele"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/unternehmen/ziele' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Wirtschaft"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/wirtschaft/markt"
        label="Der Markt"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/wirtschaft/markt' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/wirtschaft/vertrage"
        label="Verträge & Vertragsarten"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/wirtschaft/vertrage' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Hardware"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Strom & Ladung"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/hardware/strom-ladung/usv"
            label="USV"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/hardware/strom-ladung/usv' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/hardware/strom-ladung/formeln-einheiten"
            label="Formeln & Einheiten"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/strom-ladung/formeln-einheiten'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/strom-ladung/berechnungen"
            label="Berechnungen"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/strom-ladung/berechnungen'
                ? 'active'
                : ''
            "
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Verkabelung"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/hardware/verkabelung/strukturierte-verkabelung"
            label="Strukturierte Verkabelung"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/verkabelung/strukturierte-verkabelung'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/verkabelung/medien-kabeltypen"
            label="Kabeltypen (Twisted-Pair & LWL)"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/verkabelung/medien-kabeltypen'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/verkabelung/simplex-duplex"
            label="Simplex & Duplex"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/verkabelung/simplex-duplex'
                ? 'active'
                : ''
            "
          />
        </div>
      </q-expansion-item>

      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Storage & Raid"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/hardware/storage-raid/backup"
            label="Backuparten"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/storage-raid/backup' ? 'active' : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/storage-raid/raid"
            label="RAID"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/storage-raid/raid' ? 'active' : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/storage-raid/das-nas-san"
            label="DAS, NAS & SAN"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/storage-raid/das-nas-san'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/storage-raid/protokolle"
            label="Protokolle & Schnittstellen"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/storage-raid/protokolle' ? 'active' : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/storage-raid/begriffe"
            label="Weitere Begriffe"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/storage-raid/begriffe' ? 'active' : ''
            "
          />
        </div>
      </q-expansion-item>

      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Cloud & Virtualisierung"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/hardware/virtualisierung-cloud/cloud-on-premises"
            label="Cloud vs. On-Premises"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/virtualisierung-cloud/cloud-on-premises'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/virtualisierung-cloud/cloud-servicemodelle"
            label="Cloud-Servicemodelle"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path ==
              '/hardware/virtualisierung-cloud/cloud-servicemodelle'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/hardware/virtualisierung-cloud/virtualisierung"
            label="Virtualisierung"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path == '/hardware/virtualisierung-cloud/virtualisierung'
                ? 'active'
                : ''
            "
          />
        </div>
      </q-expansion-item>
      <q-btn
        dense
        flat
        to="/hardware/netzwerk"
        label="Netzwerk Hardware"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/hardware/netzwerk' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/hardware/server"
        label="Server Hardware"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/hardware/server' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Alles übers Betriebssystem"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/betriebssystem/uefi-bios"
        label="Bootvorgänge (UEFI, BIOS)"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/betriebssystem/uefi-bios' ? 'active' : ''"
      />

      <q-btn
        dense
        flat
        to="/betriebssystem/dateisysteme-dateirechte"
        label="Dateisysteme & Dateirechte"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="
          $route.path == '/betriebssystem/dateisysteme-dateirechte'
            ? 'active'
            : ''
        "
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Netzwerk"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/netzwerk/allgemein"
        label="Allgemein"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/netzwerk/allgemein' ? 'active' : ''"
      />

      <q-btn
        dense
        flat
        to="/netzwerk/topologien"
        label="Netzwerktopologien"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/netzwerk/topologien' ? 'active' : ''"
      />

      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Netzwerkmodelle"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/netzwerk/osi"
            label="OSI-Modell"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/osi' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/tcpip"
            label="TCP/IP-Modell"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/tcpip' ? 'active' : ''"
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Netzwerkarten"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/netzwerk/vlan"
            label="VLAN"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/vlan' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/vpn"
            label="VPN & Tunneling"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/vpn' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/wlan"
            label="WLAN"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/wlan' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/weitere-netzwerkarten"
            label="Arten nach Ausdehnung"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path == '/netzwerk/weitere-netzwerkarten' ? 'active' : ''
            "
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Adressierung (OSI 2-4)"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/netzwerk/mac"
            label="MAC"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/mac' ? 'active' : ''"
          />
          <q-expansion-item
            dense-toggle
            dense
            expand-separator
            label="IPv4"
            header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
            class="q-mt-xs"
            align="left"
            :content-inset-level="0.4"
          >
            <div class="q-ma-xs">
              <q-btn
                dense
                flat
                to="/netzwerk/ipv4"
                label="Allgemein"
                class="full-width q-mt-xs"
                rounded
                align="left"
                :class="$route.path == '/netzwerk/ipv4' ? 'active' : ''"
              />
              <q-btn
                dense
                flat
                to="/netzwerk/ipv4subnetting"
                label="Subnetting"
                class="full-width q-mt-xs q-mb-xs"
                rounded
                align="left"
                :class="
                  $route.path == '/netzwerk/ipv4subnetting' ? 'active' : ''
                "
              />
            </div>
          </q-expansion-item>
          <q-expansion-item
            dense-toggle
            dense
            expand-separator
            label="IPv6"
            header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
            class="q-mt-xs"
            align="left"
            :content-inset-level="0.4"
          >
            <div class="q-ma-xs">
              <q-btn
                dense
                flat
                to="/netzwerk/ipv6"
                label="Allgemein"
                class="full-width q-mt-xs"
                rounded
                align="left"
                :class="$route.path == '/netzwerk/ipv6' ? 'active' : ''"
              />
              <q-btn
                dense
                flat
                to="/netzwerk/ipv6subnetting"
                label="Subnetting"
                class="full-width q-mt-xs q-mb-xs"
                rounded
                align="left"
                :class="
                  $route.path == '/netzwerk/ipv6subnetting' ? 'active' : ''
                "
              />
            </div>
          </q-expansion-item>
          <q-btn
            dense
            flat
            to="/netzwerk/routing"
            label="Routing"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/routing' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/nat"
            label="NAT"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/nat' ? 'active' : ''"
          />

          <q-btn
            dense
            flat
            to="/netzwerk/tcpudp"
            label="TCP, UDP & Ports"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/tcpudp' ? 'active' : ''"
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Protokolle & Anwendungen"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/netzwerk/dhcp"
            label="DHCP"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/dhcp' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/dns"
            label="DNS"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/dns' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/proxy"
            label="Proxy"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/proxy' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/firewall"
            label="Firewall"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/firewall' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/ssl-tls"
            label="SSL & TLS"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/ssl-tls' ? 'active' : ''"
          />
          <q-btn
            dense
            flat
            to="/netzwerk/protokolle"
            label="Weitere Protokolle"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="$route.path == '/netzwerk/protokolle' ? 'active' : ''"
          />
        </div>
      </q-expansion-item>
      <q-btn
        dense
        flat
        to="/netzwerk/header"
        label="Auswerten von Headern"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/netzwerk/header' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Datenschutz & Datensicherheit"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/datenschutz-datensicherheit/cyberbedrohung"
        label="Cyberbedrohungen"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/datenschutz-datensicherheit/cyberbedrohung'
            ? 'active'
            : ''
        "
      />
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Kryptographie & Zertifikate"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/kryptographie/verschluesselung"
            label="Verschlüsselungsarten"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path ==
              '/datenschutz-datensicherheit/kryptographie/verschluesselung'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/kryptographie/hashing"
            label="Hashwerte/Hashing"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path ==
              '/datenschutz-datensicherheit/kryptographie/hashing'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/kryptographie/zertifikate"
            label="Digitale Zertifikate"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path ==
              '/datenschutz-datensicherheit/kryptographie/zertifikate'
                ? 'active'
                : ''
            "
          />
        </div>
      </q-expansion-item>

      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="BSI IT Grundschutz"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/bsi/schutzziele"
            label="Schutzziele"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/datenschutz-datensicherheit/bsi/schutzziele'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/bsi/tom"
            label="Techn. Org. Maßnahmen"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/datenschutz-datensicherheit/bsi/tom'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/bsi/schutzbedarfsanalyse"
            label="Schutzbedarfsanalyse"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path ==
              '/datenschutz-datensicherheit/bsi/schutzbedarfsanalyse'
                ? 'active'
                : ''
            "
          />
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/bsi/sicherheitsprozess"
            label="IT-Sicherheitsprozess"
            class="full-width q-mt-xs q-mb-xs"
            rounded
            align="left"
            :class="
              $route.path ==
              '/datenschutz-datensicherheit/bsi/sicherheitsprozess'
                ? 'active'
                : ''
            "
          />
        </div>
      </q-expansion-item>
      <q-btn
        dense
        flat
        to="/datenschutz-datensicherheit/rechte"
        label="Rechtliches (DSGVO)"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/datenschutz-datensicherheit/rechte' ? 'active' : ''
        "
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="IT-Rechnungen"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/rechnungen/speichergrossen"
        label="Speichergrößen"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/rechnungen/speichergrossen' ? 'active' : ''"
      />

      <q-btn
        dense
        flat
        to="/rechnungen/bin-dez-hex"
        label="Bin, Dez und Hexadezimal"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/rechnungen/bin-dez-hex' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/rechnungen/anderes"
        label="Andere Berechnungen"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/rechnungen/anderes' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Programmierung"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/programmierung/programmierparadigmen"
        label="Begriffe zur Programmierung"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/programmierung/programmierparadigmen' ? 'active' : ''
        "
      />
      <q-btn
        dense
        flat
        to="/programmierung/uml"
        label="UML-Diagramme"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/programmierung/uml' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/programmierung/ablaufdiagramme"
        label="Ablaufdiagramme"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="
          $route.path == '/programmierung/ablaufdiagramme' ? 'active' : ''
        "
      />
      <q-btn
        dense
        flat
        to="/programmierung/tests-vorgehensmodelle"
        label="Tests & Vorgehensmodelle"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="
          $route.path == '/programmierung/tests-vorgehensmodelle'
            ? 'active'
            : ''
        "
      />
      <q-expansion-item
        dense-toggle
        dense
        expand-separator
        label="Algorithmen"
        header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
        class="q-mt-xs"
        align="left"
        :content-inset-level="0.4"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/programmierung/bubble-sort"
            label="Bubblesort"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/programmierung/bubble-sort' ? 'active' : ''
            "
          />
          <q-btn
            dense
            flat
            to="/programmierung/selection-sort"
            label="Selectionsort"
            class="full-width q-mt-xs"
            rounded
            align="left"
            :class="
              $route.path == '/programmierung/selection-sort' ? 'active' : ''
            "
          />
        </div>
      </q-expansion-item>
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Datenbanken"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/datenbanken/arten"
        label="Arten & Begriffe"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/datenbanken/arten' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/datenbanken/erm"
        label="Entity-Relationship-Modell"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/datenbanken/erm' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/datenbanken/normalisierung"
        label="Normalisierung"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/datenbanken/normalisierung' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/datenbanken/sql"
        label="SQL-Befehle"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/datenbanken/sql' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
  <q-expansion-item
    dense-toggle
    label="Anderes"
    header-class="bg-primary text-white text-body1"
    expand-icon-class="text-white"
    :content-inset-level="0.2"
  >
    <div class="q-ma-xs">
      <q-btn
        dense
        flat
        to="/anderes/normungen-standards"
        label="Normungen & Organisationen"
        class="full-width q-mt-xs"
        rounded
        align="left"
        :class="$route.path == '/anderes/it-normung' ? 'active' : ''"
      />
      <q-btn
        dense
        flat
        to="/anderes/imacrd"
        label="IT-Lifecycle-Management"
        class="full-width q-mt-xs q-mb-xs"
        rounded
        align="left"
        :class="$route.path == '/anderes/imacrd' ? 'active' : ''"
      />
    </div>
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinksPage',
});
</script>

<style>
.active {
  background: #a2d2dfa5;
  text-decoration: underline;
}
</style>
