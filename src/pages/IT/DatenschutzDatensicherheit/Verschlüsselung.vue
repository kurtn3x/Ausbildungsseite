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
      Verschlüsselung
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
      </ul>
      <li class="text-weight-bolder">asymmetrische Verschlüsselung</li>
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
      </ul>
      <li class="text-green">
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
      Zertifikate
    </div>
    <ul>
      <li>bestätigen Authentizität & Integrität bestimmter Daten</li>
      <li>Ausgestellt durch eine Certification Authority (CA)</li>
      <li>
        verwendet werden dazu sogenannte Public-Key-Zertifikate wie X.509,
        welche die Identität und weitere Eigenschaften eines öffentlichen
        kryptographischen Schlüssels bestätigen
      </li>
      <li></li>
      <li>Typische Anwendung digitaler Zertifikate:</li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Hashes
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
