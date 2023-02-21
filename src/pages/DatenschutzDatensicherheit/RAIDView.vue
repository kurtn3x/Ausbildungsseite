<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Datenschutz und Datensicherheit
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      RAID-Level & NAS vs SAN
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Wichtigste RAID-Level
    </div>
    <ul>
      <li class="text-weight-bolder">RAID 0: Striping</li>
      <ul>
        <li>
          Keine Redundanz, also keine Verringerung der Ausfallwahrscheinlichkeit
        </li>
        <li>
          Zusammenhängende Festplatten in Blöcke gleicher Größe unterteilt und
          im "Reißverschlussverfahren", also abwechselnd zu einer großen Platte
          verbunden.
        </li>
        <li>Erhöhung der Übertragungsraten, da parellelle Zugriffe möglich</li>
        <q-img
          :src="src + '/datenschutz/RAID/RAID0.png'"
          class="bg-grey-5 q-mt-md"
          style="width: 150px"
        />
      </ul>
      <li class="text-weight-bolder q-mt-md">RAID 1: Mirroring</li>
      <ul>
        <li>Verbund von mindestens zwei Festplatten</li>
        <li>
          speichert auf allen Festplatten die gleichen Daten -> volle Redundanz
        </li>
        <li>Kapazität so groß, wie kleinste Festplatte</li>
        <q-img
          :src="src + '/datenschutz/RAID/RAID1.png'"
          class="bg-grey-5 q-mt-md"
          style="width: 150px"
        />
      </ul>
      <li class="text-weight-bolder q-mt-md">
        RAID 5: Block-Level Striping mit verteilten Paritätsinformationen
      </li>
      <ul>
        <li>
          Paritätsinformation = Information zum Rekonstruieren fehlender Daten
        </li>
        <li>
          Speichern von Paritätsinformationen auf verschiedenen Festplatten
          (RAID-4 nur auf einer)
        </li>
        <li>
          Je ein Datenblock von Datenblockgruppe enthält Paritätsinformationen.
        </li>
        <li>Nutzdaten auf alle anderen Datenblöcke verteilt</li>
        <li>
          nutzbare Kapazität = (Anzahl Festplatten -1) * Kapazität der kleinsten
          Festplatte
        </li>
        <q-img
          :src="src + '/datenschutz/RAID/RAID5.png'"
          class="bg-grey-5 q-mt-md"
          style="width: 250px"
        />
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-weight-bold text-h6 q-ml-md text-third q-mt-md">
      JBOD- Just a bunch of disks (kein RAID)
    </div>
    <ul>
      <li>Mehrere Festplatten verbunden zu einem logischen Volumen.</li>
      <li>
        Verfügbare Kapazität ist einfach die gesamte Kapazität aller Festplatten
        zusammen.
      </li>
      <li>Keine Redundanz & schlechtere Datenübertragungsraten</li>
      <li>da kein RAID, kein RAID-Controller erforderlich</li>
      <li>Gut für z.B. Archivierung</li>
      <q-img
        :src="src + '/datenschutz/RAID/JBOD.png'"
        class="bg-grey-5 q-mt-md"
        style="width: 200px"
      />
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
        :src="src + '/datenschutz/RAID/NASSAN.jpg'"
        class="bg-grey-5 q-mt-md"
        style="width: 500px"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
    };
  },
});
</script>
