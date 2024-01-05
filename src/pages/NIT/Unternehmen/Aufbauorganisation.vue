<template>
  <div class="text-body1">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
        Die Aufbauorganistation von Unternehmen
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Grundbegriffe
      </div>
      <ul>
        <li class="text-weight-bold">Merkmale von Organistationen</li>
        <ul>
          <li>dient der zielorientierten Aufgabenerfüllung</li>
          <li>
            ist ein geistig-schöpferischer Prozess am Menschen ausgerichtet
          </li>
          <li>gestaltet Informationssysteme</li>
        </ul>
      </ul>
      <ul>
        <li class="text-weight-bold">Begriff Organisation</li>
        <ul>
          <li>Zustand der Ordnung der Elemente (Struktur)</li>
          <li>Beziehung zwischen den Elementen eines Systems</li>
          <li>dargestellt z.B. in einem Organigramm</li>
        </ul>
        <li>
          Aufbauorganisation bildet das hierarschiche Gerüst eines Unternehmens
        </li>
        <li class="text-weight-bold">Ziele der Aufbauorganisation</li>
        <ul>
          <li>Gliederung des Unternehmens in funktionsfähige Einheiten</li>
          <li>
            Übertragung von Aufgaben, Kompetenzen und Verantwortung auf die
            Mitarbeiter
          </li>
          <li>Festlegung eines Systems von Informations-und Anweisungswegen</li>
          <li>Entwicklung von Führungsformen und Techniken</li>
        </ul>
      </ul>
      <q-separator class="q-mt-md" />

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Das Bilden von Stellen und Abteilungen
      </div>
      <ul>
        <li class="text-weight-bold">Aufgabenanalyse</li>
        <ul>
          <li>
            Zerlegung ganzheitlicher Arbeitsprozesse in Teilaufgaben bis hin zu
            Einzelaufgaben
          </li>
        </ul>
        <li class="text-weight-bold">Aufgabensyntese</li>
        <ul>
          <li>
            Zusammenfassung sachlogisch zusammenhängender Teilaufgaben zu
            Aufgabenkomplexen und Zuordnung der Aufgabenträger
          </li>
        </ul>
        <li class="text-weight-bold">Grundprinzipien der Stellenbildung</li>
        <ul>
          <li>Arbeitsteilung</li>
          <li>Überschaubarkeit</li>
          <li>Angemessenheit</li>
          <li>Genderkonformität</li>
          <li>Beauftragte im Unternehmen</li>
        </ul>
        <li class="text-weight-bold">Stellenarten</li>
        <ul>
          <li>ausführende Stellen: Stellen ohne Leitungsfunktion</li>
          <li>Instanz: Stellen mit Leitungsfunktion</li>
          <li>Stabsstelle: Hilfsstellen einer Instanz</li>
        </ul>
        <li class="text-weight-bold">
          Unter dem Bilden von Abteilungen versteht man das dauerhafte
          Zusammenfassen mehrerer Stellen.
        </li>
        <ul>
          <li>schafft überschaubare Bereiche</li>
          <li>übersichtliche Gesamtstruktur des Unternehmens</li>
          <li>vereinfacht die Vergabe von Zugriffsrechten</li>
          <li>ermöglicht die Festlegung von Verantwortungsbereichen</li>
        </ul>
      </ul>
      <q-separator class="q-mt-md" />

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Hierarchien und Führung im Unternehmen
      </div>
      <ul>
        <li class="text-weight-bold">Managementebenen</li>
        <ul>
          <li>Top Management: Vorstand, Geschäftsführer</li>
          <li>Middle Management: Abteilungsleiter, Filialleiter</li>
          <li>Lower Management: Gruppenleiter</li>
          <li>Ausführungsebene: Sachbearbeiter, Arbeiter, Hilfskräfte</li>
        </ul>
        <li class="text-weight-bold">Modernes Management</li>
        <ul>
          <li>
            Flache Hierarchien - Lean Management: möglichst flache Strukturen
            und Stärkung der Eigentverantwortung der Mitarbeiter
          </li>
          <li>
            Jobrotation - Job Enrichment: Vergrößerung des Arbeitsgebietes oder
            gezieltes Wechseln der Arbeitsstelle
          </li>
          <li>
            Gruppenarbeit, Projektmanagement: eigenverantwortliche Organisation
            der Arbeit in Gruppen und Projekten
          </li>
          <li>
            Integriertes Managementsystem IMS: Qualitäts-, Umwelt-, Risiko-,
            Datensicherheitsmanagement durch spezielle Beauftragte geführt
          </li>
        </ul>
      </ul>
      <q-separator class="q-mt-md" />

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline text-third"
      >
        Leitungssysteme
      </div>

      <table class="tg q-mt-lg">
        <thead>
          <tr>
            <th><a class="text-weight-bold">Skizze & Name</a></th>
            <th><a class="text-weight-bold">Beschreibung</a></th>
            <th><a class="text-weight-bold">Vorteile</a></th>
            <th><a class="text-weight-bold">Nachteile</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax">
              <div class="bg-grey-5">
                <q-img
                  :src="
                    src +
                    '/BetriebeUnternehmen/Aufbauorganisation/Einliniensystem.png'
                  "
                  @click="
                    show_img = true;
                    popupsrc =
                      '/BetriebeUnternehmen/Aufbauorganisation/Einliniensystem.png';
                  "
                >
                  <div
                    class="absolute-bottom-right text-subtitle2"
                    style="
                      height: 40px;
                      font-size: 10px;
                      background-color: transparent;
                    "
                  >
                    Click for full size
                  </div>
                </q-img>
              </div>
              <div class="text-weight-bold text-center q-mt-md">
                Einliniensystem
              </div>
            </td>
            <td class="tg-0lax">
              jede untergeordnete Stelle hat nur eine übergeordnete Instanz
              <br />
              <br />
              kleine-mittlere Unternehmen
              <br />
              <br />
              vertikale Kommunikationswege
            </td>
            <td class="tg-0lax">
              eindeutige Dienst-, Informations-, und Kommunikationswege
            </td>
            <td class="tg-0lax">
              Zeitverlust durch lange Dienstwege<br /><br />mangelnde
              Flexibilität
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <div class="bg-grey-5">
                <q-img
                  class="fit"
                  :src="
                    src +
                    '/BetriebeUnternehmen/Aufbauorganisation/Mehrliniensystem.png'
                  "
                  @click="
                    show_img = true;
                    popupsrc =
                      '/BetriebeUnternehmen/Aufbauorganisation/Mehrliniensystem.png';
                  "
                >
                  <div
                    class="absolute-bottom-right text-subtitle2"
                    style="
                      height: 40px;
                      font-size: 10px;
                      background-color: transparent;
                    "
                  >
                    Click for full size
                  </div>
                </q-img>
              </div>
              <div class="text-weight-bold text-center q-mt-md">
                Mehrliniensystem
              </div>
            </td>
            <td class="tg-0lax">
              eine untergeordnete Stelle kann von mehreren Instanzen Weisungen
              erhalten<br /><br />Mehrdimensionale Organisationsstruktur
            </td>
            <td class="tg-0lax">
              Entlastung der Instanzen<br /><br />Direkte Kommunikations-und
              Informationswege
            </td>
            <td class="tg-0lax">
              Kompetenzstreitigkeiten unter Instanzen<br /><br />Fehler lassen
              sich schwerer zuweisen
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <div class="bg-grey-5">
                <q-img
                  class="fit"
                  :src="
                    src +
                    '/BetriebeUnternehmen/Aufbauorganisation/Stabliniensystem.png'
                  "
                  @click="
                    show_img = true;
                    popupsrc =
                      '/BetriebeUnternehmen/Aufbauorganisation/Stabliniensystem.png';
                  "
                >
                  <div
                    class="absolute-bottom-right text-subtitle2"
                    style="
                      height: 40px;
                      font-size: 10px;
                      background-color: transparent;
                    "
                  >
                    Click for full size
                  </div>
                </q-img>
              </div>
              <div class="text-weight-bold text-center q-mt-md">
                Stabliniensystem
              </div>
            </td>
            <td class="tg-0lax">
              Liniensystem mit zusätzlichen Stabsstellen<br /><br />Erweiterung
              Einliniensystem durch einen Stab
            </td>
            <td class="tg-0lax">
              Entlastung der Instanzen<br /><br />Ausgleich zwischen Fachwissen
              der Stäbe und Überblick der Instanzen
            </td>
            <td class="tg-0lax">
              Konflikte zwischen Instanzen und Stab<br /><br />unübersichtliche
              Entscheidungsprozesse
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <div class="bg-grey-5">
                <q-img
                  class="fit"
                  :src="
                    src +
                    '/BetriebeUnternehmen/Aufbauorganisation/Matrixorganisation.png'
                  "
                  @click="
                    show_img = true;
                    popupsrc =
                      '/BetriebeUnternehmen/Aufbauorganisation/Matrixorganisation.png';
                  "
                >
                  <div
                    class="absolute-bottom-right text-subtitle2"
                    style="
                      height: 40px;
                      font-size: 10px;
                      background-color: transparent;
                    "
                  >
                    Click for full size
                  </div>
                </q-img>
              </div>
              <div class="text-weight-bold text-center q-mt-md">
                Matrixorganisation
              </div>
            </td>

            <td class="tg-0lax">
              Weiterentwicklung des Mehrliniensystems, auf zwei unabhängige
              Instanzen begrenzt<br /><br />Überschneidung funktionaler
              Organisationsbereiche mit der Organisation der Produktbereiche<br />
            </td>
            <td class="tg-0lax">
              Entlastung der Instanzen<br /><br />Ausgleich zwischen Fachwissen
              der Stäbe und Überblick der Instanzen
            </td>
            <td class="tg-0lax">
              Konflikte zwischen Instanzen und Stab<br /><br />unübersichtliche
              Entscheidungsprozesse
            </td>
          </tr>
        </tbody>
      </table>
      <q-separator class="q-mt-md" />
      <div class="text-subtitle2 text-grey font-size-small">
        Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
        https://www.bwl-lexikon.de/app/uploads/einliniensystem-beispiel.png
        <br />
        https://www.bwl-lexikon.de/app/uploads/mehrliniensystem.png <br />
        https://www.bwl-lexikon.de/app/uploads/stablinienorganisation.png <br />
        https://www.bwl-lexikon.de/app/uploads/matrixorganisation.png <br />
        Ich bin nicht der Eigentümer der oben genannten Bilder.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AufbauorganisationPage',
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
