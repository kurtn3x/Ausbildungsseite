<template>
  <div class="text-body1">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
        DNS - Domain Name System
      </div>
      <q-separator class="q-mt-md" />
      <ul>
        <li>
          Übersetzt Menschenlesbare Namen wie www.google.de in IP-Adressen,
          welche der Computer verwenden kann
        </li>
        <li><a class="text-weight-bolder">Authoritative DNS:</a></li>
        <ul>
          <li>
            Bietet Aktualisierungsmechanismus, welcher die öffentlichen
            DNS-Namen verwaltet
          </li>
          <li>Antwortet auch rekursiven DNS-Servern</li>
        </ul>
        <li><a class="text-weight-bolder">Recursive DNS:</a></li>
        <ul>
          <li>Normalerweise erster Ansprechpunkt für Clients</li>
          <li>Auch Resolver genannt</li>
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
    </div>
  </div>
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
