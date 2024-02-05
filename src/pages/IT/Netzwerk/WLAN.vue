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
      WLAN - Wireless Local Area Network
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>allgemeine Bezeichnung für lokale Funknetze</li>
      <li>
        bezeichnet korrekterweise den Standard IEEE802.11*, der als "Wi-Fi"
        definiert ist
      </li>
      <li>
        Wireless-Access-Point ist das aktive Netzgerät, daneben gibt es auch
        WLAN Repeater (erhöhen die Reichweite des Signals) und Wireless LAN
        Controller (zur Steuerung des Betriebs mehrerer WLAN Access Points)
      </li>
      <li>viele unterschiedliche Standards und kontinuierliche Verbesserung</li>
      <li><a class="text-weight-bold">SSID - Service Set Identifier</a></li>
      <ul>
        <li>
          Definiert den Namen des Netzwerks, standardmäßig oft Modell des
          Routers, kann jedoch nach belieben geändert werden
        </li>
        <li>Hidden SSID / Broadcast SSID deaktivieren</li>
        <ul>
          <li>WLAN-Client wird der Access-Point nicht automatisch angezeigt</li>
          <li>SSID muss manuell angegeben werden</li>
          <li>
            bringt KEINE Sicherheit! Das WLAN ist trotzdem noch sichtbar, nur
            ohne Namen. Die Clients, die sich mit der SSID mit dem WLAN
            verbinden müssen regelmäßig nach der WLAN-SSID suchen, indem sie
            Broadcasts mit der SSID in die Umgebung senden (auch wenn das WLAN
            nicht in der Nähe ist). Durch diese Broadcasts allein könnte ein
            Hacker Zugriff auf die SSID bekommen. Dieses Szenario birgt auch
            weitere Sicherheitsrisiken, da ein Hacker auch einen Access-Point
            mit der gleichen SSID einrichten könnte und dadurch den
            WLAN-Handshake des Clients(der sich automatisch verbindet) abgreifen
            könnte. Des weiteren birgt das verstecken von der SSID auch weitere
            Fehlerquellen, da es nicht standardkonform ist und nicht von allen
            Geräten umgesetzt wird.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bold">Übertragungsraten</li>
      <ul>
        <li>
          hängt von der Trägerfrequenz, dem Standard und den
          Umgebungsbedingungen ab
        </li>
        <li>Sandardisierte Trägerfrequenzen sind: 2.4GHz, 5GHz und 60GHz</li>
        <li>
          Im ersten Standard war lediglich eine Übertragungsrate von 2MBIT/s
          möglich
        </li>
        <li>neuere Standards theoretisch bis zu 7GBit/s</li>
      </ul>
      <li class="text-weight-bold">Übertragungsreichweite</li>
      <ul>
        <li>Störfaktoren:</li>
        <ul>
          <li>
            Wasser (z.B. Regen, Schnee, Wasserleitungen oder auch dicht belaubte
            Bäume)
          </li>
          <li>dicke Wände (z.B. Hauswände)</li>
          <li>Metalle (Wellblechdächer, Stahlbeton)</li>
        </ul>
        <li>Verbesserung der Reichweite:</li>
        <ul>
          <li>Router in bessere Position stellen</li>
          <li>WLAN-Kanal wechseln</li>
          <li>Repeater, Range Extender oder Powerline-Adapter</li>
        </ul>
      </ul>

      <li class="text-weight-bold">Frequenzen und Kanäle</li>
      <ul>
        <li>Alle Nutzer eines Frequenzbandes teilen sich die Bandbreite</li>
        <li>Frequenzbänder in Kanäle aufgeteilt</li>
        <ul>
          <li>z.B. IEEE 802.11n für 2.4GHz</li>
          <li>Trägerfrequenz: 2.4GHz</li>
          <li>Frequenzbereich: 2.3995 GHz- 2.4845 GHz</li>
          <li>→ 95MHz Bandbreite</li>
        </ul>
      </ul>
      <li class="text-weight-bold">Umgehung von Datenkollision</li>
      <ul>
        <li>
          Nutzer teilen sich die Kanäle und es kann maximal nur ein Teilnehmer
          senden → Datenkollision möglich
        </li>
        <li class="text-weight-bold">
          Verfahren: WLAN Carrier Sense Multiple Access (CSMA) / Collision
          Avoidance (CA)
        </li>
        <ul>
          <li>WLAN Client prüft, ob Kanal frei ist</li>
          <li>Wenn belegt wartet der Client und prüft später erneut</li>
          <li>Wenn frei: Sendewunsch</li>
          <li>
            Empfänger eines Pakets muss den Empfang des Sendewunsches beim
            Absender bestätigen
          </li>
          <li>Erst nach Bestätigung werden Datenpakete versendet</li>
        </ul>
      </ul>
      <li class="text-weight-bold">Modi</li>
      <ul>
        <li>Ad-Hoc</li>
        <ul>
          <li>
            Direktes Verbinden von zwei oder mehreren Geräten ohne Basisstation
          </li>
        </ul>
        <li>Infrastructure</li>
        <ul>
          <li>
            Es wird sich über eine Basisstation verbunden (z.B. Access-Point)
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Sicherheit
    </div>
    <ul>
      <li>
        Funknetze ermöglichen einfaches Abhören des Datenverkehrs →
        Authentifizierung der WLAN-Clients und Verschlüsselung der Kommunikation
      </li>
      <li class="text-weight-bold">Verfahren:</li>
      <ul>
        <li>
          Wired Equivalent Privacy (WEP) - unsicher & veraltet, schwache
          Verschlüsselung und Authentifizierung
        </li>
        <li>
          Wi-Fi Protected Access 2 (WPA2) - veraltet, dynamische Schlüssel &
          gute Authentifizierung und RADIUS-Unterstützung
        </li>
        <li>Wi-Fi Protected Setup (WSP) - unsicher, AES Verschlüsselung</li>
        <li class="text-green">
          <a class="text-weight-bold">Wi-Fi Protected Access 3 (WPA3) - </a>
          sicher und aktuell, lange AES Schlüssel & Nutzen von PSKs (Pre Shared
          Keys), sicheres Aushandeln der Sitzungsschlüssel, keine im voraus
          aufgezeichneten Datenpakete nachträglich entschlüsselbar
        </li>
        <li>
          Man unterscheidet auch zwischen WPA2/WPA3 Personal und Enterprise
        </li>
        <ul>
          <li>
            Personal: alle Nutzer das selbe Passwort, Einfache Bedienung, für
            Privathaushalte
          </li>
          <li>
            Enterprise: individuelle Authentifizierung (jeder Nutzer eigenes
            Login), stärkere Verschlüsselung, für Unternehmen
          </li>
        </ul>
      </ul>
      <li class="text-weight-bold">
        RADIUS - Remote Authentication Dial-In User Service
      </li>
      <ul>
        <li>
          Client-Server-Protokoll für Authentifizierung, Autorisierung und
          Accounting von Nutzern
        </li>
        <li>ist Standard bei der zentralen Authentifizierung mittels WLAN</li>
        <li class="text-weight-bold">
          AAA-System: Authentication, Authorization, Accounting
        </li>
        <li>
          Vorteil: einmalig und zentral registrierte Zugangsdaten der Nutzer
        </li>
        <li>Nachteil: Bei Störung des RADIUS-Servers alle Nutzer betroffen</li>
      </ul>
      <li class="text-weight-bold">WLAN Voucher</li>
      <ul>
        <li>Nutzung individueller Codes ("Voucher" oder "Tickets")</li>
        <li>Ermöglicht Gästen Zugang zum WLAN</li>
        <li>Nachvollziehbarkeit des individuellen Nutzerzugangs</li>
        <li>wählbare Gültigkeit und Dauer</li>
        <li>z.B. in Hotels</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'WLANPage',
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
