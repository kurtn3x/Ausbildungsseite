<template>
  <q-page padding>
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="min-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Das OSI-Schichtenmodell
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold">OSI = Open Systems Interconnection</li>
      <li class="text-weight-bold">
        Referenzmodell für Kommunikationssysteme bzw. Design-Grundlage für
        Kommunikationsprotokolle und Computernetze
      </li>
    </ul>

    <div class="row justify-center">
      <div style="overflow-x: auto">
        <table class="tg" style="min-width: 800px">
          <thead>
            <tr>
              <th>
                <a class="text-weight-bold" style="min-width: 35px"> Nr.</a>
              </th>
              <th><a class="text-weight-bold"> Name</a></th>
              <th><a class="text-weight-bold"> Verwendete Protokolle</a></th>
              <th><a class="text-weight-bold"> Verwendete Adressen</a></th>
              <th><a class="text-weight-bold"> Erklärung</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" style="min-width: 35px">7</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Anwendungsschicht<br />Application Layer<br
                /></a>
              </td>
              <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky" style="max-width: 350px">
                Stellt Funktionen für Anwendung zur Verfügung, Dateneingabe und
                -ausgabe
              </td>
            </tr>
            <tr>
              <td class="text-center" style="min-width: 35px">6</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Darstellungsschicht <br />
                  Presentation Layer</a
                >
              </td>
              <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky" style="max-width: 350px">
                Umwandlung systemabhängiger Daten in unabhängiges Format
              </td>
            </tr>
            <tr>
              <td class="text-center" style="min-width: 35px">5</td>
              <td class="tg-0pky">
                <a class="text-weight-bold">
                  Kommunikationsschicht<br />Session Layer<br />
                </a>
              </td>
              <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky" style="max-width: 350px">
                Steuerung der Verbindungen und des Datenaustauschs
              </td>
            </tr>
            <tr>
              <td class="text-center" style="min-width: 35px">4</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Transportschicht<br />Transport Layer<br
                /></a>
              </td>
              <td class="tg-0pky">TCP, UDP</td>
              <td class="tg-0pky">Ports</td>
              <td class="tg-0pky" style="max-width: 350px">
                Zuordnen der Datenpakete zu einer Anwendung
              </td>
            </tr>
            <tr>
              <td class="text-center" style="min-width: 35px">3</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Vermittlungsschicht<br />Network Layer<br
                /></a>
              </td>
              <td class="tg-0pky">IPv4, IPv6, ICMP</td>
              <td class="tg-0pky">IPv4 Adressen<br />IPv6 Adressen<br /></td>
              <td class="tg-0pky" style="max-width: 350px">
                Routing / Weiterleiten von Paketen
              </td>
            </tr>
            <tr>
              <td class="text-center" style="min-width: 35px">2</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Sicherungsschicht<br />Data-Link Layer<br
                /></a>
              </td>
              <td class="tg-0pky">ARP, Ethernet<br /></td>
              <td class="tg-0pky">MAC-Adressen</td>
              <td class="tg-0pky" style="max-width: 350px">
                Segmentierung der Pakete und Prüfsummenchecks
              </td>
            </tr>
            <tr>
              <td class="text-center" style="min-width: 35px">1</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Bitübertragungsschicht<br />Physical Layer<br />
                </a>
              </td>
              <td class="tg-0pky">Token Ring, Ethernet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky" style="max-width: 350px">
                Umwandlung der Bits in physikalisches Übertragungsmedium
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'OSIPage',
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

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: center;
}
</style>
