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
      Hashfunktionen / Hashwerte / Hashing
    </h1>
    <q-separator class="q-mt-md" />
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'HashingPage',
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
