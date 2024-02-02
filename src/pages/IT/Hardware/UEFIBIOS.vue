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
      Bootvorgänge (UEFI, BIOS)
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>UEFI & BIOS sind verschiedene Arten von Motherboard-Firmware</li>
      <li>Werden als Erstes beim Starten des Computers geladen</li>
      <li>
        Sorgen nach Ausführung bestimmter Aufgaben für den Start des
        Betriebssystems
      </li>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      BIOS - Basic Input/Output System
    </div>
    <ul>
      <li>eingebettete Firmware auf dem Chip des Motherboards</li>
      <li>
        ermöglicht das Starten weiterer Software (wie z.B. das Betriebssystem)
        durch Bootstrapping
      </li>
      <li class="text-weight-bold">Bootvorgang mit BIOS:</li>
      <ul>
        <li>
          BIOS stellt sicher ob alle Computerkomponenten betriebsbereit sind
        </li>
        <li>BIOS-Programm wird geladen</li>
        <li>
          BIOS sucht auf einem Datenträger nach dem Bootsektor (Master Boot
          Record) und lädt ihn
        </li>
        <li>
          Bootloader im Bootsektor lädt weitere Dateien nach, bis das
          Betriebssystem geladen wird
        </li>
        <li>
          Der Bootloader startet am Anfang im 16-Bit Modus (maximal 1MB
          Arbeitsspeicher). Die Dateien, die nach dem initialen Bootloader
          geladen werden müssen sicherstellen, dass das Betriebssystem für den
          32Bit und danach 64Bit-Modus vorbereitet wird
        </li>
      </ul>
      <li class="text-weight-bold">Nutzung einer MBR-Partitionstabelle:</li>
      <ul>
        <li>MBR = Master Boot Record</li>
        <li>Maximale Partitionsgröße von 2TB</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      UEFI - Unified Extensible Firmware Interface
    </div>
    <ul>
      <li>
        Schnittstellen-Spezifikation, die den Austausch zwischen Firmware und
        Betriebssystem während des Bootvorgangs regelt
      </li>
      <li>Arbeitet als Vermittler zwischen Firmware und Betriebssystem</li>
      <li>soll BIOS vollständig ersetzen</li>

      <li class="text-weight-bold">
        Nutzung einer GUID-Partitionstabelle (GPT):
      </li>
      <ul>
        <li>GPT = GUID Partition Table, GUID = Globally Unique Identifier</li>
        <li>Standard für Format von Partitionstabellen auf Datenträgern</li>
        <li>
          Nachfolger von MBR, GPT kann auch auch unter Einschränkungen auf BIOS
          verwendet werden
        </li>
        <li>
          Eindeutige Identifikation von Datenträgern und Partitionen über GUIDs
          (einmale Identifikationsnummern)
        </li>
        <li>Teil des UEFI-Standards</li>
        <li>
          <a class="text-green">Vorteile gegenüber MBR:</a> Partitionsgröße bis
          18 Mrd. GB, Unbegrenzte Anzahl primärer Partitionen, Prüfsummenchecks
          und Backup der Tabelle
        </li>
      </ul>
      <li class="text-weight-bold">Bootvorgang mit UEFI:</li>
      <ul>
        <li>
          benötigt eine spezielle Partition: die EFI System Partition (ESP)
        </li>
        <li>
          EFI Partition beinhaltet sämtliche Bootloader-Programme zum Starten
          des Systems
        </li>
        <li>
          Informationen über Initialisierung und Start in einer .efi-Datei auf
          der EFI-Partition gespeichert
        </li>
      </ul>
      <li class="text-weight-bold text-green">Vorteile gegenüber BIOS:</li>
      <ul>
        <li>Unterstützung von Laufwerken mit einer Größe von mehr als 2TB</li>
        <li>
          Unterstützung von mehr als 4 primären Partitionen in der
          GUID-Partitionstabelle
        </li>
        <li>schnellerer Bootvorgang</li>
        <li>
          Unterstützung des sicheren Starts (Secure Boot): Booten auf vorher
          signierte Bootloader beschränkt (hindert Start von Schadprogrammen)
        </li>
        <li>Unterstützung von Netzwerkfunktionen in der UEFI-Firmware</li>
        <li>viele weitere UEFI-spezifische Features</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Bootvarianten
    </div>
    <ul>
      <li class="text-weight-bolder">Kaltstart</li>
      <ul>
        <li>Rechner nach dem Einschalten der Betriebsspannung hochgefahren</li>
      </ul>
      <li class="text-weight-bolder">Warmstart</li>
      <ul>
        <li>Routinen zur Hardware-Initialisierung werden nicht ausgeführt</li>
        <li>
          Ausführung des Warmstarts unterscheidet sich je nach Betriebssystem
        </li>
      </ul>
      <li class="text-weight-bolder">Suspend to disk</li>
      <ul>
        <li>auch Ruhezustand oder Hibernating</li>
        <li>
          gesamter Arbeitsspeicherinhalt auf Festplatte geschrieben und während
          des Bootvorgangs wieder hineingeschrieben
        </li>
      </ul>
      <li class="text-weight-bolder">Suspend to RAM</li>
      <ul>
        <li>auch Standby-Modus</li>
        <li>
          Rechner wird nicht ausgeschaltet, aber alle Bufferinhalte
          (Zwischenspeicher) in RAM geschrieben
        </li>
        <li>meisten Geräte und Großteil der CPU wird stillgelegt</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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
