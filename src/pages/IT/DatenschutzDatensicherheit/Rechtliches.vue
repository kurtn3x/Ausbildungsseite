<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Rechtliches zu Datenschutz/Datensicherheit
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Gesetzliche Grundlagen
    </div>
    <ul>
      <li class="text-weight-bolder">DSGVO</li>
      <ul>
        <li>Datenschutzgrundverordnung</li>
        <li>Schutz personenbezogener Daten und freier Datenverkehr</li>
        <li>
          <a href="https://dsgvo-gesetz.de/" target="_blank"
            >Online Gesetzbuch</a
          >
        </li>
      </ul>
      <li class="text-weight-bolder">BDSG</li>
      <ul>
        <li>Bundesdatenschutzgesetz</li>
        <li>erweitert DSGVO</li>
      </ul>
      <li class="text-weight-bolder">LDSG</li>
      <ul>
        <li>Landesdatenschutzgesetz</li>
        <li>für Bundesländer</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Grundsätze und Maßnahmen des Datenschutzes
    </div>
    <ul>
      <li>
        <a href="https://dsgvo-gesetz.de/kapitel-2/" target="_blank"
          >Siehe auch DSGVO Kapitel 2</a
        >
      </li>
      <li class="text-weight-bolder">Gesetzmäßigkeit</li>
      <ul>
        <li>
          Verarbeitung personenbezogener Daten muss auf einer gesetzlichen
          Grundlage beruhen
        </li>
      </ul>
      <li class="text-weight-bolder">Verhältnismäßigkeit</li>
      <ul>
        <li>
          Verarbeitung von personenbezogenen Daten muss dem
          Verhältnismäßigkeitsprinzip entsprechen.
        </li>
        <li>
          Es sollen nur so viele Daten erhoben und verarbeitet werden, wie für
          den angegebenen Zweck erforderlich.
        </li>
        <li>
          Auf die Verarbeitung personenbezogener Daten sollte verzichtet werden,
          sofern nicht dringend erforderlich.
        </li>
      </ul>
      <li class="text-weight-bolder">Zweckbindung</li>
      <ul>
        <li>
          Personenbezogene Daten dürfen nur für die Zwecke verarbeitet werden,
          für die sie erhoben wurden.
        </li>
      </ul>
      <li class="text-weight-bolder">Richtigkeit</li>
      <ul>
        <li>
          Personenbezogene Daten müssen korrekt und aktuell gehalten werden. Die
          Person hat das Recht, falsche Daten berichtigen zu lassen.
        </li>
      </ul>
      <li class="text-weight-bolder">Transparenz</li>
      <ul>
        <li>
          Die Verarbeitung von personenbezogenen Daten muss für die betroffene
          Person transparent und verständlich sein.
        </li>
      </ul>
      <li class="text-weight-bolder">Sicherheit</li>
      <ul>
        <li>
          Angemessene Maßnahmen müssen erfgriffen werden, um sicherzustellen,
          dass personenbezogene Daten vor Verlust, Diebstahl oder unberechtiger
          Veränderung geschützt sind.
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Betroffenenrechte
    </div>
    <ul>
      <li>
        <a href="https://dsgvo-gesetz.de/kapitel-3/" target="_blank"
          >Siehe auch DSGVO Kapitel 3</a
        >
      </li>
      <li class="text-weight-bolder">Recht auf Auskunft</li>
      <li class="text-weight-bolder">Recht auf Berichtigung</li>
      <li class="text-weight-bolder">Recht auf Löschung</li>
      <li class="text-weight-bolder">
        Recht auf Einschränkung der Verarbeitung
      </li>
      <li class="text-weight-bolder">Recht auf Datenübertragbarkeit</li>
      <li class="text-weight-bolder">Widerspruchsrecht</li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Persönlichkeitsrechte
    </div>
    <ul>
      <li class="text-weight-bolder">
        Recht auf informationelle Selbstbestimmung
      </li>
      <li class="text-weight-bolder">Recht auf unbeobachtete Kommunikation</li>
      <li class="text-weight-bolder">Recht am eigenen Bild</li>
      <li class="text-weight-bolder">Urheberrecht</li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'RechtlichesPage',
  setup() {
    const q = useQuasar();
    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
});
</script>
