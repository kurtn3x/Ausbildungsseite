<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Storage
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      DAS - Direct Attached Storage
    </div>
    <ul>
      <li>eine Festplatte, die mit einem Server direkt verbunden ist</li>
      <li>Server kontrolliert Zugriff auf Speicherplatz</li>
      <li>
        Andere können über Benutzerrichtlichen oder Freigaben Zugriff auf den
        Speicher erhalten
      </li>
    </ul>

    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      NAS - Network Attached Storage
    </div>
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
    <q-separator class="q-mt-md" />
    <div class="row justify-center q-mt-md">
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
    </div>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      SAN - Storage Area Network
    </div>
    <ul>
      <li>
        Speicherung großer Datenmengen unabhängig von Standort und
        Betriebssystem
      </li>
      <li>zentral verwaltet und zu virtuellen Einheiten zusammengefasst</li>
      <li>
        Zugriff auf Speicher erfolgt über die Server, die für die Verwaltung der
        Laufwerke zuständig ist
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
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Sonstige Begriffe
    </div>
    <ul>
      <li class="text-weight-bold">SCSI - Small Computer System Interface</li>
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
      <li class="text-weight-bold">FC - Fibre Channel</li>
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
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://medium.com/teamresellerclub/what-is-the-difference-between-san-and-nas-storage-9e5d0b0b94b2
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </div>
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
