<template>
  <div class="text-body1">
    <q-dialog v-model="show_img" full-width>
      <q-card class="full-width">
        <q-img :src="src + popupsrc" class="bg-grey-5 fit" />
      </q-card>
    </q-dialog>
    <div class="q-ma-lg">
      <div
        class="text-center text-h4 text-weight-bolder q-mt-md text-secondary"
      >
        Netzwerke
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Routing
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Routing Allgemein
      </div>
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
            Heutige Router haben oft viele weitere funktionen: NAS, Firewall,
            WLAN (- Access Point), DHCP & DNS, uvm.
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
          <li>
            Router verarbeitet das Paket und ermittelt MAC des Empfängers.
          </li>
          <li>
            Router ändert das Paket -> Ziel-MAC-Adresse des Empfängers,
            Quell-MAC-Adresse von ihm selbst.
          </li>
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
            zum Internet. Sollte im Normalfall immer der Router sein, der
            Traffic ins Internet ermöglicht.
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
          Beispiel: Routingtabelle der Filiale Hamburg.
        </li>
        <li>
          Die letzten beiden Zeilen der Routingtabellen sollten so ausgefüllt
          werden, dass Kommunikation mit der Filiale Berlin und Zentrale Köln
          möglich ist.
        </li>
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
          Die Default-Route wurde für den Hop zur Zentrale Köln eingetragen, da
          dort das Gateway zum Internet ist. Das heißt, alle Anfragen zu
          IP-Adressen, welche nicht in der Routing-Tabelle stehen, werden an die
          Zentrale Köln geleitet. Der Router dort kümmert sich dann um die
          Weiterleitung ins Internet bzw. in das lokale Netz.
        </li>
      </ul>
    </div>
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
