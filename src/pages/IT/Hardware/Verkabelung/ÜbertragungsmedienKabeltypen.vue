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
      Übertragungsmedien & Kabeltypen
    </h1>
    <q-separator class="q-mt-md" />
    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      Übertragungsmedien
    </div>
    <ul>
      <li class="text-weight-bolder text-h7">Leitergebundene</li>
      <ul>
        <li class="text-weight-bold">Metallische/elektrische Leiter:</li>
        <ul>
          <li>
            Koaxialkabel ( Übertragung von Hochfrequenzsignalen (Fernsehantennen
            / Satellitenschüsseln))
          </li>
          <li class="text-secondary">Twisted-Pair</li>
        </ul>
        <li class="text-weight-bold">Nicht-Metallische/optische Leiter:</li>
        <ul>
          <li class="text-secondary">Lichtwellenleiter (Glasfaser)</li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7">Leiterungebundene</li>
      <ul>
        <li>
          <a class="text-weight-bold">Funkübertragung:</a> WLAN/Wi-Fi,
          Bluetooth, NFS, Mobilfunk
        </li>
        <li><a class="text-weight-bold">Optische Übertragung:</a> Laserlink</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      Twisted-Pair
    </div>

    <ul>
      <li>Vier verdrillte Adern-Paare</li>
      <li>Elektromagnetische Strahlung strahlt parallel vom Sender ab</li>
      <li>
        Durch Verdrillen wird in andere Richtung als der Partner gestrahlt
      </li>
      <li>Unterschiedliche Standards: Cat5, Cat6, Cat7, Cat8</li>
      <li>
        Twisted-Pair-Kabel besitzen unterschiedliche Arten von Abschirmungen,
        welche einen zusätzlichen Schutz gegen störende äußere
        elektromagnetische Felder bieten
      </li>
      <li>Maximale Reichweite: 100m</li>
      <q-img
        class="fit"
        :src="src + '/Hardware/twisted-pair.png'"
        @click="
          show_img = true;
          popupsrc = '/Hardware/twisted-pair.png';
        "
        style="max-width: 600px"
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

    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      Lichtwellenleiter
    </div>
    <ul>
      <li>Lichtleitung erfolgt mittels Quarzglas oder Kunststoff</li>
      <li>
        bestehen im Inneren aus einem Kern und einen umgebenden Mantel mit
        niedrigerem Brechungsindex
      </li>
      <li class="text-green">Vorteile gegenüber Twisted-Pair:</li>
      <ul>
        <li>unempfindlich gegen elektromagnetische Störungen</li>
        <li>wenig eigene Störaussendung</li>
        <li>robuster gegen Umwelteinflüsse</li>
        <li>Geringere Dämpfung</li>
        <li>Höhere Übertragungsrate</li>
        <li>Größere Reichweiten möglich</li>
        <li>Keine Erdung und Potenzialausgleich erforderlich</li>
        <li>abhörsicher</li>
      </ul>
      <li class="text-red">Nachteile gegenüber Twisted-Pair:</li>
      <ul>
        <li>kein Power over Ethernet möglich</li>
        <li>Komplexere Verbindungstechnik als z.B. Twisted-Pair</li>
        <li>Zerbrechlich</li>
        <li>Größerer Installationsaufwand</li>
      </ul>
      <li class="text-underline text-weight-bold">Monomode/Singlemode</li>
      <ul>
        <li>sehr dünner Kerndurchmesser</li>
        <li>Licht als gerader Strahl durchgeleitet</li>
        <li>nur ein Lichtmodus</li>
        <li>bis zu 40km Reichweite bei 10Gbit/s</li>
        <li>
          <a class="text-green">Vorteile:</a> große Distanzen, hohe Bandbreiten,
          geringe Dämpfung des Signals
        </li>
        <li>
          <a class="text-red">Nachteile: </a>teurere Laser zur Einspeisung des
          Lichts notwendig, größerer Aufwand bei Herstellung, schwierige
          Installation
        </li>
        <q-img
          class="fit"
          :src="src + '/Hardware/singlemode.jpg'"
          @click="
            show_img = true;
            popupsrc = '/Hardware/singlemode.jpg';
          "
          style="max-width: 400px"
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
      <li class="text-underline q-mt-sm text-weight-bold">Multimode</li>
      <ul>
        <li>Kerndurchmesser relativ dick</li>
        <li>Licht bricht in vielen Winkeln und verliert an Genauigkeit</li>
        <li>gleichzeitige Ausbreitung mehrerer Modi oder Lichstrahlen</li>
        <li>bis zu 550m Reichweite bei 10Gbit/s</li>
        <li>
          <a class="text-green">Vorteile:</a> geringerer Aufwand bei
          Herstellung, einfachere Installation
        </li>
        <li>
          <a class="text-red">Nachteile:</a> größere Signaldämpfung und
          Laufzeitverschiebung, geringere Bandbreiten, kürzere Distanzen
        </li>
        <q-img
          class="fit"
          :src="src + '/Hardware/multimode.jpg'"
          @click="
            show_img = true;
            popupsrc = '/Hardware/multimode.jpg';
          "
          style="max-width: 400px"
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />

    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.glasfaserkabel.de/images/content/lichtausbreitung-singlemode.jpg
      <br />
      https://www.glasfaserkabel.de/images/content/lichtausbreitung-multimode.jpg
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ÜbertragungsmedienKabeltypenPage',
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
