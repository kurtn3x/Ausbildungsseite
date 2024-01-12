<template>
  <q-page>
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Routing
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold">
        bezeichnet allgemein das Festlegen von Wegen für Nachrichtenströme in
        Rechnernetzen
      </li>
      <li>wird durch einen Router ermöglicht</li>
      <li>
        neben dem typischen IP-Routing gibt es auch weitere Routing-Protokolle
        (siehe
        <a class="text-third"> Routing-Protokolle</a>)
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
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
      <li class="text-weight-bold q-mt-sm">Realität:</li>
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
            style="height: 40px; font-size: 10px; background-color: transparent"
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
      Routing-Protokolle
    </div>
    <ul>
      <li class="text-weight-bold">IP-Routing</li>
      <ul>
        <li>
          Router inspiziert den Header eines Pakets um zu bestimmen, wohin es
          gesendet werden soll
        </li>
      </ul>
      <li class="text-weight-bold">BGP - Border Gateway Protocol</li>
      <ul>
        <li>
          wird verwendet, um anzukündigen, welche Netzwerke welche IP-Adressen
          kontrollieren und welche Netzwerke miteinander verbunden sind
        </li>
        <li>
          Netzwerke, welche diese BGP-Ankündigungen durchführen werden auch als
          autonome Systeme bezeichnet
        </li>
        <li>
          findet zwischen Routern in meist großen, verzweigten Netzwerken statt
        </li>
      </ul>
      <li class="text-weight-bold">OSPF - Open Shortest Path First</li>
      <ul>
        <li>
          wird verwendet um auf dynamische Weise die schnellsten und kürzesten
          verfügbaren Routen für Pakete zu ihrem Ziel zu ermitteln
        </li>
      </ul>
      <li class="text-weight-bold">RIP - Routing Information Protocol</li>
      <ul>
        <li>
          verwendet den "Hop Count" um den kürzesten Weg von einem Netzwerk zum
          anderen zu finden
        </li>
        <li>
          Der "Hop Count" gibt die Anzahl der Router an, die ein Paket auf dem
          Weg durchlaufen muss
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Besondere Routing-Adressen und -Verfahren
    </div>
    <ul>
      <li class="text-weight-bolder">Localhost bzw. Loopback</li>
      <ul>
        <li>benennt den lokalen Rechner</li>
        <li>
          Ermöglicht innerhalb eines Rechners die Kommunikation netzwerkfähiger
          Programme untereinander.
        </li>
        <li>
          <a class="text-weight-bold">IPv4:</a> meist 127.0.0.1 bzw. das gesamte
          Netz 127.0.0.0/8
        </li>
        <li><a class="text-weight-bold">IPv6:</a> ::1</li>
      </ul>

      <li class="text-weight-bolder">Default-Route</li>
      <ul>
        <li>
          Die Standart-Route. Wird gewählt wenn es keine spezifischen Routen für
          eine Zieladresse in der Routingtabelle gibt.
        </li>

        <li><a class="text-weight-bold">IPv4:</a> 0.0.0.0/0</li>
        <li>
          <a class="text-weight-bold">IPv6:</a> ::/0 (
          0000:0000:0000:0000:0000:0000:0000:0000/0)
        </li>
      </ul>
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
      <li class="text-weight-bolder">Multicast</li>
      <ul>
        <li>Nachrichtenübertragung von einem Punkt zu einer Gruppe</li>
        <li>
          zeitgleich Nachrichten an mehrere Teilnehmer, ohne dass sich die
          Datenübertragungsrate beim Sender mit der Zahl der Empfänger erhöht
        </li>
        <li>
          Sollte im Normalfall immer der Router sein, der Traffic ins Internet
          ermöglicht.
        </li>
        <li>
          unterschied zu Broadcast: Beim Multicast ist eine Anmeldung beim
          Sender erforderlich, beim Broadcast erhält jeder, der die Nachricht
          empfangen kann die Nachricht
        </li>
        <li>
          Beim IP-Multicast werden die IP-Adressen auf Pseudo-MAC-Adressen
          abgebildet
        </li>
        <li>
          <a class="text-weight-bold">IPv4:</a> untersten 23 Bit der IP-Adresse
          in die MAC-Adresse 01-00-5e-00-00-00 eingesetzt. Dabei kann es auch
          selten zu Überschneidungen kommen.
        </li>
        <li>
          <a class="text-weight-bold">IPv6:</a> letzten 32 Bit der Adresse in
          die MAC-Adresse 33-33-XX-XX-XX-XX eingesetzt. Auch hierbei kann es
          Überschneidungen geben.
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
          Routingtabelle so ausfüllen, dass Kommunikation mit der Filiale Berlin
          und Zentrale Köln möglich ist.
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

      <li class="q-mt-sm">
        Die Default-Route (0.0.0.0) wurde für den Hop zur Zentrale Köln
        eingetragen, da dort das Gateway zum Internet ist. Das heißt, alle
        Anfragen zu IP-Adressen, welche nicht in der Routing-Tabelle stehen,
        werden an die Zentrale Köln geleitet. Der Router dort kümmert sich dann
        um die Weiterleitung ins Internet bzw. in das lokale Netz.
      </li>
    </ul>
  </q-page>
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
