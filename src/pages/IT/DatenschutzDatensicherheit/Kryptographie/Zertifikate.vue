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
      Digitale Zertifikate
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li>bestätigen Authentizität & Integrität bestimmter Daten</li>
      <li>
        ausschließlich verwendet werden Public-Key-Zertifikate wie X.509, welche
        die Identität und weitere Eigenschaften eines öffentlichen
        kryptographischen Schlüssels bestätigen
      </li>
      <li>
        Public-Key-Zertifikate nutzen asymmetrische Kryptoverfahren und werden
        durch eine digitale Signatur geschützt
      </li>
      <li>
        Ein Zertifikat wird durch eine Zertifizierungsstelle (CA - Certification
        Authority) ausgestellt und signiert
      </li>
      <li class="text-weight-bolder">Zertifikatsüberprüfung</li>
      <ul>
        <li>
          Das Zertifikat wird mit dem privaten Schlüssel der CA signiert. Diese
          Signatur wird mithilfe des öffentlichen Schlüssels der CA überprüft.
        </li>
        <li>
          Der Widerrufsstatus des Zertifikats wird überprüft. Das passiert
          meistens mithilfe eines Servers der CA.
        </li>
        <li>
          Die Gültigkeitsdauer wird mithilfe des Start- und End-Datums im
          Zertifikat überprüft.
        </li>
        <li>
          Die <a class="text-weight-bold">Zertifikatskette</a> wird überprüft.
        </li>
      </ul>
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
        <li class="text-weight-bolder">
          Das gesamte System, welches Zertifikate ausstellt, verteilt und
          überprüft wird PKI - Public-Key-Infrastructure genannt
        </li>
      </ul>
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
      <li class="text-weight-bolder text-h7">X.509</li>
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
      </q-img>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Weitere Begriffe zu Zertifikaten
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
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ZertifikatePage',
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
