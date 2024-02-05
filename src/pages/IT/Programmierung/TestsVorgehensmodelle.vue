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
      Software Tests und -Vorgehensmodelle
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Software-Tests
    </div>
    <ul>
      <li class="text-weight-bolder">Komponententest/Modultest/Unittest</li>
      <ul>
        <li>
          Test abgegrenzter Einzelteile der Software wie Module, Unterprogramme
          oder Klassen
        </li>
        <li>
          Nachweis der technischen Lauffähigkeit und korrekter Teilergebnisse
        </li>
      </ul>
      <li class="text-weight-bolder">Integrationstest</li>
      <ul>
        <li>Test der Zusammenarbeit voneinander unabhängiger Komponenten</li>
        <li>Schwerpunkt auf den beteiligten Schnittstellen der Komponenten</li>
      </ul>
      <li class="text-weight-bolder">Systemtest</li>
      <ul>
        <li>gesamtes System gegen die gesamten Anforderungen getestet</li>
        <li>
          in einer Testumgebung mit Testdaten, soll möglichst die
          Produktivumgebung wiederspiegeln
        </li>
      </ul>
      <li class="text-weight-bolder">Abnahmetest</li>
      <ul>
        <li>Testen der gelieferten Software durch den Kunden</li>
        <li>Unter Umständen bereits in der Produktivumgebung</li>
      </ul>
      <li class="text-weight-bolder">White-Box-Test</li>
      <ul>
        <li>
          Tests werden mit Kenntnissen über innere Funktionsweise des zu
          testenden Systems entwickelt
        </li>
        <li>Blick in Quellcode ist gestattet, d.h. es wird am Code geprüft</li>
      </ul>
      <li class="text-weight-bolder">Black-Box-Test</li>
      <ul>
        <li>
          Tests werden ohne Kenntnisse über die innere Funktionsweise des zu
          testenden Systems entwickelt
        </li>
        <li>nur nach außen sichtbares Verhalten fließt in den Test ein</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Vorgehensmodelle / Strategien
    </div>
    <ul>
      <li class="text-weight-bolder">Testgetriebene Entwicklung</li>
      <ul>
        <li>Tests steuern Softwareentwicklung</li>
        <li>Zuerst wird ein Test geschrieben (der zunächst fehlschlägt)</li>
        <li>
          Es wird so viel Produktivcode implementiert, bis der Test erfolgreich
          durchläuft
        </li>
        <li>
          Sobald der Test bestanden ist, wird der Code überarbeitet und
          wartbarer gemacht (Refactoring)
        </li>
        <li>Immer wieder wiederholt</li>
      </ul>
      <li class="text-weight-bolder">Extreme Programming</li>
      <ul>
        <li>agile Methode der Softwareentwicklung</li>

        <li>keine festen Rahmenbedingen und Regeln</li>
        <li>
          Pair-Programming, testgeleitete Entwicklung, Komponenten sofort ins
          Gesamtsystem übertragen, Standup-Meetings, Kundenanforderungen (User
          Stories) mit darauf aufbauenden Testfällen, kurze Releasezyklen
        </li>
      </ul>
      <li class="text-weight-bolder">V-Modell</li>
      <ul>
        <li>Vorgehensmodell der Softwareentwicklung</li>
        <li>Organisiert den Softwareentwicklungprozess in Phasen</li>
        <li>definiert auch das Vorgehen zur Qualitätssicherung</li>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/Programmierung/v-modell.png'"
          style="max-width: 400px"
          @click="
            show_img = true;
            popupsrc = '/Programmierung/v-modell.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
      <li class="text-weight-bolder q-mt-sm">Scrum</li>
      <ul>
        <li>
          Vorgehensmodell des Projekt- und Produktmanagements aber insbesondere
          auch der Softwareentwicklung
        </li>
        <li>Aufgabenkomplexe in kleine Bestandteile (Inkremente) aufgeteilt</li>
        <li>Anwendersicht der Anforderung steht im Vordergrund</li>
        <li>Anforderungen werden entwickelt (Sprints)</li>
        <li>→ liefert Zwischenergebnisse (fertiges Teilprodukt)</li>
        <li>
          Zwischenergebnisse im Review Meeting überprüft und im darauffolgenden
          Planning Meeting der nächste Sprint geplant
        </li>
        <li>
          Hauptplan wird kontinuierlich konkreter und detailliert →
          kontinuierliche Verbesserung
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:V-Modell.svg <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SoftwareTestsPage',
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
