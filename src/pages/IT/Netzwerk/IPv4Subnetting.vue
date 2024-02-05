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
      IPv4 Subnetting
    </div>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Bestimmen von Adressen innerhalb eines Subnets
    </div>
    <ul>
      <li>Beispiel:</li>
      <ul>
        <li class="text-weight-bold">
          IP-Adresse: 176.255.13.22, Subnetzmaske: 255.255.255.224 (/27), Netz-
          & Broadcastadresse für das Netz der IP-Adrese bestimmen
        </li>
      </ul>
      <li>
        Das Subnetting findet im Beispiel im letzten Oktett statt, da dort nicht
        alle Bits auf 1 gesetzt sind und der Netzteil daher noch bis in dieses
        Oktett hineinreicht.
      </li>
      <li>
        Dieses Oktett der Netzmaske wandeln wir daher in Bits um: 224 =
        <a class="text-red">111</a><a class="text-green">0 0000</a>.
      </li>
      <li>
        Dasselbe machen wir mit dem letzten Oktett der IP: 22 =
        <a class="text-red">000</a><a class="text-green">1 0100</a>
      </li>
      <li class="text-red">
        Durch die Umwandlung der Subnetzmaske wissen wir, dass die ersten 3 Bits
        des letzten Oktetts der IP-Adresse (000) noch zum Netzteil gehören, da
        diese Bits in der Subnetzmaske auf 1 gesetzt sind.
      </li>
      <li class="text-green">
        Alle Bits nach den ersten 3 gehören demnach zum Clientteil bzw.
        Hostteil.
      </li>
      <li class="text-weight-bold">
        Die Netzadresse für das Netz, zu welchem die IP 176.255.13.22 gehört,
        finden wir nun heraus, indem wir alle Bits außerhalb des Netzteils auf 0
        setzen.
      </li>
      <ul>
        <li class="text-weight-bolder">
          <a class="text-red">000</a><a class="text-green">0 0000</a> =
          Netzadresse (.0)
        </li>
        <li class="text-weight-bold">
          Die Netzadresse des Netzes der IP 176.255.13.22 lautet also
          176.255.13.0/27.
        </li>
      </ul>
      <li class="text-weight-bold">
        Die Broadcastadresse finden wir heraus, indem alle Bits außerhalb des
        Netzteils auf 1 gesetzt werden.
      </li>
      <ul>
        <li class="text-weight-bolder">
          <a class="text-red">000</a><a class="text-green">1 1111</a> =
          Broadcastadresse (.31)
        </li>
        <li class="text-weight-bold">
          Die Broadcastadresse des Netzes der IP 176.255.13.22 lautet also
          176.255.13.31/27.
        </li>
      </ul>
      <li>
        Die erste für Clients nutzbare Adresse ist 176.255.13.1, die Letzte ist
        176.255.13.30.
      </li>
      <li class="text-weight-bold text-blue">Bestimmen weiterer Netze:</li>
      <ul>
        <li>
          Weitere Netze können bestimmt werden, indem der zuvor berechnete
          Netzteil angepasst wird.
        </li>
        <li>
          Um zum Beispiel die Nachfolgenetze von 176.255.13.0/27 zu finden, muss
          im Netzteil immer ein Bit hochgezählt werden:
        </li>
        <ul>
          <li>
            <a class="text-red">001</a><a class="text-green">0 0000</a> =
            Netzadresse 176.255.13.32/27
          </li>
          <li>
            <a class="text-red">010</a><a class="text-green">0 0000</a> =
            Netzadresse 176.255.13.64/27
          </li>
          <li>
            <a class="text-red">011</a><a class="text-green">0 0000</a> =
            Netzadresse 176.255.13.96/27
          </li>
          <li>...</li>
        </ul>
      </ul>
      <q-img
        class="fit bg-grey-5 q-mt-sm"
        :src="src + '/Netzwerke/ipv4/Ipv4Subnetting.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/ipv4/Ipv4Subnetting.png';
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

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Unterteilen eines Netzes in mehrere Subnets
    </div>
    <ul>
      <li>Beispiel:</li>
      <ul>
        <li class="text-weight-bold">
          Netz: 192.168.1.0, Subnetzmaske: 255.255.255.0 (/24) in 7 gleich große
          Netze unterteilen
        </li>
      </ul>
      <li>
        Das Netz muss in mindestens 7 kleinere Netze unterteilt werden → 2 hoch
        wie viel ergibt 7 oder die nächst höhere 2er Potenz?
      </li>
      <li>
        2<a class="text-blue text-h6 text-weight-bold">³</a> = 8 → in ein
        Subnetz welches in 8 kleinere Netze unterteilt wird passen unsere 7
        gesuchten Netze, eine Netzverschiebung um 2 Bit (2²) wäre zu klein, eine
        Netzverschiebung um 4 Bit (2⁴) zu groß →
        <a class="text-blue">Die Netzmaske muss um 3 Bit verschoben werden.</a>
      </li>
      <li>
        255(...).255(...).255(...).0(0000 0000) → 255.255.255.<a
          class="text-blue"
          >224</a
        >(<a class="text-blue">111</a>0 000) bzw.
        <a class="text-blue">/24 → /27</a>
      </li>
      <ul>
        <li>
          Die Netzwerkmaske, welche die 7 gleich großen Netze beherbergt ist
          255.255.255.224 oder /27
        </li>
      </ul>
      <li>
        Als nächstes muss der Netzteil unseres größeren Netzes bestimmt werden.
      </li>
      <ul>
        <li>
          192.168.1.0 → Die Netzwerkverschiebung findet lediglich im letzten
          Oktett statt, da dort die Subnetzmaske verschoben wurde. (<a
            class="text-red"
            >111</a
          >0 0000)
        </li>
      </ul>
      <li>
        <a class="text-red"
          >Durch den Netzteil können nun alle Netze gebildet werden, indem immer
          1 Bit im Netzteil hochgezählt wird.
        </a>
        <a class="text-green">
          Um die Netzadresse zu finden, werden alle Bits im Clientteil bzw.
          Hostteil auf 0 gesetzt.</a
        >
      </li>
      <ul>
        <li>
          192.168.1.0/27 → (...).(...).(...).<a class="text-red">000</a
          ><a class="text-green">1 1111</a>
        </li>
        <li>
          Netz 1: <a class="text-red">000</a
          ><a class="text-green">0 0000</a> (.0/27)
        </li>
        <li>
          Netz 2: <a class="text-red">001</a
          ><a class="text-green">0 0000</a> (.32/27)
        </li>
        <li>
          Netz 3: <a class="text-red">010</a
          ><a class="text-green">0 0000</a> (.64/27)
        </li>
        <li>
          Netz 4: <a class="text-red">011</a
          ><a class="text-green">0 0000</a> (.96/27)
        </li>
        <li>
          Netz 5: <a class="text-red">100</a
          ><a class="text-green">0 0000</a> (.128/27)
        </li>
        <li>
          Netz 6: <a class="text-red">101</a
          ><a class="text-green">0 0000</a> (.160/27)
        </li>
        <li>
          Netz 7: <a class="text-red">110</a
          ><a class="text-green">0 0000</a> (.192/27)
        </li>
        <li>
          Netz 8: <a class="text-red">111</a
          ><a class="text-green">0 0000</a> (.224/27)
        </li>
      </ul>
      <li>
        Die Broadcastadresse kann z.B. dazubestimmt werden, indem man den
        <a class="text-green">Clientteil bzw. Hostteil</a> komplett auf 1 setzt.
        (Siehe auch
        <a class="text-secondary">
          Bestimmen von Adressen innerhalb eines Subnets </a
        >)
      </li>
      <q-img
        class="fit bg-grey-5 q-mt-sm"
        :src="src + '/Netzwerke/ipv4/Ipv4Subnetting3.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/ipv4/Ipv4Subnetting3.png';
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

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Bestimmen der Anzahl von Clients innerhalb eines Subnets
    </div>
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
          muss das Netz mindestens 16 Adressen zur Verfügung stellen.
        </li>
        <li>
          16 Adressen passen in 4 Bit (2⁴ = 16). Diese 4 Bit zieht man von den
          32 möglichen Bit der IP-Adresse ab → 32-4 = 28.
        </li>
        <li>
          Diese 16 Adressen passen also in das Subnetz mit dem Suffix /28 oder
          in Binärschreibweise in das Subnetz 255.255.255.240.
        </li>
        <li>Im Netz 192.168.164.0/28 gilt also im ersten Subnetz:</li>
        <ul>
          <li>Netzadresse: 192.168.164.0/28</li>
          <li>Erste Client-Adresse: 192.168.164.1/28</li>
          <li>
            Broadcast-Adresse: 192.168.164.15/28 (16 Adressen passen in das
            Netz, da die Netzadresse 192.168.164.0 als Adresse mitgezählt wird
            ist die Broadcastadresse .15)
          </li>
          <li>
            Letzte Client-Adresse: 192.168.164.14/28 (Broadcastadresse - 1)
          </li>
        </ul>
      </ul>

      <li class="text-weight-bold">
        Diese Regel kann auch andersherum eingesetzt werden:
      </li>
      <ul>
        <li>Wie viele Clients befinden sich in einem /26er Netz?</li>
        <li>
          32-26 = 6 -> 2⁶ - 2(Netz- und Broadcast) Clients = 62 mögliche Clients
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Umrechnung Subnetzmaske ⇄ Suffix
    </div>
    <ul>
      <li>Subnetzmaske besteht aus 32Bit</li>
      <li>
        Die Subnetzmaske erhält man, indem man die Bit des Suffixes von Beginn
        an setzt und die verbleibenden Bit bis zum 32. mit Nullen füllt und je
        8Bit in eine Dezimalzahl umrechnet.
      </li>
      <ul>
        <li>Suffix: /23 = 23 Einsen gefolgt von 9 Nullen</li>
        <li>1111 1111 (255) 1111 1111 (255) 1111 1110 (254) 0000 0000 (0)</li>
        <li>Die Subnetzmaske für das Suffix /23 ist also 255.255.254.0</li>
      </ul>
      <li>
        Das Suffix aus der Subnetzmaske bestimmt man, indem man die Bits, welche
        auf 1 gesetzt sind aus der binären Subnetzmaske abzählt.
      </li>
      <ul>
        <li>Subnetzmaske: 255.255.254.0</li>
        <li>binäre Subnetzmaske: 1111 1111 1111 1111 1111 1110 0000 0000</li>
        <li>Bits, welche auf 1 gesetzt sind: 23</li>
        <li>Das Suffix ist /23</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Beispiel Subnetzmasken & Anzahl verfügbarer Clients
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
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Beispiel für das Netz 192.168.164.0
    </div>
    <div style="overflow-x: auto">
      <IPv4SubnetExample class="q-ml-lmd q-mt-lg" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import IPv4SubnetExample from 'components/IPv4SubnetExample.vue';

export default defineComponent({
  name: 'IPv4SubnettingPage',
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
