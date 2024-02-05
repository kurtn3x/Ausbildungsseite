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
      Die Firewall
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
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
        Man unterscheidet zwischen einer Personal Firewall und externen Firewall
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
          <q-img
            class="fit bg-grey-5 q-mt-md"
            :src="src + '/Netzwerke/firewall.jpg'"
            style="max-width: 500px"
            @click="
              show_img = true;
              popupsrc = '/Netzwerke/firewall.jpg';
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
      </ul>
      <li class="text-weight-bold q-mt-md">Filtertechniken:</li>
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
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Begriffe zu Firewalls
    </div>
    <ul>
      <li class="text-weight-bolder">DMZ - Demilitarized Zone</li>
      <ul>
        <li>Pufferzone zwischen externen und internen Netzwerk</li>
        <li>
          z.B. Ort für Webserver oder Mailserver: Dienste die sowohl vom
          externen sowie internen Netz erreichbar sein müssen
        </li>
        <li>
          externe Anwender können keinen Zugriff auf das interne Netz über die
          Dienste in der DMZ erlangen
        </li>
        <li>
          Schutz vor Angriffen aus dem Internet oder Schutz vor Überlastung
          durch Anfragen
        </li>
        <li>Firewall-Gerät definiert die DMZ</li>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/Netzwerke/dmz.png'"
          style="max-width: 500px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/dmz.png';
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
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:Externe_Firewall.jpg <br />
      https://www.ipfire.org/docs/configuration/firewall/rules/simple_dmz_network_v2a.png
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
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
