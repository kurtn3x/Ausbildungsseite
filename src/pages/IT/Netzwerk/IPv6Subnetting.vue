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
      IPv6 Subnetting
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>
        <a class="text-blue">2001:00d3:a3df:3357:</a>
        <a class="text-green">54b7:1d72:6f0a:e9dc </a>
        <a class="q-ml-md">|</a>
        <a class="text-blue q-ml-md">Netzanteil</a
        ><a class="text-green q-ml-md"> Hostanteil </a>
      </li>
      <li>
        Der Netzanteil kann noch weiter unterteilt werden, so bekommt der
        Provider z.B. die ersten 32 Bit, die nächsten 16Bit sind für die
        Netzaufteilung und der Kunde bekommt dann ein /64 Netz
        <a class="text-green">2001:00d3</a>
        <a class="text-purple">:a3df</a>
        <a class="text-yellow">:3357: ...</a>
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Unterteilen eines Netzes in mehrere Subnets
    </div>
    <ul>
      <li>Beispiel:</li>
      <ul>
        <li class="text-weight-bold">
          fe80:15:dead:f6:d000:17::/53 in 7 gleichgroße Netze unterteilen
        </li>
      </ul>
      <li>
        Das Netz muss in mindestens 7 kleinere, gleichgroße Netze unterteilt
        werden → 2 hoch wie viel ergibt 7 oder die nächst höhere 2er Potenz?
      </li>
      <li>
        2<a class="text-blue text-h6 text-weight-bold">³</a> = 8 → in ein
        Subnetz welches in 8 kleinere Netze unterteilt wird passen unsere 7
        gesuchten Netze, eine Netzverschiebung um 2 Bit (2²) wäre zu klein, eine
        Netzverschiebung um 4 Bit (2⁴) zu groß →
        <a class="text-blue">Die Netzmaske muss um 3 Bit verschoben werden.</a>
      </li>
      <li><a class="text-blue">/53 → /56</a></li>
      <ul>
        <li>
          Die Netzwerkmaske, welche die 7 gleich großen Netze beherbergt ist
          /56.
        </li>
      </ul>
      <li>Als nächstes muss der Netzteil und Hostteil bestimmt werden.</li>
      <ul>
        <li>
          fe80:15:dead:f5:d000:17::/53 → Die Unterteilung des Netzes findet
          lediglich im Block :f5: statt, da dieser das 54.-56. Bit beinhaltet,
          welche relevant für die Verschiebung des Netzes sind.
        </li>
        <li>
          Die 7 gleich großen Subnetze werden also aus dem 54. bis 56. Bit
          gebildet. Deshalb müssen wir den Block
          <a class="text-blue">:00f5:</a>, welcher die Bits 49-64 beinhaltet in
          Binärschreibweise umrechnen.
        </li>
        <li>
          fe80:15:dead:<a class="text-blue">f5</a>:d000:17:: →
          <a class="text-blue">00f5 = 0000 0000 1111 0101</a>
        </li>
        <li>
          Wie vorher beschrieben, verschiebt sich der Netzteil vom 53. auf das
          56. Bit
          <ul>
            <li>
              <a class="text-blue">0000 0</a><a class="text-red">000</a>
              <a class="text-green">1111 0101</a>
            </li>
            <li class="text-blue">blau markiert 49. - 53. Bit <br /></li>
            <li class="text-red">rot markiert 54. - 56. Bit</li>

            <li class="text-green">grün markiert 57. - 64. Bit</li>
            <li>
              Die Netze werden also aus den Bits
              <a class="text-red">000</a>
              gebildet.
            </li>
          </ul>
        </li>
      </ul>
      <li>
        Durch den Netzteil können nun alle Netze gebildet werden,
        <a class="text-red"> indem immer 1 Bit im Netzteil hochgezählt wird.</a>
        <a class="text-green">
          Die restlichen Bit nach dem Netzteil werden komplett auf 0 gesetzt, da
          wir die Netzadresse suchen.</a
        >
      </li>
      <ul>
        <li>
          fe80:15:dead:<a class="text-blue">f5</a>:d000:17:: →
          (...):(...):(...):<a class="text-blue">0000 0</a
          ><a class="text-red">000</a>
          <a class="text-green">1111 0101</a>:(...):(...)::
        </li>
        <li>
          Netz 1: <a class="text-blue">0000 0</a><a class="text-red">000</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >::</a
          >/56)
        </li>
        <li>
          Netz 2: <a class="text-blue">0000 0</a><a class="text-red">001</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:100::</a
          >/56)
        </li>
        <li>
          Netz 3: <a class="text-blue">0000 0</a><a class="text-red">010</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:200::</a
          >/56)
        </li>
        <li>
          Netz 4: <a class="text-blue">0000 0</a><a class="text-red">011</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:300::</a
          >/56)
        </li>
        <li>
          Netz 5: <a class="text-blue">0000 0</a><a class="text-red">100</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:400::</a
          >/56)
        </li>
        <li>
          Netz 6: <a class="text-blue">0000 0</a><a class="text-red">101</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:500::</a
          >/56)
        </li>
        <li>
          Netz 7: <a class="text-blue">0000 0</a><a class="text-red">110</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:600::</a
          >/56)
        </li>
        <li>
          Netz 8: <a class="text-blue">0000 0</a><a class="text-red">111</a
          ><a class="text-green"> 0000 0000</a> (fe80:15:dead<a
            class="text-blue"
            >:700::</a
          >/56)
        </li>
      </ul>
      <q-img
        class="fit bg-grey-5 q-mt-sm"
        :src="src + '/Netzwerke/ipv6/ipv6subnetting.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/ipv6/ipv6subnetting.png';
        "
      >
      </q-img>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IPv6Page',
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
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
