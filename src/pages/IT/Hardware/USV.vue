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
      USV - Unterbrechungsfreie Stromversorgung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
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
          Akku bleibt permanent an Stromnetz angeschlossen, um volle
          Ladeleistung zu sichern
        </li>
        <li>
          Umschaltung erfolgt erst nach wenigen Millisekunden (schlecht für
          empfindliche Verbraucher)
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Hardware/offlineusv.jpg'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Hardware/offlineusv.jpg';
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
      <li class="text-weight-bolder q-mt-md">Line-Interaktive-USV</li>
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
        <li>
          Keine Korrektur der Eingangsspannung und Umschaltung auch erst nach
          wenigen Millisekunden
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Hardware/line-interaktiveusv.jpg'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Hardware/line-interaktiveusv.jpg';
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
      <li class="text-weight-bolder q-mt-md">Online-USV</li>
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
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Hardware/onlineusv.jpg'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Hardware/onlineusv.jpg';
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
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />

      https://www.akkuteam.de/thumbnail/e8/8f/18/1622123513/Offline-02_800x800.jpg<br />
      https://www.akkuteam.de/thumbnail/3d/93/cb/1622123672/Line-Interactive-02_800x800.jpg
      <br />
      https://www.akkuteam.de/thumbnail/6d/af/f6/1622123796/Online-02_800x800.jpg
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
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
