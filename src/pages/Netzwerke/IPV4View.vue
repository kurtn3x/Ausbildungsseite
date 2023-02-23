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
    <div class="" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div
        class="text-center text-h4 text-weight-bolder q-mt-md text-secondary"
      >
        Netzwerke
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        IPv4
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Allgemeines
      </div>
      <ul>
        <li>bestehen aus 32Bit, also 4 Oktetten</li>
        <li>Dezimale Schreibweise</li>
        <li>Ca. 4,3 Milliarden verfügbare Adressen = 2^32</li>
        <li class="text-weight-bold">Beispiel: 192.168.24.2/24</li>
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
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
      <q-separator class="q-mt-lg" />
      <div
        class="text-h4 q-mt-lg q-ml-md text-weight-bolder text-underline text-third text-third"
      >
        Subnetting
      </div>

      <table class="tg q-mt-lg">
        <thead>
          <tr>
            <th><a class="text-weight-bold">Subnetzmaske</a></th>
            <th><a class="text-weight-bold">Suffix</a></th>
            <th><a class="text-weight-bold">Binär letzte 2 Oktette</a></th>
            <th>
              <a class="text-weight-bold"
                >Verfügbare Client-Adressen <br />(ohne Netz & Broadcast)</a
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax">255.255.252.0</td>
            <td class="tg-0lax">/22</td>
            <td class="tg-0lax">1111 1100 0000 0000</td>
            <td class="tg-0lax">1022</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.254.0</td>
            <td class="tg-0lax">/23</td>
            <td class="tg-0lax">1111 1110 0000 0000</td>
            <td class="tg-0lax">510</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.0</td>
            <td class="tg-0lax">/24</td>
            <td class="tg-0lax">1111 1111 0000 0000</td>
            <td class="tg-0lax">254</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.128</td>
            <td class="tg-0lax">/25</td>
            <td class="tg-0lax">1111 1111 1000 0000</td>
            <td class="tg-0lax">126</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.192</td>
            <td class="tg-0lax">/26</td>
            <td class="tg-0lax">1111 1111 1100 0000</td>
            <td class="tg-0lax">62</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.224</td>
            <td class="tg-0lax">/27</td>
            <td class="tg-0lax">1111 1111 1110 0000</td>
            <td class="tg-0lax">30</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.240</td>
            <td class="tg-0lax">/28<br /></td>
            <td class="tg-0lax">1111 1111 1111 0000</td>
            <td class="tg-0lax">14</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.248</td>
            <td class="tg-0lax">/29</td>
            <td class="tg-0lax">1111 1111 1111 1000</td>
            <td class="tg-0lax">6</td>
          </tr>
          <tr>
            <td class="tg-0lax">255.255.255.252</td>
            <td class="tg-0lax">/30</td>
            <td class="tg-0lax">1111 1111 1111 1100</td>
            <td class="tg-0lax">2</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li class="text-weight-bold">
          Eine IPv4 Adresse hat 32 Bit. Die Anzahl der möglichen Hosts in einem
          Subnetz kann bestimmt werden, indem man die Bits, welche die Anzahl
          Hosts beschreiben von diesen 32 Bit abzieht.
        </li>
        <li>Beispiel:</li>
        <ul>
          <li>
            Es soll ein Subnetz ermittelt werden, welches für 14 Clients
            ausreicht.
          </li>
          <li>
            Da jedes Netz zuzüglich noch eine Netz- und Broadcast-Adresse hat,
            muss das Netz 16 Adressen zur Verfügung stellen.
          </li>
          <li>
            16 Adressen passen in 4 Bit (2^4 = 16). Diese 4 Bit zieht man von
            den 32 möglichen Bit der IP-Adresse ab, was 28Bit ergibt.
          </li>
          <li>
            Diese 16 Adressen passen also in das Subnetz mit dem Suffix /28 oder
            in Binärschreibweise in das Subnetz 255.255.255.240.
          </li>
          <li>Im Netz 192.168.164.0/28 gilt also im ersten Subnetz:</li>
          <ul>
            <li>Netzadresse: 192.168.164.0/28</li>
            <li>Erste Client-Adresse: 192.168.164.1/28</li>
            <li>Letzte Client-Adresse: 192.168.164.14/28</li>
            <li>Broadcast-Adresse: 192.168.164.15/28</li>
          </ul>
        </ul>

        <li class="text-weight-bold">
          Diese Regel kann auch andersherum eingesetzt werden:
        </li>
        <ul>
          <li>Wie viele Clients befinden sich in einem /26er Netz?</li>
          <li>
            32-26 = 6 -> 2⁶ - 2(Netz- und Broadcast) Clients = 62 mögliche
            Clients
          </li>
        </ul>

        <li class="text-weight-bold">Umrechnung Subnetzmaske ⇄ Suffix:</li>
        <ul>
          <li>Subnetzmaske besteht aus 32Bit, das Suffix geht bis zu /32.</li>
          <li>
            Die Subnetzmaske erhält man, indem man die Bit des Suffixes von
            Beginn an setzt und die verbleibenden Bit bis zum 32. mit Nullen
            füllt und je 8Bit in eine Dezimalzahl umrechnet.
          </li>
          <ul>
            <li>Suffix: /23 = 23 Einsen gefolgt von 9 Nullen</li>
            <li>
              1111 1111 (255) 1111 1111 (255) 1111 1110 (254) 0000 0000 (0)
            </li>
            <li>
              genauso kann man auch das Suffix ausrechnen, indem man die
              Subnetzmaske in Bits umwandelt und die 1en abzählt.
            </li>
          </ul>
        </ul>
      </ul>
      <div
        class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Beispiel für das Netz 192.168.164.0
      </div>
      <IPv4SubnetExample class="q-ml-lmd q-mt-lg fit" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import IPv4SubnetExample from 'components/IPv4SubnetExample.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { IPv4SubnetExample },
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
  width: 100%;
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
  vertical-align: top;
}
</style>
