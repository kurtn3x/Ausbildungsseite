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
      IPv6
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Allgemeines
    </div>
    <ul>
      <li>Hexadezimal (je 4 Bit in eine Hexadezimalzahl)</li>
      <li>8 Blöcke mit je 16 Bit bzw. 8 Blöcke mit je 4 Hexadezimalzahlen</li>
      <li>Blöcke durch Doppelpunkte getrennt</li>
      <li>2^128 verfügbare Adressen</li>
    </ul>

    <table class="tg q-ml-lg" style="max-width: 450px">
      <thead>
        <tr>
          <th><a class="text-weight-bold">IPv4</a></th>
          <th><a class="text-weight-bold">IPv6</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">Netzanteil</td>
          <td class="tg-0lax">Präfix mit /64</td>
        </tr>
        <tr>
          <td class="tg-0lax">Hostanteil</td>
          <td class="tg-0lax">Interface-Identifier</td>
        </tr>
        <tr>
          <td class="tg-0lax">Netzmaske</td>
          <td class="tg-0lax">Präfixlänge</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li class="text-weight-bolder">IPv6-Adressen können gekürzt werden</li>
      <ul>
        <li class="text-red">führende Nullen können ausgelassen werden</li>
        <ul>
          <li>
            <a class="text-weight-bold">Beispiel:</a> 2001:0db8<a
              class="text-red"
              >:0000:</a
            >08d3<a class="text-red">:0020:</a>8a2e:0070:7344
          </li>
          <li>
            wird zu: 2001:db8<a class="text-red">:0:</a>8d3<a class="text-red"
              >:20:</a
            >8a2e:70:7344
          </li>
        </ul>

        <li class="text-orange">
          Ein oder mehrere aufeinander folgende 0 Blöcke dürfen einmalig
          ausgelassen werden
        </li>
        <ul>
          <li>
            Beispiel: 2001:db8<a class="text-orange">:0000:0000:</a>1428<a
              class="text-red"
              >:0000:0015:</a
            >57ab
          </li>
          <li>
            wird zu: 2001:db8<a class="text-orange">::</a>1428<a
              class="text-red"
              >:0:15:</a
            >57ab
          </li>
        </ul>
      </ul>
      <li><a class="text-weight-bold">Besondere IPv6-Adressen:</a></li>
      <ul>
        <li>::/128 nicht spezifizierte Adresse (Adresse fehlt)</li>
        <li>::/0 Standard-Route</li>
        <li>::1/128 Loopback Adresse</li>
        <li>
          Fe80::/64 Link-Local-Adressen, sind nur bis zum ersten Router gültig
        </li>
      </ul>
      <li>
        <a class="text-weight-bold">Vorteile von IPv6 gegenüber IPv4:</a>
      </li>
      <ul>
        <li>Nahezu uneingeschränkte Adresszahl</li>
        <li>Dadurch auch weltweite Erreichbarkeit einzelner Komponenten</li>
        <li>Verbesserte Integration von Sicherheitsmaßnahmen wie IPSec</li>
        <li>Verschlankung des Protokoll-Headers</li>
      </ul>

      <li class="text-weight-bolder">Aufbau des IPv6-Headers:</li>
      <ul>
        <li>
          Der IPv6 Header ist vom Datenumfang zwar größer als der IPv4 Header,
          dies ist jedoch der Größe der Adressen geschuldet. Insgesamt ist der
          IPv6-Header schlanker aufgebaut.
        </li>

        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/ipv6/ipv6.jpg'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/ipv6/ipv6.jpg';
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
      https://www.tutorialspoint.com/ipv6/images/IPv6_header.jpg
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
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
