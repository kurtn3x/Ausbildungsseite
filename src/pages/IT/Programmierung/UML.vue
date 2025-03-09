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
      UML (Unified Modeling Language) - Diagramme
    </h1>
    <q-separator class="q-mt-md" />

    <ul>
      <li>
        <a
          href="https://media.kurtn3x.xyz/assets/Programmierung/UML-Notations%C3%BCbersicht-2.5.pdf"
          target="_blank"
          class="text-light-blue"
          >Übersicht</a
        >
      </li>
      <li>
        grafische Modellierung zur Spezifikation, Konstruktion, Dokumentation
        und Visualisierung von Software-Teilen und anderen Systemen
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      UML-Anwendungsfalldiagramm / use-case-Diagramm
    </div>
    <ul>
      <li>
        stellt Anwendungsfälle und Akteure mit ihren jeweiligen Abhängigkeiten
        und Beziehungen dar
      </li>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/Programmierung/uml-use-case.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Programmierung/uml-use-case.png';
        "
      >
      </q-img>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      UML-Klassendiagramme
    </div>
    <ul>
      <li>
        beschreiben die statische Struktur von Objekten und ihre Beziehung
        untereinander
      </li>
      <li class="text-weight-bolder">Komposition - Existenzabhängigkeit</li>
      <ul>
        <li>Die Teile sind vom Ganzen existenziell abhängig</li>
        <li>Beispiel: Beziehung Gebäude-Raum</li>
        <ul>
          <li>Ein Raum kann nicht ohne Gebäude existieren</li>
          <li>Ein Gebäude besteht aus mindestens einem Raum</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Aggregation - Existenzunabhängigkeit</li>
      <ul>
        <li>Die Teile sind nicht vom Ganzen existenziell abhängig.</li>
        <li>Beispiel: Beziehung Student-Vorlesung</li>
        <ul>
          <li>Ein Stunden kann ohne Vorlesung existieren</li>
          <li>Eine Vorlesung besteht aus mindestens 3 Studenten</li>
        </ul>
      </ul>

      <li class="text-weight-bolder">Bestandteile:</li>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/Programmierung/uml.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Programmierung/uml.png';
        "
      >
      </q-img>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      UML-Sequenzdiagramme
    </div>
    <ul>
      <li>
        stellen die einzelnen Objekte und ihre Interaktionen zeitlich bezogen
        dar
      </li>
      <li class="text-weight-bolder">Beispiel:</li>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/Programmierung/uml-sequenz.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Programmierung/uml-sequenz.png';
        "
      >
      </q-img>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      UML-Aktivitätsdiagramme
    </div>
    <ul>
      <li>
        beschreiben Objekte eines Programms mittels der Aktivitäten, die sie
        während des Programmablaufes vollführen
      </li>
      <li class="text-weight-bolder">Beispiel:</li>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/Programmierung/uml-aktivitat.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Programmierung/uml-aktivitat.png';
        "
      >
      </q-img>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:UmlSequenzdiagramm-2.svg<br />
      https://commons.wikimedia.org/wiki/File:Uml-Activity-Beispiel2.svg <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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
