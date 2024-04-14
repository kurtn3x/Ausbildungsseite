<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Die Schutzziele der Informationssicherheit
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-h6 text-weight-bold text-secondary q-mt-sm">
        Vertraulichkeit
      </li>
      <ul>
        <li>Nur berechtigte Personen dürfen Daten lesen und ändern</li>
        <li>
          Genau festlegen, wer und in welcher Art und Weise jemand Zugriff auf
          Daten hat
        </li>
      </ul>
      <li class="text-h6 text-weight-bold text-secondary q-mt-sm">
        Integrität
      </li>
      <ul>
        <li>Daten dürfen nicht unerkannt oder unbemerkt geändert werden</li>
        <li>Nachvollziehbarkeit der Datenänderungen</li>
      </ul>
      <li class="text-h6 text-weight-bold text-secondary q-mt-sm">
        Verfügbarkeit
      </li>
      <ul>
        <li>Beschreibt die Zeit, in der das System funktioniert</li>
        <li>Ist möglichst hoch zu halten</li>
      </ul>
      <li class="text-h6 text-weight-bold text-secondary q-mt-sm">
        Datenschutz
      </li>
      <ul>
        <li>
          <a class="text-weight-bold">Schutz von personenbezogenen Daten</a>
          (Daten, die sich auf eine natürliche Person beziehen oder Daten mit
          direktem Personenbezug)
        </li>

        <li>
          Rechtsorientiert → Schutz des allgemeinen Persönlichkeitsrechts, der
          Privatsphäre
        </li>
      </ul>
      <li class="text-h6 text-weight-bold text-secondary q-mt-sm">
        Datensicherheit
      </li>
      <ul>
        <li>
          Das Technische Ziel, Daten jeder Art in ausreichendem Maße gegen
          Manipulation, Verlust, unberechtigte Kenntnissname Dritter oder
          anderen Bedrohungen zu sichern
        </li>
        <li>generelle Sicherheit von Daten</li>
        <li>
          gewährleistung von Vertraulichkeit, Integrität und Verfügbarkeit von
          Daten
        </li>
        <li>praktisch orientierte Sicherheitsmaßnahmen</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SchutzzielePage',
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
