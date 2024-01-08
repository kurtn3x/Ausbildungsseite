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
        RAID & Storage
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        RAID
      </div>
      <ul>
        <li>RAID = redundant array of independent discs</li>
        <li>
          dient zur Organisation mehrerer Massenspeicher zu einem logischen
          Laufwerk, um eine höhere Ausfallsicherheit oder Datenübertragungsrate
          gewährleisten zu können
        </li>
      </ul>
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        RAID-Level
      </div>
      <ul>
        <li class="text-body1 text-weight-bolder">Gebräuchliche RAID-Level:</li>
        <ul>
          <li class="text-weight-bold">RAID 0: Striping</li>
          <ul>
            <li>
              Keine Redundanz, also keine Verringerung der
              Ausfallwahrscheinlichkeit
            </li>
            <li>
              Zusammenhängende Festplatten werden in Blöcke gleicher Größe
              unterteilt und im "Reißverschlussverfahren", also abwechselnd zu
              einer großen Platte verbunden.
            </li>
            <li>
              Erhöhung der Übertragungsraten, da parellelle Zugriffe möglich
            </li>

            <q-img
              class="fit bg-grey-5 q-mt-md"
              :src="src + '/datenschutz/RAID/RAID0.png'"
              style="max-width: 200px"
              @click="
                show_img = true;
                popupsrc = '/datenschutz/RAID/RAID0.png';
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
          </ul>
          <li class="text-weight-bold q-mt-md">RAID 1: Mirroring</li>
          <ul>
            <li>Verbund von mindestens zwei Festplatten</li>
            <li>
              speichert auf allen Festplatten die gleichen Daten -> volle
              Redundanz
            </li>
            <li>Kapazität so groß, wie kleinste Festplatte</li>

            <q-img
              class="fit bg-grey-5 q-mt-md"
              :src="src + '/datenschutz/RAID/RAID1.png'"
              style="max-width: 200px"
              @click="
                show_img = true;
                popupsrc = '/datenschutz/RAID/RAID1.png';
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
          </ul>
          <li class="text-weight-bold q-mt-md">
            RAID 5: Block-Level Striping mit verteilten Paritätsinformationen
          </li>
          <ul>
            <li>
              Paritätsinformation = Information zum Rekonstruieren fehlender
              Daten
            </li>
            <li>
              Speichern von Paritätsinformationen auf verschiedenen Festplatten
            </li>
            <li>
              Je ein Datenblock von Datenblockgruppe enthält
              Paritätsinformationen.
            </li>
            <li>Nutzdaten auf alle anderen Datenblöcke verteilt</li>
            <li>
              nutzbare Kapazität = (Anzahl Festplatten - 1) * Kapazität der
              kleinsten Festplatte
            </li>

            <q-img
              class="fit bg-grey-5 q-mt-md"
              :src="src + '/datenschutz/RAID/RAID5.png'"
              style="max-width: 300px"
              @click="
                show_img = true;
                popupsrc = '/datenschutz/RAID/RAID5.png';
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
          </ul>
        </ul>
        <li class="text-weight-bolder q-mt-md">Ungebräuchliche RAID-Level:</li>
        <ul>
          <li class="text-weight-bold">
            RAID 2: Bit-Level Striping mit Hamming-Code basierter
            Fehlerkorrektur
          </li>
          <ul>
            <li>keine Verwendung mehr</li>
            <li>
              Daten in Bitfolgen fester Größe zerlegt und mittels eines
              fehlerkorrigierenden Block-Codes (Hamming-Code) auf größere
              Bitfolgen abgebildet
            </li>
          </ul>
          <li class="text-weight-bold">
            RAID 3: Byte-Level Striping mit Paritätsinformationen auf seperater
            Festplatte
          </li>
          <ul>
            <li>
              Nutzdaten normal auf einer oder mehreren Festplatten gespeichert
            </li>
            <li>Summeninformation auf zusätzlicher Festplatte</li>
          </ul>
          <li class="text-weight-bold">
            RAID 4: Block-Level Striping mit Paritätsinformationen auf seperater
            Festplatte
          </li>
          <ul>
            <li>
              Paritätsinformationen werden berechnet und auf eine dedizierte
              Festplatte geschrieben
            </li>
            <li>
              wie RAID 5, jedoch Paritätsinformationen nur auf einer Platte
            </li>
          </ul>
          <li class="text-weight-bold">
            RAID 6: Block-Level Striping mit doppelt verteilter
            Paritätsinformation
          </li>
          <ul>
            <li>
              Striping mit doppelten, auf Block-Level verteilten
              Paritätsinformationen
            </li>
            <li>benötigt mindestens vier Festplatten</li>
            <li>ähnlich zu RAID 5</li>
          </ul>
        </ul>
        <li class="text-weight-bolder">RAID-Zusammenschlüsse:</li>
        <ul>
          <li>
            es gibt auch eine Menge RAID-Zusammenschlüsse, d.h. das verbinden
            mehrerer RAID-Level
          </li>
          <li>Beispiele:</li>
          <ul>
            <li>RAID 10-Verbund: RAID 0 über mehrere RAID 1.</li>
            <q-img
              class="fit bg-grey-5 q-mt-md"
              :src="src + '/datenschutz/RAID/RAID10.png'"
              style="max-width: 300px"
              @click="
                show_img = true;
                popupsrc = '/datenschutz/RAID/RAID10.png';
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
            <li>RAID 01-Verbund: RAID 1 über mehrere RAID 0</li>
            <li>
              Raid 30-Verbund: RAID 0, welches mehrere RAID 3 zusammenfasst
            </li>
          </ul>
        </ul>
        <ul></ul>
      </ul>
      <q-separator class="q-mt-md" />
      <div class="text-weight-bold text-h6 q-ml-md text-third q-mt-md">
        JBOD- Just a bunch of disks (kein RAID)
      </div>
      <ul>
        <li>Mehrere Festplatten verbunden zu einem logischen Volumen.</li>
        <li>
          Verfügbare Kapazität ist einfach die gesamte Kapazität aller
          Festplatten zusammen.
        </li>
        <li>Keine Redundanz & schlechtere Datenübertragungsraten</li>
        <li>da kein RAID, kein RAID-Controller erforderlich</li>
        <li>Gut für z.B. Archivierung</li>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/datenschutz/RAID/JBOD.png'"
          style="max-width: 300px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/RAID/JBOD.png';
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
        SAN & NAS
      </div>
      <ul>
        <li class="text-weight-bold">NAS- Network Attached Storage</li>
        <ul>
          <li>für kleinere Unternehmen bzw. bis zu Privateinsatz</li>
          <li>
            Speichergerät, welches mit dem Netzwerk verbunden ist und Nutzern
            zentrales Abrufen und Speichern von Daten ermöglicht
          </li>
          <li>Zugriff über Remoteprotokoll wie SMB oder NFS</li>
          <li>unkompliziert und schnell</li>
        </ul>
        <li class="text-weight-bold">SAN- Storage Area Network</li>
        <ul>
          <li>oft große Unternehmen bzw. wichtige Services</li>
          <li>Teil des Gesamt-Netzwerkes</li>
          <li>Datenspeicherung in zentralem, blockbasierten Shared Storage</li>
          <li>
            Verbindung der einzelnen Server mit ihren LUNs (Logical Unit Number)
          </li>
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
      <div class="text-subtitle2 text-grey font-size-small">
        Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
        https://commons.wikimedia.org/wiki/File:RAID_0.svg<br />
        https://commons.wikimedia.org/wiki/File:RAID_1.svg
        <br />
        https://commons.wikimedia.org/wiki/File:RAID_5.svg <br />
        https://commons.wikimedia.org/wiki/File:JBOD.svg <br />
        https://medium.com/teamresellerclub/what-is-the-difference-between-san-and-nas-storage-9e5d0b0b94b2
        <br />
        Ich bin nicht der Eigentümer der oben genannten Bilder.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'RaidPage',
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
