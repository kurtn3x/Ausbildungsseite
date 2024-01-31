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
      DNS - Domain Name System
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li class="text-weight-bold">
        Übersetzt Menschenlesbare Namen wie www.google.de (DNS-Namen) in
        IP-Adressen, welche der Computer verwenden kann
      </li>
      <li>DNS verwendet Port 53 auf Serverseite</li>

      <li>
        verschiedene Organisationen sind für die Vergabe der DNS-Namen
        zuständig.
        <router-link to="/anderes/normungen-standards" class="text-light-blue">
          Siehe auch Liste an Organisationen verbunden mit Adressvergaben
        </router-link>
      </li>
      <li class="text-weight-bolder">dynamisches DNS</li>
      <ul>
        <li>
          DNS-Einträge im DNS-Server ändern sich automatisch, wenn sich eine
          IP-Adresse ändert
        </li>
        <li>
          Rechner ist immer unter dem selben Hostnamen erreichbar, auch wenn
          sich die IP-Adresse ändert
        </li>
        <li>
          z.B. über HTTP/HTTPS mit Client-Software / spezielle Funktionen im
          Router oder über DNS Update, ein Protokoll für dynamisches DNS
        </li>
      </ul>
      <li class="text-weight-bolder">DNS-Resolver</li>
      <ul>
        <li>
          Komponente, die über das DNS-Protokoll Daten von einem Nameserver
          abruft
        </li>
        <li>
          In Betriebssystemen ist ein simpler Resolver (auch Stub-Resolver
          genannt) vorinstalliert, der ausschließlich rekursive Anfragen an
          einen DNS-Server stellt
        </li>
      </ul>
      <li class="text-weight-bolder">
        man unterscheidet zwischen einem autoritativen und nicht autoritativen
        DNS
      </li>
      <ul>
        <li><a class="text-weight-bold">Autoritatives DNS:</a></li>
        <ul>
          <li>
            Autoritative Antwort erfolgt, wenn der angefragte Domainname in
            einer Zone enthalten ist, für die der angefragte Nameserver
            zuständig ist
          </li>

          <li>Antwortet rekursiven DNS-Servern</li>
        </ul>
        <li>
          <a class="text-weight-bold"
            >Nicht-Autoritatives DNS (rekursiv oder iterativ):</a
          >
        </li>
        <ul>
          <li class="text-weight-bold">Rekursives DNS</li>
          <ul>
            <li>Server holt die Daten von einem anderen DNS-Server</li>
            <li>
              Handelt als vermittler zwischen Client und autorativen
              DNS-Servern, kann auch Anfragen direkt beantworten, falls sie im
              Cache gespeichert sind
            </li>
            <li>
              rekursiver Nameserver löst Anfrage auf, indem er nacheinander
              Nameserver anfragt, bis er eine autoritative Antwort erhält oder
              er leitet die Anfrage an einen anderen rekursiven DNS-Server
              weiter
            </li>
          </ul>
          <li class="text-weight-bold">Iteratives DNS</li>
          <ul>
            <li>Server antwortet mit Verweis auf andere Nameserver</li>
            <li>
              Iterative Antwort enthält anstelle der gesuchten Daten einen
              Verweis auf andere Nameserver, die der Resolver als nächstes
              anfragen kann
            </li>
          </ul>
        </ul>
      </ul>
      <li class="text-weight-bolder">typischer Ablauf einer DNS-Anfrage</li>
      <ul>
        <li>DNS-Anfrage wird an rekursiven DNS-Server/Resolver gesendet</li>
        <li>
          Rekursiver DNS-Server/Resolver antwortet sofort, wenn die angefragten
          Daten im Cache gespeichert sind
        </li>
        <li>
          Falls nicht: Anfrage wird an einen Root-Nameserver weitergeleitet,
          welcher die Root-Domain (.de, .com) der Anfrage inspiziert und an den
          dazugehörigen TLD(Top Level Domain)-Server weiterleitet
        </li>
        <li>
          Der TLD-Server leitet die Anfrage zu einem autoritativen DNS-Server
          weiter, der den Datensatz für die Anfragedomain enthält
        </li>
        <li>
          Die Anfrage wird zurück an den rekursiven DNS-Server/Resolver
          geleitet, der die Domain cached und an den Client weitergibt
        </li>
      </ul>
      <li class="text-weight-bolder">Arten von DNS-Records:</li>
      <ul>
        <li class="text-weight-bold">A Records</li>
        <ul>
          <li>gibt die IP-Adresse einer bestimmten Domain an</li>
          <li>für IPv4-Adressen</li>
          <li>
            wird für standardmäßige Auflösung von DNS-Namen zu IP-Adressen
            verwendet
          </li>
        </ul>
        <li class="text-weight-bold">AAAA Records</li>
        <ul>
          <li>dasselbe wie A-Records, jedoch mit IPv6-Adressen</li>
        </ul>
        <li class="text-weight-bold">CNAME Records</li>
        <ul>
          <li>ein Hostname zeigt zu einem anderen Hostnamen oder FQDN</li>
          <li>
            können auch als Alias verstanden werden, z.B. wenn die Seite
            test.google.de auf www.google.de zeigt, wird dies über einen
            CNAME-Record realisiert
          </li>
        </ul>
      </ul>
      <li><a class="text-weight-bolder">DNS Anfrage - Beispiel</a></li>
      <q-img
        :src="src + '/Netzwerke/DNS/DNS.png'"
        class="bg-grey-5 q-mt-md"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/DNS/DNS.png';
        "
        style="max-width: 600px"
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
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://aws.amazon.com/route53/what-is-dns/ <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'DNSPage',
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
