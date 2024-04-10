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
      Weitere Netzwerkarten nach Ausdehnung
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder text-h7">PAN - Personal Area Network</li>
      <ul>
        <li>
          bezeichnet eine Ansammlung verschiedener Geräte im selben Raum (bzw.
          teilweise auch Gebäude)
        </li>
        <li>
          z.B. mit USB oder auch drahtlose Technik wie Bluetooth oder ZigBee
        </li>
        <li>
          Drahtlose PANs bezeichnet man auch als WPAN (Wireless Personal Area
          Network)
        </li>
        <li>Reichweite wenige Meter</li>
      </ul>
      <li class="text-weight-bolder text-h7">LAN - Local Area Network</li>
      <ul>
        <li>
          bezeichnet eine Ansammlung verschiedener Geräte im selben Gebäude
        </li>
        <li>
          kann zwei Geräte (z.B. Privathaushalt) aber auch tausende Geräte (z.B.
          Unternehmen) umfassen
        </li>
        <li>
          Standard: Ethernet, weniger geräuchlich auch ARCNET oder Token Ring
        </li>
        <li>
          schnelle Übertragung großer Datenmengen über Lichtwellenleiter oder
          Kupferkabel
        </li>
        <li>
          VLAN (virtuelles LAN) wird genutzt um Datenverkehr eines LANs in
          mehrere logische LANs aufzuteilen.
          <router-link to="/netzwerk/vlan" class="text-light-blue">
            Siehe auch VLAN</router-link
          >
        </li>
        <li>
          Ein LAN mittels drahtloser Verbindungen wird als WLAN (Wireless Local
          Area Network) bezeichnet.
          <router-link to="/netzwerk/wlan" class="text-light-blue">
            Siehe auch WLAN</router-link
          >
        </li>
        <li>z.B. Heimnetze oder Unternehmensnetze</li>
      </ul>
      <li class="text-weight-bolder text-h7">
        MAN - Metropolitan Area Network
      </li>
      <ul>
        <li>verbindet mehrere LANs in geografischer Nähe</li>
        <li>schnelle Übertragungsraten über Glasfaser</li>
        <li>Infrastruktur vom Netzwerkbetreiber zur Verfügung gestellt</li>
        <li>
          WMAN (Wireless Metropolitan Area Network) = größere regionale
          Funknetze
        </li>
      </ul>
      <li class="text-weight-bolder text-h7">WAN -Wide Area Network</li>
      <ul>
        <li>
          erstrecken sich über große geografische Bereiche wie Länder und
          Kontinente
        </li>
        <li>im Besitz bestimmer Organisationen</li>
      </ul>
      <li class="text-weight-bolder text-h7">GAN -Global Area Network</li>
      <ul>
        <li>weltumspannendes Netzwerk</li>
        <li>
          Datenverkehr auch über internationale Seekabel oder
          Satellitenübertragung
        </li>
        <li>z.B. das gesamte Internet</li>
      </ul>
      <div class="q-ml-md q-mt-md">
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/netzwerkarten.png'"
          style="max-width: 300px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/netzwerkarten.png';
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
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://ipcisco.com/wp-content/uploads/2022/03/types-of-networks-ipcisco.png
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'WeitereNetzwerkartenPage',
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
