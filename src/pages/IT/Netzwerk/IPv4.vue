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
      IPv4
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>bestehen aus 32Bit = 4 Oktetten</li>
      <li>Dezimale Schreibweise</li>
      <li>Ca. 4,3 Milliarden verfügbare Adressen = 2^32</li>
      <li>
        werden neben der IPv6-Adresse zur Adressierung auf Layer 3
        (Vermittlungsschicht) des OSI-Modells verwendet
      </li>
      <li class="text-weight-bold">Beispieladresse: 192.168.24.2/24</li>
      <table class="tg q-mt-md">
        <thead>
          <tr>
            <th><a class="text-weight-bold">192</a></th>
            <th><a class="text-weight-bold">168</a></th>
            <th><a class="text-weight-bold">24</a></th>
            <th><a class="text-weight-bold">2</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax">1. Oktett</td>
            <td class="tg-0lax">2. Oktett</td>
            <td class="tg-0lax">3. Oktett</td>
            <td class="tg-0lax">4. Oktett</td>
          </tr>
          <tr>
            <td class="tg-0lax">8 Bit<br /></td>
            <td class="tg-0lax">8 Bit</td>
            <td class="tg-0lax">8 Bit</td>
            <td class="tg-0lax">8 Bit</td>
          </tr>
          <tr>
            <td class="tg-0lax">0-255</td>
            <td class="tg-0lax">0-255</td>
            <td class="tg-0lax">0-255</td>
            <td class="tg-0lax">0-255</td>
          </tr>
          <tr>
            <td class="tg-0lax">1100 0000</td>
            <td class="tg-0lax">1010 1000</td>
            <td class="tg-0lax">0001 1000</td>
            <td class="tg-0lax">0000 0010</td>
          </tr>
        </tbody>
      </table>
      <li class="text-weight-bold q-mt-md">Aufbau des IPv4-Headers:</li>

      <q-img
        class="fit bg-grey-5"
        :src="src + '/Netzwerke/ipv4/IPV4Header.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/ipv4/IPV4Header.png';
        "
      >
      </q-img>

      <li class="text-weight-bold q-mt-md">Besondere IPv4-Adressen:</li>
      <ul>
        <li>
          <a class="text-weight-bold">0.0.0.0/8: </a>Default-Route im Subnetz.
        </li>
        <li>
          <a class="text-weight-bold">127.0.0.0/8: </a>Loopback-Adresse. Pakete,
          welche an die Loopback-Adresse adressiert sind, sollen den Host nicht
          verlassen und intern verhandelt werden.
        </li>
        <li>
          <a class="text-weight-bold">169.254.0.0/16: </a>APIPA-Adressen.
          Adressen für die automatische Konfiguration eines Netzwerkadapters.
        </li>
        <li>
          <a class="text-weight-bold">255.255.255.255/32: </a>Limited Broadcast.
          Pakete mit dieser Adresse sollen nicht aus dem Netzwerk geroutet
          werden, aus dem sie kommen.
        </li>
        <li>
          <a class="text-weight-bold">192.168.0.0/16: </a>Netzbereich für
          private Netze.
        </li>
        <li>
          <a class="text-weight-bold">172.16.0.0/12: </a>Netzbereich für private
          Netze.
        </li>
        <li>
          <a class="text-weight-bold">10.0.0.0/8: </a>Netzbereich für private
          Netze.
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Netzwerkklassen
    </div>
    <ul>
      <li>
        veraltet und nicht mehr verwendet aufgrund von Knappheit der
        IPv4-Adressen
      </li>
      <li class="text-weight-bolder">Klasse A</li>
      <ul>
        <li><a class="text-weight-bold">Erste vier Bits:</a> 0XXX</li>
        <li>
          <a class="text-weight-bold">Adressbereich:</a> 0.0.0.0 -
          127.255.255.255
        </li>
        <li>
          <a class="text-weight-bold">Für private Adressen reserviert:</a>
          10.0.0.0/8
        </li>
      </ul>
      <li class="text-weight-bolder">Klasse B</li>
      <ul>
        <li><a class="text-weight-bold">Erste vier Bits:</a> 10XX</li>
        <li>
          <a class="text-weight-bold">Adressbereich:</a> 128.0.0.0 -
          191.255.255.255
        </li>
        <li>
          <a class="text-weight-bold">Für private Adressen reserviert:</a>
          172.16.0.0/12
        </li>
      </ul>
      <li class="text-weight-bolder">Klasse C</li>
      <ul>
        <li><a class="text-weight-bold">Erste vier Bits:</a> 110X</li>
        <li>
          <a class="text-weight-bold">Adressbereich:</a> 192.0.0.0 -
          223.255.255.255
        </li>
        <li>
          <a class="text-weight-bold">Für private Adressen reserviert:</a>
          192.168.0.0/16
        </li>
      </ul>
      <li class="text-weight-bolder">Klasse D</li>
      <ul>
        <li><a class="text-weight-bold">Erste vier Bits:</a> 1110</li>
        <li>
          <a class="text-weight-bold">Adressbereich:</a> 224.0.0.0 -
          239.255.255.255
        </li>
      </ul>
      <li class="text-weight-bolder">Klasse E</li>
      <ul>
        <li><a class="text-weight-bold">Erste vier Bits:</a> 1111</li>
        <li>
          <a class="text-weight-bold">Adressbereich:</a> 240.0.0.0 -
          255.255.255.255
        </li>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />

    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:IPv4_Packet-en.svg
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IPv4Page',
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
  padding: 15px 20px;
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
