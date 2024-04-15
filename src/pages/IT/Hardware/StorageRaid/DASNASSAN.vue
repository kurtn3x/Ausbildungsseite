Storage-Protokolle, -Übertragungsmedien und -Hardwareschnittstellen
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
      DAS, NAS & SAN
    </div>
    <q-separator class="q-mt-md" />

    <ul>
      <li>
        = verschiedene Storage-Arten zur Speicherung und zum Zugriff auf Daten
        im Netzwerk
      </li>
      <li class="text-weight-bolder text-h7 text-secondary">
        DAS - Direct Attached Storage
      </li>
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

        <li class="text-green">Vorteile:</li>
        <ul>
          <li>geringe Kosten</li>
          <li>wenig Hardware</li>
          <li>performant</li>
          <li>kein zusätzlicher Protokollstack</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>Nur ein Host</li>
          <li>Eingeschränkte Skalierbarkeit</li>
          <li>Eingeschränkte Reichweite</li>
        </ul>
      </ul>

      <li class="text-weight-bolder text-h7 text-secondary">
        NAS - Network Attached Storage
      </li>
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
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>einfache Anbindung</li>
          <li>konkurrierende Zugriffe mehrerer Clients</li>
          <li>geringe Stromkosten</li>
          <li>gute Kompatibilität</li>
          <li>RAID möglich</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>TCP-/IP-Protokollstack ungeeignet für Storage-Traffic</li>
          <li>Hohe Belastung des LANs durch TCP-/-IP-Traffic</li>
        </ul>
      </ul>

      <li class="text-weight-bolder text-h7 text-secondary">
        SAN - Storage Area Network
      </li>
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

        <li class="text-green">Vorteile:</li>
        <ul>
          <li>hohe Transferraten</li>
          <li>niedrige Latenz</li>
          <li>hohe Reichweite</li>
          <li>Zentralisierung des Speichers</li>
          <li>einfache Administration des Speichers</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>teuer</li>
          <li>kompliziert</li>
          <li>Kompatibilitätsprobleme (jeder Hersteller macht sein Ding)</li>
          <li>Extra Infrastrukturebene für Speicher</li>
        </ul>
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
