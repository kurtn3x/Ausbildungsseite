<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Die Schutzziele der Informationssicherheit
    </div>
    <q-separator class="q-mt-md" />

    <ul>
      <li>
        <a class="text-h6 text-weight-bold text-third">Vertraulichkeit</a>
      </li>
      <ul>
        <li>Nur berechtigte Personen dürfen Daten lesen und ändern</li>
        <li>
          Genau festlegen, wer und in welcher Art und Weise jemand Zugriff auf
          Daten hat
        </li>
      </ul>
      <li>
        <a class="text-h6 text-weight-bold text-third">Integrität</a>
      </li>
      <ul>
        <li>Daten dürfen nicht unerkannt oder unbemerkt geändert werden</li>
        <li>Nachvollziehbarkeit der Datenänderungen</li>
      </ul>
      <li>
        <a class="text-h6 text-weight-bold text-third">Verfügbarkeit</a>
      </li>
      <ul>
        <li>Beschreibt die Zeit, in der das System funktioniert</li>
        <li>Ist möglichst hoch zu halten</li>
      </ul>
      <li>
        <a class="text-h6 text-weight-bold text-third">Datenschutz</a>
      </li>
      <ul>
        <li>
          Schutz eines Bürgers vor misbräuchlicher Datenverarbeitung, das Recht
          auf informationelle Selbstbestimmung und der Schutz der Privatsphäre
        </li>
      </ul>
      <li>
        <a class="text-h6 text-weight-bold text-third">Datensicherheit</a>
      </li>
      <ul>
        <li>Eng mit dem Datenschutz verknüpft</li>
        <li>
          Das Technische Ziel, Daten jeder Art in ausreichendem Maße gegen
          Manipulation, Verlust, unberechtigte Kenntnissname Dritter oder
          anderen Bedrohungen zu sichern
        </li>
      </ul>
    </ul>
  </div>
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
