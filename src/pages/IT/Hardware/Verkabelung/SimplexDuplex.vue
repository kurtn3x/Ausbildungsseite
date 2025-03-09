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
      Simplex & Duplex
    </h1>
    <q-separator class="q-mt-md" />

    <ul>
      <li class="text-weight-bold text-h7 text-secondary">Simplex</li>
      <ul>
        <li>
          Simplex beschreibt, dass bei der Kommunikation zwischen zwei Geräten
          die Übertragung grundsätzlich auf einem Kanal nur in eine Richtung
          möglich ist
        </li>
        <li>
          <a class="text-weight-bold">Dual-Simplex</a> beschreibt das Nutzen von
          2 zwei Simplex-Verbindungen, womit auch eine Datenübertragung in beide
          Richtungen möglich ist (ein Kanal hin, ein Kanal zurück). Jedoch
          findet hierbei die Kommunikation über 2 Kanäle statt. (Unterschied zu
          Voll-Duplex: Übertragung in beide Richtungen auf nur einem Kanal)
        </li>
      </ul>

      <li class="text-weight-bold text-h7 text-secondary">Duplex</li>
      <ul>
        <li>
          Duplex beschreibt, dass bei der Kommunikation zwischen zwei Geräten
          die Übertragung grundsätzlich in beide Richtungen möglich ist
        </li>
        <li>Man unterscheidet zwischen Halbduplex und Vollduplex</li>
        <li class="text-weight-bold">Halbduplex</li>
        <ul>
          <li>
            es kann in beide Richtungen, allerdings nicht zur selben Zeit
            kommuniziert werden
          </li>
          <li>Sender und Empfänger müssen sich daher abwechseln</li>
          <li>Beispiel: Walkie-Talkie</li>
        </ul>
        <li class="text-weight-bold">Vollduplex</li>
        <ul>
          <li>
            Daten können auf einem Kanal gleichzeitig in beide Richtungen
            gesendet und empfangen werden
          </li>
          <li>Beispiel: Telefon</li>
        </ul>
        <q-img
          class="bg-grey-5"
          :src="src + '/Netzwerke/SimplexDuplex.webp'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/SimplexDuplex.webp';
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
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://heinen-elektronik.de/wp-content/uploads/2023/02/Simplex_duplex.png
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SimplexDuplexPage',
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
