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
      Symmetrisches und asymmetrisches Kryptosystem
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder text-h7">symmetrische Kryptographie</li>
      <ul>
        <li>Teilnehmer verwenden einen gemeinsamen, identischen Schlüssel</li>
        <ul>
          <li>
            Schlüssel sowohl für die Verschlüsselung als auch für die
            Entschlüsselung der Nachricht angewandt
          </li>
        </ul>
        <li>Verwendung: Verschlüsselung von Nachrichten</li>

        <li class="text-green">Vorteile:</li>
        <ul>
          <li>schnell</li>
          <li>benötigt wenig Rechenleistung</li>
          <li>einfach zu verstehen, unkomplex</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>
            Jeder mit Zugriff auf Schlüssel hat auch Zugriff auf die
            verschlüsselten Daten
          </li>
          <li>
            geheimer Schlüssel muss über einen sicheren Kanal ausgetauscht
            werden
          </li>
          <li>
            für jede neue Kommunikationsverbindung zwischen unterschiedlichen
            Partnern wird ein neuer asymmetrischer Schlüssel benötigt
          </li>
        </ul>
        <li class="text-underline">
          einfachstes Beispiel: Caesar-Verschlüsselung
        </li>
        <ul>
          <li>
            Jeder Buchstabe des Ausgangstextes wird um x Positionen im Alphabet
            verschoben
          </li>
          <li>z.B. verschiebung um 3 Buchstaben: Hallo → Kdoor</li>
          <li>Schlüssel ist die Verschiebung um 3 Buchstaben im Alphabet</li>
          <li>
            Für die Ver- und Entschlüsselung kommt hier also der selbe Schlüssel
            zum Einsatz
          </li>
        </ul>
        <li class="text-underline">Symmetrische Verfahren:</li>
        <ul>
          <li>
            AES (Advanced Encryption Standard), de facto Standard für
            symmetrische Verschlüsselung und gilt mit Schlüsselgrößen von 192
            Bit (AES-192) und 256 Bit (AES-256) als sehr sicher
          </li>
          <li>
            DES (Data Encryption Standard) - Schlüssellänge von 56 Bit(kann
            durch Mehrfachanwendung erhöht werden → Triple-DES), mittlerweile
            zwar noch oft verwendet aber gilt als unsicher und durch AES
            abgelöst
          </li>
          <li>IDEA (International Data Encryption Algorithm)</li>
        </ul>
        <q-img
          class="fit bg-grey-5 q-mt-xs"
          :src="src + '/datenschutz/symmetrisch.png'"
          style="max-width: 400px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/symmetrisch.png';
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
      <li class="text-weight-bolder q-mt-md text-h7">
        asymmetrische Kryptographie (Public-Key-Kryptographie)
      </li>
      <ul>
        <li>Jeder Nutzer erzeugt zwei Schlüssel</li>
        <ul>
          <li>
            ein öffentlicher Schlüssel (public key), der Jeden zugänglich
            gemacht werden kann
          </li>
          <li>
            ein privater Schlüssel (private key), der geheim gehalten werden
            muss
          </li>
          <li>Es werden keine gemeinsamen, geheimen Schlüssel verwendet</li>
        </ul>
        <li>
          Verwendung: digitale Signaturen, Public-Key-Authentifizierung,
          Verschlüsselung, Aushandeln symmetrischer Schlüssel
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>Geheimer Schlüssel muss nicht geteilt werden</li>
          <li>
            Öffentlicher Schlüssel kann über unsichere Kanäle ausgetauscht
            werden
          </li>
          <li>Hat viele Anwendungsbereiche</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>deutlich langsamer</li>
          <li>benötigt mehr Rechenleistung</li>
          <li>komplex</li>
        </ul>

        <li class="text-weight-bolder">asymmetrische Verschlüsselung</li>
        <ul>
          <li>
            Verschlüsselung der Nachricht erfolgt mit dem öffentlichen Schlüssel
            des Empfängers
          </li>
          <li>
            Entschlüsselung der Nachricht erfolgt mit dem privaten Schlüssel des
            Empfängers
          </li>
          <li>
            Falls zwei Nutzer miteinander asymmetrisch verschlüsselt
            kommunizieren wollen, werden also insgesamt 4 Schlüssel benötigt:
            Für Jeden ein Public-Key und ein Private-Key. Die Nutzer verwenden
            zum verschlüsseln der Nachricht den Public-Key des Empfängers(also
            des jeweils anderen Nutzers). Der Empfänger kann die verschlüsselte
            Nachricht mit seinem Private-Key entschlüsseln. Die Public-Keys
            müssen vorher ausgetauscht werden, dies muss aber nicht sicher
            erfolgen.
          </li>
          <q-img
            class="fit bg-grey-5 q-mt-xs"
            :src="src + '/datenschutz/asymmetrisch.png'"
            style="max-width: 400px"
            @click="
              show_img = true;
              popupsrc = '/datenschutz/asymmetrisch.png';
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

        <li class="text-weight-bolder q-mt-sm">digitale Signaturen</li>
        <ul>
          <li>
            = berechneter Wert der zu signierenden Daten mithilfe eines
            Private-Keys
          </li>
          <li>
            nichtabstreitbare Urheberschaft und Integrität der Daten kann mit
            dem dazugehörigen Public-Key verifiziert werden
          </li>
          <li>
            Signatur wird nicht aus den Rohdaten berechnet, sondern aus dem
            Hashwert der Rohdaten
          </li>
          <li>
            Signatur <a class="text-weight-bold">IST NICHT</a> die
            Verschlüsselung mit dem privaten Schlüssel
          </li>
          <q-img
            class="fit bg-grey-5 q-mt-xs"
            :src="src + '/datenschutz/signatur.png'"
            style="max-width: 400px"
            @click="
              show_img = true;
              popupsrc = '/datenschutz/signatur.png';
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

        <li class="text-weight-bolder q-mt-sm">Public-Key-Authentifizierung</li>
        <ul>
          <li>
            Öffentlicher Schlüssel eines Nutzers wird auf dem Server gespeichert
          </li>
          <li>
            Privater Schlüssel des Nutzers bleibt auf seinem eigenen Computer
          </li>
          <li>
            Es wird eine Signatur mit dem privaten Schlüssel des Nutzers
            erzeugt, die auf Serverseite mit dem hinterlegtem öffentlichen
            Schlüssel überprüft wird. Kann die Authentizität bestätigt werden,
            bekommt der Nutzer Zugriff auf den Server.
          </li>
          <li>
            Es muss ein asymmetrisches Kryptoverfahren mit
            Signierungsfunktionalität verwendet werden
          </li>
        </ul>

        <li>
          Verschlüsselung, Signierung und Public-Key-Authentifizierung sind
          unterschiedliche Verfahren, mit unterschiedlichen Implementierungen.
          Nur weil ein Verfahren für die digitale Signierung verwendet werden
          kann, besteht nicht automatisch die Möglichkeit es für die
          asymmetrische Verschlüsselung einzusetzen. z.B. RSA ist ein Verfahren,
          welches für alle genannten Anwendungsfälle implementiert wurde.
        </li>

        <li class="text-underline">Asymmetrische Verfahren:</li>
        <ul>
          <li>RSA - Verschlüsselung & Signatur von Daten</li>
          <li>DSA (Digital Signature Algorithm) - Signaturverfahren</li>
          <li>
            Diffie-Hellman-Merkle Schlüsselaustausch - Verfahren für
            Vereinbarung eines symmetrischen Schlüssels auf Basis der
            asymmetrischen Schlüssel der Nutzer
          </li>
          <li>
            ECC (Elliptische-Kurven-Kryptographie) - Überbegriff für
            kryptographische Verfahren basierend auf elliptischen Kurven.
            Elliptische Kurven werden innerhalb anderer Kryptosysteme
            implementiert, um diese sicherer zu machen
          </li>
          <li>ECDSA - DSA mit ECC</li>
          <li>ECDH - Diffie-Hellman mit ECC</li>
        </ul>
      </ul>
      <li class="text-green q-mt-xs">
        Durch die Nachteile der beiden Kryptographieverfahren ist es sinnvoll
        beide gemeinsam zu verwenden: Dazu wird als Erstes der symmetrische
        Schlüssel mithilfe einer asymmetrischen Methode ausgetauscht. Danach
        wird weiter über den symmetrischen Schlüssel kommuniziert. Dieses
        Verfahren wird z.B. bei TLS mithilfe des
        Diffie-Hellman-Schlüsselaustauschs angewandt.
      </li>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:Orange_blue_symmetric_cryptography_de.svg<br />
      https://commons.wikimedia.org/wiki/File:Orange_blue_public_key_cryptography_de.svg
      <br />
      https://commons.wikimedia.org/wiki/File:Orange_blue_digital_signature_de.svg
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VerschlüsselungPage',
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
