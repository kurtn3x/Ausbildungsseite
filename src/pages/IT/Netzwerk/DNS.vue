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
      DNS - Domain Name System
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
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
      <li class="text-weight-bolder">Arten von DNS-Records:</li>
      <ul>
        <li>
          <a class="text-weight-bold">A Records:</a> Auflösung von DNS-Namen zu
          IPv4 Adresse
        </li>
        <li>
          <a class="text-weight-bold">AAAA Records:</a> Auflösung von DNS-Namen
          zu IPv6 Adresse
        </li>
        <li>
          <a class="text-weight-bold">CNAME Records:</a> Verweis, Weiterleitung
          oder Alias
        </li>
        <li>
          <a class="text-weight-bold">MX Records:</a> zuständiger Mail-Exchange
          Server für die Zone
        </li>
        <li>
          <a class="text-weight-bold">NS Records:</a> zuständiger Name-Server
          für die Zone
        </li>
      </ul>
      <li class="text-weight-bolder">DNSSEC</li>
      <ul>
        <li>
          erweitert DNS zur Gewährleistung von Authentizität und Integrität
        </li>
        <li>
          Nutzen von kryptografischen Signaturen, die zu bestehenden
          DNS-Einträgen hinzugefügt werden
        </li>
        <li>
          Signatur des DNS-Datensatzes wird mit der des autorisierenden
          Nameservers überprüft
        </li>
      </ul>

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
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Arten von DNS-Servern:
    </div>
    <ul>
      <li class="text-weight-bold text-h7">Autoritativer DNS-Server:</li>
      <ul>
        <li>
          Autoritative Antwort erfolgt, wenn der angefragte Domainname in einer
          Zone enthalten ist, für die der angefragte Nameserver zuständig ist
        </li>
        <li>Antwortet rekursiven DNS-Servern</li>
      </ul>
      <li class="text-weight-bold text-h7">
        Nicht-Autoritativer DNS-Server (rekursiv oder iterativ):
      </li>
      <ul>
        <li class="text-weight-bold">Rekursiv</li>
        <ul>
          <li>Server holt die Daten von einem anderen DNS-Server</li>
          <li>
            Handelt als Vermittler (Proxy) zwischen Client und autoritativen
            DNS-Servern, kann auch Anfragen direkt beantworten, falls sie im
            Cache gespeichert sind
          </li>
          <li>
            rekursiver Nameserver löst Anfrage auf, indem er nacheinander
            Nameserver anfragt, bis er eine autoritative Antwort erhält oder er
            leitet die Anfrage an einen anderen rekursiven DNS-Server weiter
          </li>
        </ul>
        <li class="text-weight-bold">Iterativ</li>
        <ul>
          <li>Server antwortet mit Verweis auf andere Nameserver</li>
          <li>
            Iterative Antwort enthält anstelle der gesuchten Daten einen Verweis
            auf andere Nameserver, die der Resolver als nächstes anfragen kann
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Akteure im Domain-Name-System
    </div>

    <ul>
      <li class="text-weight-bold">DNS-Resolver</li>
      <ul>
        <li>
          Komponente, die über das DNS-Protokoll Daten von einem Nameserver
          abruft
        </li>
        <li>Caching-/Forwarding-Funktionen</li>
        <li>
          In Betriebssystemen ist ein simpler Resolver (auch Stub-Resolver
          genannt) vorinstalliert, der ausschließlich rekursive Anfragen an
          einen DNS-Server stellt
        </li>
      </ul>
      <li class="text-weight-bold">Root-Nameserver</li>
      <ul>
        <li>Autoritativer Nameserver für Root-Zone</li>
        <li>Antworten auf Anfrage zur Root-Zone ('.')</li>
        <li>
          Kennt die zuständigen Nameserver für die Top-Level-Domains (TLD) wie
          .de oder .com
        </li>
        <li>
          Inspiziert TLD der Anfrage und verweist auf zugehörigen TLD-Nameserver
        </li>
        <li>
          Es gibt 13 Root-Nameserver (Lastverteilung über Anycast, jeder
          Root-Nameserver besteht aus vielen verteilten Servern, von denen nur
          der Nächste erreicht wird)
        </li>
      </ul>
      <li class="text-weight-bold">Top-Level-Domain(TLD)-Nameserver</li>
      <ul>
        <li>verwaltet Informationen zur dazugehörigen TLD wie .de, .com</li>
        <li>
          verweist auf autoritative Nameserver, die für die Domain zuständig
          sind
        </li>
        <li>von Internet Assigned Numbers Authority (IANA) verwaltet</li>
        <li>
          Zwei Hauptgruppen von TLD-Servern: länderspezifisch (.de, .uk, .ru,
          ...) oder nicht länderspezifisch (.net, .edu, ...)
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Typischer Ablauf einer DNS-Anfrage
    </div>
    <ul>
      <li>DNS-Anfrage wird an rekursiven DNS-Server/Resolver gesendet</li>
      <li>
        (Rekursiver DNS-Server/Resolver antwortet sofort, wenn die angefragten
        Daten im Cache gespeichert sind)
      </li>
      <li>
        Anfrage wird an einen Root-Nameserver weitergeleitet, welcher die
        Root-Domain (wie .de, .com) der Anfrage inspiziert und an den
        dazugehörigen TLD(Top Level Domain)-Server weiterleitet
      </li>
      <li>
        Der TLD-Server leitet die Anfrage an einen autoritativen DNS-Server
        weiter, der den Datensatz für die Anfragedomain enthält
      </li>
      <li>
        Die Anfrage wird zurück an den rekursiven DNS-Server/Resolver geleitet,
        der die Anfrage im Cache speichert und an den Client weitergibt
      </li>
      <q-img
        :src="src + '/Netzwerke/DNS/DNS.png'"
        class="bg-grey-5 q-mt-sm"
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
