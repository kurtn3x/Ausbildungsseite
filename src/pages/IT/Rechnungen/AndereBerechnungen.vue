<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Andere Berechnungen
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder">
        Berechnung der Anzahl von Pixeln mit Angabe einer Fläche und DPI
      </li>
      <ul>
        <li>DPI = Dots per Inch → 1 Inch = 2,54cm</li>
        <li>
          z.B. gegebene Fläche 50,8cm x 63,5 cm mit einer Auflösung von
          500x500DPI
        </li>
        <q-card bordered flat style="max-width: 700px">
          <q-expansion-item
            dense-toggle
            dense
            expand-separator
            label="Lösung"
            header-class="q-pl-xs bg-secondary text-body2 text-uppercase text-weight-medium rounded-borders"
            align="left"
          >
            <ul class="q-ma-sm q-ml-md">
              <li>50,8cm= 20Inch, 63,5cm=25Inch</li>
              <li>20*500=10000 Dots(Pixel), 25*500=12500 Dots(Pixel)</li>
              <li>
                Das resultierende Bild ergibt eine Auflösung von 10000*12000
                Pixel
              </li>
              <li>Das sind insgesamt 120.000.000 Pixel.</li>
            </ul>
          </q-expansion-item>
        </q-card>
      </ul>
      <li class="text-weight-bolder">
        Berechnen der Speichergröße mit einer Anzahl von Pixeln und Farbtiefe
        der Pixel
      </li>
      <ul>
        <li>
          Die Farbtiefe beschreibt die Größe an Bit oder Byte, die ein einzelner
          Pixel einnimmt
        </li>
        <li>z.B. Farbtiefe von 16Bit mit Auflösung von 10000x125000</li>
        <q-card bordered flat style="max-width: 700px">
          <q-expansion-item
            dense-toggle
            dense
            expand-separator
            label="Lösung"
            header-class="q-pl-xs bg-secondary text-body2 text-uppercase text-weight-medium rounded-borders"
            align="left"
          >
            <ul class="q-ma-sm q-ml-md">
              <li>
                ein Pixel nimmt 16Bit ein (auch direkte Umrechnung in Byte
                möglich)
              </li>
              <li>10000x125000 = 120.000.000Pixel</li>
              <li>nehmen 120.000.000*16Bit an Speicher ein</li>
              <li>
                Das sind 1.920.000.000Bit = 240.000.000Byte = 234.375KiB =
                228,88MiB.
              </li>
            </ul>
          </q-expansion-item>
        </q-card>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AndereBerechnungenPage',
  setup() {
    const q = useQuasar();
    return { q, src: 'https://media.kurtn3x.xyz/assets' };
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
