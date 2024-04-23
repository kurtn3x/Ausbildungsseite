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
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      TCP, UDP und Ports
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      TCP
    </div>
    <ul>
      <li>Transmission Control Protocol</li>
      <li>Herstellung einer Verbindung zwischen zwei Endpunkten</li>
      <li>Datenverluste werden erkannt und automatisch behoben</li>
      <li>Richtige Reihenfolge der Pakete wird sichergestellt</li>
      <li>z.B. HTTP oder SMTP</li>
      <li><a class="text-weight-bolder">Aufbau des TCP-Headers:</a></li>

      <q-img
        class="fit bg-grey-5"
        :src="src + '/Netzwerke/TCPUDPPorts/TCP.jpg'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/TCPUDPPorts/TCP.jpg';
        "
      >
      </q-img>
    </ul>

    <ul>
      <li>
        <a class="text-weight-bolder"
          >TCP 3-Way Handshake - Verbindungsaufbau:</a
        >
      </li>
      <ul>
        <li>für Verbindungsaufbau - und abbau</li>
        <li>
          Client sendet ein Datenpacket mit einem Synchronisations-Flag (SYN) an
          den Server.
        </li>
        <li>
          Server empfängt dies und bestätigt Anfrage mit einem SYN-ACK
          (Synchronisations- und Bestätigungsflag).
        </li>
        <li>
          Client bestätigt den Empfang der SYN-ACK Flags mit einem
          Bestätigungs-Flag (ACK).
        </li>
        <li>Der Server empfängt dies und startet eine TCP Verbindung.</li>

        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/TCPUDPPorts/TCPHandshake.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/TCPUDPPorts/TCPHandshake.png';
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

    <q-separator class="q-mt-lg" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      UDP
    </div>
    <ul>
      <li>User Datagram Protocol</li>
      <li>
        Ziel ist eine reine Adressierung ohne Absicherung der Datenübertragung
      </li>
      <li>
        Einsatzzweck z.B. VoIP oder Liveübertragung von Ton und Bild, DNS, DHCP
      </li>
      <li>Kein Verbindungsaufbau</li>
      <li>Keine Garantie, dass das Paket ankommt</li>
      <li>Keine Garantie, dass Reihenfolge eingehalten wird</li>
      <li>Schnelligkeit vor Zuverlässigkeit</li>
      <li><a class="text-weight-bolder">Aufbau des UDP-Headers:</a></li>

      <q-img
        class="fit bg-grey-5"
        :src="src + '/Netzwerke/TCPUDPPorts/UDP.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/TCPUDPPorts/UDP.png';
        "
      >
      </q-img>
    </ul>
    <q-separator class="q-mt-lg" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Ports
    </div>
    <ul>
      <li>Ergänzt die IP Adresse im TCP oder UDP Header</li>
      <li>Ports adressieren Applikationen</li>
      <li>
        Ermöglicht Zuordnung von Datenpaketen zu Server- und Client-Programmen
      </li>
      <li>
        Zu jeder Verbindung gehören 2 Ports, je einer auf Client und einer auf
        Serverseite
      </li>
      <li><a class="text-weight-bold">Zu unterscheiden:</a></li>
      <ul>
        <li>System Ports (0-1023) für Server</li>
        <li>User Ports (1024-49151)</li>
        <li>Dynamic Ports (49152-65535) für Clients</li>
      </ul>
      <li><a class="text-weight-bold">Notable Ports:</a></li>
      <ul>
        <li>20: FTP File Transfer Protocol</li>
        <li>22: SSH Secure Shell</li>
        <li>25: SMTP Simple Mail Transfer Protocol</li>
        <li>80: HTTP Hyper Text Transfer Protocol</li>
        <li>443: HTTPS Hyper Text Transfer Protocol Secure</li>
        <li class="text-primary">
          Siehe auch Überthema Netzwerk / Protokolle & Anwendungen.
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/tcp-header.jpg
      <br />
      https://commons.wikimedia.org/wiki/File:Tcp-handshake.svg <br />
      https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Screenshots/aufbau-udp-header.png
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TCPUDPPortsPage',
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
