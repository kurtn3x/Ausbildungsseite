<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Allgemeine Übersicht WISO
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder text-h7">Betriebsrat</li>
      <ul>
        <li class="text-weight-bold">Mitwirkungsbereiche:</li>
        <ul>
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
        <li>mindestens 5 Arbeitnehmer</li>
      </ul>
      <li>Berufsbildungsgesetz</li>
      <ul>
        <li>Regelung der Probezeit</li>
      </ul>
      <li>Berufsgenossenschaft</li>
      <ul>
        <li>
          immer bei Arbeitsunfällen, Unfällen auf der Arbeit oder Unfällen auf
          dem direkten Weg zur Arbeit zu informieren
        </li>
        <li>Informationen zur Unfallverhütung</li>
      </ul>

      <li class="text">Betriebsversammlung</li>
      <ul>
        <li>Teilnahme eines Arbeitnehmers gilt als Arbeitszeit</li>
      </ul>

      <li>IHK</li>
      <ul>
        <li>
          unterstützt und berät Arbeitgeber bei der Suche nach geeigneten
          Fachkräften
        </li>
        <li>
          nimmt als Interessenvertreter der gewerblichen Wirtschaft/des Handels
          Aufgaben in der Beratung und der Aus-und Weiterbildung wahr
        </li>
      </ul>
      <li>Individualarbeitsrecht</li>
      <li>Bundesurlaubsgesetz</li>
      <li>Mutterschutzgesetz</li>
      <ul>
        <li>
          Kündigungsschutz für Schwangere während der gesamten Schwangerschaft
          und bis zum Ablauf von vier Monaten nach der Entbindung
        </li>
      </ul>
      <li>JAV Jugend- und Auszubildenenvertretung</li>
      <ul>
        <li>
          nur in einem Betrieb mit Betriebsrat kann auch eine JAV gewählt werden
        </li>
      </ul>

      <li>Ist-Kaufmann</li>
      <ul>
        <li>
          Eintragung als Ist-Kaufmann im Handelsregister hat rein deklatorische
          Wiirkung
        </li>
      </ul>
      <li>Tarifverhandlungen</li>
      <ul>
        <li>finden zwischen Arbeitgeberverband und Gewerkschaft statt</li>
        <li>
          Tarifautonomie = Recht Löhne, Gehälter und andere Arbeitsbedingungen
          unter Beachtung der gesetzlichen Vorschriften selbstständig zu regeln
        </li>
      </ul>

      <li>Europass</li>
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
