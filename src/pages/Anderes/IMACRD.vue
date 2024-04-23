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
      IMAC/R/D - IT-Lifecycle-Management
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      IMAC/R/D
    </div>
    <ul>
      <li>Standard für IT-Lifecycle-Management</li>
      <li>Täglich wiederholende Prozesskette</li>
      <li>in 4 Hauptphasen (IMAC) und 2 Ergänzungsphasen (RD) untergliedert</li>
      <li>Dokumentation der gesamten Arbeitsschritte wichtig</li>
      <li class="text-weight-bolder">Phasen des IMAC/R/D-Zykluses:</li>
      <ul>
        <li class="text-weight-bolder">Phase 1: Install</li>
        <ul>
          <li>Beschaffung der benötigten Komponenten</li>
          <li>Systemaufbau am Arbeitsplatz des Anwenders</li>
          <li>
            Erstinstallation und Bereitstellung von Hardware- und
            Softwarekomponenten
          </li>
          <li>Inbetriebnahme</li>
        </ul>
        <li class="text-weight-bolder">Phase 2: Move</li>
        <ul>
          <li>Umzug des Arbeitsplatzsystems an einen anderen Standort</li>
          <li>Wechsel des Systems oder des Endanwenders</li>
        </ul>
        <li class="text-weight-bolder">Phase 3: Add</li>
        <ul>
          <li>Hinzufügen neuer Hardware</li>
          <li>Nachinstallation von Software</li>
          <li>Anpassungen im Vertrags- und Lizensmanagement</li>
        </ul>
        <li class="text-weight-bolder">Phase 4: Change</li>
        <ul>
          <li>Änderung der bestehenden Hardwarekonfiguration</li>
          <li>Aktualisierung des Betriebssystems</li>
          <li>Anpassung von Einstellungen an der Software</li>
        </ul>
        <li class="text-weight-bolder">Phase 5: Remove</li>
        <ul>
          <li>Kontrolle der zu deinstallierenden Geräte</li>
          <li>Deinstallation</li>
          <li>sichere Löschung der Datenträger</li>
          <li>Dokumentation der Deinstallation und Löschung</li>
        </ul>
        <li class="text-weight-bolder">Phase 6: Dispose</li>
        <ul>
          <li>Abtransport</li>
          <li>
            umweltgerechte Entsorgung, Recycling oder Wiederaufarbeitung der
            Hardware
          </li>
        </ul>
      </ul>

      <q-img
        class="fit bg-grey-5"
        :src="src + '/serviceanfragen/imacrd.webp'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/serviceanfragen/imacrd.webp';
        "
      >
      </q-img>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.i-doit.com/hs-fs/hubfs/imac-r-d-1600x900-1.jpg?width=825&height=464&name=imac-r-d-1600x900-1.jpg
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IMACRDPage',
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
