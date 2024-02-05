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
      Ablaufdiagramme
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Struktogramme (auch Nassi-Shneiderman-Diagramm)
    </div>
    <ul>
      <li>Beispiel:</li>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/Programmierung/struktogramm.png'"
        style="max-width: 300px"
        @click="
          show_img = true;
          popupsrc = '/Programmierung/struktogramm.png';
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

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Programmablaufplan (auch Flussdiagramm)
    </div>
    <ul>
      <li class="text-green">
        Kreis / Rechteck mit gerundeten Ecken: Entweder mit Inhalt Start oder
        Stop, gibt an wo der Programmablaufplan beginnt oder endet
      </li>
      <li>Pfeil: Verbindung zum nächstfolgenden Element</li>
      <li class="text-grey">Rechteck: Operation</li>
      <li class="text-orange">
        Rechteck mit doppelten, vertikalen Linien: Unterprogramm
      </li>
      <ul>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/Programmierung/pap_unterprogramm.png'"
          style="max-width: 150px"
          @click="
            show_img = true;
            popupsrc = '/Programmierung/pap_unterprogramm.png';
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
      <li class="text-purple q-mt-sm">Raute: Verzweigung/Kondition</li>
      <li class="text-brown">Parallelogramm: Ein- oder Ausgabe</li>
      <li>Beispiel:</li>
      <ul>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/Programmierung/programmablaufplan.png'"
          style="max-width: 300px"
          @click="
            show_img = true;
            popupsrc = '/Programmierung/programmablaufplan.png';
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Pseudocode
    </div>
    <ul>
      <li>dient nur zur Veranschaulichung eines Programms oder Algorithmus</li>
      <li>ähnelt höheren Programmiersprachen wie Python</li>
      <li>keine direkten Vorgaben, egal ob deutsch oder englisch</li>
      <li>Beispiel:</li>
      <ul style="font-family: monospace, monospace">
        i = 0
        <br />
        while i &lt;= 10:
        <br />
        &emsp;i += 1
        <br />
        &emsp;if i == 6:
        <br />
        &emsp;&emsp;output "We reached number 6" &emsp;
        <br />&emsp;else:
        <br />&emsp;&emsp;output "We are not at number 6"
      </ul>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:NassiShneiderman.png <br />
      https://commons.wikimedia.org/wiki/File:Rechteck_mit_doppelten,_vertikalen_Linien_(Programmablaufplan).png
      <br />
      https://commons.wikimedia.org/wiki/File:Flowchart_de.svg
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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
