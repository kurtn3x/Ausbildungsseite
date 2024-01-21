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
      Das TCP/IP-Modell
    </div>
    <q-separator class="q-mt-md" />
    <ul class="q-mt-lg">
      <li class="text-weight-bold">
        ähnlich zu OSI-Modell, jedoch vereinfacht bzw. Schichten wurden
        zusammengefasst
      </li>
      <li class="text-weight-bolder">
        Stellt eher dar, wo die Frames eines Pakets aufgebaut werden
      </li>
    </ul>
    <div class="row justify-center">
      <table class="tg">
        <thead>
          <tr>
            <th><a class="text-weight-bold"> Schicht</a></th>
            <th><a class="text-weight-bold"> Name</a></th>
            <th><a class="text-weight-bold"> Verwendete Protokolle</a></th>
            <th><a class="text-weight-bold"> Frame</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td class="tg-0pky">
              <a class="text-weight-bold">Anwendung<br />Application <br /></a>
            </td>
            <td class="tg-0pky">FTP, HTTP, SMTP, Telnet, TLS, SOCKS</td>
            <td>Programmspezifisch z.B. HTTP-Header</td>
          </tr>
          <tr>
            <td>3</td>
            <td class="tg-0pky">
              <a class="text-weight-bold">Transport</a>
            </td>
            <td class="tg-0pky">TCP, UDP</td>
            <td>TCP-/UDP-Frame</td>
          </tr>
          <tr>
            <td>2</td>
            <td class="tg-0pky">
              <a class="text-weight-bold">Vermittlung <br />Internet</a>
            </td>
            <td class="tg-0pky">IPv4, IPv6, ICMP</td>
            <td>IPv4-/IPv6-Frame</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="tg-0pky">
              <a class="text-weight-bold">Netzzugang <br />Network</a>
            </td>
            <td class="tg-0pky">ARP, Ethernet<br /></td>
            <td style="max-width: 200px">
              Ethernet-Frame (beinhaltet OSI Schicht 1 und Schicht 2 Inhalte)
            </td>
          </tr>
        </tbody>
      </table>

      <q-img
        class="bg-grey-5 q-mt-md"
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
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://oinf.ch/wp-content/uploads/Konzeptbild_Datenpaket.png
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TCPIPPage',
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
