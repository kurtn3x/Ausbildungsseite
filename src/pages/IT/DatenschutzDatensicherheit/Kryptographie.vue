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
      Kryptographie - Verschlüsselung, Zertifikate & Hashfunktionen
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Symmetrische und asymmetrische Verschlüsselung
    </div>
    <ul>
      <li class="text-weight-bolder">symmetrische Verschlüsselung</li>
      <ul>
        <li>selber Schlüssel für Ver- und Entschlüsselung</li>
        <li>z.B.: Caesar-Verschlüsselung</li>
        <ul>
          <li>
            Jeder Buchstabe des Rohtexts wird um x Positionen im Alphabet
            verschoben
          </li>
          <li>z.B. verschiebung um 3 Buchstaben → Hallo → Kdoor</li>
          <li>Schlüssel ist die Verschiebung um 3 Buchstaben im Alphabet</li>
          <li>
            Für die Ver- und Entschlüsselung kommt hier also der selbe Schlüssel
            zum Einsatz
          </li>
        </ul>
        <li class="text-red">
          Nachteil: Übertragung des Schlüssels muss geheim Erfolgen, da Jeder,
          der Zugriff auf den Schlüssel hat auch Zugriff auf die verschlüsselten
          Informationen hat
        </li>
        <li>Beispiele:</li>
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
          <li>Blowfish</li>
          <li>Twofish</li>
        </ul>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/datenschutz/symmetrisch.png'"
          style="max-width: 500px"
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
      <li class="text-weight-bolder q-mt-md">asymmetrische Verschlüsselung</li>
      <ul>
        <li>zwei Schlüssel zum ver- und entschlüsseln</li>
        <li>ein öffentlicher Schlüssel, der für jeden zugänglich ist</li>
        <li>ein privater Schlüssel, der geheim gehalten werden muss</li>
        <li>
          Die Verschlüsselung der Informationen erfolgt mit dem öffentlichen
          Schlüssel, die Entschlüsselung kann nur mit dem privaten Schlüssel
          passieren
        </li>
        <li>
          Falls zwei Nutzer miteinander asymmetrisch verschlüsselt kommunizieren
          wollen, werden also insgesamt 4 Schlüssel benötigt: Für Jeden ein
          Public-Key und ein Private-Key. Die Nutzer nutzen zum verschlüsseln
          der Nachricht den jeweils anderen Public-Key und zum Entschlüsseln der
          erhaltenen Nachricht ihren eigenen Private-Key. Die Public-Keys müssen
          vorher ausgetauscht werden, dies muss aber nicht sicher erfolgen.
        </li>
        <li class="text-red">
          Nachteil: deutlich langsamer als symmetrische Verschlüsselungsmethoden
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>RSA</li>
          <li>ECC (Elliptische-Kurven-Kryptographie)</li>
          <li>Diffie-Hellman</li>
        </ul>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/datenschutz/asymmetrisch.png'"
          style="max-width: 500px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/asymmetrisch.png';
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
      <li class="text-green q-mt-md">
        Durch die Nachteile der beiden Verschlüsselungsverfahren, ist es
        sinnvoll beide gemeinsam zu verwenden: Dazu wird als Erstes der
        symmetrische Schlüssel mithilfe einer asymmetrischen
        Verschlüsselungsmethode ausgetauscht. Danach wird weiter über den
        symmetrischen Schlüssel kommuniziert. Dies wird z.B. bei einer
        TLS-Verschlüsselung verwendet.
      </li>
      <ul>
        <ul>
          <li>z.B. Diffie-Hellman-Schlüsselaustausch</li>
          <li>TLS 1.3 unterstützt nur noch diese Verschlüsselungsmethode</li>
          <li>
            Kommunikationspartner einigen sich auf einen gemeinsamen, geheimen
            symmetrischen Schlüssel basierend auf ihren privaten und
            öffentlichen Schlüsseln
          </li>
          <li>
            Der symmetrische Schlüssel wird dann verwendet, um mithilfe eines
            symmetrischen Verschlüsselungsprotokolls wie AES zu kommunizieren.
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Digitale Zertifikate
    </div>
    <ul>
      <li>bestätigen Authentizität & Integrität bestimmter Daten</li>
      <li>
        verwendet werden dazu Public-Key-Zertifikate wie X.509, welche die
        Identität und weitere Eigenschaften eines öffentlichen kryptographischen
        Schlüssels bestätigen
      </li>
      <li>digitales Zertifikat ist durch eine Signatur geschützt</li>
      <li>Ausgestellt durch eine Certification Authority (CA)</li>
      <li class="text-weight-bold">CA - Certification Authority</li>
      <ul>
        <li>
          vertrauenswürdige Organisationen, auf die sich die Anwender verlassen
          können
        </li>
        <li>
          öffentlicher Schlüssel einer CA wird benötigt, um die digitale
          Signatur von Zertifikaten, die durch diese CA ausgestellt wurden, zu
          überprüfen
        </li>
      </ul>
      <li>
        die öffentlichen Schlüssel einer CA müssen wiederum durch ein Anderes
        Zertifikat überprüft werden, um auch dessen Authentizität zu sichern.
        Dadurch entwickelt sich eine Zertifikatskette
      </li>
      <li>
        Auf die Echtheit des letzten Zertifikats muss sich vollständig verlassen
        werden.
      </li>
      <li>
        vertrauenswürdige Zertifizierungsstellen in z.B. Webbrowsern oft
        vorkonfiguriert
      </li>
      <li class="text-weight-bolder">
        Das gesamte System, welches Zertifikate ausstellt, verteilt und
        überprüft wird PKI - Public-Key-Infrastructure genannt
      </li>
      <li class="text-weight-bolder">
        Typische Anwendung digitaler Zertifikate:
      </li>
      <ul>
        <li class="text-weight-bold">Digitale Signaturen</li>
        <ul>
          <li>
            = berechneter Wert der zu signierenden Daten mithilfe eines
            Private-Keys
          </li>
          <li>
            Jeder mit Zugriff auf den dazugehörigen Public-Key kann die digitale
            Signatur überprüfen und damit die Urheberschaft und Integrität der
            Daten feststellen
          </li>
        </ul>
        <li>Sicherheit in Netzwerkprotokollen (HTTPS, TLS, IPsec, SSH)</li>
        <li>Sicherheit von E-Mails (S/MIME, PGP)</li>
      </ul>
      <li class="text-weight-bolder">X.509</li>
      <ul>
        <li>oft auch SSL-Zertifikat genannt</li>
        <li>
          Standard für PKI (Public-Key-Infrastruktur) zum Erstellen digitaler
          Zertifikate
        </li>
        <li>
          wird immer an einen "Distinguished Name" oder "Alternative Name" wie
          E-Mail-Adresse oder DNS-Eintrag gebunden
        </li>
        <li>
          Zertifikate können seitens der Zertifizierungsstelle wieder unsicher
          gemacht
        </li>
      </ul>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/datenschutz/zertifikate.png'"
        style="max-width: 500px"
        @click="
          show_img = true;
          popupsrc = '/datenschutz/zertifikate.png';
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
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Hashfunktionen
    </div>
    <ul>
      <li>Abbildung einer großen Eingabemenge auf kleinere Zielmengen</li>
      <li>
        Eingabemenge kann unterschiedlicher länge sein, Zielmenge meist fest
      </li>
      <li>
        <a class="text-weight-bolder">Hashing</a> = umwandeln einer Zeichenfolge
        in einen kürzeren, numerischen Wert
      </li>
      <li class="text-weight-bolder">Hashwerte</li>
      <ul>
        <li>
          oft auch Fingerabdruck (Fingerprint) oder Prüfsumme (Checksum) genannt
        </li>
        <li>eindeutiges Identifikationsmerkmal von Datenmengen</li>
        <li>
          Inhalt der Daten wird so verarbeitet, dass sie einen eindeutigen und
          einzigartigen numerischen Wert zugewiesen bekommen
        </li>
        <li>Die selben Daten haben immer den gleichen Hashwert</li>
        <li>Verwendung:</li>
        <ul>
          <li>erkennen von Übertragungsfehlern</li>
          <li>suchen von Daten mittels Hashtabellen in Datenbanken</li>
          <li>Erkennen von Änderungen an übertragenen Dateien</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Hashfunktionen in der Kryptographie</li>
      <ul>
        <li>
          kryptographische Hashfunktionen müssen folgende Eigenschaften
          erfüllen:
        </li>
        <ul>
          <li>
            <a class="text-weight-bolder">Einwegfunktion: </a> leicht
            berechenbar, aber schwer umzukehren (berechneter Hashwert sollte
            nicht auf den Ursprungswert zurückberechnet werden können)
          </li>
          <li>
            <a class="text-weight-bolder">Kollisionsresistent: </a> Verschiedene
            Eingaben sollten nicht auf den selben Hashwert abgebildet werden
            können
          </li>
          <li>
            <a class="text-weight-bolder">Pseudozufällig: </a> Hashwert sollte
            zufällig erscheinen, in Wirklichkeit aber berechenbar sein
          </li>
          <li>beliebige Eingabemenge, feste Ausgabelänge</li>
        </ul>
        <li>Einsatz bei Integritätsprüfung von Daten</li>
        <li>besonders bei Passworteingaben</li>
        <ul>
          <li>
            Passwörter werden (sollten) immer als Hashwert gespeichert werden,
            damit sie nicht Plain-Text in der Datenbank stehen
          </li>
          <li>
            Die Nutzereingabe des Passworts wird gehashed und mit dem Hashwert
            in der Datenbank verglichen
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Beispiele von Hashfunktionen</li>
      <ul>
        <li class="text-weight-bold">MD5</li>
        <ul>
          <li>Message-Digest-Algorithm 5</li>
          <li>
            weit verbreitet, aber mittlerweile unsicher und veraltet, da es
            keine Kollisionsresistenz bietet
          </li>
          <li>128 Bit Hashwerte</li>
        </ul>
        <li class="text-weight-bold">SHA - Secure Hash Algorithm</li>
        <ul>
          <li class="text-weight-bold">SHA-1</li>
          <ul>
            <li>veraltet</li>
          </ul>
          <li class="text-weight-bold">SHA-2</li>
          <ul>
            <li>Versionen: SHA-224, SHA-384, SHA-256, SHA-512</li>
            <li>heute häufig verwendet und de facto standard</li>
            <li>Hashwertgröße im Namen → SHA-256 = 256 Bit</li>
          </ul>
          <li class="text-weight-bold">SHA-3</li>
          <ul>
            <li>Versionen: SHA3-224, SHA3-256, SHA3-384, SHA3-512</li>
            <li>Alternative zu SHA-2</li>
            <li>neuer, sicherer und effizienter als SHA-2</li>
            <li>Hashwertgröße im Namen → SHA3-256 = 256 Bit</li>
          </ul>
        </ul>
      </ul>
      <li class="text-weight-bold">
        Beispiel: Erstellen eines Hashwertes mit Python
      </li>
      <ul>
        <li>
          Der Hashwert von beiden "Hallo"-Eingaben ist gleich und
          unterschiedlich zur "Guten Morgen"-Eingabe
        </li>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/datenschutz/hash.png'"
          style="max-width: 800px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/hash.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
        <li class="q-mt-md">
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            >>> import hashlib
          </div>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            >>> print(f"Hashwert von Hallo:
            {hashlib.md5('Hallo'.encode('utf-8')).hexdigest()}")
          </div>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            Hashwert von Hallo: d1bf93299de1b68e6d382c893bf1215f
          </div>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            >>> print(f"Hashwert von Guten Morgen: {hashlib.md5('Guten
            Morgen'.encode('utf-8')).hexdigest()}")
          </div>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            Hashwert von Guten Morgen: 41a71d2d71001d0f6d4963f6d395eef2
          </div>

          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            >>> print(f"Nochmal Hashwert von Hallo:
            {hashlib.md5('Hallo'.encode('utf-8')).hexdigest()}")
          </div>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            Nochmal Hashwert von Hallo: d1bf93299de1b68e6d382c893bf1215f
          </div>
        </li>
      </ul>
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

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'KryptographiePage',
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
