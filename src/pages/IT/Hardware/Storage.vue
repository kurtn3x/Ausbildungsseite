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
      Storage & Backup
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      DAS, NAS & SAN
    </div>
    <ul>
      <li class="text-weight-bolder">DAS - Direct Attached Storage</li>
      <ul>
        <li>eine Festplatte, die direkt mit einem Server verbunden ist</li>
        <li>Server kontrolliert Zugriff auf Speicherplatz</li>
        <li>
          Andere können über Benutzerrichtlichen oder Freigaben Zugriff auf den
          Speicher erhalten
        </li>
      </ul>

      <li class="text-weight-bolder">NAS - Network Attached Storage</li>
      <ul>
        <li>
          konfigurierbarer Datenspeicher, um in einem Netzwerk Speicherplatz zur
          Verfügung zu stellen
        </li>
        <li>Festplatten nicht an Server gebunden</li>
        <li>
          Besteht aus Festplatten, Stromversorgung und einem Netzwerkinterface
        </li>
        <li>jedes NAS muss einzeln konfiguriert werden</li>
        <li>für kleinere Unternehmen bzw. bis zu Privateinsatz</li>
        <li>Zugriff über Remoteprotokoll wie SMB, NFS, FTP oder auch HTTP</li>
        <li>unkompliziert und schnell</li>
        <li>oft Datensicherheit durch konfigurierbares RAID</li>
      </ul>

      <li class="text-weight-bolder">SAN - Storage Area Network</li>
      <ul>
        <li>
          Speicherung großer Datenmengen unabhängig von Standort und
          Betriebssystem
        </li>
        <li>zentral verwaltet und zu virtuellen Einheiten zusammengefasst</li>
        <li>
          Zugriff auf Speicher erfolgt über die Server, die für die Verwaltung
          der Laufwerke zuständig sind
        </li>
        <li>
          Ziel ist auch die Zusammenfassung einzelner Festplatten, damit der
          Speicher von allen Servern gemeinsam genutzt werden kann → gesamter
          Speicher steht als ein Block zur Verfügung
        </li>
        <li>Flexibilität durch vereinfachte Speicherzuweisung</li>
        <li>
          verschiedene Schnitstellen: Fibre Channel, iSCSI, Ethernet, Infiniband
        </li>
        <li>oft große Unternehmen bzw. wichtige Services</li>
        <li>hohe Datendurchsätze und niedrige Latenz</li>
      </ul>
      <q-img
        class="fit bg-grey-5"
        :src="src + '/datenschutz/RAID/NASSAN.jpg'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/datenschutz/RAID/NASSAN.jpg';
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
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Storage-Protokolle
    </div>
    <ul>
      <li class="text-weight-bolder">SMB</li>
      <li class="text-weight-bolder">NFS</li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Arten von Backups
    </div>
    <ul>
      <li class="text-weight-bolder">Vollständiges Backup</li>
      <ul>
        <li>
          kopieren des gesamten Datensatzes, unabhängig davon, ob Änderungen
          vorgenommen wurden
        </li>
        <li>langsam und beansprucht am meisten Speicherplatz</li>
      </ul>

      <li class="text-weight-bolder">inkrementelles Backup</li>
      <ul>
        <li>
          es werden nur die Dateien gesichert, die sich seit dem letzten Backup
          verändert haben
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>schnell und effizient</li>
          <li>benötigen wenig Speicherplatz</li>
          <li>spart Netzwerkbandbreite</li>
          <li>kosteneffizient</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>
            Wiederherstellung der Daten ist zeitaufwending und komplex
            (Erfordert das letzte vollständige Backup und alle darauffolgenden
            inkrementellen Backups zur Datenwiederherstellung)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">differentielles Backup</li>
      <ul>
        <li>
          es werden nur die Dateien gesichert, die sich seit dem letzten
          <a class="text-blue">vollständigen</a> Backup verändert haben
        </li>
        <li>
          Größe der Backupdatei nimmt immer weiter zu, bis zum nächsten
          Vollbackup
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>
            Wiederherstellung des Backups einfach (erfordert nur das letzte
            vollständige Backup und das letzte differentielle Backup)
          </li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>größere Backups</li>
          <li>
            dauert dadurch länger, nutzt mehr Speicherplatz und verursacht mehr
            Netzwerklast
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Cloning</li>
      <li class="text-weight-bolder">Blockbasiert</li>
      <li class="text-weight-bolder">Dateibasiert</li>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Sonstige Begriffe
    </div>
    <ul>
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
        <li>Eliminieren redundanter Dateien auf einem Speichersystem</li>
        <li>Es wird nur eine Instanz einer Datei gespeichert</li>
        <li>
          z.B. gleiches Dokument, welches in verschiedenen Unterordnern
          gespeichert wird, wird dedupliziert, sodass das gespeicherte Dokument
          nur einmal wirklich gespeichert wurde und die restlichen "Dateien" nur
          auf das echte Dokument zeigen
          https://www.computerweekly.com/de/tipp/Im-Vergleich-Komprimierung-Deduplizierung-Verschluesselung
        </li>
      </ul>

      <li class="text-weight-bolder">SCSI - Small Computer System Interface</li>
      <ul>
        <li>
          Protokoll zur Steuerung der Kommunikation zwischen Massenspeicher und
          Controller
        </li>
        <li>
          Besteht aus 2 Teilen: dem Kabelbus, der das Kabel, die Stecker und die
          elektrischen Signale festlegt und dem Software-Protokoll, das die
          Übertragung von Daten und den Zugriff auf den Bus regelt
        </li>
        <li>
          SCSI als Hardware-Schnittstelle spielt keine Rolle mehr, jedoch wird
          das Protokoll immernoch häufig verwendet z.B. SAS, iSCSI
        </li>
        <li class="text-weight-bold">iSCSI</li>
        <ul>
          <li>SCSI über TCP/IP-Netzwerk</li>
          <li>Verschicken von SCSI-Kommandos in TCP-Paketen</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">FC - Fibre Channel</li>
      <ul>
        <li>Übertragungssystem, das für Speichernetze (SAN) eingesetzt wird</li>
        <li>logische Erweiterung des SCSI-Busses</li>
        <li>Überträgt SCSI-Befehle und Daten in serieller Form in einem SAN</li>
        <li>
          benötigt teure Hardware → FCIP (Fibre Channel over IP) und FCoE (Fibre
          Channel over Ethernet) zur Datenübertragung durch Ethernet und TCP/IP
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://medium.com/teamresellerclub/what-is-the-difference-between-san-and-nas-storage-9e5d0b0b94b2
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'StoragePage',
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
