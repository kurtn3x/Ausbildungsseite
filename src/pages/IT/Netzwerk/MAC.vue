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
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Die MAC-Adresse
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Mac-Adressen
    </div>
    <ul>
      <li>MAC = Media Access Control</li>
      <li>
        Weltweit eindeutige, unveränderbare Hardwareadresse jedes einzelnen
        Netzwerkadapters
      </li>
      <li>Bestehen aus 48 Bit also 6 Byte -> 2^48 verfügbare Adressen</li>
      <li>Hexadezimale Schreibweise</li>
      <li>
        Bestimmte Unternehmen unterhalten bestimmte Anfangsbereiche von
        Mac-Adressen (erste 3 Oktette / 6 Hexdezimalzahlen / 24Bit) =
        "Organizationally Unique Identifier"
      </li>
      <li class="text-weight-bold">
        Beispiel: 00-09-8C-00-69-63 oder auch : statt -
      </li>
      <li class="text-weight-bold">
        Mac-Adressen werden für die Adressierung im Ethernet-Frame genutzt:
      </li>
      <q-img
        class="fit bg-grey-5"
        :src="src + '/Netzwerke/MAC/EthernetHeader.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/MAC/EthernetHeader.png';
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
      ARP- Address Resolution Protocol
    </div>
    <ul>
      <li>
        löst IP-Adressen in MAC-Adressen auf um Adressierung im Ethernet-Header
        zu gewährleisten
      </li>
      <li>wird benötigt um Pakete im Netz zu adressieren</li>
      <li>ARP-Request an "FF-FF-FF-FF-FF-FF" -> 'MAC-Broadcast'</li>
      <li>Daten werden in einem lokalen ARP-Cache gespeichert</li>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://de.m.wikipedia.org/wiki/Datei:Ethernet_frame.svg <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MACPage',
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
