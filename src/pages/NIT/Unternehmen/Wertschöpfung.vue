<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Wertschöpfungsprozesse
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Grundlagen
    </div>
    <ul>
      <li class="text-weight-bold">Wertschöpfung</li>
      <ul>
        <li>
          =Unterschied zwischen der Gesamtleistung und den verbrauchten
          Vorleistungen während der Leistungserstellung - vereinfach gesagt
          Differenz aus Out- und Input
        </li>
        <li>Wertschöpfung = Umsatzerlöse - Vorleistungen - Abschreibungen</li>
      </ul>
      <li class="text-weight-bold">Wertschöpfungsketten oder auch Wertkette</li>
      <ul>
        <li>Managementkonzept zur Erhöhung der Wettbewerbsfähigkeit</li>
        <li>
          Stufen der Produktion als eine geordnete Reihung von Tätigkeiten
        </li>
      </ul>
      <li class="text-weight-bold">Positive Wertschöpfungsfaktoren</li>
      <ul>
        <li>Be- und Verarbeitung</li>
        <li>Lagerung</li>
        <li>Installation und Beratung</li>
        <li>bessere Kundenorientierung</li>
        <li>mehr Service</li>
        <li>besseres Image</li>
      </ul>
      <li class="text-weight-bold">Negative Wertschöpfungsfaktoren</li>
      <ul>
        <li>unzeitgemäßes Produkt- oder Leistungsangebot</li>
        <li>schlechte Qualität - Reklamationsbearbeitungen</li>
        <li>Preisminderung ohne Ausgleich durch höhere Menge</li>
        <li>schlechtes Image</li>
      </ul>
      <li class="text-weight-bold">Wertschöpfungsnutznießer</li>
      <ul>
        <li>Mitarbeiter (druch Löhne)</li>
        <li>Fremdkapitalgeber (Zinsen für Darlehen)</li>
        <li>Staat (Steuern)</li>
        <li>Eigenkapitalgeber</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Prozessarten im Unternehmen
    </div>
    <ul>
      <li class="text-weight-bold">Geschäftsprozesse</li>
      <ul>
        <li>zeitlich und sachlogische Abfolge von Unternehmensaktivitäten</li>
        <li>
          kann aus Prozesskette eines Aufgabenbereiches, aber auch
          Unterprozessen bestehen
        </li>
      </ul>
      <li class="text-weight-bold">Kernprozesse (Wertschöpfungsprozesse)</li>
      <ul>
        <li>wertschöpfungsintensive meist kundennahe Geschäftsprozesse</li>
        <li>
          Unternehmen weist Kernkompetenzen nach (z.B. Serviceleistung im
          IT-Bereich)
        </li>
      </ul>
      <li class="text-weight-bold">Supportprozesse</li>
      <ul>
        <li>nicht wertschöpfende Geschäftsprozesse</li>
        <li>Notwendig, um Kernprozesse umzusetzen</li>
      </ul>
      <li class="text-weight-bold">Workflow</li>
      <ul>
        <li>Arbeitsabläufe bzw. Teilprozesse, die rechnergestützt ablaufen</li>
        <li>gesteuert durch Workflowmanagement</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'WertschöpfungPage',
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
