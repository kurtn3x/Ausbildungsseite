<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Hardware und Umrechnungen
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Andere Berechnungen (Pixel, DPI, ...)
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder">DPI</li>
      <ul>
        <li>= Dots per Inch -> 1 Inch = 2,54cm</li>
        <li>
          z.B. gegebene Fläche 50,8cm x 63,5 cm mit einer Auflösung von
          500x500DPI
        </li>
        <ul>
          <li>50,8cm= 20Inch, 63,5cm=25Inch</li>
          <li>20*500=10000 Dots(Pixel), 25*500=12500 Dots(Pixel)</li>
          <li>
            Das resultierende Bild ergibt eine Auflösung von 10000*12000 Pixel
          </li>
          <li>Das sind insgesamt 120.000.000 Pixel.</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">
        Berechnen der Speichergröße mit einer gegebenen Farbtiefe
      </li>
      <ul>
        <li>
          Die Farbtiefe beschreibt die Größe an Bit oder Byte, die ein einzelner
          Pixel einnimmt
        </li>
        <li>z.B. Farbtiefe von 16Bit</li>
        <ul>
          <li>
            ein Pixel nimmt 16Bit ein (auch direkte Umrechnung in Byte möglich)
          </li>
          <li>
            -> vorheriges Beispiel: 120.000.000Pixel nehmen 120.000.000*16Bit an
            Speicher ein
          </li>
          <li>
            Das sind 1.920.000.000Bit = 240.000.000Byte = 234.375KiB =
            228,88MiB.
          </li>
        </ul>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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
