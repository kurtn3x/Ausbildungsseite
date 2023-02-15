<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-center text-h4 text-weight-bolder">
      Betriebe und Unternehmen
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">
      Unternehmensrechtsformen
    </div>

    <div class="text-h6 q-mt-md q-ml-md text-weight-bolder">
      Gesetzliche Grundlagen
    </div>
    <ul>
      <li class="text-weight-bold">Handelsgesetzbuch (HGB)</li>
      <ul>
        <li>Handelsrecht der BRD</li>
        <li>Regelungen zu Kaufmannseigenschaften und Rechtsformen von UN</li>
      </ul>
      <li class="text-weight-bold">Eintragung im Handelsregister (HR)</li>
      <ul>
        <li>amtliches Verzeichnis der Kaufleute eines Amtgerichtsbezirks</li>
        <li>durch Eintragungen erlangt eine Firma Kaufmannseigenschaften</li>
        <li>Schutz von UN-Partnern durch die Bekanntmachung</li>
        <li>Recht auf Einsichtnahme</li>
        <li>begrenzte Informationen zu Geschäftsdaten</li>
      </ul>
      <li>z.T. Bürgerliches Gesetzbuch (BGB)</li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      helloworld: 1,
    };
  },
});
</script>
