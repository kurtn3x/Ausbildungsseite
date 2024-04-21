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
      Leitungen (DSL, Standleitung)
    </h1>
    <q-separator class="q-mt-md" />
    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      DSL - Digital Subscriber Line
    </div>
    <ul>
      <li class="text-weight-bold">SDSL - Symmetric Digital Subscriber Line</li>
      <ul>
        <li>Kupferleitungen</li>
        <li>Download- und Uploadgeschwindigkeit gleich</li>
      </ul>
      <li class="text-weight-bold">
        ADSL - Asymmetric Digital Subscriber Line
      </li>
      <ul>
        <li>Kupferleitungen</li>
        <li>Download- und Uploadgeschwindigkeit unterscheiden sich</li>
        <li>Hohe Downloadgeschwindigkeit, Niedrige Uploadgeschwindigkeit</li>
        <li>Bei Kupferverkabelung Standard für Verbraucher</li>
      </ul>
      <li class="text-weight-bold">
        VDSL - Very High Speed Digital Subscriber Line
      </li>
      <ul>
        <li>Hybrid-Netz aus Glasfaser und Kupferkabel</li>
        <li>höhere Datenübertragungsraten</li>
        <li>
          für Kupferverbindungen wird Vectoring/Super-Vectoring eingesetzt um
          die Datenübertraungsraten durch kompensieren von Störungen zu erhöhen
        </li>
        <li>
          So nah wie möglich bis zum Verbraucher Glasfaser, danach für die
          "letze Meile" Kupferkabel
        </li>
        <li>
          Beim "Glasfaserausbau" geht es letzendlich darum, die
          Glasfaserverbindung des VDSL so weit wie möglich bis zum Verbraucher
          zu legen:
        </li>
        <ul>
          <li>Fibre-to-the-Curb (Glasfaser bis zum Bordstein)</li>
          <ul>
            <li>
              Glasfaser endet an der Straße, in dem das Gebäude des Kunden steht
            </li>
          </ul>
          <li>Fibre-to-the-Building (Glasfaser bis zum Gebäude)</li>
          <ul>
            <li>
              Glasfaser endet innerhalb des Gebäudes, in dem der Kunde seinen
              Anschluss hat
            </li>
            <li>"""echtes Glasfaser"""</li>
          </ul>
          <li>Fibre-to-the-Home (Glasfaser bis in die Wohnung)</li>
          <ul>
            <li>
              Glasfaser endet in der Wohnung des Kunden am Teilnehmeranschluss
            </li>
            <li>"""echtes Glasfaser"""</li>
          </ul>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      Standleitung
    </div>
    <ul>
      <li>
        auch als Mitleitung, Leased Line, Dedizierte Leitung oder LAN-Link
        bezeichnet
      </li>
      <li>permanente Datenverbindung zwischen zwei Kommunikationspartnern</li>
      <li>steht dauerhaft zur Verfügung und ist immer offen</li>
      <li>in der Regel gemietet</li>
      <li>
        symmetrische Datenübertragung (gleiche Upload- und
        Download-Geschwindigkeit)
      </li>
      <li class="text-green">Vorteile</li>
      <ul>
        <li>höhere Datenübertragungsraten</li>
        <li>garantierte Bandbreite</li>
        <li>hohe garantierte Verfügbarkeit</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'LeitungenPage',
  setup() {
    const q = useQuasar();
    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
});
</script>
