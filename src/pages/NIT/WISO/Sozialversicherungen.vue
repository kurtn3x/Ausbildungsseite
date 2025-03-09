<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Gesetzliche Sozialversicherungen
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        folgen dem Solidaritätsprinzip = gegenseitige Hilfe und Unterstützung
      </li>
      <li class="text-weight-bolder">Gesetzliche Krankenversicherung</li>
      <ul>
        <li>50/50 aufgeteilt (derzeit 14,6% bzw. 14% gesamt)</li>
        <li>
          auf den Teil des Bruttolohns, der über der Versicherungspflichgrenze
          liegt wird kein Beitrag erhoben
        </li>
        <li>
          Versicherte, deren Bruttolohn über der Versicherungspflichtgrenze
          liegt, können sich als freiwilliges Mitglied weiter in der GKV
          versichern
        </li>
        <li class="text-weight-bold">Krankheit</li>
        <ul>
          <li>
            Lohnfortzahlung des vollen Gehalts bis zu 6 Wochen (42 Kalendertage)
            für jede neue Erkrankung. Bei Arbeitsunfähigkeit von mehr als 6
            Wochen derselben Krankheit übernimmt die Krankenkasse mit 70% des
            Bruttoverdienstes (Krankengeld)
          </li>
          <li>
            Arbeitnehmer ist verpflichtet, Arbeitgeber unverzüglich über
            Krankheit zu informieren
          </li>
          <li>
            Spätestens 3 Tage nach der Arbeitsunfähigkeit wird eine
            Arbeitsunfähigkeitsbescheinigung eines Artztes benötigt
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Pflegeversicherung</li>
      <ul>
        <li>Arbeitgeber übernimmt immer 1,7%</li>
        <li>Arbeitnehmer variabel nach Anzahl Kinder</li>
        <ul>
          <li>keine Kinder → 1,7% + 0,6% Zuschlag</li>
          <li>1 Kind → 1,7%</li>
          <li>
            über 1 Kind → 1,7% - 0.25% für jedes Kind bis maximal 0,7%
            Beitragssatz (also ab über 4 Kindern kein verringerter Beitragssatz)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Arbeitslosenversicherung</li>
      <ul>
        <li>50/50 aufgeteilt (derzeit 2,6% gesamt)</li>
        <li>
          Zur Berechnung des Arbeitslosengelds wird das Bruttoentgelt der
          vergangenen zwölf Monate zugrunde gelegt
        </li>
      </ul>
      <li class="text-weight-bolder">Rentenversicherung</li>
      <ul>
        <li>50/50 aufgeteilt (derzeit 18,6% gesamt)</li>
      </ul>
      <li class="text-weight-bolder">Gesetzliche Unfallversicherung</li>
      <ul>
        <li>vollständig vom Arbeitgeber getragen</li>
        <li>Träger sind die zuständigen Berufsgenossenschaften</li>
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
