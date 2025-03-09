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
      SSL & TLS
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>
        Protokolle, die die Vertraulichkeit, Authentizität und Integrität der
        Kommunikation in Netzwerkprotokollen sicherstellen
      </li>
      <li>
        digitale Zertifikate sorgen für Authentifizierung und Verschlüsselung
      </li>
      <li>
        digitale Zertifikate werden mithilfe der PKI - Public-Key-Infrastruktur
        überprüft
      </li>
      <li>
        Prüfsummenchecks und Signaturalgorithmen sorgen für die Integrität der
        Nachricht
      </li>
      <li>besondere Bedeutung im World Wide Web</li>
      <li class="text-weight-bolder">
        Anwendungsfall: Verschlüsselung unsicherer/unverschlüsselter Protokolle
      </li>
      <ul>
        <li>HTTP → HTTPS</li>
        <li>POP3 → POP3S</li>
        <li>SMTP → SMTPS</li>
        <li>IMAP → IMAPS</li>
        <li>FTP → FTPS</li>
        <li>DNS → DNS over TLS, DNS over HTTPS</li>
        <li>OpenVPN</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      SSL
    </div>
    <ul>
      <ul>
        <li>SSL = Secure Socket Layer</li>

        <li>
          mehrere Versionen von SSL (2.0, 3.0; auch SSLv2 und SSLv3 genannt)
        </li>
        <li>alle SSL Versionen gelten als veraltet und unsicher</li>
        <li>unterstützt ältere Cypher Suits mit Sicherheitslücken</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      TLS
    </div>
    <ul>
      <ul>
        <li>TLS = Transport Layer Security</li>
        <li>Nachfolgeprotokoll von SSL</li>
        <li>
          Versionen 1.0 (unsicher), 1.1 (unsicher), 1.2 (ok) & 1.3 (am
          aktuellsten)
        </li>
        <li>
          Unterschiede zwischen SSL und TLS 1.0 zunächst klein, mit neueren
          Versionen immer größer
        </li>
        <li>schneller als SSL durch weniger unterstützte Cipher Suites</li>
        <li>
          sicherer als SSL, da nur sichere Cipher Suites unterstützt werden
        </li>
        <li>
          TLS1.3 unterstützt nur noch das
          Diffie-Hellman-Schlüsselaustauschprotokoll (DHE, ECDHE) und verwirft
          damit eine Reihe von alten Cipher Suits, die noch in TLS1.2
          unterstützt waren
        </li>
        <li>
          Verwendung von Zertifikaten mit einer Public-Key-Infrastruktur nach
          X.509
        </li>

        <li class="text-weight-bolder">Ablauf der TLS-Verbindung</li>
        <ul>
          <li>1. Der Client meldet einen Verbindungsaufbau beim Server an</li>
          <li>
            2. TLS-Handshake: Die öffentlichen Schlüssel der Sitzungpartner
            werden ausgetauscht, damit beide asymmetrisch verschlüsselt
            kommunizieren können. Der Server sendet sein Zertifikat mit
          </li>
          <li>
            3. Der öffentliche Schlüssel des Servers wird mithilfe seines
            Zertifikats und dessen Signatur über die Public-Key-Infrastruktur
            überprüft. Der Client wird in der Regel nicht vom Server überprüft.
          </li>
          <li>
            4. Beide Sitzungpartner einigen sich über die asymmetrisch
            verschlüsselte Kommunikation auf einen gemeinsamen, identischen,
            symmetrischen Schlüssel, der auch Sitzungsschlüssel (Session Key)
            genannt wird
          </li>
          <li>
            Die Verschlüsselung der Folgenachrichten findet ausschließlich mit
            dem Sitzungsschlüssel statt. Für jede neue Sitzung wird ein neuer
            Sitzungsschlüssel ausgehandelt
          </li>
          <li>
            TLS verwendet die Systeme Authenticated Encryption (AE) oder AE with
            Associated Data (AEAD), welche die Vertraulichkeit, Authentizität
            und Integrität der zu übertragenden Nachrichten sicherstellt
          </li>
          <ul>
            <li>
              Vereinen die Verschlüsselung und den Message Authentication Code
              in ein Schema
            </li>
            <li>
              Message Authentication Code = berechnete Prüfsumme der zu
              übertragenden Daten mithilfe eines geheimen Schlüssels
            </li>
          </ul>
          <q-img
            class="fit bg-grey-5"
            :src="src + '/Netzwerke/tls.gif'"
            style="max-width: 450px"
            @click="
              show_img = true;
              popupsrc = '/Netzwerke/tls.gif';
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
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://www.elektronik-kompendium.de/sites/net/bilder/18112811.gif
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SSLTLSPage',
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
