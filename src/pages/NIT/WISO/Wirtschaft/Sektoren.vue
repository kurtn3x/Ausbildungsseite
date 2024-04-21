<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Wirtschaftssektoren
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder">primärer Sektor</li>
      <ul>
        <li>Urproduktion</li>
        <li>Abbau von Rohstoffen, Anbau von Lebensmitteln, ...</li>
      </ul>
      <li class="text-weight-bolder">sekundärer Sektor</li>
      <ul>
        <li>Industriesektor</li>
        <li>Herstellen von Gütern, z.B. CPUs, Apfelsaft</li>
        <li>
          Grenze zwischen sekundär und tertiär können verschwimmen, z.B.
          Zusammenbau von Computern kann in beide Sektoren eingegliedert werden
        </li>
      </ul>
      <li class="text-weight-bolder">tertiärer Sektor</li>
      <ul>
        <li>Dienstleistungssektor</li>
        <li>
          Erstellen von Software, Verkauf, Einkauf, andere Dienstleistungen
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AllgemeinesWISOPage',
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
