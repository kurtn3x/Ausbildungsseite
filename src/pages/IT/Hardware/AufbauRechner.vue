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
        Hardware und Umrechnungen
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Aufbau von Rechnern
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Von-Neumann Architektur
      </div>

      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/rechnungen/aufbau.gif'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/rechnungen/aufbau.gif';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>

      <q-separator class="q-mt-md" />
      <div class="text-subtitle2 text-grey font-size-small">
        Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
        https://www.elektronik-kompendium.de/sites/com/bilder/13092611.gif<br />
        Ich bin nicht der Eigentümer der oben genannten Bilder.
      </div>
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
