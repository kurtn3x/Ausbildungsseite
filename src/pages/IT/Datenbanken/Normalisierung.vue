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
      Normalisierung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Normalisierung einer Datenbanktabelle
    </div>
    <ul>
      <li class="text-weight-bolder text-weight-bolder">
        Vorgabe, nicht normalisiert
      </li>
      <div style="overflow-x: auto">
        <table class="tg q-mt-md" style="min-width: 750px">
          <thead>
            <tr>
              <th class="text-weight-bolder">Mitarbeiter Nr</th>
              <th class="text-weight-bolder">Mitarbeiter Name</th>
              <th class="text-weight-bolder">Abteilungs Nr</th>
              <th class="text-weight-bolder">Abteilungs Name</th>
              <th class="text-weight-bolder">Projekt Nr</th>
              <th class="text-weight-bolder">Projekt Name</th>
              <th class="text-weight-bolder">Zeit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">110</td>
              <td class="tg-0lax">Albert</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Vertrieb</td>
              <td class="tg-0lax">1,2</td>
              <td class="tg-0lax">Pr01, Pr02</td>
              <td class="tg-0lax">10,20</td>
            </tr>
            <tr>
              <td class="tg-0lax">120</td>
              <td class="tg-0lax">Bulle</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
              <td class="tg-0lax">2,3</td>
              <td class="tg-0lax">Pr02, Pr03</td>
              <td class="tg-0lax">5,30</td>
            </tr>
            <tr>
              <td class="tg-0lax">130</td>
              <td class="tg-0lax">Clever</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
              <td class="tg-0lax">1,2,3</td>
              <td class="tg-0lax">Pr01, Pr02, Pr03</td>
              <td class="tg-0lax">10,20,30</td>
            </tr>
            <tr>
              <td class="tg-0lax">140</td>
              <td class="tg-0lax">Drall</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">Pr03</td>
              <td class="tg-0lax">50</td>
            </tr>
            <tr>
              <td class="tg-0lax">150</td>
              <td class="tg-0lax">Emsig</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
              <td class="tg-0lax">4</td>
              <td class="tg-0lax">Pr04</td>
              <td class="tg-0lax">100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ul>
    <ul>
      <li class="q-mt-md text-weight-bolder">Erste Normalform</li>
      <ul>
        <li>
          Alle Datensätze sollten atomar sein, also jedes Datenfeld darf nur
          einen Wert enthalten. Dazu sollte auch sichergestellt werden, dass
          jede Spalte nur Werte des selben Datentyps enthält, also sollte z.B.
          eine Adresse in Ort, Straße und Hausnummer aufgegliedert werden.
        </li>
      </ul>
      <div style="overflow-x: auto">
        <table class="tg q-mt-md" style="min-width: 750px">
          <thead>
            <tr>
              <th class="text-weight-bolder">Mitarbeiter Nr</th>
              <th class="text-weight-bolder">Mitarbeiter Name</th>
              <th class="text-weight-bolder">Abteilungs Nr</th>
              <th class="text-weight-bolder">Abteilungs Name</th>
              <th class="text-weight-bolder">Projekt Nr</th>
              <th class="text-weight-bolder">Projekt Name</th>
              <th class="text-weight-bolder">Zeit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">110</td>
              <td class="tg-0lax">Albert</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Vertrieb</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Pr01</td>
              <td class="tg-0lax">10</td>
            </tr>
            <tr>
              <td class="tg-0lax">110</td>
              <td class="tg-0lax">Albert</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Vertrieb</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Pr02</td>
              <td class="tg-0lax">20</td>
            </tr>
            <tr>
              <td class="tg-0lax">120</td>
              <td class="tg-0lax">Bulle</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Pr02</td>
              <td class="tg-0lax">5</td>
            </tr>
            <tr>
              <td class="tg-0lax">120</td>
              <td class="tg-0lax">Bulle</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">Pr03</td>
              <td class="tg-0lax">30</td>
            </tr>
            <tr>
              <td class="tg-0lax">130</td>
              <td class="tg-0lax">Clever</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Pr01</td>
              <td class="tg-0lax">10</td>
            </tr>
            <tr>
              <td class="tg-0lax">130</td>
              <td class="tg-0lax">Clever</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Pr02</td>
              <td class="tg-0lax">20</td>
            </tr>
            <tr>
              <td class="tg-0lax">130</td>
              <td class="tg-0lax">Clever</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">Pr03</td>
              <td class="tg-0lax">30</td>
            </tr>
            <tr>
              <td class="tg-0lax">140</td>
              <td class="tg-0lax">Drall</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">Pr03</td>
              <td class="tg-0lax">50</td>
            </tr>
            <tr>
              <td class="tg-0lax">150</td>
              <td class="tg-0lax">Emsig</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
              <td class="tg-0lax">4</td>
              <td class="tg-0lax">Pr04</td>
              <td class="tg-0lax">100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ul>
    <ul>
      <li class="text-weight-bolder q-mt-md text-weight-bolder">
        Zweite Normalform
      </li>
      <ul>
        <li>
          Änderungsanomalien vermeiden, z.B. Namensänderungen müssten in
          mehreren Zeilen geschehen oder bei der Löschung von Personen werden
          Projektinformationen mit gelöscht
        </li>
        <li>
          Jedes Nicht-Schlüssel-Attribut muss vom Primärschlüssel voll
          funktional abhängig sein
        </li>
      </ul>
      <ul class="q-mt-md">
        <li>Tabelle Mitarbeiter</li>

        <table class="tg q-mt-md">
          <thead>
            <tr>
              <th class="text-weight-bolder">Mitarbeiter Nr</th>
              <th class="text-weight-bolder">Mitarbeiter Name</th>
              <th class="text-weight-bolder">Abteilungs Nr</th>
              <th class="text-weight-bolder">Abteilungs Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">110</td>
              <td class="tg-0lax">Albert</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Vertrieb</td>
            </tr>
            <tr>
              <td class="tg-0lax">120</td>
              <td class="tg-0lax">Bulle</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
            </tr>
            <tr>
              <td class="tg-0lax">130</td>
              <td class="tg-0lax">Clever</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
            </tr>
            <tr>
              <td class="tg-0lax">140</td>
              <td class="tg-0lax">Drall</td>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
            </tr>
            <tr>
              <td class="tg-0lax">150</td>
              <td class="tg-0lax">Emsig</td>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
            </tr>
          </tbody>
        </table>
        <li class="q-mt-md">Tabelle Projekt</li>
        <table class="tg q-mt-md">
          <thead>
            <tr>
              <th class="text-weight-bolder">Projekt Nr</th>
              <th class="text-weight-bolder">Projekt Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Pr01</td>
            </tr>
            <tr>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Pr02</td>
            </tr>
            <tr>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">Pr03</td>
            </tr>
            <tr>
              <td class="tg-0lax">4</td>
              <td class="tg-0lax">Pr04</td>
            </tr>
          </tbody>
        </table>
        <li class="q-mt-md">Tabelle Tätigkeit</li>
        <table class="tg q-mt-md">
          <thead>
            <tr>
              <th class="text-weight-bolder">Mitarbeiter Nr</th>
              <th class="text-weight-bolder">Projekt Nr</th>
              <th class="text-weight-bolder">Zeit</th>
            </tr>
          </thead>
          <tr>
            <td class="tg-0lax">110</td>
            <td class="tg-0lax">1</td>
            <td class="tg-0lax">10</td>
          </tr>
          <tr>
            <td class="tg-0lax">110</td>
            <td class="tg-0lax">2</td>
            <td class="tg-0lax">20</td>
          </tr>
          <tr>
            <td class="tg-0lax">120</td>
            <td class="tg-0lax">2</td>
            <td class="tg-0lax">30</td>
          </tr>
          <tr>
            <td class="tg-0lax">120</td>
            <td class="tg-0lax">3</td>
            <td class="tg-0lax">30</td>
          </tr>
          <tr>
            <td class="tg-0lax">130</td>
            <td class="tg-0lax">1</td>
            <td class="tg-0lax">10</td>
          </tr>
          <tr>
            <td class="tg-0lax">130</td>
            <td class="tg-0lax">2</td>
            <td class="tg-0lax">20</td>
          </tr>
          <tr>
            <td class="tg-0lax">130</td>
            <td class="tg-0lax">3</td>
            <td class="tg-0lax">30</td>
          </tr>
          <tr>
            <td class="tg-0lax">140</td>
            <td class="tg-0lax">3</td>
            <td class="tg-0lax">50</td>
          </tr>
          <tr>
            <td class="tg-0lax">150</td>
            <td class="tg-0lax">4</td>
            <td class="tg-0lax">100</td>
          </tr>
        </table>
      </ul>
    </ul>
    <ul>
      <li class="text-weight-bolder q-mt-md">Dritte Normalform</li>
      <ul>
        <li>
          Es darf keine transitiven Abhängigkeiten geben. (Aus keinem
          Nicht-Schlüssel-Attribut folgt ein anderes Nicht-Schlüssel-Attribut)
        </li>

        <li class="q-mt-md">Tabelle Mitarbeiter</li>
        <table class="tg q-mt-md">
          <thead>
            <tr>
              <th class="text-weight-bolder">Mitarbeiter Nr</th>
              <th class="text-weight-bolder">Mitarbeiter Name</th>
              <th class="text-weight-bolder">Abteilungs Nr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">110</td>
              <td class="tg-0lax">Albert</td>
              <td class="tg-0lax">1</td>
            </tr>
            <tr>
              <td class="tg-0lax">120</td>
              <td class="tg-0lax">Bulle</td>
              <td class="tg-0lax">2</td>
            </tr>
            <tr>
              <td class="tg-0lax">130</td>
              <td class="tg-0lax">Clever</td>
              <td class="tg-0lax">3</td>
            </tr>
            <tr>
              <td class="tg-0lax">140</td>
              <td class="tg-0lax">Drall</td>
              <td class="tg-0lax">2</td>
            </tr>
            <tr>
              <td class="tg-0lax">150</td>
              <td class="tg-0lax">Emsig</td>
              <td class="tg-0lax">3</td>
            </tr>
          </tbody>
        </table>
        <li class="q-mt-md">Tabelle Abteilung</li>
        <table class="tg q-mt-md">
          <thead>
            <tr>
              <th class="text-weight-bolder">Abteilungs Nr</th>
              <th class="text-weight-bolder">Abteilungs Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">Vertrieb</td>
            </tr>
            <tr>
              <td class="tg-0lax">2</td>
              <td class="tg-0lax">Marketing</td>
            </tr>
            <tr>
              <td class="tg-0lax">3</td>
              <td class="tg-0lax">EDV</td>
            </tr>
          </tbody>
        </table>
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

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 15px 10px;
  word-break: break-word;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 15px 10px;
  word-break: break-word;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
  padding: 15px 10px;
}
</style>
