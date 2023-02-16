<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-primary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">
      TCP, UDP und Ports
    </div>
    <q-separator class="q-mt-md" />
    <div class="text-h5 q-mt-lg q-ml-md text-weight-bolder">TCP</div>
    <ul>
      <li>Transmission Control Protocol</li>
      <li>Herstellung einer Verbindung zwischen zwei Endpunkten</li>
      <li>Datenverluste werden erkannt und automatisch behoben</li>
      <li>Richtige Reihenfolge der Pakete wird sichergestellt</li>
      <li>z.B. HTTP oder SMTP</li>
      <li><a class="text-weight-bolder">Aufbau des TCP-Headers:</a></li>
    </ul>
    <div class="row justify-center">
      <q-img
        :src="src + '/Netzwerke/TCPUDPPorts/TCP.jpg'"
        class="bg-grey-5"
        style="width: 600px"
      />
    </div>
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
          Client bestätigt empfang der SYN-ACK Flags mit einem Bestätigungs-Flag
          (ACK).
        </li>
        <li>Der Server empfängt dies und startet eine TCP Verbindung.</li>
      </ul>
    </ul>
    <div class="row justify-center">
      <q-img
        style="width: 450px"
        :src="src + '/Netzwerke/TCPUDPPorts/TCPHandshake.png'"
        class="bg-grey-5"
      />
    </div>

    <q-separator class="q-mt-lg" />
    <div class="text-h5 q-mt-lg q-ml-md text-weight-bolder">UDP</div>
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
    </ul>
    <div class="row justify-center">
      <q-img
        :src="src + '/Netzwerke/TCPUDPPorts/UDP.png'"
        class="bg-grey-5"
        style="width: 600px"
      />
    </div>
    <q-separator class="q-mt-lg" />
    <div class="text-h5 q-mt-lg q-ml-md text-weight-bolder">Ports</div>
    <ul>
      <li>Ergänzt die IP Adresse im TCP oder UDP Header</li>
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
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
});
</script>
