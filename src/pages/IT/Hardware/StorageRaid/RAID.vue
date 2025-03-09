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
      RAID
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      RAID
    </div>
    <ul>
      <li>RAID = redundant array of independent disks</li>
      <li>
        dient zur Organisation mehrerer Massenspeicher zu einem logischen
        Laufwerk, um eine höhere Ausfallsicherheit oder Datenübertragungsrate
        gewährleisten zu können
      </li>
      <li class="text-weight-bolder">RAID-Controller</li>
      <ul>
        <li>
          Verbinden mehrerer unabhängiger Festplatten zu einem logischen
          RAID-Verbund
        </li>
        <li>Steuern von Lese-und Schreibzugriffen</li>
        <li>
          abstrahiert die physischen Gegebenheiten, um dem Betriebssystem den
          Verbund als einen logischen Verbund darzustellen
        </li>
        <li>
          kann nur softwareseitig sein oder als unabhängiges Gerät fungieren
        </li>
        <li>Spezifikationen von Hardware-RAID-Controllern</li>
        <ul>
          <li>Datenübertragungsrate, z.B. 6Gb/s</li>
          <li>Unterstützte RAID-Level, z.B. 0, 1, 5, 6, 10</li>
          <li>Kompatibilität, z.B. bestimmte Betriebssysteme, vSphere</li>
          <li>Unterstützte Geräte/Schnittstellen, z.B. SAS/SATA</li>
          <li>Portanzahl, z.B. 4</li>
          <li>Größe des Caches</li>
          <li>interner Prozessor</li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      RAID-Level
    </div>
    <ul>
      <li class="text-weight-bold text-h7">RAID 0: Striping</li>
      <ul>
        <li>
          Keine Redundanz, also keine Verringerung der Ausfallwahrscheinlichkeit
        </li>
        <li>
          Zusammenhängende Festplatten werden in Blöcke gleicher Größe
          unterteilt und im "Reißverschlussverfahren", also abwechselnd zu einer
          großen Platte verbunden
        </li>
        <li>
          Striping = eine Datei in Dateifragmente aufteilt und auf
          unterschiedliche Festplatten verteilt
        </li>
        <li>
          → Erhöhung der Lese- und Schreibgeschwindigkeit, da parellele Zugriffe
          möglich
        </li>
        <li>fällt eine Festplatte aus, sind alle Daten verloren</li>
        <li>Mindestens 2 Festplatten</li>
        <li>Verfügbarer Speicherplatz: 100%</li>

        <q-img
          class="fit bg-grey-5"
          :src="src + '/datenschutz/RAID/RAID0.png'"
          style="max-width: 200px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/RAID/RAID0.png';
          "
        >
        </q-img>
      </ul>
      <li class="text-weight-bold q-mt-md text-h7">RAID 1: Mirroring</li>
      <ul>
        <li>Verbund von mindestens zwei Festplatten</li>
        <li>
          speichert auf allen Festplatten die gleichen Daten -> volle Redundanz
        </li>
        <li>
          es können alle Festplatten, bis auf eine ohne Datenverlust ausfallen
        </li>
        <li>Mindestens 2 Festplatten</li>
        <li>
          Verfügbarer Speicher: so viel, wie kleinste Festplatte (maximal 50%)
        </li>

        <q-img
          class="fit bg-grey-5"
          :src="src + '/datenschutz/RAID/RAID1.png'"
          style="max-width: 200px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/RAID/RAID1.png';
          "
        >
        </q-img>
      </ul>
      <li class="text-weight-bold q-mt-md text-h7">
        RAID 5: Block-Level Striping mit verteilten Paritätsinformationen
      </li>
      <ul>
        <li>
          Paritätsinformation = Information zum Rekonstruieren fehlender Daten
        </li>
        <li>Striping (Verteilen) der Nutzdaten und Paritätsinformationen</li>
        <li>
          Logische Gruppen werden aus Datenblöcken gebildet, die auf den
          beteiligten Festplatten an der selben Adresse liegen
        </li>
        <li>Berechnung der Parität aus logischer Gruppe</li>
        <li>
          Innerhalb einer Gruppe enthält ein Datenblock die
          Paritätsinformationen, die Anderen die Nutzdaten
        </li>
        <li>
          Schlechte Schreibgeschwindigkeit, durch Bildung der
          Paritätsinformationen
        </li>
        <li>es darf maximal eine Festplatte ausfallen</li>
        <li>Mindestens 3 Festplatten</li>
        <li>
          Verfügbarer Speicherplatz = (Anzahl Festplatten - 1) * Kapazität der
          kleinsten Festplatte
        </li>

        <q-img
          class="fit bg-grey-5"
          :src="src + '/datenschutz/RAID/RAID5.png'"
          style="max-width: 300px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/RAID/RAID5.png';
          "
        >
        </q-img>
      </ul>

      <li class="text-weight-bold text-h7 q-mt-md">
        RAID 6: Block-Level Striping mit doppelt verteilter Paritätsinformation
      </li>
      <ul>
        <li>
          Striping mit doppelten, auf Block-Level verteilten
          Paritätsinformationen
        </li>
        <li>benötigt mindestens vier Festplatten</li>
        <li>Aufwendige Wiederherstellung</li>
        <li>
          ähnlich zu RAID 5, verkraftet jedoch gleichzeitigen Ausfall von bis zu
          zwei Festplatten
        </li>
        <li>
          Verfügbarer Speicherplatz = (Anzahl Festplatten - 2) * Kapazität der
          kleinsten Festplatte
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/datenschutz/RAID/raid6.png'"
          style="max-width: 300px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/RAID/raid6.png';
          "
        >
        </q-img>
      </ul>
      <li class="text-weight-bolder text-h7 q-mt-md">RAID-Zusammenschlüsse:</li>
      <ul>
        <li>
          es gibt auch eine Menge RAID-Zusammenschlüsse, d.h. das verbinden
          mehrerer RAID-Level.
        </li>
        <li class="text-weight-bold">RAID 10-Verbund:</li>
        <ul>
          <li>RAID 0 über mehrere RAID 1</li>
          <li>
            Kombinierung der Sicherheit von Raid 1 und der gesteigerten
            Schreib-/Lesegeschwindigkeit von RAID 0
          </li>
          <li>
            Bessere Ausfallsicherheit und schnellere Rekonstruktion als RAID 01,
            da nur Teil der Daten rekonstruiert werden muss
          </li>
          <li>Mindestens 4 Festplatten</li>
          <li>Verfügbarer Speicher: 50% der gesamten Festplattenkapazität</li>
          <q-img
            class="fit bg-grey-5"
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
        </ul>
        <li class="text-weight-bold q-mt-md">RAID 01-Verbund:</li>
        <ul>
          <li>RAID 1 über mehrere RAID 0</li>
          <li>
            Kombinierung der Sicherheit von Raid 1 und der gesteigerten
            Schreib-/Lesegeschwindigkeit von RAID 0
          </li>
          <li>Verteilung der Nutzdaten und gespiegelten Daten (Striping)</li>

          <li>weniger Sicherheit als bei RAID 10</li>
          <li>Verfügbarer Speicher: 50% der gesamten Festplattenkapazität</li>
          <q-img
            class="fit bg-grey-5"
            :src="src + '/datenschutz/RAID/RAID01.png'"
            style="max-width: 300px"
            @click="
              show_img = true;
              popupsrc = '/datenschutz/RAID/RAID01.png';
            "
          >
          </q-img>
        </ul>
        <li class="q-mt-md">
          viele weitere RAID-Verbünde: RAID 03, RAID 05, RAID 1.5, ....
        </li>
      </ul>
      <li class="text-weight-bolder q-mt-md text-h7">
        Ungebräuchliche RAID-Level:
      </li>
      <ul>
        <li class="text-weight-bold">
          RAID 2: Bit-Level Striping mit Hamming-Code basierter Fehlerkorrektur
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
            wie RAID 5, jedoch Paritätsinformationen nur auf einer dedizierten
            Platte
          </li>
          <li>
            Paritätsplatte ist bei allen Schreib- und Leseoperationen beteiligt
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Nicht-RAID-Verbund
    </div>
    <ul>
      <li class="text-weight-bolder">JBOD- Just a bunch of disks</li>
      <ul>
        <li>Mehrere Festplatten verbunden zu einem logischen Volumen</li>
        <li>
          Verfügbare Kapazität ist einfach die gesamte Kapazität aller
          Festplatten zusammen.
        </li>
        <li>Keine Redundanz & schlechtere Datenübertragungsraten</li>
        <li>da kein RAID, kein RAID-Controller erforderlich</li>
        <li>
          <a class="text-underline">Unterschied zu RAID0:</a> Daten werden nicht
          gestriped, also wenn eine Festplatte in einem JBOD-Array verloren
          geht, gehen nur die Daten auf der Festplatte verloren. Bei RAID0 wären
          alle Daten verloren, da es Dateien striped und dadurch alle Dateien
          unvollständig wären.
        </li>
        <li>Gut für z.B. Archivierung</li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/datenschutz/RAID/JBOD.png'"
          style="max-width: 300px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/RAID/JBOD.png';
          "
        >
        </q-img>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:RAID_0.svg<br />
      https://commons.wikimedia.org/wiki/File:RAID_1.svg <br />
      https://commons.wikimedia.org/wiki/File:RAID_5.svg <br />
      https://commons.wikimedia.org/wiki/File:RAID_6.svg <br />
      https://commons.wikimedia.org/wiki/File:RAID_01.svg <br />
      https://commons.wikimedia.org/wiki/File:RAID_10.svg <br />
      https://commons.wikimedia.org/wiki/File:JBOD.svg <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
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
