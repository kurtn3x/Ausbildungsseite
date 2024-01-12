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
      Netzwerk-Hardware
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Switches
    </div>
    <ul>
      <li>
        Arbeiten hauptsächlich auf Layer 2 des OSI-Schichtenmodells
        (Data-Link-Layer) und verwenden daher MAC-Adressen zur Adressierung
      </li>
      <li>
        Teilweise auch Switches, welche Layer 3-Funktionen (Network Layer)
        besitzen (Unterschied Layer 2 Switches ⇄ Layer 3 Switches)
      </li>
      <li>
        Layer 3 Switches übernehmen auch Routing-Funktionen und verwenden neben
        der MAC-Adresse auch IP-Adressen zur Adressierung
      </li>
      <li>
        Kann Mac-Adressen auswerten und lernt, welche sich an welchen Port
        befinden → Informationen werden in einer internen Tabelle gespeichert
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
        <li class="text-weight-bold">AutoUplink (MDI/MDI-X)</li>
        <ul>
          <li>
            Switch erkennt selbstständig, ob er mit einem anderen Switch
            verbunden ist
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
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
        Heutige Router haben oft viele weitere funktionen: NAS, Firewall, WLAN
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Begriffe zu Netzwerk-Hardware
    </div>

    <ul>
      <li class="text-weight-bold">Spanning-Tree</li>
      <ul>
        <li>
          Protokoll, welches sicherstellt, dass zwischen zwei Geräten jeweils
          nur ein Datenpfad existiert
        </li>
        <li>unterbindet somit Loops</li>
        <li>
          deaktiviert bei identifizierten Mehrfach-Wegen automatisch Ports
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
      </ul>
      <li class="text-weight-bold">Simplex</li>
      <ul>
        <li>
          Simplex beschreibt, dass bei der Kommunikation zwischen zwei Geräten
          die Übertragung grundsätzlich auf einem Kanal nur in eine Richtung
          möglich ist.
        </li>
        <li>
          <a class="text-weight-bold">Dual-Simplex</a> beschreibt das Nutzen von
          2 zwei Simplex-Verbindungen, womit auch eine Datenübertragung in beide
          Richtungen möglich ist (ein Kanal hin, ein Kanal zurück). Jedoch
          findet hierbei die Kommunikation über 2 Kanäle statt. (Unterschied zu
          Voll-Duplex: Übertragung in beide Richtungen auf nur einem Kanal)
        </li>
      </ul>

      <li class="text-weight-bold">Duplex</li>
      <ul>
        <li>
          Duplex beschreibt, dass bei der Kommunikation zwischen zwei Geräten
          die Übertragung grundsätzlich in beide Richtungen möglich ist.
        </li>
        <li>Man unterscheidet zwischen Halbduplex und Vollduplex</li>
        <li class="text-weight-bold">Halbduplex</li>
        <ul>
          <li>
            es kann in beide Richtungen, allerdings nicht zur selben Zeit
            kommuniziert werden
          </li>
          <li>Sender und Empfänger müssen sich daher abwechseln</li>
          <li>Beispiel: Walkie-Talkie</li>
        </ul>
        <li class="text-weight-bold">Vollduplex</li>
        <ul>
          <li>
            Daten können auf einem Kanal gleichzeitig in beide Richtungen
            gesendet und empfangen werden
          </li>
          <li>Beispiel: Telefon</li>
        </ul>
        <q-img
          class="bg-grey-5"
          :src="src + '/Netzwerke/SimplexDuplex.webp'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/SimplexDuplex.webp';
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
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://heinen-elektronik.de/wp-content/uploads/2023/02/Simplex_duplex.png
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
