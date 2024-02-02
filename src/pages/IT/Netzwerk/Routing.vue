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
      Routing
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li class="text-weight-bold">
        bezeichnet allgemein das Festlegen von Wegen für Nachrichtenströme in
        Rechnernetzen
      </li>
      <li>wird durch einen Router ermöglicht</li>
      <li>IP-Adressen für das Ziel werden aus dem IP-Header bestimmt</li>
      <li class="text-weight-bolder">Bestimmen von Routen</li>
      <ul>
        <li>
          <a class="text-weight-bold">Routing-Tabellen</a> geben auf jedem
          netzwerkfähigen Gerät an, wohin ein bestimmtes Paket als nächstes
          (Next-Hop-Adresse) gesendet werden soll
        </li>
        <li>
          Die Next-Hop-Adresse(bzw. Route) für ein Paket wird bestimmt, indem
          die Ziel-IP-Adresse in der Routing-Tabelle gesucht wird und die
          passende oder beste Next-Hop-Adresse(bzw. Route) gewählt wird
        </li>
        <li>
          Die Next-Hop-Adresse der Default-Route (0.0.0.0) wird immer als
          letzter Ausweg gewählt, falls keine passenden Routen in der
          Routing-Tabelle vorzufinden sind
        </li>
        <li class="text-weight-bold">
          Routing-Tabellen können statisch(statisches Routing) und dynamisch
          (dynamisches Routing) angelegt werden
        </li>
        <ul>
          <li class="text-weight-bold">statisches Routing</li>
          <ul>
            <li>Routen werden im Vorfeld manuell konfiguriert</li>
            <li>
              findet Verwendung, wenn es nur eine Route oder eine bevorzugte
              Route gibt um ein Ziel zu erreichen
            </li>
            <li>
              ressourcenschonend, da Netz nicht mit Nachrichten von
              Routingprotokollen belastet wird
            </li>
            <li>nach direkten Verbindungen höchste Priorität</li>
          </ul>
          <li class="text-weight-bold">dynamisches Routing</li>
          <ul>
            <li>
              verwenden verschiedener Protokolle, um mehrere mögliche Routen zu
              berechnen und den besten Weg für den Datenverkehr zu finden
            </li>
            <li>Router passen ihre Routingtabelle dynamisch an</li>
            <li>
              z.B.: werden die Protokolle OSPF oder RIP für die Erzeugung
              dynamischer Routen verwendet
            </li>
            <li>
              findet Verwendung, wenn sich die Routen im Netzwerk häufig ändern
            </li>
          </ul>
        </ul>
        <li>
          In Routing-Tabellen können auch mehrere Wege zum Ziel führen. Dann
          werden <a class="text-weight-bolder">Metriken </a> verwendet, um die
          beste Route zu bestimmen
        </li>
        <li class="text-weight-bolder">Routing-Metrik</li>
        <ul>
          <li>
            numerisches Maß der Güte einer Route: je niedriger, desto besser
          </li>
          <li>
            Faktoren zur Bestimmung sind z.B. Verzögerung, Last, Hop-Count oder
            Verlässlichkeit
          </li>
          <li>
            werden statisch gesetzt oder über Routingprotokolle und Algorithmen
            bestimmt
          </li>
          <li>
            Direkt angeschlossene Netze und statische Routen haben meistens die
            höchste Priorität
          </li>
          <li>
            Dynamische Routen besitzen eine niedrigere Priorität und haben oft
            zugewiesene Metriken
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Routing-Protokolle und -Begriffe
    </div>
    <ul>
      <li class="text-weight-bolder">Das autonome System</li>
      <ul>
        <li>
          bezeichnet eine Menge von Routern mit einem gemeinsamen inneren
          Gateway-Protokoll und gemeinsamen Metriken, die bestimmen, wie Pakete
          innerhalb des autonomen Systems vermittelt werden
        </li>
        <li>
          innerhalb autonomer Systeme werden Interior-Gateway-Protokolle
          verwendet, um Routen zu bestimmen
        </li>
        <li>
          zwischen autonomen Systemen werden Exterior-Gateway-Protokolle
          verwendet, um Routen zu bestimmen
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/autonomessystem.jpg'"
          style="max-width: 350px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/autonomessystem.jpg';
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
      <li class="text-weight-bolder q-mt-md">Administrative Distanz</li>
      <ul>
        <li>
          nummerisches Maß des Vertrauens bzw. der Güte eines Routing-Protokolls
          in einem Router: je niedriger, desto besser
        </li>
        <li>
          Wenn ein Router über verschiedene Routing-Protokolle seine
          Routing-Informationen erhält, werden die Routing-Informationen des
          Protokolls mit der niedrigsten administrativen Distanz priorisiert
        </li>
        <li>
          Es werden quasi die Routen der vertrauenswürdigsten Routing-Protokolle
          priorisiert.
        </li>
        <li>
          Normalerweise haben direkt verbundene Netze die niedrigste (beste)
          Administrative Distanz, gefolgt von statischen Routen. Danach folgen
          die tatsächlichen Routing-Protokolle.
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/addistance.webp'"
          style="max-width: 350px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/addistance.webp';
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
      <li class="text-weight-bolder q-mt-md">
        Link-State- und Distanzverktor-Protokolle
      </li>
      <ul>
        <li class="text-weight-bold">Link-State-Routing-Protokolle</li>
        <ul>
          <li>Teile der Welt mit, wer deine Nachbarn sind</li>
          <li>Router lernen die Topologie des gesamten Netzwerks</li>
          <li>z.B. OSPF, IS-IS</li>
        </ul>

        <li class="text-weight-bold">Distanzvektor-Protokolle</li>
        <ul>
          <li>Teile deinen Nachbarn mit, wie für dich die Welt aussieht</li>
          <li>Übermitteln der eigenen Routingtabelle an die Nachbarrouter</li>
          <li>
            Nachbarrouter lernen, dass sie über den Sender der Informationen
            weitere Netzwerke erreichen können
          </li>
          <li>
            eine allgemeinere Form der Distanzverktorprotokolle sind die
            Pfadvektorprotokolle, welche eine bessere Erkennung von Schleifen
            dank mitführen von mehr Informationen gewährleisten. Dazu gehört
            z.B. BGP
          </li>
          <li>z.B. RIP, (BGP)</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">
        Interior-Gateway- und Exterior-Gateway-Protokolle
      </li>
      <ul>
        <li class="text-weight-bold">Interior Gateway Protokolle</li>
        <ul>
          <li>
            Routingprotokolle, die innerhalb von autonomen Systemen eingesetzt
            werden (Intradomain-Routing)
          </li>
          <li>besserer Umgang mit komplizierten Netzwerk Topologien</li>
          <li>z.B. OSPF, IS-IS, RIP</li>
        </ul>
        <li class="text-weight-bold">Exterior Gateway Protokolle</li>
        <ul>
          <li>
            dienen dazu, Erreichbarkeitsinformationen zwischen autonomen
            Systemen auszutauschen, also Informationen darüber, welche Netze
            erreichbar sind
          </li>
          <li>z.B. BGP</li>
        </ul>
      </ul>

      <li class="text-weight-bolder">Beispiele von Routing-Protokollen</li>
      <ul>
        <li class="text-weight-bold">OSPF - Open Shortest Path First</li>
        <ul>
          <li>
            wird verwendet um auf dynamische Weise die schnellsten und kürzesten
            verfügbaren Routen für Pakete zu ihrem Ziel zu ermitteln
          </li>
        </ul>

        <li class="text-weight-bold">
          IS-IS - Intermediate System to Intermediate System Protocol
        </li>
        <ul>
          <li>
            nutzt den SPF (shortest-path-first) Algorithmus, um Routen zu
            bestimmen
          </li>
          <li>
            erkennt schnell Netzwerkänderungen und evaluiert, ob bei
            Netzwerkänderungen nur teilweise Routenneuberechnungen stattfinden
            müssen (PRC - partial route calculation) oder eine komplette
            SPF-Neuberechnung stattfinden muss.
          </li>
        </ul>

        <li class="text-weight-bold">BGP - Border Gateway Protocol</li>
        <ul>
          <li>
            wird verwendet, um anzukündigen, welche Netzwerke welche IP-Adressen
            kontrollieren und welche Netzwerke miteinander verbunden sind
          </li>
          <li>
            Netzwerke, welche diese BGP-Ankündigungen durchführen werden auch
            als autonome Systeme bezeichnet
          </li>
          <li>
            findet zwischen Routern in meist großen, verzweigten Netzwerken
            statt
          </li>
          <li>
            i(nternal)BGP: BGP zwischen Routern innerhalb eines autonomen
            Systems
          </li>
          <li>
            e(xternal)BGP: BGP zwischen Routern verschiedener autonomer Systeme
          </li>
        </ul>

        <li class="text-weight-bold">RIP - Routing Information Protocol</li>
        <ul>
          <li>
            verwendet den "Hop Count" um den kürzesten Weg von einem Netzwerk
            zum anderen zu finden
          </li>
          <li>
            Der "Hop Count" gibt die Anzahl der Router an, die ein Paket auf dem
            Weg zum Ziel durchlaufen muss
          </li>
        </ul>
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
      <li class="text-weight-bolder">
        Limited Broadcast und Directed Broadcast
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
            Viele Router sind mittlerweile standardmäßig so eingestellt, das
            Directed-Broadcasts nicht weitergeleitet werden. Generell sollen
            Directed-Broadcasts nicht mehr weitergeleitet werden, da sie
            Sicherheitsprobleme wie z.B. DoS-Attacken mit sich bringen.
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
          Unterschied zu Broadcast: Beim Multicast ist eine Anmeldung beim
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
      <li class="text-weight-bolder">Unicast</li>
      <ul>
        <li>Adressierung einer Nachricht an einen einzelnen Empfänger</li>
        <li>
          IPv6 reserviert bestimmte Bereiche für Unicast-Adressen, diese dienen
          der temporären Verbindung mit IPv4-Netzen oder der Zuordnung einzelner
          Geräte innerhalb geschlossener Netze
        </li>
      </ul>
      <li class="text-weight-bolder">Anycast</li>
      <ul>
        <li>
          eine ganze Gruppe von Rechnern nutzt eine gemeinsame Adresse, es wird
          aber nur der Rechner mit der kürzesten Route erreicht
        </li>
        <li>
          sinvoll für das Erstellen dynamischer Routen mithilfe von oben
          genannten Routing-Protokollen (Verwendung besonders von Routern)
        </li>
      </ul>
      <q-img
        class="fit bg-grey-5"
        :src="src + '/Netzwerke/routingverfahren.gif'"
        style="max-width: 400px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/routingverfahren.gif';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>
      <li class="text-weight-bolder q-mt-md">Hot-Potatoe</li>
      <ul>
        <li>Pakete werden so schnell wie möglich weitergeleitet</li>
        <li>Routen können dadurch unoptimal sein</li>
        <li>ressourcenschonend</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Routingtabellen schriftlich
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
      <div>
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
      </div>
      <div>
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
      </div>

      <li class="q-mt-sm">
        Die Default-Route (0.0.0.0) wurde für den Hop zur Zentrale Köln
        eingetragen, da dort das Gateway zum Internet ist. Das heißt, alle
        Anfragen zu IP-Adressen, welche nicht in der Routing-Tabelle stehen,
        werden an die Zentrale Köln geleitet. Der Router dort kümmert sich dann
        um die Weiterleitung ins Internet bzw. in das lokale Netz.
      </li>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://i.adroitacademy.com/blog/34101035.jpg <br />
      https://www.flackbox.com/wp-content/uploads/2020/03/word-image-4.webp
      <br />
      https://lh3.googleusercontent.com/proxy/GwmoHJQ9OoWLoF4KWtwZSJIFFcHka7VxNluoQIn0DU6m4WGNSvVm_T_96nVH4lpe4qT8ujRr_eyC3GenmXoXO5cJdLGQoDu_l7JDywvncowgVJEa0QU
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
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
