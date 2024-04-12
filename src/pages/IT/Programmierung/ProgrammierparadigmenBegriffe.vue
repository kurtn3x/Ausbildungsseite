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
      Begriffe zur Programmierung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Programmierparadigmen
    </div>
    <ul>
      <li>
        Programmierparadigma = fundamentaler Programmierstil basierend auf
        Prinzipien
      </li>

      <li class="text-weight-bold text-h7">Imperative Sprachen</li>
      <ul>
        <li>
          Programme erklären, wie ein Problem gelöst werden soll
          (Schritt-für-Schritt-Anweisung)
        </li>
        <li>oft Befehle und Schleifen</li>
        <li>oft besitzt das Programm einen inneren Zustand</li>
        <li>z.B. die meisten Sprachen wie Python, C, Shell, BASIC</li>
        <li class="text-weight-bold">Strukturierte Sprachen</li>
        <ul>
          <li>
            Verzicht oder Einschränkung absoluter Sprunganweisungen (Goto)
          </li>
          <li>Einführung von Kontrollstrukturen wie if, while, for</li>
        </ul>
        <li class="text-weight-bold">Prozedurale Sprachen</li>
        <ul>
          <li>strukturierter Code mit Funktionen und Prozeduren</li>
          <li>Zerlegen des Programms in kleinere Teilaufgaben</li>
          <li>z.B. Python, C</li>
        </ul>
        <li class="text-weight-bold">Modulare Sprachen</li>
        <ul>
          <li>
            Prozeduren und Daten werden in logische Einheiten zusammengefasst
          </li>
          <li>Zerlegung der Software in größere Teilblöcke</li>
          <li>
            Teilblöcke = Module (können einzeln gewartet & getestet werden)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bold text-h7">Deklarative Sprachen</li>
      <ul>
        <li>Programme erklären, was das Endergebnis sein soll</li>
        <li>oft keine Befehle, keine Schleifen und kein innerer Zustand</li>
        <li>z.B. Haskell, Erlang, Prolog theoretisch auch SQL</li>
        <li class="text-weight-bold">Funktionale Sprachen</li>
        <ul>
          <li>basierend auf Funktion im mathematischen Sinn</li>
          <li>beschreibt was berechnet wird und nicht wie</li>
          <li>z.B. Haskell</li>
        </ul>
        <li class="text-weight-bold">Logische Sprachen</li>
        <ul>
          <li>basierend auf Fakten und logischen Aussgaen</li>
          <li>
            Interpreter versucht, die gewünschte Lösungsaussage herzuleiten
          </li>
          <li>z.B. Prolog</li>
        </ul>
      </ul>

      <li>
        Die Grenzen zwischen imperativen und deklarativen Sprachen verschwimmen
        häufig und eine eindeutige Zuordnung ist schwer möglich. Bei hohen
        Programmiersprachen wie Python finden sich beide Ansätze wieder.
      </li>
      <li>Beispiel:</li>
      <ul>
        <li>Wir wollen aus einer Liste die ungeraden Zahlen ausgeben.</li>
        <li>
          Vorgabe:
          <div
            style="font-family: monospace, monospace"
            :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
          >
            numbers = [1,2,3,4,5,6]
          </div>
        </li>
        <li class="text-weight-bolder">Imperativer Ansatz:</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
            >
              foreach num in numbers {
            </div>
            <div
              style="font-family: monospace, monospace"
              :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
            >
              &nbsp;&nbsp;if (num % 2) != 0 {
            </div>
            <div
              style="font-family: monospace, monospace"
              :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
            >
              &nbsp;&nbsp;&nbsp;&nbsp; output num
            </div>
            <div
              style="font-family: monospace, monospace"
              :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
            >
              &nbsp;&nbsp;}
            </div>
            <div
              style="font-family: monospace, monospace"
              :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
            >
              }
            </div>
          </li>
        </ul>
        <li class="text-weight-bolder">Deklarativer Ansatz:</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
            >
              output numbers.where(num % 2 != 0)
            </div>
          </li>
        </ul>
      </ul>

      <li class="text-weight-bolder text-h7">Objektorientierte Sprachen</li>
      <ul>
        <li>sprachunabhängiges Programmiermodell</li>
        <li>
          bessere Wartbarkeit und Austauschbarkeit von Software durch Isolation
          von Teilproblem
        </li>
        <li>
          Einführung von Klassen: Objekte mit Daten und darauf arbeitenden
          Routinen werden zu Einheiten zusammengefasst
        </li>
        <li>z.B. C++, Python, Java</li>
        <li class="text-weight-bold">
          Konzepte der objektorientierten Programmierung:
        </li>
        <ul>
          <li>
            <a class="text-weight-bold">Abstraktion:</a> Reduzieren oder
            Entfernen von Merkmalen, sodass nur wesentliche Eigenschaften
            erhalten bleiben
          </li>
          <li>
            <a class="text-weight-bold">Datenkapselung:</a> auf interne
            Datenstruktur kann nur über definierte Schnittstellen zugegriffen
            werden
          </li>
          <li>
            <a class="text-weight-bold">Persistenz:</a> Objektvariablen
            existieren, solange Objekte vorhanden sind
          </li>
          <li>
            <a class="text-weight-bold">Polymorphie:</a> Funktionen oder
            Methoden können in verschiedenen Objekten unterschiedlich ausgeführt
            werden
          </li>
          <li>
            <a class="text-weight-bold">Vererbung:</a> abgeleitete Klasse
            besitzt die Methoden und Attribute der Basisklasse
          </li>
        </ul>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Interpreter & Compiler
    </div>
    <ul>
      <li class="text-weight-bold text-h7">
        Interpretierte Sprachen (Interpreter)
      </li>
      <ul>
        <li>Programm wird vom Interpreter gelesen und ausgeführt</li>
        <li>
          Nie in Maschinencode übersetzt, Ausnahme: Just-in-Time Compiler
          (welcher oft als Teil von interpretierten Sprachen verwendet wird)
        </li>
        <li>
          portabel, selbes Programm kann auf jedem Betriebssystem und jeder
          Architektur ausgeführt werden, sofern der Interpreter installiert ist
        </li>
        <li>z.B. Python, Java</li>
      </ul>
      <li class="text-weight-bold text-h7">Kompilierte Sprachen (Compiler)</li>
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
            Der <a class="text-weight-bold">Präprozessor</a> bindet benötigte
            Quelltextdateien in den Sourcecode ein. (z.B. #include - Dateien in
            C einbinden)
          </li>
          <li>
            Der <a class="text-weight-bold">Compiler</a> übersetzt den Quellcode
            in Assembly-Code und nimmt Optimisierungen vor. Assembly-Code ist
            die menschenlesbare Form des Maschinencodes.
          </li>
          <li>
            Der <a class="text-weight-bold">Assembler</a> erzeugt aus dem
            Assembly-Code eine Objektdatei mit Maschinencode.
          </li>
          <li>
            Der <a class="text-weight-bold">Linker</a> verbindet mehrere
            Objektdateien und die Zugriffe zwischen diesen zu einer ausführbaren
            Datei oder Bibliothek. Der Linker sucht sich benötigte, bereits
            kompilierte Funktionen aus den Bibliotheken heraus und bindet sie in
            das kompilierte Programm ein.
          </li>
          <li>
            Falls eine Executable erstellt wurde kann das Programm nun
            ausgeführt werden. Der <a class="text-weight-bold">Loader</a> lädt
            die ausführbare Datei in den Arbeitsspeicher und reserviert
            benötigten Arbeitsspeicher für das Programm. Je nach Betriebssystem
            muss der Loader noch viel mehr machen.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Just-in-time-Compiler</li>
      <ul>
        <li>Zwischending von Compiler und Interpreter</li>

        <li>
          Programme oder Teile davon werden zur Laufzeit in Maschinencode
          übersetzt
        </li>
        <li>
          Ziel: Erhöhung der Ausführgeschwindigkeit im Gegensatz zum Interpreter
        </li>
        <li>
          Kompilierter Bytecode wird meist im Rahmen einer virtuellen Maschine
          ausgeführt um plattformunabhängig zu funktionieren
        </li>
        <li>wird oft als Teil von interpretierten Sprachen verwendet</li>
        <li>z.B. JavaScript oder Python</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useSettingsStore } from 'stores/settings';

export default defineComponent({
  name: 'ProgrammierparadigmenBegriffePage',
  setup() {
    const q = useQuasar();
    const settingsStore = useSettingsStore();

    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
      settingsStore,
    };
  },
  computed: {
    darkmode() {
      return this.settingsStore.darkmode;
    },
  },
});
</script>
