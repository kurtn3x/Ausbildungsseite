<template>
  <table style="border-collapse: collapse; width: 100%" border="1">
    <colgroup>
      <col style="width: 25%" />
      <col style="width: 25%" />
      <col style="width: 25%" />
      <col style="width: 25%" />
    </colgroup>
    <tbody>
      <tr>
        <td>Skizze</td>
        <td>Topologie</td>
        <td>Vorteile</td>
        <td>Nachteile</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>Bustopologie</td>
        <td>
          <p>Einfach installierbar</p>
          <p>Kurze Leitungen</p>
        </td>
        <td>
          <p>Bei Kabelbruch f&auml;llt Netz aus</p>
          <p>Zugriffszeit nicht berechenbar</p>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>Ringtopologie</td>
        <td>
          <p>Zugriffszeit vorhersehbar</p>
          <p>Keine Datenkollisionen</p>
        </td>
        <td>
          <p>h&ouml;here Latenzzeiten</p>
          <p>h&ouml;herer Verkabelungsaufwand als Bus</p>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>Sterntopologie (kann zu Baum erweitert werden)</td>
        <td>
          <p>Einfache Erweiterung</p>
          <p>Kabelbruch f&uuml;hrt nicht zum Netzausfall</p>
        </td>
        <td>
          <p>hoher Verkabelungsaufwand</p>
          <p>Netzausfall bei Ausfall des zentralen Vertreters</p>
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>Maschentopologie</td>
        <td>
          <p>Unendliche Netzausdehnung m&ouml;glich</p>
          <p>hohe Ausfallsicherheit</p>
        </td>
        <td>
          <p>aufwendige Administration</p>
          <p>teure Vernetzung</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NetzwerktopologienV',
});
</script>
