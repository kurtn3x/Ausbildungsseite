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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Symmetrisches und asymmetrisches Kryptosystem
    </div>
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
      <li class="text-green q-mt-md">
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Hashfunktionen / Hashwerte / Hashing
    </div>
    <ul>
      <li>
        <a class="text-weight-bolder">Hashing</a>(dt. zerhacken) =
        Transformieren einer beliebig großen Eingabemenge in eine (meist feste
        und kürzere) Zielmenge
      </li>
      <li>Zielmenge wird als Hashwert bezeichnet</li>
      <li class="text-weight-bolder">Hashwerte</li>
      <ul>
        <li>
          oft auch Fingerabdruck (Fingerprint) oder Prüfsumme (Checksum) genannt
        </li>
        <li>eindeutiges Identifikationsmerkmal von Datenmengen</li>
        <li>
          Inhalt der Daten (Eingabemenge) wird so verarbeitet, dass sie einen
          eindeutigen und einzigartigen Wert (Hashwert) zugewiesen bekommen
        </li>
        <li>
          Unter Verwendung der selben Hashfunktion haben die selben Daten immer
          den gleichen Hashwert
        </li>
        <li>Verwendung:</li>
        <ul>
          <li>Erkennen von Übertragungsfehlern</li>
          <li>Erkennen von Änderungen an übertragenen Dateien</li>
          <li>Suchen von Daten mittels Hashtabellen in Datenbanken</li>
          <li>
            Verwendung in der Kryptographie (sicheres Speichern von Daten)
          </li>
        </ul>
        <li>Beispiel Verwendung:</li>
        <ul>
          <li>
            bei vielen Downloads von Betriebssystemen (oder anderen
            sensiblen/wichtigen Daten) wird noch ein Hashwert mitgegeben, damit
            das heruntergeladene ISO vor der Installation auf Vollständigkeit
            und Veränderungen überprüft werden kann. Oft wird noch eine digitale
            Signatur für diesen Hashwert mitgegeben, um auch die Vertraulichkeit
            und Integrität des Hashwerts zu gewährleisten.
          </li>
        </ul>
        <li>Beispiel Hashwerte (mit Hashfunktion MD5):</li>
        <ul>
          <li>Hallo: d1bf93299de1b68e6d382c893bf1215f</li>
          <li>5 Seiten zufälliger Text: 12de527a22b556a7681e5499430c71c4</li>
          <li>PDF-Datei: 062660ffbc2931cb5238d0fe8d6b8218</li>
          <li>Debian-ISO: 746ca683b9983bf51d648c9a4875aa62</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Hashfunktionen in der Kryptographie</li>
      <ul>
        <li>
          Hashfunktionen mit bestimmten Eigenschaften, die für
          Verschlüsselungs-, Signatur oder Authentifizierungsverfahren genutzt
          werden können
        </li>
        <li class="text-weight-bold">
          Eigenschaften kryptographischer Hashfunktionen:
        </li>
        <ul>
          <li>
            <a class="text-weight-bold">Einwegfunktion: </a> leicht berechenbar,
            aber schwer umzukehren (berechneter Hashwert sollte nicht auf den
            Ursprungswert zurückberechnet werden können)
          </li>
          <li>
            <a class="text-weight-bold">Kollisionsresistent: </a> Verschiedene
            Eingaben sollten nicht auf den selben Hashwert abgebildet werden
            können
          </li>
          <li>
            <a class="text-weight-bold">Pseudozufällig: </a> Hashwert sollte
            zufällig erscheinen, in Wirklichkeit aber berechenbar sein
          </li>
          <li class="text-weight-bold">
            beliebige Eingabemenge, feste Ausgabelänge
          </li>
        </ul>
        <li>z.B. Passworteingabe/-vergleich mithilfe von Hashfunktionen</li>
        <ul>
          <li>
            Passwörter sollten immer als Hashwert gespeichert werden, damit sie
            nicht Plain-Text in der Datenbank stehen und im Falle eines
            Hackerangriffs ausgelesen werden können
          </li>
          <li>
            Die Nutzereingabe des Passworts wird gehashed und mit dem
            gespeicherten Hashwert in der Datenbank verglichen
          </li>
          <li>
            stimmen beide Hashwerte überein, hat der Nutzer das korrekte
            Passwort eingegeben
          </li>
        </ul>
        <li class="text-weight-bolder">Rainbow-Tables</li>
        <ul>
          <li>
            Datenstruktur für schnelle und speichereffiziente Suche nach dem
            ursprünglichen Eingabewert (z.B. Passwort) für einen gegebenen
            Hashwert
          </li>
          <li>
            Verwendung beim Passwortcracken (Rainbow-Tables mit oft verwendeten
            Passwörtern werden verwendet)
          </li>
          <li>Tabellen finden sich zuhauf im Internet</li>

          <li>
            erfordet gehashte Passwörter
            <a class="text-weight-bolder"> ohne Salt</a>
          </li>
        </ul>

        <li class="text-weight-bolder">Salt</li>
        <ul>
          <li>zufällig gewählte Zeichenfolge</li>
          <li>
            wird zusammen mit den Eingabedaten in eine Hashfunktion gegeben, um
            die Entropie der Eingabe zu erhöhen
          </li>
          <li>Hashwert wird mit Salt gespeichert</li>
          <li>soll Rainbow-Table-Attacken verhindern</li>
          <li>
            Mit Salt müsste für jeden Salt eine eigene Rainbow-Table erstellt
            werden
          </li>
          <li>
            z.B. Passworteingabe/-vergleich mithilfe von Hashfunktionen und Salt
          </li>
          <ul>
            <li>
              Nutzerpasswort wird mit zufällig generiertem Salt in Hashfunktion
              gegeben = Hashwert
            </li>
            <li>(Plain-Text)Salt + Hashwert wird abgespeichert</li>
            <li>
              Nutzer Loggt sich ein: Salt aus Datenbank wird mit Eingabepasswort
              vom Nutzer in Hashfunktion gegeben und mit dem Hashwert in der
              Datenbank verglichen
            </li>
            <li>
              Falls die Datenbank gehackt wird, können Rainbow-Tables nicht
              verwendet werden, da die Hashwerte mit jedem Salt wieder neu
              berechnet werden müssen (zeitintensiv, unpraktikabel)
            </li>
          </ul>
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
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Digitale Zertifikate
    </div>
    <ul>
      <li>bestätigen Authentizität & Integrität bestimmter Daten</li>
      <li>
        Ausschließlich verwendet werden Public-Key-Zertifikate wie X.509, welche
        die Identität und weitere Eigenschaften eines öffentlichen
        kryptographischen Schlüssels bestätigen
      </li>
      <li>
        Public-Key-Zertifikate nutzen asymmetrische Kryptoverfahren und werden
        durch eine digitale Signatur geschützt
      </li>
      <li>
        Ein Zertifikat wird durch eine Zertifizierungsstelle (CA - Certification
        Authority) ausgestellt und signiert. Die Überprüfung der Signatur eines
        Zertifikats erfolgt über eine
        <a class="text-weight-bold">Zertifikatskette</a>.
      </li>
      <li class="text-weight-bold">Zertifikatskette</li>
      <ul>
        <li>
          Der öffentliche Schlüssel einer CA wird benötigt, um die digitale
          Signatur von Zertifikaten, die durch diese CA ausgestellt wurden, zu
          überprüfen
        </li>
        <li>
          Die öffentlichen Schlüssel einer CA müssen wiederum durch ein anderes
          Zertifikat überprüft werden, um auch dessen Authentizität zu sichern.
          Dadurch entwickelt sich eine
          <a class="text-weight-bold">Zertifikatskette</a>
        </li>
        <li>
          Auf die Echtheit des letzten (Root-)Zertifikats muss sich vollständig
          verlassen werden
        </li>
        <li>
          Vertrauenswürdige Zertifizierungsstellen in z.B. Webbrowsern oft
          vorkonfiguriert
        </li>
      </ul>

      <li class="text-weight-bolder">
        Das gesamte System, welches Zertifikate ausstellt, verteilt und
        überprüft wird PKI - Public-Key-Infrastructure genannt
      </li>
      <li class="text-weight-bolder">
        Typische Anwendung digitaler Zertifikate:
      </li>
      <ul>
        <li>Erstellen digitaler Signaturen</li>
        <li>Verschlüsselung von Nachrichten</li>
        <li>Sicherheit in Netzwerkprotokollen (HTTPS, TLS, IPsec, SSH)</li>
        <li>Sicherheit von E-Mails (S/MIME, PGP)</li>
        <li>Erstellen elektronischer Signaturen</li>
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
        <li>
          <a class="text-weight-bold">Bestandteile:</a> unter anderem Inhaber,
          Public-Key des Inhabers, Aussteller (CA), Gültigkeit,
          Signatur-Algorithmus, Signatur, Version
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Weitere Begriffe zur Kryptographie
    </div>
    <ul>
      <li class="text-weight-bolder">Cipher Suite</li>
      <ul>
        <li>ist eine standardisierte Sammlung kryptographischer Verfahren</li>
        <li>
          in TLS legt sie z.B. fest, welche Algorithmen zum Aufbau einer
          Verbindung verwendet werden sollen
        </li>
        <li>Algorithmen in 4 Gruppen unterteilt</li>
        <ul>
          <li>
            <a class="text-weight-bold">Schlüsselaustausch:</a> asymmetrische
            Verschlüsselungsmethode wie RSA oder asymmetrische
            Schlüsselaustauschmethode wie Diffie-Hellman
          </li>
          <li>
            <a class="text-weight-bold">Authentifizierung:</a> asymmetrische
            Signaturmethode wie RSA, DSA oder ECDSA
          </li>
          <li>
            <a class="text-weight-bold">Verschlüsselung:</a> symmetrische
            Verschlüsselungsmethode wie AES, DES oder Triple-DES
          </li>
          <li>
            <a class="text-weight-bold">Hashfunktion:</a> Hashmethode wie MD5
            oder SHA2
          </li>
        </ul>
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
