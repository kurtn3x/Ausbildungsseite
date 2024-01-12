<template>
  <q-page>
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Datenbanken
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Normalisierung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Normalisierung einer Datenbanktabelle
    </div>
    <ul>
      <li class="text-weight-bolder text-h6">Vorgabe, nicht normalisiert</li>
    </ul>
    <table class="tg q-mt-md">
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
    <li class="text-weight-bolder q-mt-md text-h6">Erste Normalform</li>
    <ul>
      <li>
        Werte sind nicht atomar! (mehrere Werte in einer Spalte) -> Atomar
        machen
      </li>
    </ul>
    <table class="tg q-mt-md">
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
    <li class="text-weight-bolder q-mt-md text-h6">Zweite Normalform</li>
    <ul>
      <li>
        Änderungsanomalien vermeiden, z.B. Namensänderungen müssten in mehreren
        Zeilen geschehen, Bei Löschung von Personen werden Projektinformationen
        mit gelöscht
      </li>
      <li>
        -> Tabelle muss in Einzelteile zerlegt werden, um Änderungsanomalien zu
        umgehen
      </li>
    </ul>
    <ul>
      <li class="text-weight-bolder">Tabelle Mitarbeiter</li>
    </ul>
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
    <ul>
      <li class="text-weight-bolder q-mt-md">Tabelle Projekt</li>
    </ul>
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
    <ul>
      <li class="text-weight-bolder q-mt-md">Tabelle Tätigkeit</li>
    </ul>
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
    <li class="text-weight-bolder q-mt-md text-h6">Dritte Normalform</li>
    <ul>
      <li>
        Immer noch Änderungsanomalien in Tabelle Mitarbeiter möglich (z.B.
        Abteilungsname wird geändert)
      </li>
      <li>
        -> weitere Zerlegung der Tabelle Mitarbeiter in Mitarbeiter und
        Abteilungstabelle
      </li>
    </ul>
    <ul>
      <li class="text-weight-bolder q-mt-md">Tabelle Mitarbeiter</li>
    </ul>
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
    <ul>
      <li class="text-weight-bolder q-mt-md">Tabelle Abteilung</li>
    </ul>
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
