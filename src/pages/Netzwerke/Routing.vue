<template>
  <q-dialog v-model="show_img">
    <q-img :src="src + popupsrc" class="bg-grey" />
  </q-dialog>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-primary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">Routing</div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold text-h6">Router</li>
      <ul>
        <li>
          Zwischensystem zwischen zwei Netzen, benötigt in beiden eine
          IP-Adresse
        </li>
        <li>
          ist in der Lage, Datenpakete zwischen zwei verschiedenen Netzen
          weiterzuleiten
        </li>
        <li>
          Heutige Router haben oft viele weitere funktionen: NAS, Firewall, WLAN
          (- Access Point), DHCP & DNS, uvm.
        </li>
      </ul>
      <li class="text-weight-bold text-h6">Routing - Ablauf:</li>
      <ul>
        <li>
          Sender ermittelt den für das gewünschte Ziel zuständigen Router
          (Routingtabelle).
        </li>
        <li>Sender ermittelt MAC-Adresse dieses Routers (ARP).</li>
        <li>
          Sender erstellt Ethernet-Paket -> Ziel-MAC-Adresse des Routers,
          Ziel-IP-Adresse des Empfängers sowie MAC und IP des Senders
        </li>
        <li>Sender schickt Ethernet Paket an den Router.</li>
        <li>Router verarbeitet das Paket und ermittelt MAC des Empfängers.</li>
        <li>
          Router ändert das Paket -> Ziel-MAC-Adresse des Empfängers,
          Quell-MAC-Adresse von ihm selbst.
        </li>
        <li class="text-weight-bold">Einfaches Beispiel von Routing:</li>
        <ul>
          <q-img
            :src="src + '/Netzwerke/Routing/RoutingEinfach.png'"
            class="bg-grey-5 q-mt-md"
            style="width: 600px"
          />
        </ul>
        <li class="text-weight-bold">Realität:</li>
        <ul>
          <q-img
            :src="src + '/Netzwerke/Routing/RoutingRealitat.png'"
            class="bg-grey-5 q-mt-md"
            style="width: 600px"
          />
        </ul>
      </ul>
      <li class="text-weight-bold q-mt-md text-h6">
        Limited Broadcast vs Direct Broadcast
      </li>
      <ul>
        <li class="text-weight-bold">Limited Broadcast</li>
        <ul>
          <li>Ziel-IP-Adresse: 255.255.255.255</li>
          <li>
            Ziel liegt immer im eigenen lokalen Netz und wird direkt in einen
            Ethernet-Broadcast umgesetzt.
          </li>
          <li>wird nicht von Routern weitergeleitet</li>
        </ul>
        <li class="text-weight-bold">Directed Broadcast / Network Broadcast</li>
        <ul>
          <li>
            Ziel-IP-Adresse: Broadcast-Adresse des Netzes z.B. 192.168.2.255/24
          </li>
          <li>
            wird vom Router weitergeleitet, falls Quell- und Zielnetz
            unterschiedlich sind und wird erst im Zielnetz zu Ethernet-Broadcast
            umgewandelt
          </li>
          <li>
            Falls Quell- und Zielnetz identisch sind, entspricht dies einem
            Limited Broadcast
          </li>
          <li>
            Mittlerweile sollen Router nicht mehr Direct Broadcasts
            weiterleiten.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bold q-mt-md text-h6">Localhost</li>
      <ul>
        <li>benennt den lokalen Rechner</li>
        <li>
          Ermöglicht es, netzwerkfähigen Programmen innerhalb eines Rechners
          untereinander zu kommunizieren
        </li>
      </ul>

      <li class="text-weight-bold q-mt-md text-h6">Anderes</li>
      <ul>
        <li>
          <a class="text-weight-bolder">Default-Route 0.0.0.0:</a> Das Gateway
          zum Internet. Sollte im Normalfall immer der Router sein, der Traffic
          ins Internet ermöglicht.
        </li>
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
