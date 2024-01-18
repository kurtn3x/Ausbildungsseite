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
      Der PDCA-Zyklus (KVP)
    </div>
    <q-separator class="q-mt-md" />

    <ul>
      <li>
        oft auch als KVP (kontinuierlicher Verbesserungsprozess) bezeichnet
      </li>
      <li>
        dient der Weiterentwicklung von Produkten und der Fehler-Ursache-Analyse
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
        <a class="text-weight-bolder">PLAN: </a>Planen: Welches Problem muss
        gelöst werden? Welche Ressourcen brauchen/haben wir? Was ist das Ziel?
      </li>
      <li>
        <a class="text-weight-bolder">DO: </a>Umsetzung: Umsetzung von all dem,
        was geplant wurde.
      </li>
      <li>
        <a class="text-weight-bolder">CHECK: </a>Überprüfen: Erfolgskontrolle,
        Überwachung der Zielerreichung. Wurde der ursprüngliche Plan umgesetzt?
        Was ist schiefgelaufen? Was war die Ursache für die Probleme?
      </li>
      <li>
        <a class="text-weight-bolder">ACT: </a>Handeln, Beseitigung von
        Defiziten, Verbesserung. Reagieren auf die Ergebnisse.
      </li>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
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
