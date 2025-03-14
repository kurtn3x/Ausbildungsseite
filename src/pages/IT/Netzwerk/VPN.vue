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
      VPN - Virtual Private Network
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li class="text-weight-bold">
        bezeichnet grundlegend eine Netzwerkverbindung, die von Unbeteiligten
        nicht einsehbar ist
      </li>
      <li>
        nur Kommunikationspartner, die zu diesem privaten Netzwerk gehören,
        können miteinander kommunizieren
      </li>
      <li>
        <a class="text-weight-bolder">VPN-Tunnel: </a>logische Verbindung
        zwischen beliebigen Endpunkten, dessen Datenpakete für andere nicht
        sichtbar sind
      </li>
      <li>
        <a class="text-weight-bolder">VPN-Endpunkt: </a>Stelle, an der der VPN
        Tunnel endet oder beginnt. Kann ein Router, Gateway oder Software-Client
        sein und erzeugt einen virtuellen Netzwerkadapter für Datenverkehr
      </li>
      <li class="text-weight-bolder">
        Außerdem gibt es verschiedene VPN-Typen:
      </li>
      <ul>
        <li class="text-weight-bold">End-to-Site-VPN / Remote-Access-VPN</li>
        <ul>
          <li>Ziel ist sicherer Zugriff auf ein entferntes Netzwerk</li>
          <li>
            Heimarbeitsplätze oder mobile Nutzer in ein Unternehmensnetzwerk
            einbinden
          </li>
          <li>
            Endgerät soll so arbeiten als wäre es direkt im Unternehmensnetzwerk
          </li>
          <li>
            VPN Client auf Endgerät stellt VPN-Tunnel zum Unternehmensnetz über
            ein öffentliches Netzwerk her
          </li>
          <li>VPN-Client muss auf Endgerät installiert sein</li>
        </ul>
        <li class="text-weight-bold">Site-to-Site-VPN / LAN-to-LAN-VPN</li>
        <ul>
          <li>
            Ziel ist es mehrere lokale Netze zu einem gesamten virtuellen
            Netzwerk zu verbinden
          </li>
          <li>
            Ersatz für teure physikalische Verbindungen zwischen Standorten
          </li>
          <li>jedes lokale Netz hat in der Regel einen Internetanschluss</li>
        </ul>
        <li class="text-weight-bold">
          End-to-End-VPN / Host-to-Host-VPN / Remote-Desktop-VPN
        </li>
        <ul>
          <li>
            Client greift auf einen anderen Client in einem entfernten Netzwerk
            zu
          </li>
          <li>VPN-Tunnel sichert die gesamte Verbindung zwischen Clients</li>
          <li>VPN-Software auf beiden Clients notwendig</li>
          <li>
            Beide Seiten bauen Verbindung zu einem Gateway auf, das die beiden
            Verbindungen zusammenschaltet
          </li>
          <li>
            z.B. Remote-Desktop Verbindungen über öffentliche Netze wie
            TeamViewer
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      VPN-Protokolle
    </div>
    <ul>
      <li class="text-weight-bolder">SSL-/TLS-VPN</li>
      <ul>
        <li>basiert auf SSL-/TLS-Protokoll</li>
        <li>Verbindung kann mit jedem Browser aufgebaut werden</li>
        <li>
          Wird oft als "clientlos" bezeichnet, da theoretisch keine
          Extra-Software benötigt wird (manche liefern es trotzdem mit z.B.
          Cisco AnyConnect)
        </li>
        <li>meist HTTPS und Port 443 für die Verbindung</li>
        <li>Sicherer Verbindungsaufbau durch Zertifikatsaustausch</li>
      </ul>
      <li class="text-weight-bolder">OpenVPN</li>
      <ul>
        <li>Open-Source VPN Lösung</li>
        <li>nutzt auch SSL-/TLS-Protokoll zur VPN-Sicherung</li>
        <li>
          Nutzt Hashes um die Integrität der übertragenen Pakete zu
          gewährleisten
        </li>
        <li>
          kann IP-Pakete Tunneln und unabhängig von der Anwendung übertragen
        </li>
        <li>wird von allen gängigen Betriebssystemen unterstützt</li>
        <li>
          nutzt einen Kontroll- und einen Daten-Kanal, welche jeweils
          unterschiedliche Verschlüsselungsmethoden verwenden aber über die
          selbe UDP-/TCP-Verbindung laufen
        </li>
        <li>
          Kontroll-Kanal nutzt SSL/TLS-Verschlüsselung und der Daten-Kanal eine
          OpenVPN-spezifische Verschlüsselungsmethode.
        </li>
      </ul>

      <li class="text-weight-bolder">
        PPTP - Point-to-Point Tunneling Protocol
      </li>
      <ul>
        <li>von Microsoft und auf Windows vorinstalliert</li>
        <li>
          heutzutage schlechte Sicherheit, aufgrund schlechter
          Verschlüsselungsmethoden
        </li>
        <li>
          Nutzt 2 Kanäle: Einen zum Verbindungsaufbau und einen für den
          Datentransport.
        </li>
      </ul>

      <li class="text-weight-bolder">IPsec - Internet Protocol Security</li>
      <ul>
        <li>
          ist eine Protokoll-Suite, die eine gesicherte Kommunikation über
          unsichere IP-Netze wie das Internet ermöglichen soll
        </li>
        <li>
          fügt einen besonderen Header, den ESP-Header (Encapsulating Security
          Payload) in das Paket ein, welcher für die Authentisierung, Integrität
          und Vertraulichkeit der IP-Pakete sorgt
        </li>
        <li class="text-weight-bold">Transportmodus:</li>
        <ul>
          <li>zwei Endpunkte werden direkt miteinander verbunden</li>
          <li>
            besonders wenn man nur 2 Rechner miteinander verbinden möchte, also
            für Host-to-Host-Verbindungen
          </li>
          <li>
            ESP-Header wird zwischen IP und TCP-/UDP-Header eingefügt, IP-Header
            bleibt unverändert
          </li>
          <li>
            verschlüsselt alle Daten im TCP-/UDP-Paket sowie den TCP-/UDP-Header
            selbst
          </li>
          <li>
            Nach dem Empfang des IPsec-Paketes werden die ursprünglichen
            Nutzdaten (TCP-/UDP-Pakete) ausgepackt und an die nächst höhere
            Schicht weitergegeben.
          </li>
          <q-img
            style="max-width: 600px"
            class="fit bg-grey-5"
            :src="src + '/Netzwerke/transportmodus.gif'"
            @click="
              show_img = true;
              popupsrc = '/Netzwerke/transportmodus.gif';
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
        <li class="text-weight-bold">Tunnelmodus:</li>
        <ul>
          <li>zwei Netzwerke werden miteinander verbunden</li>
          <li>
            Die Endpunkte werden von zwei Routern bzw. VPN-Gateways gebildet,
            zwischen denen der Tunnel aufgebaut wird
          </li>
          <li>
            das ursprüngliche Paket wird in ein komplett neues IP-Paket gepackt
          </li>
          <li>
            Es wird ein äußerer IP-Header gebildet, welcher die IP-Daten der
            Tunnelenden beinhaltet
          </li>
          <li>
            Nach dem äußeren IP-Header folgt der ESP-Header, welcher alle
            nachfolgenden Daten verschlüsselt
          </li>
          <li>
            Der innere IP-Header beinhaltet die Adressen der eigentlichen
            Kommunikationsendpunkte
          </li>
          <q-img
            style="max-width: 600px"
            class="fit bg-grey-5"
            :src="src + '/Netzwerke/tunnelmodus.gif'"
            @click="
              show_img = true;
              popupsrc = '/Netzwerke/tunnelmodus.gif';
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
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Tunneling
    </div>
    <ul>
      <li>
        Tunnel ist ein virtueller Übertragungsweg, der durch Kapselung eines
        Netzwerkprotokolls in ein anderes erfolgt
      </li>
      <li>
        Wenn eine Firewall z.B. FTP (Port 20 & 21) blockiert, kann diese
        Blockierung umgangen werden, indem man den FTP-Datenstrom über HTTPS
        (port 443) "tunnelt".
      </li>
      <li>
        vor und hinter dem Tunnel erfolgt die Kommunikation über das
        ursprüngliche Netzwerkprotokoll
      </li>
      <li>
        zwischen den beiden Tunnelenden erfolgt die Kommunikation über ein
        anderes beliebiges Protokoll, welches auch als Tunnelprotokoll
        bezeichnet wird
      </li>
      <li>
        Solche Netzwerktunnel können durch verschiedene Tools hergestellt
        werden, z.B. SSH, OpenVPN, PuTTY
      </li>
      <li>Zu den Tunneling-Protokollen gehört z.B. IPsec im Tunnelmodus</li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://www.elektronik-kompendium.de/sites/net/bilder/09061915.gif
      <br />
      https://www.elektronik-kompendium.de/sites/net/bilder/09061914.gif <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VPNPage',
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
