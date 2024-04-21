<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Die Schutzbedarfsanalyse und ihre Kategorien
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Die Schutzbedarfsanalyse
    </div>
    <ul>
      <li>
        Der mögliche Schaden wird auf Basis der Schutzziele Vertraulichkeit,
        Integrität und Verfügbarkeit für jedes Zielobjekt (Anwendung, Prozess)
        ermittelt
      </li>
      <li>
        Jedem Schutzziel wird begründend eine Schutzbedarfsklasse zugeordnet.
      </li>
      <li>(Es gibt oft kein richtig oder falsch! Begründung wichtig!)</li>
      <li>Schaden kann sich auf alles beziehen z.B.:</li>
      <ul>
        <li>finanzieller Schaden</li>
        <li>Personenschaden</li>
        <li>Verstöße gegen Gesetz und Verträge</li>
        <li>Ansehen des Unternehmens</li>
        <li>Beeinträchtigung von Aufgabenerfüllung</li>
        <li>Beeinträchtigung des informationellen Selbstbestimmungsrechts</li>
      </ul>
      <li class="text-weight-bold">
        Beispiel: Schutzbedarfsanalyse eines Active-Directory-Servers
      </li>
      <table class="tg">
        <thead>
          <tr>
            <th><a class="text-weight-bolder">Schutzziel</a></th>
            <th><a class="text-weight-bolder">Schutzbedarfskategorie</a></th>
            <th><a class="text-weight-bolder">Begründung</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax">Vertraulichkeit</td>
            <td class="tg-0lax">normal</td>
            <td class="tg-0lax">
              Wichtige Daten im AD verschlüsselt, daher kein Auslesen von
              Passwörtern möglich.
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">Integrität</td>
            <td class="tg-0lax">hoch</td>
            <td class="tg-0lax">
              Anmeldung mit Nutzername &amp; Passwort. Datenänderungen sollten
              nachvollziehbar sein.
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">Verfügbarkeit</td>
            <td class="tg-0lax">sehr hoch</td>
            <td class="tg-0lax">
              Kein Nutzen der IT-Infrastruktur ohne AD-Server möglich.
              Mitarbeiter können bei Ausfall nicht arbeiten.<br />
            </td>
          </tr>
        </tbody>
      </table>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Die Schutzbedarfskategorien nach BSI
    </div>
    <ul>
      <li class="text-weight-bolder">Schutzbedarfskategorie normal</li>
      <ul>
        <li>begränzte, überschaubare Auswirkungen auf das Unternehmen</li>
        <li>
          Verstöße gegen Gesetze, Vorschriften, Verträge haben geringfügige
          juristische Konsequenzen
        </li>
        <li>
          Missbrauch personenbezogener Daten hätte geringfügige Auswirkungen auf
          Betroffene
        </li>
        <li>persönliche Unversehrtheit nicht beeinträchtigt</li>
        <li>Ausfallzeiten von mehr als 48 Stunden sind toleriert</li>
        <li>kein Ansehensverlust</li>
      </ul>
      <li class="text-weight-bolder">Schutzbedarfskategorie hoch</li>
      <ul>
        <li>beträchtliche Auswirkungen auf das Unternehmen</li>
        <li>
          Verstöße gegen Gesetze, Vorschriften, Verträge haben
          schwerwiegende/hohe juristische Konsequenzen
        </li>
        <li>
          Missbrauch personenbezogener Daten hätte beträchtliche Auswirkungen
          auf Betroffene
        </li>
        <li>persönliche Unversehrtheit nicht dauerhaft beeinträchtigt</li>
        <li>Ausfallzeiten von höchstens 48 Stunden sind toleriert</li>
        <li>Ansehensverlust ist beträchtlich</li>
      </ul>
      <li class="text-weight-bolder">Schutzbedarfskategorie sehr hoch</li>
      <ul>
        <li>katastrophale Auswirkungen auf das Unternehmen</li>
        <li>
          Verstöße gegen Gesetze, Vorschriften, Verträge sind existenzgefährdend
        </li>
        <li>
          Missbrauch personenbezogener Daten hätte ruinöse Auswirkungen auf
          Betroffene
        </li>
        <li>persönliche Unversehrtheit dauerhaft beeinträchtigt</li>
        <li>Ausfallzeiten von allerhöchstens 2 Stunden sind toleriert</li>
        <li>nachhaltiger Ansehensverlust</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SchutzbedarfsanalysePage',
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
