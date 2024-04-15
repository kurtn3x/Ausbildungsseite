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
      Storage-Protokolle, -Übertragungsmedien und -Hardwareschnittstellen
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder">NFS - Network File System (Protokoll)</li>
      <ul>
        <li>Netzwerkprotokoll, das Zugriff auf Dateien ermöglicht</li>
        <li>
          Dateien werden nicht direkt übertragen, sondern Nutzer greifen auf
          Remote-Dateien so zu, als wären sie auf ihrer lokalen Festplatte
        </li>
        <li>Kommunikation zwischen NFS-fähigen Client und NFS-Server</li>
        <li>
          Server prüft bei Zugriff ob die Datei existiert und ob der Client
          Zugriffsrechte hat
        </li>
        <li>
          Server mountet Datei oder Verzeichnis remote auf dem Client und teilt
          den Zugriff über eine virtuelle Verbindung
        </li>
        <li>Serverdatei verhält sich für Client ähnlich wie lokale Datei</li>
        <li>Neueste NFS-Version: NFSv4</li>
        <li>besonders Linux</li>
      </ul>
      <li class="text-weight-bolder">SMB - Server Message Block (Protokoll)</li>
      <ul>
        <li>Netzwerkprotokoll für Datei-, Druck- und andere Serverdienste</li>
        <li>Netzwerkdateisystem ähnlich wie NFS</li>
        <li>
          Dateien werden nicht auf lokalem SMB-Client gemountet, sondern über
          einen Netzwerkpfad auf eine Netzwerkfreigabe bereitgestellt
        </li>
        <li>Neueste SMB-Version: SMB 3.1.1</li>
        <li>besonders Windows</li>
        <li>
          auf Linux wird eine Kompatibilität mithilfe des Projekts
          <a class="text-weight-bold">Samba</a> ermöglicht, welches
          Windows-proprietäre Funktionen wie Datei- und Druckerdienste oder die
          Domain-Controller-Funktionalität unter anderen Betriebssystemen
          verfügbar macht
        </li>
      </ul>

      <li class="text-weight-bolder">
        SCSI - Small Computer System Interface (Protokolle & Schnittstellen)
      </li>
      <ul>
        <li>
          Protokoll zur Steuerung der Kommunikation zwischen Massenspeicher und
          Controller
        </li>
        <li>
          SCSI als Hardware-Schnittstelle spielt keine Rolle mehr, jedoch wird
          das Protokoll immernoch häufig in abgewandelter Form verwendet z.B.
          SAS, iSCSI
        </li>
        <li class="text-weight-bold">iSCSI - Internet SCSI</li>
        <ul>
          <li>SCSI über TCP/IP-Netzwerk</li>
          <li>Verschicken von SCSI-Kommandos in TCP-Paketen</li>
          <li>billiger & einfacher als Fibre Channel</li>
          <li>
            blockbasierter Zugriff, hohe Geschwindigkeiten und weitere Vorteile
            wie Jumbo-Frames und Multipathing
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">
        FC - Fibre Channel (Schnitstelle, Protokoll-Stack)
      </li>
      <ul>
        <li>Übertragungssystem, das für Speichernetze (SAN) eingesetzt wird</li>
        <li>
          liefert verlustfreihe, chronologisch aufgereihte, rohe Blockdaten
        </li>
        <li>hoher Durchsatz und geringe Latenz</li>
        <li>
          benötigt teure Hardware → FCIP (Fibre Channel over IP) und FCoE (Fibre
          Channel over Ethernet) zur Datenübertragung TCP/IP und Ethernet
        </li>
      </ul>

      <li class="text-weight-bolder">Infiniband (Schnitstelle)</li>
      <ul>
        <li>
          Spezifikation einer Hardwareschnitstelle für
          High-Performance-Computing
        </li>
        <li>
          Hochgeschwindigkeitsübertragung auf kurze Distanz mit geringer Latenz
        </li>
        <li>
          Verwendung in Computerclustern, bei der Verbindung zwischen Servern
          aber auch besonders bei Verbindungen mit Massenspeichern wie SAN
        </li>
      </ul>

      <li class="text-weight-bolder">HTTP (Protokoll)</li>
      <ul>
        <li>
          Übertragung von Websiten aus dem World Wide Web auf den Webbrowser
        </li>
        <li>
          Nicht als Speicherprotokoll vorgesehen, jedoch trotzdem oft verwendet
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ProtokollePage',
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
