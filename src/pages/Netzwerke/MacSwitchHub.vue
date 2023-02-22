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
      <div
        class="text-center text-h4 text-weight-bolder q-mt-md text-secondary"
      >
        Netzwerke
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Mac-Adressen, Switche und Hubs
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
          Mac-Adressen (erste 3 Oktette / 24Bit bzw erste 6 Zeichen) =
          "Organizationally Unique Identifier"
        </li>
        <li class="text-weight-bold">
          Beispiel: 00-09-8C-00-69-63 oder auch : statt -
        </li>
        <li class="text-weight-bold">
          Mac-Adressen werden für die Adressierung im Ethernet-Header genutzt:
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
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        ARP- Address Resolution Protocol
      </div>
      <ul>
        <li>
          löst IP-Adressen in MAC-Adressen auf um Adressierung im
          Ethernet-Header zu gewährleisten
        </li>
        <li>wird benötigt um Pakete im Netz zu adressieren</li>
        <li>ARP-Request an "FF-FF-FF-FF-FF-FF" -> 'MAC-Broadcast'</li>
        <li>Daten werden in einem lokalen ARP-Cache gespeichert</li>
      </ul>
      <q-separator class="q-mt-md" />

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Hubs
      </div>
      <ul>
        <li>verbinden Geräte sternförmig</li>
        <li>keine Analyse der Mac-Adresse</li>
        <li>nur Verstärkung und Weiterleitung des Signals auf allen Ports</li>
        <li>kann Endgeräte nicht unterscheiden und sendet alles an Jeden</li>
        <li>
          Jede Kommunikation zwischen zwei Endgeräten besetzt alle Leitungen
        </li>
      </ul>
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Switche
      </div>
      <ul>
        <li>
          Können Mac-Adressen auswerten und lernt, welche sich an welchen Port
          befinden
        </li>
        <li>
          Diese Informationen werden in einer internen Tabelle gespeichert
        </li>
        <li>
          Kommunikation zwischen zwei Rechnern belegt nur die betroffenen
          Leitungen
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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
