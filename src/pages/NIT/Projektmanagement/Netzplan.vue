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
      Der Netzplan
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
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
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'NetzplanPage',
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
