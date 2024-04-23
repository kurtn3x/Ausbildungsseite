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
      Storage & Backup
    </div>
    <q-separator class="q-mt-md" />

    <div
    class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"

    >
      DAS, NAS & SAN
    </div>
    <ul>
      <li>
        verschiedene Storage-Arten zur Speicherung und zum Zugriff auf Daten im
        Netzwerk
      </li>
      <li class="text-weight-bolder text-h7">DAS - Direct Attached Storage</li>
      <ul>
        <li>
          eine Festplatte/Speichergerät, welches direkt mit einem Host verbunden
          ist
        </li>
        <li>Host kontrolliert Zugriff auf Speicherplatz</li>
        <li>
          Andere können über Benutzerrichtlichen oder Freigaben Zugriff auf den
          Speicher erhalten
        </li>
        <li>Punkt-zu-Punkt Schnittstellen wie SCSI, SAS, USB</li>
        <li>
          <a class="text-green">Vorteile:</a> geringe Kosten, wenig Hardware,
          kein zusätzlicher Protokollstack, performant
        </li>
        <li>
          <a class="text-red">Nachteile:</a> Nur ein Host, Eingschränkte
          Skalierbarkeit, Eingeschränkte Reichweite
        </li>
      </ul>

      <li class="text-weight-bolder text-h7">NAS - Network Attached Storage</li>
      <ul>
        <li>
          dedizierter Dateiserver (meist als Komplettlösung mit Festplatten,
          Stromversorgung & Netzwerkinterface, teilweise aber auch in z.B.
          modernen Routern )
        </li>
        <li>
          Anbindung über Standard Ethernet-Interface wie RJ45 und Verwenden des
          typischen TCP/IP-Protokoll-Stacks
        </li>
        <li>
          Zugriff auf Networking-Dateisysteme über Remoteprotokoll wie SMB, NFS,
          FTP oder auch HTTP
        </li>
        <li>Dateibasierter Zugriff z.B. \\server\freigabe</li>
        <li>oft Datensicherheit durch konfigurierbares RAID</li>
        <li>für kleinere Unternehmen bzw. bis zu Privateinsatz</li>
        <li>
          <a class="text-green">Vorteile:</a> Einfache Anbindung, konkurrierende
          Zugriffe mehrerer Clients, gute Kompatibilität, geringe Stromkosten
          durch Einfachheit, RAID möglich
        </li>
        <li>
          <a class="text-red">Nachteile:</a> TCP/IP-Protokoll-Stack ungeeignet
          für Storage-Traffic, Hohe Belastung des LANs
        </li>
      </ul>

      <li class="text-weight-bolder text-h7">SAN - Storage Area Network</li>
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
          Speicher steht als ein Block zur Verfügung (blockbasierter Zugriff)
        </li>
        <li>
          verschiedene (netzwerkorientierte) Schnitstellen: Fibre Channel,
          iSCSI, Ethernet, Infiniband
        </li>
        <li>oft große Unternehmen bzw. wichtige Services</li>
        <li>
          <a class="text-green">Vorteile:</a> Hohe Transferraten, Niedrige
          Latenz, Hohe Reichweite, Zentralisierung des Speichers und dadurch
          einfachere Administration
        </li>
        <li>
          <a class="text-red">Nachteile:</a> Teuer, Kompliziert,
          Kompatibilitätsprobleme da jeder Hersteller eigene Standards
          verwendet, Extra Infrastrukturebene für Speicher
        </li>
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

      </q-img>
    </ul>
    <q-separator class="q-mt-md" />
    <div
    class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"

    >
      Storage-Protokolle, -Übertragungsmedien und -Hardwareschnittstellen
    </div>
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
          das Protokoll immernoch häufig verwendet z.B. SAS, iSCSI
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
    <q-separator class="q-mt-md" />
    <div
    class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"

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
        <li>sichert Dateien unabhängig von Archivbit</li>
        <li>setzt das Archivbit zurück</li>
      </ul>

      <li class="text-weight-bolder">inkrementelles Backup</li>
      <ul>
        <li>
          es werden nur die Dateien gesichert, die sich seit dem letzten Backup
          verändert haben
        </li>
        <li>
          sichert also alle Dateien, die über ein gesetztes Archivbit verfügen
        </li>
        <li>Archivbit wird zurückgesetzt</li>
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
          sichert also alle Dateien, die über ein gesetztes Archivbit verfügen
        </li>
        <li>das Archivbit bleibt unverändert</li>
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
      <li>
        Die oben genannten Backupstrategien stellen selten die Realität dar. Oft
        werden Hybrid-Typen verwendet die nicht direkt einer Backupstrategie
        zugeordnet werden können.
      </li>
    </ul>

    <q-separator class="q-mt-md" />
    <div
    class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"

    >
      Sonstige Begriffe
    </div>
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

      <li class="text-weight-bolder">blockbasierter Dateizugriff</li>
      <ul>
        <li>Speicherung von Daten in Blöcken</li>
        <li>
          Blöcke durch willkürlich zugewiesene Kennung identifiziert, mit der
          sie gespeichert oder gelesen werden können
        </li>
        <li>Dateisystem ordnet Dateien einer Folge von Blöcken zu</li>
        <li class="text-green">Vorteile:</li>
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
