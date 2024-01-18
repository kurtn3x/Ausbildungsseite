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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Relationale und nicht-relationale Datenbanken
    </div>
    <ul>
      <li class="text-weight-bolder">relationale Datenbank</li>
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
        <li>muss "ACID"-Eigenschaften aufweisen</li>
        <ul>
          <li>
            Atomarität (Atomicity): Transaktionen müssen vollständig gelingen
            oder vollständig fehlschlagen
          </li>
          <li>
            Konsitenz (Consistency): Validierung und Verhinderung der
            Verfälschung von Daten
          </li>
          <li>
            Isolation: konkurrirende Transaktionen dürfen sich nicht gegenseitig
            beeinflussen
          </li>
          <li>
            Dauerhaftigkeit: Systemausfall darf Auswirkungen einer efolgreichen
            Transaktion nicht rückgängig machen
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">nicht-relationale Datenbank</li>
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
