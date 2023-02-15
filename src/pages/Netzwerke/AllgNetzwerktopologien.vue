<template>
  <div class="text-body1 q-ma-md">
    <div class="text-center text-h4 text-weight-bolder q-mt-md">Netzwerke</div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">
      Allgemeines und Topologien
    </div>
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Netzwerke</div>
    <ul>
      <li>
        Ein Rechnernetz, Computernetz ist ein Zusammenschluss verschiedener
        technischer, primär selbstständiger elektronischer Systeme, der die
        Kommunikation der einzelnen Systeme untereinander ermöglicht. Techniken,
        Protokolle und Systeme zur Datenübertragung realisieren die
        Kommunikation zwischen den Teilnehmern im Netzwerk.
      </li>
      <li>
        <a class="text-weight-bold">Ziel:</a>Kommunikation der einzelnen Systeme
        untereinander und die gemeinsame Nutzung von Ressourcen. Wie z.B.
        Rechenleistung, Geräte(Drucker,....), Software, Daten, Dienste.
      </li>
      <li class="text-weight-bold">Nachteile:</li>
      <ul>
        <li>Infrastruktur und Betriebskosten</li>
        <li>Administrationsaufwand</li>
        <li>
          Zusätzliche Risiken im Bezug auf Daten-/Informationssicherheit,
          Vertraulichkeit, Integrität, Verfügbarkeit
        </li>
      </ul>
    </ul>
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder q-mb-md">
      Netzwerktopologien
    </div>
    <table class="tg">
      <thead>
        <tr>
          <th><a class="text-weight-bold">Skizze</a></th>
          <th><a class="text-weight-bold">Topologie</a></th>
          <th><a class="text-weight-bold">Vorteile</a></th>
          <th><a class="text-weight-bold">Nachteile</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">
            <q-img
              class="fit"
              :src="src + '/Netzwerke/Topologien/Bustopologie.png'"
            />
          </td>
          <td class="tg-0lax text-h6 text-weight-bold">Bustopologie</td>
          <td class="tg-0lax">
            Einfach Installierbar<br />Kurze Leitungen<br />
          </td>
          <td class="tg-0lax">
            Bei Kabelbruch fällt Netz aus<br />Zugriffszeit nicht berechenbar<br />
          </td>
        </tr>
        <tr>
          <td class="tg-0lax">
            <q-img
              class="fit"
              :src="src + '/Netzwerke/Topologien/Ringtopologie.png'"
            />
          </td>
          <td class="tg-0lax text-h6 text-weight-bold">Ringtopologie</td>
          <td class="tg-0lax">
            Zugriffszeit vorhersehbar<br />Keine Datenkollosionen<br />
          </td>
          <td class="tg-0lax">
            höhere Latenzzeiten<br />höherer Verkabelungsaufwand als Bus
          </td>
        </tr>
        <tr>
          <td class="tg-0lax">
            <q-img
              class="fit"
              :src="src + '/Netzwerke/Topologien/Sterntopologie.png'"
            />
          </td>
          <td class="tg-0lax text-h6 text-weight-bold">
            Sterntopologie<br />(kann zu Baum erweitert werden)<br />
          </td>
          <td class="tg-0lax">
            Einfache Erweiterung<br />Kabelbruch führt nicht zum Netzausfall<br />
          </td>
          <td class="tg-0lax">
            hoher Verkabelungsaufwand<br />Netzausfall bei Ausfall des zentralen
            Vertreters<br />
          </td>
        </tr>
        <tr>
          <td class="tg-0lax">
            <q-img
              width="200px"
              height="200px"
              :src="src + '/Netzwerke/Topologien/Maschentopologie.png'"
            />
          </td>
          <td class="tg-0lax text-h6 text-weight-bold">Maschentopologie</td>
          <td class="tg-0lax">
            Unendliche Netzausdehnung möglich<br />hohe Ausfallsicherheit<br />
          </td>
          <td class="tg-0lax">
            aufwendige Administration<br />teure Vernetzung<br />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
    };
  },
});
</script>

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-c6q4 {
  font-family: inherit;
  text-align: left;
  vertical-align: top;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
