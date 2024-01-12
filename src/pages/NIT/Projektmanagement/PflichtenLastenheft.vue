<template>
  <q-page>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Das Pflichtenheft & Lastenheft
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-underline text-weight-bolder text-third"
    >
      Das Lastenheft
    </div>
    <ul>
      <li>beschreibt die Anforderungen des Auftraggebers</li>
      <li class="text-weight-bolder">Inhalte allgemein:</li>
      <ul>
        <li>Spezifikation des zu erstellenden Produktes</li>
        <li>Anforderungen an das Produkt bei seiner Verwendung</li>
        <li>Rahmenbedingungen für das Produkt und die Leistungserbringung</li>
        <li>Vertragliche Konditionen</li>
        <li>Anforderungen an den Auftragnehmer</li>
        <li>Anforderungen an das Projektmanagement des Auftragnehmers</li>
      </ul>
    </ul>
    <ul>
      <li class="text-weight-bolder">
        Konkrete Inhalte, Beispiele (gibt mehrere Normen und Vorgehen):
      </li>
      <li>nach VDI 3694</li>
      <ul>
        <li>Einführung in das Projekt</li>
        <ul>
          <li>
            Veranlassung, Zielsetzung, Projektumfeld, wesentliche Aufgaben,
            Eckdaten
          </li>
        </ul>
        <li>Ausgangssituation Ist-Zustand</li>
        <ul>
          <li>
            Prozessbeschreibung, bestehendes System, Organisation, Ist-Zustand
            von Daten
          </li>
        </ul>
        <li>Aufgabenstellung - Soll-Zustand siehe auch SMART-Kriterien</li>
        <ul>
          <li>
            Anforderungsbeschreibung nach Teilaufgaben, Ablaufbeschreibungen
          </li>
        </ul>
        <li>Schnittstellen (Mensch-Maschine, Rechner-Rechner)</li>
        <li>Anforderungen an die Systemtechnik</li>
        <ul>
          <li>Datenverarbeitung, Datenspeicherung, Soft- und Hardware</li>
        </ul>
        <li>
          Anforderungen für Systementwicklung,-inbetriebnahme und -einsatz
        </li>
        <ul>
          <li>
            Dokumentation, Geräteaufstellung - und montage, Inbetriebname,
            Probebetrieb, Schulungen, Instandhaltung, ...
          </li>
        </ul>
        <li>Anforderungen an die Qualität</li>
        <ul>
          <li>Software-Qualität, Hardware-Qualität</li>
        </ul>
        <li>Anforderungen an die Projektabwicklung</li>
        <ul>
          <li>
            Projektorganisation, Projektdurchführung, Konfigurationsmanagement
          </li>
        </ul>
        <li>Gesetze, Normen, Richtlinien</li>
      </ul>
      <li>nach IEEE 29148-2018</li>
      <ul>
        <li>Einleitung</li>
        <ul>
          <li>Zweck</li>
          <li>Umfang</li>
          <li>Erläuterungen zu Begriffen / Abkürzungen</li>
          <li>Verweise auf sonstige Ressourcen</li>
          <li>Übersicht</li>
        </ul>
        <li>Allgemeine Beschreibung des Produkts</li>
        <ul>
          <li>Produktperspektive</li>
          <li>Produktfunktionen</li>
          <li>Benutzermerkmale</li>
          <li>Einschränkungen für den Entwickler</li>
          <li>Annahmen und Abhängigkeiten</li>
          <li>
            Aufteilunge der Anforderungen (nicht Realisierbares später angehen)
          </li>
        </ul>
        <li>Spezifische Anforderungen</li>
        <ul>
          <li>funktionale Anforderungen</li>
          <li>nicht-funktionale Anforderungen</li>
          <li>externe Schnittstellen</li>
          <li>Design Constraints</li>
          <li>Anforderungen an Performance</li>
          <li>Qualitätsanforderungen</li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 text-underline q-mt-lg q-ml-md text-weight-bolder text-third"
    >
      Das Pflichtenheft
    </div>
    <ul>
      <li>
        beschreibt die Vorgehensweise des Auftragnehmers, wie er gedenkt die
        Anforderungen des Auftraggebers (Lastenheft) umzusetzen
      </li>
      <li>
        wird vom Auftragnehmer nach Erhalt des Lastenheftes erstellt und setzt
        zu erbringende Ergebnisse (Lasten) in erforderliche Tätigkeiten
        (Pflichten) um
      </li>
      <li>
        beinhaltet die vom Auftragnehmer erarbeiteten Realisierungsvorgaben
      </li>
      <li>
        präzise, vollständige und nachvollziehbare Inhalte mit technischen
        Festlegungen
      </li>
      <li>
        Kann in den verschiedensten Formen ausfallen, ein einfachstes
        Pflichtenheft enthält einen Projektstrukturplan, die Bennenung des
        Liefertermins und des Preises
      </li>
      <li>weitere Inhalte:</li>
      <ul>
        <li>Ressourcenpläne</li>
        <li>Projektstrukturplan</li>
        <li>Systemtechnische Lösungen (Strukturplan, Datenflüsse, Speicher)</li>
        <li>
          Systemtechnik (Software, Datenbanksystem, technische Angaben für das
          Gesamtsystem)
        </li>
        <li>konkrete Fälle ein- oder ausschließen</li>
        <li>weitere Unterpunkte aus dem Lastenheft möglich</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PflichtenLastenheftPage',
  setup() {
    const q = useQuasar();
    return { q, src: 'https://media.kurtn3x.xyz/assets' };
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
