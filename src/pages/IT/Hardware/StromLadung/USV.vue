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
      USV - Unterbrechungsfreie Stromversorgung
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      USV-Typen
    </div>
    <ul>
      <li class="text-weight-bolder text-h7">Offline-USV</li>
      <ul>
        <li>auch VFD-Systeme (Voltage and Frequency Dependent) genannt</li>
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
        <li class="text-green text-weight-bold">Vorteile:</li>
        <ul>
          <li>Hoher Wirkungsgrad</li>
          <li>Lange Batterielebensdauer</li>
          <li>einfach, günstig</li>
        </ul>
        <li class="text-red text-weight-bold">Nachteile:</li>
        <ul>
          <li>Umschaltlücke von wenigen Millisekunden</li>
          <li>Verbraucher durch ungefilterte Spannung versorgt</li>
        </ul>
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
      <q-separator class="q-mt-md" />

      <li class="text-weight-bolder q-mt-md text-h7">Line-Interaktive-USV</li>
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
        <li class="text-green text-weight-bold">Vorteile:</li>
        <ul>
          <li>Hoher Wirkungsgrad</li>
          <li>Gutes Preis-Leistungsverhältnis</li>
          <li>Niedrige Betriebskosten</li>
        </ul>
        <li class="text-red text-weight-bold">Nachteile:</li>
        <ul>
          <li>Umschaltlücke von wenigen Millisekunden</li>
        </ul>
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
      <q-separator class="q-mt-md" />
      <li class="text-weight-bolder q-mt-md text-h7">Online-USV</li>
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
        <li class="text-green text-weight-bold">Vorteile:</li>
        <ul>
          <li>Konstante Ausgangsspannung und -frequenz</li>
          <li>Keine Umschaltzeit & keine Versorgungslücken</li>
          <li>Optimaler Schutz vor Netzstörungen</li>
        </ul>
        <li class="text-red text-weight-bold">Nachteile:</li>
        <ul>
          <li>Kostenintensiv</li>
        </ul>
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
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />

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
