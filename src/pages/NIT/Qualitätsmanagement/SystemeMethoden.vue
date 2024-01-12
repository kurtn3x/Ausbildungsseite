<template>
  <q-page>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Management
    </div>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Integrierte Managementsysteme
    </div>
    <ul>
      <li>vereinen mehrere Mangementsysteme</li>
      <li class="text-weight-bold">Managementsysteme</li>
      <ul>
        <li>Standards für Unternehmensführung</li>
        <li>helfen bei der Organisation von Unternehmensprozessen</li>
        <li>
          die bekanntesten: Qualitätsmanagement, Umweltmanagement,
          Energiemanagement, Informationssicherheit,...
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Managementsysteme-Qualitätsmanagement
    </div>
    <ul>
      <li class="text-weight-bold">Qualität</li>
      <ul>
        <li>
          Güte aller Eigentschaften eines Objektes, Systems oder Prozesses
        </li>
        <li>
          die den Handlungen und deren Ergebnissen vorgelagerten individuellen
          Werthaltungen
        </li>
      </ul>
    </ul>
    <ul>
      <li class="text-weight-bold">Qualitätsmanagement</li>
      <ul>
        <li>Ermittlung sowie Erfüllung von Kundenanforderungen</li>
      </ul>
    </ul>
    <ul>
      <li class="text-weight-bold">Qualitätsmanagementsystem</li>
      <ul>
        <li>
          Methode der Unternehmensführung mit dem Ziel eines systematischen
          Qualitätsmanagements
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Qualitätsmanagement-Methoden
    </div>
    <ul>
      <li class="text-weight-bold">Total Quality Management (TQM)</li>
      <ul>
        <li>
          Optimierung der Qualität von Produkten und Dienstleistungen eines
          Unternehmens in allen Funktionsbereichen und auf allen Ebenen durch
          Mitwirkung aller Mitarbeiter
        </li>
      </ul>
      <li class="text-weight-bold">Null-Fehler-Strategie</li>
      <ul>
        <li>
          Methode des kontinuierlichen Verbesserungsprozesses, mit der Fehler
          verringert werden sollen
        </li>
      </ul>
      <li class="text-weight-bold">Methode der "Fünf Warum"</li>
      <ul>
        <li>
          Stufenweise mit Warum-Fragen der Wurzel des Problems auf den Grund
          gehen
        </li>
      </ul>
      <li class="text-weight-bold">Qualitätszirkel</li>
      <ul>
        <li>
          Kleine Arbeitsgruppe von Mitarbeitern eines Unternehmens, welche sich
          freiwillig zusammenfinden, um Schawchstellen ihres Aufgabengebietes zu
          finden oder um Problemlösungen bzw. Verbesserungsvorschläge zu
          erarbeiten und umzusetzen
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SystemeMethodenPage',
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
