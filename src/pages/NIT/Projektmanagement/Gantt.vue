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
      Das Gantt-Diagramm
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Allgemein
    </div>
    <ul>
      <li>
        weit verbreitete Methode um im Projektmanagement Aktivitäten zeitbezogen
        aufzuzeigen
      </li>
      <li>
        stellt Aktivitäten grafisch in Form von Balken auf einer Zeitachse dar
      </li>
      <li>
        Aktivitäten werden in Tabelle eingetragen und nebendran auf einer
        Zeitachse dargestellt
      </li>
      <li>
        kritischer Pfad = Pfad, auf welchem zeitliche Verzögerung
        Projektenddatum beeinträchtigt
      </li>
      <li class="text-weight-bolder">Beispiel:</li>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/projektmanagement/Gantt_diagramm.png'"
        style="max-width: 1000px"
        @click="
          show_img = true;
          popupsrc = '/projektmanagement/Gantt_diagramm.png';
        "
      >
      </q-img>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'GanttPage',
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
