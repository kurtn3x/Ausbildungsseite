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
      Normungen, Standards & Organisationen
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Liste an Normungsinstituten
    </div>
    <ul>
      <li class="text-weight-bolder">DIN</li>
      <ul>
        <li>Deutsches Institut für Normungen e.V.</li>
        <li>
          z.B. Normungen zu Videoüberwachungsanlagen(Videoübertragungsprotokolle
          & Anforderungen)
        </li>
      </ul>
      <li class="text-weight-bolder">ISO</li>
      <ul>
        <li>International Organisation for Standardization</li>
        <li>Normen in allen Gebieten außer Elektrotechnik</li>
      </ul>
      <li class="text-weight-bolder">IEC</li>
      <ul>
        <li>International Electrotechnical Commission</li>
        <li>Erarbeitet Normen in Gebieten Elektrotechnik</li>
      </ul>
      <li class="text-weight-bolder">ITU</li>
      <ul>
        <li>International Telecommunication Union</li>
        <li>Empfehlen zu technischen Themen der Telekommunikation</li>
      </ul>
      <li class="text-weight-bolder">IEEE</li>
      <ul>
        <li>Institute of Electrical and Electronics Engineers</li>
        <li>viele wichtige Standards in Netzwerken</li>
        <li>z.B. IEEE 802.3 - Ethernet</li>
      </ul>
      <li class="text-weight-bolder">NIST</li>
      <ul>
        <li>National Insitute of Standards and Technology</li>
        <li>Zuständig für einige Verschlüsselungsverfahren, z.B. AES, DES</li>
      </ul>
      <li class="text-weight-bolder">ANSI</li>
      <ul>
        <li>American National Standards Institute</li>
        <li>z.B. ASCII basiert auf Standard von ANSI</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Liste an Organisationen verbunden mit Adressvergaben
    </div>
    <ul>
      <li class="text-weight-bolder">ICANN</li>
      <ul>
        <li>Internet Corporation for Assigned Names and Numbers</li>
        <li>koordiniert einmalige Namen und Adressen im Internet</li>
        <li>z.B. DNS-Namen und IP-Adressen</li>
        <li class="text-weight-bolder">IANA</li>
        <ul>
          <li>Internet Assigned Numbers Authority</li>
          <li>Abteilung der ICANN</li>
          <li>Zuordnung von Nummern und Namen im Internet</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Regional Internet Registry</li>
      <ul>
        <li>
          ist eine regional mit der Verwaltung von Internet-Ressourcen betraute
          Organisation
        </li>
        <li>
          zuständig für die Vergabe von IP-Adressbereichen und AS(autonomes
          System)-Nummern
        </li>
        <li>dazu gehören unter anderem:</li>
        <ul>
          <li class="text-weight-bolder">RIPE NCC</li>
          <ul>
            <li>Réseaux IP Européens Network Coordination Centre</li>

            <li>
              Zuständigkeitsbereich: Europa, Naher Osten und Teil Zentralasiens
            </li>
          </ul>
          <li class="text-weight-bolder">ARIN</li>
          <ul>
            <li>American Registry for Internet Numbers</li>
            <li>Zuständigkeitsbereich: Besonders Nordamerika</li>
          </ul>
          <li class="text-weight-bolder">APNIC</li>
          <ul>
            <li>Asia-Pacific Network Information Centre</li>
            <li>Zuständigkeitsbereich: Asien & Pazifik</li>
          </ul>
        </ul>
      </ul>
      <li class="text-weight-bolder">Local Internet Registry</li>
      <ul>
        <li>
          kleinere Organisationen, die unter der Regional Internet Registry
          stehen
        </li>
        <li>
          bekommen von einer Regional Internet Registry IP-Adressen und
          AS-Nummern zur Verwaltung und Vergabe an Endkunden zugeteilt
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'NormungenStandardsPage',
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
