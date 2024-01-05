<template>
  <div class="text-body1">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
        Das OSI-Schichtenmodell
      </div>
      <q-separator class="q-mt-md" />
      <div class="row justify-center">
        <table class="tg q-mt-lg">
          <thead>
            <tr>
              <th><a class="text-weight-bold"> Schicht</a></th>
              <th><a class="text-weight-bold"> Name</a></th>
              <th><a class="text-weight-bold"> Verwendete Protokolle</a></th>
              <th><a class="text-weight-bold"> Verwendete Adressen</a></th>
              <th><a class="text-weight-bold"> Mögliche Fehler</a></th>
              <th><a class="text-weight-bold"> TCP/IP Schicht</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Anwendungsschicht<br />Application Layer<br
                /></a>
              </td>
              <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky">Fehlerhafte Serverkonfiguration</td>
              <td class="tg-0lax">Application Layer</td>
            </tr>
            <tr>
              <td>6</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Darstellungsschicht <br />
                  Presentation Layer</a
                >
              </td>
              <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky">Fehlerhafte Serverkonfiguration</td>
              <td class="tg-0lax">Application Layer</td>
            </tr>
            <tr>
              <td>5</td>
              <td class="tg-0pky">
                <a class="text-weight-bold">
                  Kommunikationsschicht<br />Session Layer<br />
                </a>
              </td>
              <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky">Fehlerhafte Serverkonfiguration</td>
              <td class="tg-0lax">Application Layer</td>
            </tr>
            <tr>
              <td>4</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Transportschicht<br />Transport Layer<br
                /></a>
              </td>
              <td class="tg-0pky">TCP, UDP</td>
              <td class="tg-0pky">Ports</td>
              <td class="tg-0pky">Verlust eines Segments</td>
              <td class="tg-0lax">Transport Layer</td>
            </tr>
            <tr>
              <td>3</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Vermittlungsschicht<br />Network Layer<br
                /></a>
              </td>
              <td class="tg-0pky">IPv4, IPv6, ICMP</td>
              <td class="tg-0pky">IPv4 Adressen<br />IPv6 Adressen<br /></td>
              <td class="tg-0pky">
                Falsche IP-Adresse<br />Falsches Subnetz<br />
              </td>
              <td class="tg-0lax">Internet Layer</td>
            </tr>
            <tr>
              <td>2</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Sicherungsschicht<br />Data-Link Layer<br
                /></a>
              </td>
              <td class="tg-0pky">ARP, Ethernet<br /></td>
              <td class="tg-0pky">MAC-Adressen</td>
              <td class="tg-0pky">Netzwerkkarte defekt</td>
              <td class="tg-0lax">Network Access Layer</td>
            </tr>
            <tr>
              <td>1</td>
              <td class="tg-0pky">
                <a class="text-weight-bold"
                  >Bitübertragungsschicht<br />Physical Layer<br />
                </a>
              </td>
              <td class="tg-0pky">Token Ring, Ethernet</td>
              <td class="tg-0pky">-</td>
              <td class="tg-0pky">Medium getrennt</td>
              <td class="tg-0lax">Network Access Layer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li class="text-weight-bolder q-mt-md">
          OSI-Schicht 2,3,4 binden das Datenpaket in einen Frame bzw. Header, um
          die Weiterleitung über diese Schichten zu ermöglichen: Der
          Ethernet-Frame, der IP-Header & der TCP/UDP-Header. Der Aufbau dieser
          Header ist bei den jeweiligen Unterthemen zu finden.
        </li>

        <q-img
          class="bg-grey-5"
          :src="src + '/Netzwerke/ipv4/Datenpaket.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/ipv4/Datenpaket.png';
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
      <q-separator class="q-mt-md" />
      <div class="text-subtitle2 text-grey font-size-small">
        Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
        https://oinf.ch/wp-content/uploads/Konzeptbild_Datenpaket.png
        <br />
        Ich bin nicht der Eigentümer der oben genannten Bilder.
      </div>
    </div>
  </div>
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
  table-layout: fixed;
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
