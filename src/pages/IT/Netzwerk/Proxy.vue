<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Der Proxy
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>Proxy = Stellvertreter</li>
      <li>bekannte Proxy-Protokolle sind HTTP und SOCKS</li>
      <li>
        dient als Zwischenspeicher innerhalb eines Netzwerks um Zugriff auf die
        gleichen Daten aus dem Speicher zu bedienen
      </li>
      <li>leitet stellvertretend Anfragen an ein Netzwerk weiter</li>
      <li>man unterscheidet zwischen einem Standard- und Reverse-Proxy</li>
      <li class="text-weight-bold">Standard-Proxy</li>
      <ul>
        <li>Client schickt Anfrage an Proxy-Server</li>
        <li>Proxy-Server übermittelt die Anfrage zum Zielserver</li>
        <li>Zielserver schickt Antwort an Proxy-Server</li>
        <li>
          Proxy-Server speichert Antwortdaten und übermittelt Antwort an Client
        </li>
        <li>
          Bei erneuter Anfrage zum Endpunkt verwendet der Proxy-Server die
          vorher gespeicherte Antwort
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/proxy.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/proxy.png';
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
      <li class="text-weight-bold q-mt-sm">Reverse-Proxy</li>
      <ul>
        <li>Sinnvoll für Serverdienste, z.B. Webserver</li>
        <li>Reverse-Proxy-Server wird vor den Webserver geschalten</li>
        <li>
          Webserver muss nicht offen im Internet stehen, sondern Reverse-Proxy
          nimmt Anfrage für den Webserver entgegen
        </li>
        <li>
          Client sendet Anfrage für eine Website an einen (vermeintlichen)
          Webserver, in Wirklichkeit nimmt der Reverse-Proxy-Server diese
          Anfrage entgegen
        </li>
        <li>
          Reverse-Proxy leitet die Anfrage an den richtigen, vom Internet
          versteckten Webserver weiter
        </li>
        <li>
          Webserver antwortet mit einer Website und sendet sie an den
          Reverse-Proxy-Server
        </li>
        <li>
          Reverse-Proxy speichert die Website zwischen und sendet sie an den
          Client
        </li>
        <li>
          Anfragen von Clients auf die Website können direkt vom Proxy-Speicher
          aus bedient werden → weniger Last für den Webserver
        </li>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/reverse_proxy.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/reverse_proxy.png';
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'ProxyPage',
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
