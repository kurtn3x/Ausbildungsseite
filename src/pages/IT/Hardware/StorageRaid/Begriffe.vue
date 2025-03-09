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
      Begriffe zu Storage & RAID
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        <a class="text-weight-bolder">Block:</a> Speicherbereich (Folge von Bits
        oder Bytes) mit fester Größe (Blockgröße)
      </li>
      <li>
        <a class="text-weight-bolder">Datei:</a> Ansammlung belegter Blöcke
      </li>
      <li>
        <a class="text-weight-bolder">Volume/LUN:</a> Logischer, blockbasierter
        Bereich
      </li>
      <li class="text-weight-bolder">Archivbit</li>
      <ul>
        <li>
          Dateiattribut, das in Microsoft-Betriebssystemen genutzt wird, um neu
          angelegte oder veränderte Dateien zu kennzeichnen
        </li>
        <li>
          soll bei differenziellen oder inkrementellen Backups die für das
          Backup benötigten Dateien kennzeichnen
        </li>
      </ul>

      <li class="text-weight-bolder">Archivierung</li>
      <ul>
        <li>Langfristige Aufbewahrung von Backups</li>
        <li>
          Daten müssen for Manipulation (Veränderung und Löschung) geschützt
          werden
        </li>
        <li>
          Daten werden meist mit einer WORM (Write Once Read Many) Methode
          gespeichert
        </li>
        <li>
          besondere gesetzliche Vorgaben und branchenspezifische Regelungen
        </li>
      </ul>
      <li class="text-weight-bolder">Hot-Spare Festplatte</li>
      <ul>
        <li>eine in Reserve gehaltene Festplatte</li>
        <li>
          Fällt eine andere Platte aus, wird die Hot-Spare-Festplatte im
          laufenden Betrieb automatisch anstelle der Defekten eingebunden
        </li>
        <li>
          Im normalen Betrieb abgeschaltet und erst bei Bedarf angeschalten
        </li>
      </ul>

      <li class="text-weight-bolder">S.M.A.R.T.</li>
      <ul>
        <li>Self-Monitoring, Analysis and Reporting Technology</li>
        <li>
          Standard zur Überwachung von Festplattenlaufwerken(HDDs) und
          Solid-State-Drives(SSDs)
        </li>
        <li>Vorhersage eines möglichen Ausfalls des Speichermediums</li>
      </ul>

      <li class="text-weight-bolder">blockbasierter Dateizugriff</li>
      <ul>
        <li>Speicherung von Daten in Blöcken</li>
        <li>
          Blöcke durch willkürlich zugewiesene Kennung identifiziert, mit der
          sie gespeichert oder gelesen werden können
        </li>
        <li>Dateisystem ordnet Dateien einer Folge von Blöcken zu</li>
        <li class="text-green text-weight-bold">Vorteile:</li>
        <ul>
          <li>
            Direkter Zugriff auf Blöcke, die geändert oder gelesen werden sollen
          </li>
          <li>
            Bei Änderung einer Datei muss nicht der gesamte Datensatz der Datei
            verändert werden, sondern nur die Blöcke, die verändert wurden.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Komprimentierung</li>
      <ul>
        <li>
          Anzahl der für die Darstellung von Daten benötigten Bits verringert
        </li>
        <li>durch entfernen von redundanten Daten innerhalb der Datei</li>
        <li>
          Algorithmus stellt die Originaldaten beim Lesen der Datei wieder her
        </li>
      </ul>
      <li class="text-weight-bolder">Deduplizierung</li>
      <ul>
        <li>Eliminieren redundanter Kopien von Daten</li>
        <li>
          auf Dateiebene: es wird nur eine Instanz einer Datei gespeichert.
          Falls eine neue Datei gespeichert wird, wird geschaut ob es sie
          bereits gibt. Wenn sie noch nicht existiert wird die neue Datei
          angelegt. Wenn sie bereits existiert wird nur ein Link zur
          existierenden Datei erstellt.
        </li>
        <li>
          auf Blockebene: es werden nur einzigartige Wiederholungen jedes Blocks
          gespeichert. Dazu wird der Hashwert jedes einzigartigen Blocks in
          einer Datenbank gespeichert und neue Blöcke mit diesem verglichen
          (falls es den Hashwert bereits gibt, gibt es den Block bereits und er
          muss nicht nochmal gespeichert werden). Wenn sich eine Datei ändert
          werden nur die veränderten Blöcke (also die veränderten Teile der
          Datei) überschrieben. Sehr effizient, jedoch rechenintensiv
        </li>
        <li>
          auf Byteebene: wie Blockebene, jedoch Bytevergleich anstatt
          Blockvergleich
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'BegriffePage',
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
