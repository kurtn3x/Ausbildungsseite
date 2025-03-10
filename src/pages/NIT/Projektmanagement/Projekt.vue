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
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Das Projekt
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Projekte
    </div>
    <ul>
      <li>
        Vorhaben, das im Wesentlichen durch die Einmaligkeit aber auch Konstante
        der Bedingungen in ihrer Gesamtheit gekennzeichnet ist
      </li>
      <li class="text-weight-bolder">Kennzeichen:</li>
      <ul>
        <li>
          Einmaligkeit der Bedingungen in ihrer Gesamtheit (Projekt wird von
          Natur aus immer zum ersten und letzten Mal durchgeführt)
        </li>
        <li>
          Zielvorgabe (Vorgabe von Zielen, die das Projekt erreichen muss)
        </li>
        <li>zeitliche, personelle, finanzielle Begrenzung</li>
        <li>projektspezifische Organisation</li>
        <li>Projekte sind abrechenbar</li>
        <li>hohes Misserfolgsrisiko</li>
        <li>Kunde gibt Rahmenbedingungen wie Zeit und Kosten vor</li>
        <li>Zeitbregrenzt</li>
        <li>Ressourcenbegrenzt</li>
        <li>Komplex</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Das Magische Dreieck
    </div>
    <ul>
      <q-img
        class="fit bg-grey-5 q-mb-md"
        :src="src + '/projektmanagement/Dreieck.png'"
        style="max-width: 450px"
        @click="
          show_img = true;
          popupsrc = '/projektmanagement/Dreieck.png';
        "
      >
      </q-img>
      <li>zeigt Parameter auf, die ein Projekt und dessen Erfolg bestimmen</li>
      <li>
        Veränderung eines Parameters führt automatisch zur Veränderung der
        Anderen
      </li>
      <li class="text-weight-bolder">Umfang</li>
      <ul>
        <li>
          alle Aufgaben, die zum Erreichen des Projektziels erledigt werden
          müssen
        </li>
        <li>
          Umfang hat Auswirkung auf Kosten und Zeit, z.B. Stakeholder fordert
          neue Funktion für das Projekt → Zeit erhöht sich, da Funktion
          erarbeitet werden muss, Kosten erhöhen sich durch Mitarbeiterkosten
        </li>
      </ul>
      <li class="text-weight-bolder">Zeit</li>
      <ul>
        <li>Projektzeit → Projektstart und -ende</li>
        <li>
          Zeitmanagement wichtig (Abhängigkeiten von Funktionen und Reihenfolge
          festlegen)
        </li>
        <li>
          Projekt braucht mehr Zeit, wenn Umfang steigt oder Kosten reduziert
          werden sollen
        </li>
      </ul>
      <li class="text-weight-bolder">Kosten</li>
      <ul>
        <li>
          Budget des Projektes, welches vor Projektbeginn festgelegt werden
          sollte
        </li>
        <li>z.B. Gehälter, Ausrüstung, Werkzeuge, Räume, ...</li>
        <li>
          z.B. Einsetzung von Leiharbeitern → Projektkosten steigen wenn sich
          Projektzeitraum verlängert
        </li>
        <li>Reduzierung von Kosten fordert meist eine längere Projektdauer</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Projektphasen
    </div>
    <ul>
      <li class="text-weight-bolder">Projektdefinition und -analyse</li>
      <ul>
        <li>Ziel wird festgelegt</li>
        <li>Kick-Off-Meeting</li>
        <li>Chancen- und Risikoanalyse</li>
        <li>festlegen wesentlicher Inhalte</li>
        <li>Abschätzung von Kosten, Ausmaß und Zeit</li>
        <li>Am Ende formeller Projektauftrag</li>
        <li>Dokumente: Lastenheft des Kunden, Projektantrag</li>
      </ul>
      <li class="text-weight-bolder">Projektplanung</li>
      <ul>
        <li>Organisation des Projektteams</li>
        <li>Identifikation der Arbeitspakete</li>
        <li>Projektzeitplanung</li>
        <li>Kostenplanung</li>
        <li>
          Dokumente: Risikoanalyse, Pflichtenheft, Kostenplan,
          Projektstrukturplan, ...
        </li>
      </ul>
      <li class="text-weight-bolder">Projektdurchführung - und kontrolle</li>
      <ul>
        <li>Durchführung des Projekts</li>
        <li>Umsetzung der Pläne und Angaben im Pflichtenheft</li>
        <li>Meilensteingespräche</li>
        <li>
          Kontrolle des Projektfortschritts und Reaktion auf projektstörende
          Ereignisse
        </li>
        <li>evtl. Planungsänderungen und Korrekturmaßnahmen</li>
      </ul>
      <li class="text-weight-bolder">Projektabschluss</li>
      <ul>
        <li>Präsentation der Ergebnisse und Übergabe mit Dokumentation</li>
        <li>Projekt wird rückblickend bewertet, Erfahrungen festgehalten</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://de.smartsheet.com/sites/default/files/IC-Triple-Constraint-Triangle-DE.png<br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ProjektPage',
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
