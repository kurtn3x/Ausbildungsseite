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
      Die Firewall
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>
        Schutzmaßnahme gegen unberechtigte Verbindungsversuche auf einen Rechner
        oder ein Rechnernetz
      </li>
      <li>
        beschränkt oder erlaubt Netzwerkzugriff basierend auf Absender, Ziel
        oder dem genutzten Dienst
      </li>
      <li>
        Man unterscheidet zwischen einer Personal Firewall und exterenen
        Firewall
      </li>
      <ul>
        <li class="text-weight-bold">Personal- / Desktop-Firewall</li>
        <ul>
          <li>arbeitet auf dem zu schützenden System</li>
          <li>
            beschränkt/erlaubt einkommenden oder ausgehenden Datenverkehr auf
            dem zu schützenden System
          </li>
        </ul>
        <li class="text-weight-bold">Externe- / Netzwerk-Firewall</li>
        <ul>
          <li>
            arbeitet auf einem seperaten Gerät, welches Netzwerke miteinander
            verbindet
          </li>
          <li>
            beschränkt/erlaubt Datenverkehr zwischen den verbundenen Netzwerken
          </li>
        </ul>
      </ul>
      <li class="text-weight-bold">Filtertechniken:</li>
      <ul>
        <li>
          <a class="text-weight-bold">Paketfilter </a> filtern Datenpakete
          anhand des Ports oder der Quell-/Ziel-IP-Adresse
        </li>
        <li>
          <a class="text-weight-bold">Stateful Packet Inspection </a> filtert
          Datenpakete je nach einer bestimmten aktiven Session. Datenpakete die
          keiner bestimmten Session zugeordnet werden können (z.B. bei
          DoS-Attacken) werden verworfen.
        </li>
        <li>
          <a class="text-weight-bold">Der Proxyfilter </a> stellt
          stellvertretend für den anfragenden Client die Verbindung zum
          Zielsystem her und leitet danach die Antwort an den Client weiter. Er
          kann deshalb die Kommunikation zwischen Client und Zielsystem beliebig
          beeinflussen und analysieren.
          <router-link to="/netzwerk/proxy" class="text-light-blue">
            Siehe auch Proxy</router-link
          >
        </li>
        <li>
          <a class="text-weight-bold">Contentfilter </a> ist eine Form des
          Proxyfilters. Er filtert einen bestimmtem Inhalt (z.B. Scripte) oder
          auch Schadsoftware aus den Nutzdaten heraus und blockiert
          Schadsoftware beim Download.
        </li>
        <li>
          <a class="text-weight-bold">Deep Packet Inspection </a> analysiert
          weitergehende oder protokollspezifische Informationen, z.B. URLs,
          Dateinamen, Dateinhalte. SSL Deep Packet Inspection terminiert die
          SSL-Verschlüsselung um die Nutzdaten zu analysieren und verschlüsselt
          die Daten für den Client anschließend neu.
        </li>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'FirewallPage',
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
