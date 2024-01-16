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
      Begriffe und Arten von Programmiersprachen
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Programmierparadigmen
    </div>
    <ul>
      <li class="text-weight-bolder">Imperative und Deklarative Sprachen</li>
      <ul>
        <li class="text-weight-bold">Imperative Sprachen</li>
        <ul>
          <li>Programme erklären, wie ein Problem gelöst werden soll</li>
          <li>Befehle und Schleifen</li>
          <li>Programm besitzt einen inneren Zustand</li>
          <li>
            Zustand des Systems wird verändert, also Variablen können zur
            Laufzeit geändert werden
          </li>
          <li>z.B. die meisten Sprachen wie Python, C, Shell, BASIC</li>
        </ul>
        <li class="text-weight-bold">Deklarative Sprachen</li>
        <ul>
          <li>Keine Befehle und kein innerer Zustand</li>
          <li>Rekursion anstatt Schleifen</li>
          <li>Änderung von Werten per Zuweisung nicht möglich</li>
          <li>z.B. Haskell, Erlang</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">
        Prozedurale, Funktionale und Logische Sprachen
      </li>
      <ul>
        <li class="text-weight-bold">Prozedurale Sprachen</li>
        <uL>
          <li>strukturierter Code mit Funktionen und Prozeduren</li>
          <li>z.B. Python, C</li>
        </uL>
        <li class="text-weight-bold">Funktionale Sprachen</li>
        <ul>
          <li>basierend auf Funktion im mathematischen Sinn</li>
          <li>beschreibt was berechnet wird und nicht wie</li>
          <li>z.B. Haskell</li>
        </ul>
        <li class="text-weight-bold">Logische Sprachen</li>
        <ul>
          <li>basierend auf Fakten, Axiomem und logischer Ableitung</li>
          <li>z.B. Prolog</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Objkektorientierte Sprachen</li>
      <ul>
        <li>sprachunabhängiges Programmiermodell</li>
        <li>
          bessere Wartbarkeit und Austauschbarkeit von Software durch Isolation
          von Teilproblem
        </li>
        <li>z.B. C++, Python, Java</li>
      </ul>
      <li class="text-weight-bolder">
        Interpretierte und Kompilierte Sprachen
      </li>
      <ul>
        <li class="text-weight-bold">Interpretierte Sprachen (Interpreter)</li>
        <ul>
          <li>Programm wird vom Interpreter gelesen und ausgeführt</li>
          <li>
            Nie in Maschinencode übersetzt, Ausnahme: Just-in-Time Compiler
          </li>
          <li>
            portabel, selbes Programm kann auf jedem Betriebssystem und jeder
            Architektur ausgeführt werden, sofern der Interpreter installiert
            ist
          </li>
          <li>z.B. Python, Java</li>
        </ul>
        <li class="text-weight-bold">Komplierte Sprachen (Compiler)</li>
        <ul>
          <li>Compiler übersetzt das Programm in maschinenlesbaren Code</li>
          <li>
            Nicht portabel, selbes kompiliertes Programm kann nicht auf
            unterschiedlichen Architekturen oder Betriebssystemen ausgeführt
            werden
          </li>
          <li>Wie ausführbare Programme entstehen:</li>
          <ul>
            <li>
              Der Präprozessor bindet weitere Quelltextdateien in den Sourcecode
              ein
            </li>
            <li>
              Der Compiler übersetzt den Quellcode in Assembly-Code und nimmt
              Optimisierungen vor. Assembly-Code ist die menschenlesbare Form
              des Maschinencodes.
            </li>
            <li>Der Assembler erzeugt eine Objektdatei mit Maschinencode</li>
            <li>
              Der Linker verbindet mehrere Objektdateien und die Zugriffe
              zwischen diesen zu einer ausführbaren Datei oder Bibliothek
            </li>
          </ul>
        </ul>
      </ul>
    </ul>
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
