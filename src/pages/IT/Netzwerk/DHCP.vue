<template>
  <q-page padding>
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      DHCP - Dynamic Host Configuration Protocol
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li class="text-weight-bold">
        Ermöglicht das Zuweisen von Netzwerkkonfigurationen an Clients durch
        einen Server
      </li>
      <li>
        DHCP verwendet Port 67 auf Serverseite und Port 68 auf Clientseite
      </li>
      <li>
        IPv6 benötigt kein DHCP, da IPv6 über Autokonfigurationen eine
        funktionsfähige Internetverbindung aufbauen kann (mittels SLAAC -
        Stateless Address Autoconfiguration, Konfiguration wird über Router im
        Netzwerksegment ermittelt)
      </li>
      <li>
        folgende Einstellungen können durch einen DHCP-Server zugewiesen werden:
      </li>
      <ul>
        <li>IP-Adresse und Subnetzmaske</li>
        <li>Gateway</li>
        <li>DNS-Server</li>
        <li>Time- und NTP-Server</li>
        <li>WINS-Server</li>
        <li>Proxy-Konfigurationen</li>
        <li>
          Teilweise auch die Angabe eines TFTP-Servers, der einem Client über
          PXE ein Betriebssystem zum booten/installieren zur Verfügung stellt
        </li>
        <li>Je nach DHCP-Server noch mehr Funktionen</li>
      </ul>
      <li class="text-weight-bolder">DHCP-Relay</li>
      <ul>
        <li>Verwenden von DHCP über Netzgrenzen hinaus</li>
        <li>
          Ein DHCP-Server kann also über mehrere Subnets Netzwerkkonfigurationen
          zuweisen
        </li>
        <li>
          DHCP-Nachrichten werden über den DHCP-Relay in andere Subnets geleitet
        </li>
        <li>Oft eingebaute Funktionalität von Routern</li>
      </ul>
      <li class="text-weight-bolder">Sicherheit</li>
      <ul>
        <li>
          DHCP ist ein sehr unsicheres Protokoll, da DHCP-Clients standardmäßig
          jeden DHCP-Server akzeptieren
        </li>
        <li>
          <a class="text-weight-bold">Rogue DHCP-Server</a>: von Angreifer
          aufgesetzter DHCP-Server, der unbrauchbare oder manipulierte
          Informationen an Clients liefert
        </li>
        <li>
          Rogue DHCP-Server kann z.B. fehlerhafte DNS-Server übermitteln, welche
          auf Phishing-Websites weiterleiten
        </li>
        <li class="text-weight-bold">Beispielmaßnahme: DHCP-Snooping</li>
        <ul>
          <li>
            Protokoll, welches auf Switches läuft die den Client mit den
            DHCP-Servern verbinden
          </li>
          <li>
            Alle DHCP-Informationen, die über den Switch laufen werden überprüft
          </li>
          <li>
            Nur zugelassene Pakete von vertrauenswürdigen DHCP-Servern werden
            weitergeleitet
          </li>
          <li>
            DHCP-Offer Pakete von unvertrauenswürdigen (Rogue) DHCP-Servern
            werden aussortiert
          </li>
        </ul>
      </ul>

      <li><a class="text-weight-bold">DHCP besitzt 3 Modi:</a></li>
      <ul>
        <li>Statisches DHCP: feste Zuordnung von MAC-Adresse und IP</li>
        <li>
          Automatisches DHCP: Adressen in einer Range werden automatisch &
          permanent vergeben
        </li>
        <li>
          Dynamisches DHCP: Adressen in einer Range werden automatisch und mit
          einer Verleihzeit (Lease-Time) vergeben.
        </li>
      </ul>
      <li><a class="text-weight-bolder">DHCP Anfrage - Ablauf</a></li>
      <ul>
        <li>
          Client sendet an <a class="text-weight-bolder">ALLE </a> Anderen im
          Netz eine DHCP-Discover Anfrage (Broadcast).
        </li>
        <li>
          <a class="text-weight-bolder">ALLE </a> DHCP Server antworten dem
          Client mit einem DHCP-Offer, welcher einige wichtige Daten beinhaltet
          (IP, Subnetz, ...).
        </li>
        <li>
          Der Client akzeptiert (meistens) den schnellsten, jedoch nur exakt
          einen DHCP-Offer und sendet an
          <a class="text-weight-bolder">ALLE </a> Anderen im Netz den
          DHCP-Request. Davor schaut der Client mit ARP noch, ob die DHCP-Offer
          Adresse wirklich frei ist. Der DHCP-Request beinhaltet eine
          spezifische Adresse von dem Server, der das DHCP-Offer gestellt hat
          und nur der, der das DHCP-Offer erstellt hat akzeptiert diese
          Nachricht.
        </li>
        <li>
          Der Server antwortet dem Client mit einem DHCP-ACK Packet, welcher
          weitere Informationen wie Lease Duration und Einstellungen beinhaltet.
        </li>
        <li>Der Client verwendet die erhaltene IP-Adresse.</li>

        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/DNS/DHCP.png'"
          style="max-width: 400px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/DNS/DHCP.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:DHCP_session.svg
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'DHCPPage',
  setup() {
    const q = useQuasar();
    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
  computed: {
    small() {
      if (this.q.screen.width < 1024) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>
