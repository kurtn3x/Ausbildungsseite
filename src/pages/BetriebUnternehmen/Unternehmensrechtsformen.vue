<template>
  <div class="text-body1 q-ma-md">
    <div class="text-center text-h4 text-weight-bolder q-mt-md">
      Betriebe und Unternehmen
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">
      Unternehmensrechtsformen
    </div>

    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">
      Gesetzliche Grundlagen
    </div>
    <ul>
      <li class="text-weight-bold">Handelsgesetzbuch (HGB)</li>
      <ul>
        <li>Handelsrecht der BRD</li>
        <li>Regelungen zu Kaufmannseigenschaften und Rechtsformen von UN</li>
      </ul>
      <li class="text-weight-bold">Eintragung im Handelsregister (HR)</li>
      <ul>
        <li>amtliches Verzeichnis der Kaufleute eines Amtgerichtsbezirks</li>
        <li>durch Eintragungen erlangt eine Firma Kaufmannseigenschaften</li>
        <li>Schutz von UN-Partnern durch die Bekanntmachung</li>
        <li>Recht auf Einsichtnahme</li>
        <li>begrenzte Informationen zu Geschäftsdaten</li>
      </ul>
      <li>z.T. Bürgerliches Gesetzbuch (BGB)</li>
    </ul>

    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">
      Wichtige Rechtsformen eines Unternehmens
    </div>
    <ul>
      <li class="text-weight-bold">
        Einzelunternehmen, Personengesellschaft, Mischformen
      </li>
      <ul>
        <li>jeder Einzelne ist Rechts- und Steuersubjekt</li>
        <li>
          Haftung mit gesamten Vermögen, Einkommensbesteuerung mit Gewinn oder
          Verlust
        </li>
        <li>Einkommensteuer jeder Person</li>
        <li>Ertragsbesteuerung</li>
      </ul>
      <li class="text-weight-bold">Kapitalgesellschaft, Sonstiges</li>
      <ul>
        <li>Gesellschaft als juristische Person rechtsfähig</li>
        <li>
          Rechts und Steuersubjekt kann haftbar gemacht werden für
          Verbindlichkeiten mit ihrem Vermögen oder
        </li>
        <li>Körperschaftssteuerpflichtig</li>
        <li>Ertragsbesteuerung</li>
      </ul>
      <li class="text-weight-bold">Im Überblick:</li>
      <ul>
        <li>Einzelunternehmen</li>
        <li>Gesellschaft bürgerlichen Rechts (GbR)</li>
        <li>Offene Handelsgesellschaft (GbR)</li>
        <li>Kommanditgesellschaft (KG)</li>
        <li>Gesellschaft mit beschränkter Haftung (GmbH)</li>
        <li>Aktiengesellschaft (AG)</li>
      </ul>
    </ul>

    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Prokura</div>
    <ul>
      <li>
        handelsrechtliche Vollmacht mit gesetzlich fixiertem Inhalt: Prokurist
      </li>
      <li>
        ermächtigt zu allen Arten von gerichtlichen und außergerichtlichen
        Geschäften und Rechtshandlungen, die der Betrieb eines Handelsgewerbes
        mit sich bringt
      </li>
      <li>
        z.B. An- und Verkäufe tätigen, Personal einstellen und entlassen,
        Zahlungen entgegennehmen,...
      </li>
      <li class="text-weight-bold">Grenzen:</li>
      <ul>
        <li>
          kann keine Grundlagengeschäfte tätigen, die den Betrieb des
          Handelsgewerbes als solches Betreffen
        </li>
        <li>
          z.B. Firma ändern, Gesellschafter aufnehmen, Insolvenzverfahren
          eröffnen
        </li>
        <li>
          kann keine Geschäfte vornehmen, die Inhaber des Handelschäftes
          vorbehalten sind
        </li>
        <li>z.B. Prokuraerteilung, Anmelden der Firma zum Handelsregister</li>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      helloworld: 1,
    };
  },
});
</script>
