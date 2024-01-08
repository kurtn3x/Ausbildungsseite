<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Das Unternehmensleitbild
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Allgemein
    </div>
    <ul>
      <li class="text-weight-bold">Das Unternehmensleitbild</li>
      <ul>
        <li>
          beschreibt das Selbstverständnis und die Grundsätze eines Unternehmens
        </li>
        <li>ist schriftlich fixiert</li>
        <li>richtet sich an Mitarbeiter, Kunden, Öffentlichkeit</li>
        <li>
          wird von der Geschäftsleitung möglichst in Zusammenarbeit mit
          Mitarbeitern erstellt
        </li>
        <li>muss angepasst/aktualisiert werden</li>
      </ul>
    </ul>
    <ul>
      <li class="text-weight-bold">Ziele des Unternehmensleitbildes</li>
      <ul>
        <li>
          allgemein langfristig ausgerichtete Ziele zum gewünschten Erfolg
        </li>
        <li>
          nach außen: Aufbau eines Images zur Abgrenzung von Mitbewerbern und
          Entscheidungshilfe für Kunden
        </li>
        <li>
          nach innen: identifikation der Mitarbeiter mit Werten des
          Unternehmens, um Leistungen, Prozesse danach auszurichten
        </li>
      </ul>
    </ul>
    <ul>
      <li class="text-weight-bold">Hauptaussagen</li>
      <ul>
        <li>Vision: Wohin soll sich das Unternehmen entwickeln?</li>
        <li>Mission: Was Macht das Unternehmen? (Zweck, Aufgaben)</li>
        <li>
          Werte und Verhaltensweisen (Kundenorientierung, Wirtschaftlichkeit,
          Nachhaltigkeit)
        </li>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'LeitbildPage',
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
