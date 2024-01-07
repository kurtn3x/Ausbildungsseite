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
    <div class="" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
        Switch & Hub
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Hubs
      </div>
      <ul>
        <li>verbinden Geräte sternförmig</li>
        <li>keine Analyse der Mac-Adresse</li>
        <li>nur Verstärkung und Weiterleitung des Signals auf allen Ports</li>
        <li>kann Endgeräte nicht unterscheiden und sendet alles an Jeden</li>
        <li>
          Jede Kommunikation zwischen zwei Endgeräten besetzt alle Leitungen
        </li>
      </ul>
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Switche
      </div>
      <ul>
        <li>
          Können Mac-Adressen auswerten und lernt, welche sich an welchen Port
          befinden
        </li>
        <li>
          Diese Informationen werden in einer internen Tabelle gespeichert
        </li>
        <li>
          Kommunikation zwischen zwei Rechnern belegt nur die betroffenen
          Leitungen
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SwitchHubPage',
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
