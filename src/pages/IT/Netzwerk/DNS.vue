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
    <ul>
      <li>
        Übersetzt Menschenlesbare Namen wie www.google.de in IP-Adressen, welche
        der Computer verwenden kann
      </li>
      <li>DNS verwendet Port 53 auf Serverseite</li>
      <li>man unterscheidet zwischen einem autoritativen und rekursiven DNS</li>
      <ul>
        <li><a class="text-weight-bolder">Autoritatives DNS:</a></li>
        <ul>
          <li>
            Bietet Aktualisierungsmechanismus, welcher die öffentlichen
            DNS-Namen verwaltet
          </li>
          <li>Antwortet auch rekursiven DNS-Servern</li>
        </ul>
        <li>
          <a class="text-weight-bolder"
            >Rekursives DNS (auch Resolver genannt):</a
          >
        </li>
        <ul>
          <li>Normalerweise erster Ansprechpunkt für Clients</li>
          <li>
            Handelt als vermittler zwischen Client und autorativen DNS-Servern,
            kann auch Anfragen direkt beantworten, falls sie im Cache
            gespeichert sind
          </li>
          <li>
            Falls Anfragen nicht im Cache sind, leitet er sie an einen oder
            mehrere autorative DNS-Server weiter
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Arten von DNS-Records:</li>
      <ul>
        <li>A Records</li>
        <ul>
          <li>gibt die IP-Adresse einer bestimmten Domain an</li>
          <li>für IPv4-Adressen</li>
          <li>
            wird für standardmäßige Auflösung von DNS-Namen zu IP-Adressen
            verwendet
          </li>
        </ul>
        <li>AAAA Records</li>
        <ul>
          <li>dasselbe wie A-Records, jedoch mit IPv6-Adressen</li>
        </ul>
        <li>CNAME Records</li>
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
    <div class="text-subtitle2 text-grey font-size-small">
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
