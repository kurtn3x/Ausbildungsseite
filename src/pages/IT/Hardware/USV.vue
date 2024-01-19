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
      USV
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      USV-Typen
    </div>
    <ul>
      <li class="text-weight-bolder">Offline-USV</li>
      <ul>
        <li>auch VFD (Voltage and Frequency Dependent) genannt</li>
        <li>Verbraucher im Normalbetrieb direkt vom Netz versorgt</li>
        <li>
          Notstromkreis nur bei Stromaufsall oder Spannungsschwankungen
          aktiviert
        </li>
        <li>
          Akku bleibt weiterhin an Stromnetz angeschlossen, um volle
          Ladeleistung zu sichern
        </li>
      </ul>
      <li class="text-weight-bolder">Line-Interaktive-USV</li>
      <ul>
        <li>auch VI-Systeme (Voltage Independent) genannt</li>
        <li>Verbraucher im Normalbetrieb direkt vom Netz versorgt</li>
        <li>
          Anlage schaltet bei Stromausfall oder Spannungsschwankungen auf
          Batterieversorgung um
        </li>
        <li>
          verfügen über automatische Spannungsanpassung (AVR), gleicht Über- und
          Unterspannungen aus
        </li>
      </ul>
      <li class="text-weight-bolder">Online-USV</li>
      <ul>
        <li>auch VFI-Systeme (Voltage and Frequency Independent) genannt</li>
        <li>Verbraucher hat keine direkte Verbindung zum Stromnetz</li>
        <li>
          konstante Ausgangsspannung durch Gleichrichter (wandelt
          Eingangsspannung zu Gleichstrom um und speist Energie in Akkus)
        </li>
        <li>
          Wechselrichter bezieht Strom bei Normalbetrieb über Gleichrichter und
          bei Stromausfall aus Akku
        </li>
        <li>Ständige Umwandlung von Gleich- in Wechselstrom</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'USVPage',
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
