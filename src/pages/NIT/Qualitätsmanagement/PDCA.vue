<template>
  <q-page>
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Der PDCA-Zyklus (KVP)
    </div>
    <q-separator class="q-mt-md" />

    <ul>
      <li>
        oft auch als KVP (kontinuierlicher Verbesserungsprozess) bezeichnet
      </li>

      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/datenschutz/PDCA.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/datenschutz/PDCA.png';
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
    <ul>
      <li>
        <a class="text-weight-bolder">PLAN: </a>Planung von Sicherheitsmaßnahmen
      </li>
      <li><a class="text-weight-bolder">DO: </a>Umsetzung der Maßnahmen</li>
      <li>
        <a class="text-weight-bolder">CHECK: </a>Erfolgskontrolle, Überwachung
        der Zielerreichung
      </li>
      <li>
        <a class="text-weight-bolder">ACT: </a>Beseitigung von Defiziten,
        Verbesserung
      </li>
    </ul>

    <q-separator class="q-mt-md" />
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.smart-qm-borchert.de/images/grafiken/pdca-zyklus.png<br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PDCAZyklusPage',
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
