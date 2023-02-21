<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Hardware und Umrechnungen
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Speichergrößenrechnungen
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        Speichergrößen können in vielen verschiedenen Arten und Formen angegeben
        werden, zu beachten gilt
      </li>
      <ul>
        <li>
          generell ist eine Speichergröße immer mit der Byte-Umrechnung zu
          verstehen, es sei denn die Endung endet mit ...bit
        </li>
        <li>Beispiel:</li>
        <ul>
          <li>KB - Kilobyte</li>
          <li>Kbit - Kilobit</li>
          <li>MB/s - Megabyte / s</li>
          <li>MBit/s - Megabit / s</li>
        </ul>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
    };
  },
});
</script>
