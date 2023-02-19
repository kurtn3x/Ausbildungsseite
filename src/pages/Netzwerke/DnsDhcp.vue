<template>
  <div class="text-body1 q-ma-lg">
    <q-dialog v-model="show_img">
      <q-img :src="src + popupsrc" class="bg-grey-5" />
    </q-dialog>
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      DNS und DHCP
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third text-third"
    >
      DNS
    </div>
    <ul>
      <li>
        Übersetzt Menschenlesbare Namen wie www.google.de in IP-Adressen, welche
        der Computer verwenden kann
      </li>
      <li><a class="text-weight-bolder">Autoratives DNS:</a></li>
      <ul>
        <li>
          Bietet Aktualisierungsmechanismus, welcher die öffentlichen DNS-Namen
          verwaltet
        </li>
        <li>Antwortet auch rekursiven DNS-Servern</li>
      </ul>
      <li><a class="text-weight-bolder">Rekursives DNS:</a></li>
      <ul>
        <li>Normalerweise erster Ansprechpunkt für Clients</li>
        <li>Auch Resolver genannt</li>
        <li>
          Handelt als vermittler zwischen Client und autorativen DNS-Servern,
          kann auch Anfragen direkt beantworten, falls sie im Cache gespeichert
          sind
        </li>
        <li>
          Falls Anfragen nicht im Cache sind, leitet er sie an einen oder
          mehrere autorative DNS-Server weiter
        </li>
      </ul>
      <li><a class="text-weight-bolder">DNS Anfrage - Beispiel</a></li>
      <q-img
        :src="src + '/Netzwerke/DNS/DNS.png'"
        class="bg-grey-5 q-mt-md"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/DNS/DNS.png';
        "
        style="width: 600px"
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
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third text-third"
    >
      DHCP
    </div>
    <ul>
      <li>Dynamic Host Configuration Protocol</li>
      <li>Automatisches Zuordnen von IP-Adressen über das DHCP Protokoll</li>
      <li><a class="text-weight-bold">3 Modi:</a></li>
      <ul>
        <li>Statisches DHCP: feste Zuordnung von MAC Adresse und IP</li>
        <li>
          Automatisches DHCP: Adressen in einer Range werden automatisch &
          permanent vergeben
        </li>
        <li>
          Dynamisches DHCP: Adressen in einer Range werden automatisch und mit
          einer Verleihzeit (Lease-Time) vergeben.
        </li>
      </ul>
      <li><a class="text-weight-bolder">DHCP Anfrage - Ablauf</a></li>
      <ul>
        <li>
          Client sendet an <a class="text-weight-bolder">ALLE </a> Anderen im
          Netz eine DHCP-Discover Anfrage (Broadcast).
        </li>
        <li>
          <a class="text-weight-bolder">ALLE </a> DHCP Server antworten dem
          Client mit einem DHCP-Offer, welcher einige wichtige Daten beinhaltet
          (IP, Subnetz, ...).
        </li>
        <li>
          Der Client aktzeptiert (meistens) den schnellsten, jedoch nur exakt
          einen DHCP-Offer und sendet an
          <a class="text-weight-bolder">ALLE </a> Anderen im Netz den
          DHCP-Request. Davor schaut der Client mit ARP noch, ob die DHCP-Offer
          Adresse wirklich frei ist. Der DHCP-Request beinhaltet eine
          spezifische Adresse von dem Server, der das DHCP-Offer gestellt hat
          und nur der, der das DHCP-Offer erstellt hat aktzeptiert diese
          Nachricht.
        </li>
        <li>
          Der Server antwortet dem Client mit einem DHCP-ACK Packet, welcher
          weitere Informationen wie Lease Duration und Einstellungen beinhaltet.
        </li>
        <q-img
          :src="src + '/Netzwerke/DNS/DHCP.png'"
          class="bg-grey-5 q-mt-md"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/DNS/DHCP.png';
          "
          style="width: 400px"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
});
</script>
