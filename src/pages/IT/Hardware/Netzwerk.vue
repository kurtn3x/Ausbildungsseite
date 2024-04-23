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
      Netzwerk-Hardware
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Hubs
    </div>
    <ul>
      <li>verbinden Geräte sternförmig</li>
      <li>keine Analyse der Mac-Adresse</li>
      <li>nur Verstärkung und Weiterleitung des Signals auf allen Ports</li>
      <li>kann Endgeräte nicht unterscheiden und sendet alles an Jeden</li>
      <li>
        Jede Kommunikation zwischen zwei Endgeräten besetzt alle Leitungen
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Switches
    </div>
    <ul>
      <li>
        Arbeiten hauptsächlich auf Layer 2 des OSI-Schichtenmodells
        (Data-Link-Layer) und verwenden daher MAC-Adressen zur Adressierung
      </li>
      <li>
        Kann Mac-Adressen auswerten und lernt, welche sich an welchen Port
        befinden → Informationen werden in einer internen Tabelle gespeichert
      </li>
      <li>
        Sendet mithilfe der internen MAC-Tabelle Daten direkt an den Empfänger
      </li>
      <li>
        VLAN-fähige Switches können ein physisches Netz in mehrere logische
        Teilnetze unterteilen.
        <router-link to="/netzwerk/vlan" class="text-light-blue">
          Siehe auch VLAN</router-link
        >
      </li>

      <li>
        Kommunikation zwischen zwei Rechnern belegt nur die betroffenen
        Leitungen
      </li>
      <li>
        Einige Switches besitzen auch Layer-3-Funktionen (Network Layer),
        weshalb sie Layer-3-Switches genannt werden. Layer-3-Switches übernehmen
        auch Routing-Funktionen und verwenden neben der MAC-Adresse auch
        IP-Adressen zur Adressierung
      </li>
      <li class="text-weight-bolder">Begriffe zu Switches</li>
      <ul>
        <li class="text-weight-bold">Switch-Stacking</li>
        <ul>
          <li>
            Mehrere physische Switche zu einem logischen Switch über
            Kabelverbindung verbunden
          </li>
          <li>
            Switch-Stack teilt eine MAC-Adresse und stellt eine Einheit dar
          </li>
          <li>Ein Master, welcher Verwaltung für Member im Stack übernimmt</li>
          <li>Steigerung der Netzwerkkonnektivität</li>
          <li>begrenzte maximale Anzahl an Switches (Herstellerabhängig)</li>
        </ul>
        <li class="text-weight-bold">Switch-Kaskadierung</li>
        <ul>
          <li>
            Nutzer können mehrere Ports nutzen, die jeden der Switches
            miteinander verbinden
          </li>
          <li>
            Alle Switches werden unabhängig voneinander konfiguriert und
            verwaltet
          </li>
          <li>keine begrenzte Anzahl an Switches</li>
          <li>jeder Switch hat eigene MAC-Adresse</li>
        </ul>
        <li class="text-weight-bold">managed vs unmanaged Switch</li>
        <ul>
          <li>
            <a class="text-weight-bold">Unmanaged Switches</a> sind direkt nach
            dem Anschluss funktionsfähig und benötigen keine Konfiguration.
            Funktion ist die grundlegende Konnektivität und Weiterleitung des
            Verkehrs.
          </li>
          <li>
            <a class="text-weight-bold">Managed Switches</a> stellen den
            umfassenden Funktionsumfang eines Switches bereit und erlauben somit
            die höchste Sicherheit, Kontrolle und Verwaltung des Netzwerks.
            Können unter anderem VLAN-, Firewall- und/oder Routing-Funktionen
            besitzen. Müssen jedoch für den vollen Funktionsumfang konfiguriert
            werden.
          </li>
        </ul>
        <li class="text-weight-bold">AutoUplink (MDI/MDI-X)</li>
        <ul>
          <li>
            Switch erkennt selbstständig, ob er mit einem anderen Switch
            verbunden ist
          </li>
        </ul>
      </ul>
      <li class="text-weight-bold">Core-, Distribution- und Access-Switches</li>
      <ul>
        <li class="text-weight-bolder">Core-Switches</li>
        <ul>
          <li>
            leistungsfähige Switches die das Rückgrat (Backbone) eines Netzes
            bilden
          </li>
          <li>hohe Durchsatzraten, Leistung und Zuverlässigkeit</li>
          <li>
            Redundanz sehr wichtig, da bei Ausfall des Core-Switches das gesamte
            Netzwerk betroffen ist
          </li>
          <li>leiten Pakete an Distribution-Switches weiter</li>
        </ul>
        <li class="text-weight-bolder">Distribution-Switches</li>
        <ul>
          <li>Verteilung von Datenpaketen</li>
          <li>
            sorgen dafür, dass das Netzwerk nicht mit Datenpaketen überfüllt
            wird
          </li>
          <li>
            leiten Pakete an Access-Switches oder andere Access-Geräte weiter
          </li>
        </ul>
        <li class="text-weight-bolder">Access-Switches</li>
        <ul>
          <li>direkt mit Subnets verbunden</li>
          <li>Layer 3 Switches mit Routingfunktionen</li>
          <li>leiten Pakete an das adressierte Gerät weiter</li>
        </ul>
        <q-img
          class="bg-grey-5"
          :src="src + '/Netzwerke/coreswitch.webp'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/coreswitch.webp';
          "
        />
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Router
    </div>
    <ul>
      <li>
        Zwischensystem zwischen zwei Netzen, benötigt in beiden eine IP-Adresse
      </li>
      <li>
        ist in der Lage, Datenpakete zwischen zwei verschiedenen Netzen
        weiterzuleiten
      </li>
      <li>
        Heutige Router haben oft viele weitere Funktionen: NAS, Firewall, WLAN
        (- Access Point), DHCP & DNS, uvm.
      </li>
      <li>
        <router-link to="/netzwerk/routing" class="text-light-blue"
          >Siehe auch Routing</router-link
        >
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      SFP / SFP+ / QSFP
    </div>
    <ul>
      <li>SFP = Small Form-factor Pluggable</li>
      <li>
        ein im laufenden Betrieb (hot swappable) austauschbarer Transceiver
      </li>
      <li>
        können in SFP-Ports/SFP-Cages von z.B. Switches oder Server eingebaut
        werden
      </li>
      <li>Unterstützung von Ethernet, Fibre-Channel und SONET</li>
      <li>
        SFP+ → höhere Datenübertragungsraten, jedoch in der Regel kleinere
        Distanzen
      </li>
      <li>
        QSFP = Quad SFP → Untersützung von Ethernet, Fibre-Channel, InfiniBand
        oder SONET/SDH mit noch höheren Datenübertragungsraten
      </li>

      <q-img
        class="bg-grey-5"
        :src="src + '/Netzwerke/sfp.webp'"
        style="max-width: 250px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/sfp.webp';
        "
      />
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Begriffe zu Netzwerk-Hardware
    </div>
    <ul>
      <li class="text-weight-bold">Spanning-Tree</li>
      <ul>
        <li>
          Protokoll, welches sicherstellt, dass zwischen zwei Geräten jeweils
          nur ein Datenpfad existiert und unterbindet somit Loops
        </li>
        <li>
          deaktiviert bei identifizierten Mehrfach-Wegen automatisch Ports,
          lässt also eine Leitung ungenutzt liegen
        </li>
        <li>
          fällt eine Leitung aus wird der Traffic über die Andere geleitet
        </li>
      </ul>
      <li class="text-weight-bold">Auto-Negotiation</li>
      <ul>
        <li>
          Handelt automatisch die Übertragungsgeschwindigkeit zweier Geräte in
          einer Verbindung aus
        </li>
      </ul>
      <li class="text-weight-bold">Link Aggregation</li>
      <ul>
        <li>
          Methode, bei der mehrere Schnitstellen genutzt werden, um für eine
          Verbindung mehr Redundanz und Bandbreite bereitzustellen
        </li>
        <li>Mehrere Leitungen werden "gebündelt"</li>
        <li>
          Fällt eine Leitung aus, werden die Daten nur noch mit der
          Übertragungsgeschwindigkeit einer Leitung gesendet
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.fiber-optic-solutions.com/wp-content/uploads/2018/07/access-switch-in-the-access-layer.jpg
      <br />
      https://cdn.ready-market.com.tw/91466f78/Templates/pic/IMG-SFP.jpg?v=5fad583a
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'NetzwerkHardwareÜage',
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
