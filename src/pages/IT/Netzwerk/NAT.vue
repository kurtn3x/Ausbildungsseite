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
      NAT - Network Address Translation
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>
        Sammelbegriff bei Änderung von Adressen im IP-Header von IP-Paketen
      </li>
      <li>
        ermöglicht die gleichzeitige Verwendung einer öffentlichen Adresse durch
        mehrere Hosts
      </li>
      <li>Nicht für IPv6 vorgesehen</li>
      <li>
        man unterscheidet zwischen SNAT (Source Network Address Translation /
        Quellen-NAT) und DNAT (Destination Network Address Translation /
        Ziel-NAT)
      </li>
      <li>
        In Privatnetzwerken übernimmt der Router im Netzwerk die SNAT, da er die
        Verbindung zum Internet herstellt
      </li>
      <li>
        <a class="text-weight-bold">Carrier Grade NAT:</a> Provider teilt dem
        Endkunden eine private IP-Adresse aus dem Bereich 10.0.0.0/8 zu. Der
        Provider ist dann für die NAT-Vermittlung zuständig und nicht der Router
        des Endkunden. <a class="text-green">Vorteil für Provider </a>(spart an
        öffentlichen IPs), <a class="text-red">Nachteil für Endkunden </a>(kann
        keine öffentlich-erreichbaren Dienste bereitstellen, kein
        Port-Forwarding, mehr Fehlerquellen).
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      SNAT - Source-NAT / Quellen-NAT
    </div>
    <ul>
      <li>
        besondere Verwendung aufgrund Knappheit öffentlicher IPv4-Adressen
      </li>
      <li>auch Sicherheit durch Trennung von internen und externen Netzen</li>
      <li>
        interne Rechner können von Außen nicht mehr direkt angesprochen werden
      </li>
      <li class="text-weight-bold">Funktionsweise:</li>
      <ul>
        <li>
          Client schickt Datenpaket mit Ziel-Adresse außerhalb des lokalen
          Netzwerks → wird an Router geleitet
        </li>
        <li>
          Router ersetzt die Quell-Adresse des Datenpakets durch seine
          öffentliche Adresse
        </li>
        <li>Router ersetzt Port-Nummer durch andere Port-Nummer</li>
        <li>
          Router führt eine interne Tabelle mit den geänderten Quell-Adressen
          und Port-Nummern, um die Pakete bei der Antwort wieder zuteilen zu
          können
        </li>
        <li>Einträge aus dieser Tabelle nach kurzer Zeit gelöscht</li>
        <li>
          Bei Antwort ersetzt der Router dann die Ziel-Adresse durch die Adresse
          des Clients und die Port-Nummer mit der hinterlegten Port-Nummer
        </li>
        <q-img
          class="bg-grey-5 q-mt-md"
          :src="src + '/Netzwerke/snat.gif'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/snat.gif';
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
        PAT (Port and Address Translation) bzw. NAPT (Network Address Port
        Translation) erweitert das SNAT
      </li>
      <ul>
        <li>
          PAT schreibt nicht nur IP-Adressen, sondern auch Port-Nummern um
        </li>
        <li>
          z.B. mehrere Clients senden Daten mit dem selben Source-Port aus der
          dynamischen Port-Range → Konflikt bei der Zustellung mit reinem NAT,
          mehrere Einträge mit dem selben LAN-Port bei unterschiedlichen Clients
          in der internen NAT-Tabelle (Router könnte Antworten nicht mehr
          eindeutig zuweisen)
        </li>
        <li>
          Lösung: Vorhandene LAN-Port-Nummern in der internen NAT-Tabelle immer
          plus 1 rechnen, bis ein Port frei ist
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      DNAT - Destination-NAT / Ziel-NAT / Port-Forwarding
    </div>
    <ul>
      <li>verwendet um das Ziel eines IP-Pakets zu ändern</li>
      <li>
        Anwendung beim Ändern der öffentlichen IP eines Internet-Anschlusses in
        die private IP-Adresse eines Senders
      </li>
      <li>
        auch als "Port-Forwarding" in Verbindung mit UDP/TCP-Verbindungen
        bekannt
      </li>
      <li class="text-weight-bold">Funktionsweise:</li>
      <ul>
        <li>Im Router wird ein TCP-Port fest einer IP-Adresse zugeordnet</li>
        <li>
          Alle Pakete, die auf diesem Port eingehen werden an die hinterlegte
          IP-Adresse weitergeleitet
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.elektronik-kompendium.de/sites/net/bilder/08121113.gif <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'NATPage',
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
