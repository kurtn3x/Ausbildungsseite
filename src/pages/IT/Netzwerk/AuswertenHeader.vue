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
      Auswerten verschiedener Header
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Aufbau eines Ethernet-Datenpakets
    </div>
    <ul>
      <q-img
        class="fit bg-grey-5"
        :src="src + '/Netzwerke/ethernet_frame.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Netzwerke/ethernet_frame.png';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>
      <li>
        Der Ethernet-Header beinhaltet sowohl Frame-Inhalte, welche auf Schicht
        1 arbeiten als auch Frame-Inhalte, welche auf Schicht 2 arbeiten.
      </li>
      <li>
        Die Daten, die auf Schicht 1 mitgesendet werden (Präambel, SFD und
        Interpacket Gap) können generell nicht mit einer Software wie Wireshark
        aufgenommen werden, da sie bereits früh verworfen werden.
      </li>
      <li>
        Mindestens 64 Byte (oder 68 mit VLAN-Tag) und maximal 1518 Byte (oder
        1522 mit VLAN-Tag). Die Präambel, SFD und Interpacket-Gap zählt nicht zu
        der Minimal-/Maximalgröße.
      </li>
      <li>
        Falls das Datenpaket kleiner als 64 (bzw. 68) Byte ist, werden vor der
        Frame Check Squence noch Padding-Bits zum Auffüllen gesetzt.
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Aufteilen eines Ethernet-Pakets in seine Header
    </div>
    <ul>
      <li>Beispiel eines mit Wireshark aufgenommenen TCP-Pakets</li>
      <ul>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/wireshark.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/wireshark.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
        <li>Das aufgenommene Paket im Beispiel besitzt keine Nutzdaten.</li>
        <li>
          Header werden wie im Beispiel normalerweise in
          Hexadezimal-Schreibweise angegeben
        </li>
        <li>Dabei gilt zu beachten:</li>
        <ul>
          <li>1 Hexadezimalzahl = 4 Bit</li>
          <li>2 Hexadezimalzahlen = 8Bit = 1Byte</li>
        </ul>
      </ul>
      <li>
        Ethernet-Header-Inhalte, welche auf Schicht 1 arbeiten sind hier bereits
        verworfen wurden (Präambel, SFD, Interpacket Gap) und diese werden
        generell nicht in einem Hexdump eines Datenpaketes angegeben.
      </li>
      <li class="text-green">
        Ein normaler Ethernet-Header ohne Layer-1-Inhalte umfasst 14 Byte, ein
        Ethernet-Header mit VLAN-Tag umfasst 18 Byte. Im gegeben Beispiel ist
        kein VLAN-Tag angegeben. Nach den Nutzdaten des Ethernet-Headers fügt er
        ggf. noch Padding-Bits an, um die Mindesgröße von 64 Byte zu
        gewährleisten und eine FCS (Frame Check Sequence). Die FCS wird in
        Wireshark aus irgendeinem Grund verworfen.
      </li>
      <li class="text-red">
        Ein normaler IPv4-Header umfasst 20 Byte. Dazu können noch optionale
        Felder angegeben werden, die die Größe des IPv4-Headers um bis zu 40
        Byte verlängern können (also insgesamt maximal 60 Byte). Das gegebene
        Beispiel besitzt keine optionalen Felder.
      </li>
      <li class="text-blue">
        Der TCP-Header umfasst auch 20 Byte, welcher auch mit bis zu 40 Byte an
        optionalen Feldern bis zu 60 Byte groß werden kann. Diese optionalen
        Felder werden im gegebenen Beispiel nicht verwendet.
      </li>
      <li>Aufteilung des Frames:</li>
      <ul>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/wireshark_frames.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/wireshark_frames.png';
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Auswerten des Ethernet-Headers
    </div>
    <ul>
      <li class="text-weight-bolder">Aufbau des Ethernet-Headers:</li>
      <ul>
        <li>
          Präambel, SFD und Interpacket Gap entfallen, da es Layer-1-Inhalte
          sind und daher bereits früh von z.B. Netzwerkfirmware aussortiert
          werden
        </li>
        <li>
          die FCS entfällt, da sie von Wireshark automatisch aussortiert wird
        </li>
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
      <li class="q-mt-sm text-weight-bolder">Auswerten des Beispiel-Headers</li>
      <ul>
        <li>
          Ethernet-Header:
          <a class="text-green">50 eb 56 97 f8 f4 </a>
          <a class="text-red">c8 0c c8 d3 1f d4</a
          ><a class="text-blue"> 08 00 </a>
        </li>
        <ul>
          <li class="text-green">
            Ziel-Mac-Adresse (6 Byte): 50-eb-56-97-f8-f4
          </li>
          <li class="text-red">
            Quell-Mac-Adresse (6 Byte): c8-0c-c8-d3-1f-d4
          </li>
          <li class="text-blue">
            Ethernet-Type (2 Byte): 08 00 = IPv4 (z.B.: IPv6 = 86 DD)
          </li>
        </ul>
        <li>
          Außerdem werden am Ende des Datenpakets noch Padding-Bits gesetzt, um
          die Mindestgröße von 64 Byte des Ethernet-Datenpakets zu gewährleisten
          (00 00 00 00 00 00)
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Auswerten des IPv4-Headers
    </div>
    <ul>
      <li class="text-weight-bolder">Aufbau des IPv4-Headers:</li>
      <ul>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/ipv4/IPV4Header.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/ipv4/IPV4Header.png';
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
      <li class="q-mt-sm text-weight-bolder">Auswerten des Beispiel-Headers</li>
      <ul>
        <li>
          IPv4-Header: <a class="text-purple">4</a
          ><a class="text-light-blue">5</a> 00 <a class="text-pink">00 28</a> 69
          cc 40 00 <a class="text-teal">f2</a> <a class="text-lime">06</a> 77 86
          <a class="text-red">22 ce c1 90</a>
          <a class="text-green"> c0 a8 02 76</a>
        </li>
        <li>Wichtige Teile des IPv4-Headers:</li>
        <ul>
          <li class="text-purple">Version: 4 (IPv4)</li>
          <ul>
            <li>derzeit nur Version 4 und Version 6</li>
          </ul>
          <li class="text-light-blue">IHL - Internet Header Length: 5</li>
          <ul>
            <li>als vielfaches von 32 Bit (5*32 = 160 Bit = 20 Byte)</li>
            <li>gibt die gesamte Länge des IPv4-Headers an</li>
          </ul>
          <li class="text-pink">Total Length: 00 28</li>
          <ul>
            <li>00 28 = 40</li>
            <li>
              gibt die Länge des gesamten Pakets inklusive Kopfdaten in Byte an
            </li>
          </ul>
          <li class="text-teal">Time to Live: f2</li>
          <ul>
            <li>f2 = 242</li>
            <li>gibt die Lebensdauer des Pakets an</li>
            <li>
              Wird initial gesetzt und danach von jedem Router, durch welches
              das Paket reist um 1 reduziert
            </li>
            <li>wenn 0 erreicht wird, wird das Paket verworfen</li>
            <li>soll ewiges weiterleiten von Paketen oder Loops verhindern</li>
          </ul>
          <li class="text-teal">Protocol: 06</li>
          <ul>
            <li>= TCP</li>
            <li>
              bezeichnet das Folgeprotokoll, z.B. 06 für TCP oder 17 für UDP
            </li>
          </ul>
          <li class="text-red">Quell-Adresse: 22 ce c1 90</li>
          <ul>
            <li>34.206.193.144</li>
          </ul>
          <li class="text-green">Ziel-Adresse: c0 a8 02 76</li>
          <ul>
            <li>192.168.2.118</li>
          </ul>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Auswerten des TCP-Headers
    </div>
    <ul>
      <li class="text-weight-bolder">Aufbau des TCP-Headers:</li>
      <ul>
        <q-img
          class="fit bg-grey-5"
          :src="src + '/Netzwerke/TCPUDPPorts/TCP.jpg'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/TCPUDPPorts/TCP.jpg';
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
      <li class="q-mt-sm text-weight-bolder">Auswerten des Beispiel-Headers</li>
      <ul>
        <li>
          TCP-Header: <a class="text-red">01 bb</a>
          <a class="text-green"> 0e 07</a> 8f 83 c0 67 48 4a c7 19
          <a class="text-light-blue">5</a>0 10 00 ca 98 7c 00 00
        </li>
        <li>Wichtige Teile des TCP-Headers:</li>
        <ul>
          <li class="text-red">Quell-Port: 01 bb</li>
          <ul>
            <li>= 443 (HTTPS)</li>
          </ul>
          <li class="text-green">Ziel-Port: 0e 07</li>
          <ul>
            <li>= 3591 (User-Port)</li>
          </ul>
          <li class="text-light-blue">Data Offset: 5</li>
          <ul>
            <li>als vielfaches von 32 Bit (5*32 = 160 Bit = 20 Byte)</li>
            <li>gesamte Länge des TCP-Headers</li>
          </ul>
          <ul></ul>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://de.wikipedia.org/wiki/Datenframe <br />
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
  name: 'IndexPage',
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
