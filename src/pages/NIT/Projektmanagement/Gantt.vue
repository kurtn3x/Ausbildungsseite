<template>
  <div class="text-body1">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
        Das Gantt-Diagramm
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Allgemein
      </div>
      <ul>
        <li>
          weit verbreitete Methode um im Projektmanagement Aktivitäten
          zeitbezogen aufzuzeigen
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
        <li>Beispiel:</li>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/projektmanagement/Gantt_diagramm.png'"
          style="max-width: 1000px"
          @click="
            show_img = true;
            popupsrc = '/projektmanagement/Gantt_diagramm.png';
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
    </div>
  </div>
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
