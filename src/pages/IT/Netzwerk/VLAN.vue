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
      VLAN - Virtual Local Area Network
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Allgemeines
    </div>
    <ul>
      <li>VLAN ist ein logisches Teilnetzwerk eines physischen Netzes</li>
      <li>Kann sich über mehrere Switches hinweg ausdehnen</li>
      <li>jedes VLAN bildet eine eigene Broadcast-Domain</li>
      <li class="text-weight-bold text-green">Gründe für VLANs:</li>
      <ul>
        <li>
          Sicherheitsgründe: Begrenzung der Broadcast-Domäne, Broadcast kann nur
          innerhalb eines VLANs gesendet werden
        </li>
        <li>
          Erhöhte Performance durch Begrenzung der Broadcast-Domäne → weniger
          Netzwerktraffic
        </li>
        <li>
          Anwenden verschiedener fortgeschrittener Funktionen eines Switches auf
          seperate VLANs (z.B. Aussortieren von Netzsegmenten)
        </li>
        <li>logische Trennung von Datenströmen</li>
        <li>Priorisieren von Datenströmen</li>
        <li>Abbildung von Abteilungsstrukturen</li>
      </ul>
      <li class="text-weight-bolder">
        man unterscheidet zwischen statischen und dynamischen VLANs
      </li>
      <ul>
        <li class="text-weight-bold">statisch</li>
        <ul>
          <li>Ports fest zu VLAN zugeordnet</li>
          <li>z.B. portbasiertes VLAN</li>
        </ul>
        <li class="text-weight-bold">dynamisch</li>
        <ul>
          <li>
            Frames werden aufgrund ihres Inhaltes einem bestimmten VLAN
            zugeordnet
          </li>
          <li>
            z.B. anhand der IP- oder MAC-Adresse eines Clients → Selbe
            IP-Adresse wird stets automatisch dem selben VLAN zugeordnet
          </li>
          <li>
            Frames sind einfach manipulierbar, daher ungeeignet und keine
            Sicherheit
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-third">
        man unterscheidet zwischen portbasierten und tagged VLANs
      </li>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Portbasierte VLANs
    </div>
    <ul>
      <li>jedem Port wird eine feste VLAN-ID zugeordnet</li>
      <li>
        ein portbasiertes VLAN, bzw. ein Port mit einer festen VLAN-ID wird auch
        als "access port" bezeichnet
      </li>
      <li>z.B. Switch mit 6 Ports</li>
      <ul>
        <li class="text-red">Port 1 & 2 & 3 werden VLAN 100 zugewiesen</li>
        <li class="text-green">Port 3 & 4 & 6 werden VLAN 200 zugewiesen</li>
        <li class="text-red">
          PC A und PC B werden jeweils an Port 1 & 2 angeschlossen
        </li>
        <li class="text-green">
          PC C und PC D werden an Port 3 & 4 angeschlossen
        </li>
        <li>PC A und PC B können nur untereinander kommunizieren</li>
        <li>PC C und PC D können ebenfalls nur untereinander kommunizieren</li>
      </ul>
      <li>
        Es können auch mehrere Switches untereinander portbasierte VLANs
        handhaben
      </li>
      <ul>
        <li>
          Zwischen den Switches muss für jedes VLAN eine physische Verbindung
          hergestellt werden. Die Ports, welche die Switches miteinander
          verbinden bekommen die VLAN-ID, welche sie verbinden sollen.
        </li>
        <li>
          Bei mehreren VLANs werden auf diesem Weg sehr viele Ports
          verschwendet.
        </li>
        <li>Beispiel:</li>
        <q-img
          class="fit bg-grey-5 q-mt-sm"
          :src="src + '/Netzwerke/VLAN.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/VLAN.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
        <li class="text-red">
          Die Switches werden jeweils über Port 6 mit der VLAN-ID 100 verbunden.
        </li>
        <li class="text-red">
          PC C, D, G und H können untereinander kommunizieren
        </li>
        <li class="text-green">
          Die Switches werden jeweils über Port 3 mit der VLAN-ID 200 verbunden.
        </li>
        <li class="text-green">
          PC A, B, E und F können untereinander kommunizieren
        </li>
      </ul>
      <li>
        <a class="text-weight-bold">PVID:</a> oft muss auf den Ports neben der
        VLAN-ID noch die Port VLAN ID (PVID) konfiguriert werden. Diese gibt an,
        in welches VLAN die Ethernet Frames gelangen sollen, wenn sie an einem
        ungetaggten Port empfangen werden.
      </li>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Tagged VLANs
    </div>
    <ul>
      <li>mehrere VLANs über einen einzelnen Port</li>
      <li>VLAN-ID wird im Ethernet-Frame mitgelifert (VLAN-Tags)</li>
      <li>
        aufgrund der Größe der VLAN-ID im Frame sind bis zu 4096 mögliche VLANs
        vorgesehen
      </li>
      <li>
        Es muss darauf geachtet werden, dass Geräte im Netz VLAN-Tags handhaben
        können.
      </li>
      <li>ein getaggter Port wird auch als "trunked port" bezeichnet</li>
      <li>
        z.B. mit tagged VLANs kann man das obere Beispiel mit mehreren Switches
        vereinfachen
      </li>
      <ul>
        <li>
          da die VLAN-IDs im Ethernet-Frame geliefert werden, braucht man nicht
          für jedes VLAN eine Verbindung zwischen den Switches
        </li>
        <li>Der Austausch beider VLANs geschieht über den getaggten Port 6</li>
        <q-img
          class="fit bg-grey-5 q-mt-sm"
          :src="src + '/Netzwerke/VLANTag.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/VLANTag.png';
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
      <li class="q-mt-sm">
        Der VLAN-Tag wird wie beschrieben im Ethernet-Frame hinterlegt. Dieser
        VLAN-Tag im Ethernet-Frame ist optional, also ein Ethernet-Frame mit
        VLAN-Tag ist größer als einer ohne VLAN-Tag.
      </li>
      <ul>
        <q-img
          class="fit bg-grey-5 q-mt-sm"
          :src="src + '/Netzwerke/VLANEthernetFrame.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/VLANEthernetFrame.png';
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
      https://download-hk.huawei.com/mdl/image/download?uuid=e293a66aa668456881268c0a73b3e0bf
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VLANPage',
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
