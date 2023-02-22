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
      <div
        class="text-center text-h4 text-weight-bolder q-mt-md text-secondary"
      >
        Projektmanagement
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Netzplan
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Vorgabe
      </div>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/projektmanagement/Vorgabe.png'"
        style="max-width: 1000px"
        @click="
          show_img = true;
          popupsrc = '/projektmanagement/Vorgabe.png';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Lösung
      </div>
      <ul>
        <li>FAZ = frühester Anfangszeitpunk</li>
        <li>FEZ = frühester Endzeitpunkt</li>
        <li>
          FP = Freier Puffer (=FAZ des Nachfolgers-FEZ des aktuellen Vorgangs)
        </li>
        <li>SAZ = Spätester Anfangszeitpunk</li>
        <li>SEZ = spätester Endzeitpunkt</li>
        <li>GP = Gesamtpuffer (=SAZ-FAZ oder SEZ-FEZ)</li>
      </ul>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/projektmanagement/Lsg.png'"
        style="max-width: 1000px"
        @click="
          show_img = true;
          popupsrc = '/projektmanagement/Lsg.png';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>
    </div>
  </div>
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
