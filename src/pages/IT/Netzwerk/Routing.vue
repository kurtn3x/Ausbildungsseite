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
        Routing
      </div>
      <q-separator class="q-mt-md" />
      <ul>
        <li class="text-weight-bolder">Router</li>
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
            Heutige Router haben oft viele weitere funktionen: NAS, Firewall,
            WLAN (- Access Point), DHCP & DNS, uvm.
          </li>
        </ul>
        <li class="text-weight-bold">Einfaches Beispiel von Routing:</li>
        <ul>
          <q-img
            class="fit bg-grey-5"
            :src="src + '/Netzwerke/Routing/RoutingEinfach.png'"
            style="max-width: 600px"
            @click="
              show_img = true;
              popupsrc = '/Netzwerke/Routing/RoutingEinfach.png';
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
        <li class="text-weight-bold">Realität:</li>
        <ul>
          <q-img
            style="max-width: 600px"
            class="fit bg-grey-5"
            :src="src + '/Netzwerke/Routing/RoutingRealitat.png'"
            @click="
              show_img = true;
              popupsrc = '/Netzwerke/Routing/RoutingRealitat.png';
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
      <q-separator class="q-mt-md" />
      <div
        class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Besondere Routing-Methoden
      </div>
      <ul>
        <li class="text-weight-bolder q-mt-md">
          Limited Broadcast und Direct Broadcast
        </li>
        <ul>
          <li class="text-weight-bold">
            IPv6 implementiert keine Broadcast-Methoden
          </li>
          <li class="text-weight-bold">Limited Broadcast</li>
          <ul>
            <li>Ziel-IP-Adresse: 255.255.255.255</li>
            <li>
              Ziel liegt immer im eigenen lokalen Netz und wird direkt in einen
              Ethernet-Broadcast umgesetzt.
            </li>
            <li>wird nicht von Routern weitergeleitet</li>
          </ul>
          <li class="text-weight-bold">
            Directed Broadcast / Network Broadcast
          </li>
          <ul>
            <li>
              Ziel-IP-Adresse: Broadcast-Adresse des Netzes z.B.
              192.168.2.255/24
            </li>
            <li>
              wird vom Router weitergeleitet, falls Quell- und Zielnetz
              unterschiedlich sind und wird erst im Zielnetz zu
              Ethernet-Broadcast umgewandelt
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
        <li class="text-weight-bolder">Localhost bzw. Loopback</li>
        <ul>
          <li>benennt den lokalen Rechner</li>
          <li>
            Ermöglicht innerhalb eines Rechners die Kommunikation
            netzwerkfähiger Programme untereinander.
          </li>
          <li>
            <a class="text-weight-bold">IPv4:</a> meist 127.0.0.1 bzw. das
            gesamte Netz 127.0.0.0/8
          </li>
          <li><a class="text-weight-bold">IPv6:</a> ::1</li>
        </ul>

        <li class="text-weight-bolder">Default-Route</li>
        <ul>
          <li>
            Die Standart-Route. Wird gewählt wenn es keine spezifischen Routen
            für eine Zieladresse in der Routingtabelle gibt.
          </li>
          <li>
            Sollte im Normalfall immer der Router sein, der Traffic ins Internet
            ermöglicht.
          </li>
          <li><a class="text-weight-bold">IPv4:</a> 0.0.0.0/0</li>
          <li>
            <a class="text-weight-bold">IPv6:</a> ::/0 (
            0000:0000:0000:0000:0000:0000:0000:0000/0)
          </li>
        </ul>
      </ul>
      <q-separator class="q-mt-md" />
      <div
        class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Routingtabellen
      </div>
      <ul>
        <li class="text-weight-bold">
          Beispiel-Aufgabe: Routingtabelle der Filiale Hamburg.
        </li>
        <ul>
          <li>
            Routingtabelle so ausfüllen, dass Kommunikation mit der Filiale
            Berlin und Zentrale Köln möglich ist.
          </li>
        </ul>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/Routing/RoutingtabelleVorgabe.png'"
          style="max-width: 800px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/Routing/RoutingtabelleVorgabe.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/Netzwerke/Routing/Routingtabelle.png'"
          style="max-width: 800px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/Routing/Routingtabelle.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>

        <li>
          Die Default-Route (0.0.0.0) wurde für den Hop zur Zentrale Köln
          eingetragen, da dort das Gateway zum Internet ist. Das heißt, alle
          Anfragen zu IP-Adressen, welche nicht in der Routing-Tabelle stehen,
          werden an die Zentrale Köln geleitet. Der Router dort kümmert sich
          dann um die Weiterleitung ins Internet bzw. in das lokale Netz.
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { Router } from 'vue-router';

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
