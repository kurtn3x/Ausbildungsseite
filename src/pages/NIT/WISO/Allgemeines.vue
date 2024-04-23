<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Allgemeine Übersicht WISO
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder">Betriebsrat</li>
      <ul>
        <li>Mitwirkungsbereiche:</li>
        <ul>
          <li>Achtung der Einhaltung von Normen und Vorschriften</li>
          <li>Soziale Angelegenheiten, z.B. Sozialeinrichtungen</li>
          <li>Personelle Angelegenheiten, z.B. Kündigungen</li>
          <li>Arbeits- u. Umweltschutz</li>
          <li>Arbeitsplatzgestaltung, z.B. Kontrolle der Mitarbeiter</li>
          <li>Arbeitsablauf und Arbeitsumgebung, z.B. Arbeitszeitänderungen</li>
        </ul>
        <li>
          Muss bei jeder Kündigung eines Beschäftigten angehört werden. Der
          Kündigung kann aufgrund z.B. fehlerhafter Sozialauswahl oder Verstoß
          gegen Auswahlrichtlinien widersprochen werden, wodurch AN bis zum
          Abschluss des Kündigungsschutzprozesses weiter beschäftigt wäre
        </li>
        <li>wählbar alle 4 Jahre</li>
        <li>bei mindestens 5 wahlberechtigten Arbeitnehmern</li>
        <li>gesetzliche Verschwiegenheitspflicht</li>
      </ul>

      <li class="text-weight-bolder">Betriebsversammlung</li>
      <ul>
        <li>
          Verantstaltung des Betriebsrats → nur in Betrieben mit Betriebsrat
        </li>
        <li>Teilnahme eines Arbeitnehmers gilt als Arbeitszeit</li>
        <li>Teilnehmen können alle Arbeitnehmer und Auzubildenden</li>
        <li>
          Arbeitgeber oder vertretene Gewerkschaften können eingeladen werden
        </li>
        <li>Austausch von Betriebsrat und Belegschaft</li>
        <li>
          Verfplichtung für jedes Kalendervierteljahr eine regelmäßige
          Betriebsversammlung
        </li>
      </ul>
      <li class="text-weight-bolder">
        JAV Jugend- und Auszubildenenvertretung
      </li>
      <ul>
        <li>
          nur in einem Betrieb mit Betriebsrat kann auch eine JAV gewählt werden
        </li>
        <li>berät bei Fragen zu Arbeit und Ausbildung</li>
        <li>Vertritt Interessen von Auzubildenden und Jugendlichen</li>
      </ul>
      <li class="text-weight-bolder">Betriebsverfassungsgesetz</li>
      <ul>
        <li>Kollektivarbeitsrecht zugeordnet</li>
        <li>
          regelt innerbetriebliche Ordnung und Mitbestimmung von Arbeitnehmern
          im Betrieb
        </li>
        <li>
          → Arbeitnehmer sollen an Entscheidungen des Arbeitgebers teilhaben
        </li>
        <li>Regelungen zu Betriebsrat, Betriebsversammlungen, JAV</li>
      </ul>
      <li class="text-weight-bolder">Berufsbildungsgesetz</li>
      <ul>
        <li>Gesetze für die Berufsausbildung</li>
        <li>
          Vorschriften für die Berufsausbildung, Berufsausbildungsvorbereitung,
          Fortbildung und beruflicher Umschulung
        </li>
        <li>
          Regelung der Probezeit für Auszubildende, Ablauf der Ausbildung,
          Rechte und Pflichten, Schutz von Auszubildenden, Freistellung bei
          Berufsschulbesuch/Prüfungen/Tag vor Prüfung
        </li>
      </ul>

      <li class="text-weight-bolder">Mutterschutzgesetz</li>
      <ul>
        <li>
          Kündigungsschutz für Schwangere während der gesamten Schwangerschaft
          und bis zum Ablauf von vier Monaten nach der Entbindung
        </li>
        <li>
          Beschäftigungsverbot für Schwangere bei 6 Wochen vor Entbindung bis 8
          Wochen nach Entbindung
        </li>
        <li>
          für schwangere/stillende Frauen Verbot von Mehr-,Nacht- und
          Sonntagsarbeit
        </li>
      </ul>

      <li class="text-weight-bolder">Berufsgenossenschaft</li>
      <ul>
        <li>
          Versicherung und Verhütung von Unfällen, Berufskrankheiten und
          arbeitsbedingten Gesundheitsgefahren
        </li>
        <li>
          immer bei Arbeitsunfällen, Unfällen auf der Arbeit oder Unfällen auf
          dem direkten Weg zur Arbeit zu informieren
        </li>
        <li>Informationen zur Unfallverhütung</li>
        <li>neben Unfallkassen Träger der gesetzlichen Unfallversicherung</li>
      </ul>

      <li class="text-weight-bolder">IHK</li>
      <ul>
        <li>
          unterstützt und berät Arbeitgeber bei der Suche nach geeigneten
          Fachkräften
        </li>
        <li>
          nimmt als Interessenvertreter der gewerblichen Wirtschaft/des Handels
          Aufgaben in der Beratung und der Aus-und Weiterbildung wahr
        </li>
        <li>fördert und hilft bei Unternehmensgründungen</li>
      </ul>

      <li class="text-weight-bolder">Tarifverhandlungen</li>
      <ul>
        <li>finden zwischen Arbeitgeberverband und Gewerkschaft statt</li>
        <li>
          Tarifautonomie = Recht Löhne, Gehälter und andere Arbeitsbedingungen
          unter Beachtung der gesetzlichen Vorschriften selbstständig zu regeln
        </li>
      </ul>

      <li class="text-weight-bolder">Europass</li>
      <ul>
        <li>
          Hilft bei Erstellen von Bewerbungsunterlagen, Karriereplanung oder
          Dokumentation von Kompetenzen und dem Vergleich von Qualifikationen
        </li>
        <li>
          Erstellung von Lebenslauf / Erfassen von Details zu Ausbildung und
          Erstellung von Bewerbungsschreiben
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AllgemeinesWISOPage',
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
