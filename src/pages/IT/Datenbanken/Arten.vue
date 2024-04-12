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
      Arten von Datenbanken
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Relationale und nicht-relationale Datenbanken
    </div>
    <ul>
      <li class="text-weight-bolder text-h7">relationale Datenbank</li>
      <ul>
        <li>auch SQL-Datenbank</li>
        <li>
          speichern von Daten in tabellarischer Form in Spalten und Zeilen
        </li>
        <li>Spalten = Datenattribute, Zeilen = Datenwerte</li>
        <li>
          Jede Tabelle hat Primärschlüssel, um Verknüpfungen zu anderen Tabellen
          herzustellen
        </li>
        <li>
          Verknüpfung zu anderer Tabelle innerhalb einer Tabelle =
          Fremdschlüssel
        </li>
        <li>
          strenge Regeln in Bezug auf Datenvariation und Tabellenbeziehungen
        </li>
        <li>Nutzen von SQL zur Datenabfrage</li>
        <li>
          muss <a class="text-weight-bolder">ACID</a>-Eigenschaften aufweisen
        </li>
        <ul>
          <li>
            <a class="text-underline">Atomarität:</a> Transaktionen müssen
            vollständig gelingen oder vollständig fehlschlagen
          </li>
          <li>
            <a class="text-underline">Konsitenz (Consistency): </a> Validierung
            und Verhinderung der Verfälschung von Daten
          </li>
          <li>
            <a class="text-underline">Isolation:</a> konkurrierende
            Transaktionen dürfen sich nicht gegenseitig beeinflussen
          </li>
          <li>
            <a class="text-underline">Dauerhaftigkeit: </a> Systemausfall darf
            Auswirkungen einer erfolgreichen Transaktion nicht rückgängig machen
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7">nicht-relationale Datenbank</li>
      <ul>
        <li>auch NoSQL-Datenbank</li>
        <li>Vielzahl von Datenmodellen für Zugriff und Verwaltung der Daten</li>
        <li>
          ohne Schema und ohne Einschränkungen von relationalen Datenbanken
        </li>
        <li>
          speichern und ändern vieler verschiedener Daten mit unterschiedlichen
          Datentypen möglich
        </li>
        <li>NoSQL-Modelle</li>
        <ul>
          <li>
            Schlüssel-Werte-Datenbank: Sammlung von Daten als
            Schlüssel-Werte-Paare
          </li>
          <li>Dokumentdatenbank: Daten als JSON-Objekte</li>
          <li>Graphdatenbank: Speichern und Navigieren von Beziehungen</li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Begriffe zu Datenbanken
    </div>
    <ul>
      <li class="text-weight-bolder">DBS - Datenbanksystem</li>
      <ul>
        <li>
          System, mit dem sehr große Datenmengen von Computern verwaltet werden
        </li>
        <li>
          soll Datenmengen sicher speichern und Anfragen von Nutzern und
          Software schnell ermöglichen
        </li>
        <li>
          beinhaltet Werkzeuge zur Auswertung, Analyse, Bearbeitung und
          Präsentation von Daten
        </li>
        <li class="text-weight-bold">Aufgaben:</li>
        <ul>
          <li>
            Datenintegration: einheitliche Verwaltung der benötigten Daten
          </li>
          <li>Datenoperation: Suchen, Ändern und Abspeichern von Daten</li>
          <li>Datenkatalog: Beschreibung der Datenbank</li>
          <li>
            Benutzersichten: unterschiedliche Sichten auf den Datenbestand
          </li>
          <li>Konsitenzüberwachung: Sichern der Korrektheit der Daten</li>
          <li>Zugriffskontrolle: Zugriffe kontrollieren und ggf. verhindern</li>
          <li>
            Transaktionen: Änderungen können als Einheit zusammengefasst werden
          </li>
          <li>
            Synchronisation: Daten müssen bei konkurrierenden Transaktionen
            synchronisiert werden
          </li>
          <li>
            Dantesicherung: Wiederherstellungsmöglichkeit des Datenbestandes
          </li>
        </ul>
        <li>besteht aus 2 Teilen:</li>
        <ul>
          <li>die Verwaltungssoftware, dem Datenbankmanagementsystem (DBMS)</li>
          <li>dem eigentlichen Datenspeicher, der Datenbank</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder">Redundanz: </a>Mehrfachspeicherung von
        Daten
      </li>
      <li class="text-weight-bolder">Konsistenz</li>
      <ul>
        <li>Es besteht kein Widerspruch zwischen den Daten</li>
        <li>
          Tritt eine Inkonsistenz auf, spricht man auch von
          <a class="text-weight-bold">Anomalien:</a>
        </li>
        <ul>
          <li>
            <a class="text-underline">Einfüge-Anomalie:</a>
            Wenn beim Einfügen die Relation nicht oder nur schwierig eingetragen
            werden kann, weil nicht zu allen Attributen des Primärschlüssels
            Werte vorliegen. z.B. Person wird ohne Nachname eingefügt
          </li>
          <li>
            <a class="text-underline">Änderungs-Anomalie:</a> Wenn beim Ändern
            nicht alle Vorkommen eines Attributwertes zugeleich geändert werden.
            z.B. Nachnamenänderung bei der selben Person wird nicht auf alle
            Datensätze übernommen
          </li>
          <li>
            <a class="text-underline">Lösch-Anomalie:</a> Wenn beim Löschen mehr
            Informationen als erwünscht verloren gehen. z.B. Person wird
            gelöscht, wobei auch die Anschrift gelöscht wird (was nicht
            erwünscht ist)
          </li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder">Integrität: </a>Die Daten sind korrekt,
        konsistent und eindeutig
      </li>
      <li class="text-weight-bolder">Referenzielle Integrität</li>
      <ul>
        <li>
          Tabellenbeziehungen in Datenbanken dürfen nicht zu Inkonsistenzen in
          der Datenbank führen
        </li>

        <li>
          Wenn neuer Datensatz mit Fremdschlüssel angelegt wird, muss in der
          referenzierten Tabelle auch wirklich ein Datensatz für diesen
          Schlüssel existieren
        </li>
        <li>
          Datensatz darf nicht gelöscht werden, wenn er in einer anderen Tabelle
          als Fremdschlüssel genutzt wird
        </li>
      </ul>
      <li>
        <a class="text-weight-bolder">Kardinalität: </a>Beschreibt die Art einer
        Beziehung (1:1, 1:n, m:n)
      </li>
      <li>
        <a class="text-weight-bolder">Normalisierung: </a>Redundanzen
        beseitigen, Dateninkonsistenz verhindern
      </li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ArtenPage',
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
