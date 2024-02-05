<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Das Lastenheft & Pflichtenheft
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-underline text-weight-bolder text-secondary"
    >
      Das Lastenheft
    </div>
    <ul>
      <li>beschreibt die Anforderungen des Auftraggebers</li>
      <li class="text-weight-bolder">Inhalte allgemein:</li>
      <ul>
        <li>Zielbestimmung</li>
        <li>Zeitrahmen</li>
        <li>Rahmenbedingungen für das Produkt und die Leistungserbringung</li>
        <li>Qualitätsanforderungen</li>
        <li>Spezifikation des zu erstellenden Produktes</li>
        <li>Anforderungen an das Produkt bei seiner Verwendung</li>
        <li>Anforderungen an den Auftragnehmer</li>
        <li>Anforderungen an das Projektmanagement des Auftragnehmers</li>
      </ul>
      <li class="text-weight-bolder">Typische Gliederung</li>
      <ul>
        <li>Einführung</li>
        <li>Beschreibung Ist-Zustand</li>
        <li>Beschreibung Soll-Konzept</li>
        <li>Beschreibung von Schnitstellen</li>
        <li>Funktionale Anforderungen</li>
        <li>
          Nichtfunkttionale Anforderungen (Benutzbarkeit, Zuverlässigkeit,
          Effizienz, Änderbarkeit, Wartbarkeit)
        </li>
        <li>Risikoakzeptanz</li>
        <li>Lieferumfang</li>
        <li>Abnahmekriterien</li>
      </ul>
      <li class="text-weight-bolder">Normungen</li>
      <ul>
        <li>DIN 69901-5: Projektmanagement - Projektmanagementsysteme</li>
        <li>
          IEEE 830-1998: Software Requirements Specification, Lastenhefte für
          Softwaresysteme
        </li>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 text-underline q-mt-lg q-ml-md text-weight-bolder text-secondary"
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
