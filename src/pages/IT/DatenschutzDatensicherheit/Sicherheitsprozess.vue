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
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Der IT-Sicherheitsprozess
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      PDCA-Zyklus im IT-Sicherheitsprozess
    </div>
    <ul>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/datenschutz/PDCA.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/datenschutz/PDCA.png';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>

      <li class="q-mt-sm">
        <a class="text-weight-bolder">PLAN: </a>Planung von Sicherheitsmaßnahmen
      </li>
      <li><a class="text-weight-bolder">DO: </a>Umsetzung der Maßnahmen</li>
      <li>
        <a class="text-weight-bolder">CHECK: </a>Erfolgskontrolle, Überwachung
        der Zielerreichung
      </li>
      <li>
        <a class="text-weight-bolder">ACT: </a>Beseitigung von Defiziten,
        Verbesserung
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Phasen des IT-Sicherheitsprozesses
    </div>
    <ul>
      <li class="text-weight-bolder">Initierungsphase</li>
      <ul>
        <li>relevante Rahmenbedingungen identifizieren und analysieren</li>
        <li>Sicherheitsanforderungen von Kunden oder Behörden formulieren</li>
        <li>Ableitung von Informationssicherheitszielen</li>
        <li>Leitlinie zur Informationssicherheit erstellen</li>
        <li>
          Mitarbeiter sind hierfür in ihrem Wirkungsbereich verantwortlich
        </li>
      </ul>
      <li class="text-weight-bolder">Erstellung des Sicherheitsprozesses</li>
      <ul>
        <li>geeignete technische und organisatorische Maßnahmen festlegen</li>
        <li>Regelungen zum Umgang mit klassifizierten Dokumenten</li>
        <li>Anwendung kryptographischer Maßnahmen</li>
      </ul>
      <li class="text-weight-bolder">Umsetzung des Sicherheitsprozesses</li>
      <ul>
        <li>
          Sicherheitskonzept -> Darstellen wie Maßnahmen umzusetzen und zu
          überprüfen sind
        </li>
      </ul>
      <li class="text-weight-bolder">
        Aufrechterhaltung und Verbesserung des Sicherheitsprozesses
      </li>
      <ul>
        <li>
          Informationssicherheit ist ein Prozess, der sich kontinuierlich an die
          im Sicherheitskonzept veränderten Anforderungen anpasst
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Beteiligte am IT-Sicherheitsprozess
    </div>
    <ul>
      <li class="text-weight-bolder">Die Leitung</li>
      <ul>
        <li>
          kennt Risiken bei Verletzung der Informationssicherheit und trifft
          Entscheidungen zum Umgang mit Risiken
        </li>
        <li>initiiert, steuert u. kontrolliert den Sicherheitsprozess</li>
        <li>stellt erforderliche Ressourcen und wägt Aufwand und Ertrag ab</li>
        <li>
          trägt Gesamtverantwortung für ein angemessenes ISMS
          (Informationssicherheitmanagement)
        </li>
      </ul>
      <li class="text-weight-bolder">Der Informationssicherheitsbeauftragte</li>
      <ul>
        <li>Steuerung u. Koodinierung des Sicherheitsprozesses</li>
        <li>
          Unterstützung der Leitung bei Erstellung der Sicherheitsleitlinie
        </li>
        <li>
          Anfertigung von Realisierungsplänen für Sicherheitsmaßnahmen, sowie
          die Initiierung und Überprüfung der Umsetzung
        </li>
        <li>
          Sicherheitsrelevante Projekte koodinieren, Sicherheitsrelevante
          Vorfälle dokumentieren
        </li>
        <li>
          Schulung und Sensibilisierung Anderer, sowie Aufklärung über Status
          der Informationssicherheit
        </li>
      </ul>
      <li class="text-weight-bolder">
        Der ICS (Industrial Control System)-Informationsbeauftrage
      </li>
      <ul>
        <li>
          führt allgemeine Sicherheitsvorgaben und Richtlinien, sowie
          Risikoanlysen für den ICS-Bereich durch
        </li>
        <li>erstellt Sicherheitskonzepte- und Richtlinien für ICS-Bereich</li>
        <li>Dokumentation</li>
        <li>bearbeitet Sicherheitsvorfälle mit ISB</li>
      </ul>
      <li class="text-weight-bolder">
        Das IS (Informationssicherheit)-Management-Team
      </li>
      <ul>
        <li>
          Für Regelung sämtlicher übergreifender Belange der
          Informationssicherheit zuständig
        </li>
        <li>
          koodiniert, berät und kontrolliert Analysen, Konzepte und Richtlinien
        </li>
        <li>
          Überprüft ob geplante Sicherheitsmaßnahmen geeignet und wirksam sind
        </li>
        <li>initiiert, steuert und kontrolliert den Sicherheitsprozess</li>
        <li>Überprüft Umsetzung der Sicherheitsleitlinie</li>
        <li>Legt Sicherheitsziele - und Strategien fest</li>
        <li>Erstellt Leitlinie zur Informationssicherheit</li>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.smart-qm-borchert.de/images/grafiken/pdca-zyklus.png<br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SicherheitsprozessPage',
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
