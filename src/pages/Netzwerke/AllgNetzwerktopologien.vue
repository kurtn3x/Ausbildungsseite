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
      <div
        class="text-center text-h4 text-weight-bolder q-mt-md text-secondary"
      >
        Netzwerke
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Allgemeines und Topologien
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Netzwerke
      </div>
      <ul>
        <li>
          Ein Rechnernetz, Computernetz ist ein Zusammenschluss verschiedener
          technischer, primär selbstständiger elektronischer Systeme, der die
          Kommunikation der einzelnen Systeme untereinander ermöglicht.
          Techniken, Protokolle und Systeme zur Datenübertragung realisieren die
          Kommunikation zwischen den Teilnehmern im Netzwerk.
        </li>
        <li>
          <a class="text-weight-bold">Ziel: </a>Kommunikation der einzelnen
          Systeme untereinander und die gemeinsame Nutzung von Ressourcen. Wie
          z.B. Rechenleistung, Geräte(Drucker,....), Software, Daten, Dienste.
        </li>
        <li class="text-weight-bold">Nachteile:</li>
        <ul>
          <li>Infrastruktur und Betriebskosten</li>
          <li>Administrationsaufwand</li>
          <li>
            Zusätzliche Risiken im Bezug auf Daten-/Informationssicherheit,
            Vertraulichkeit, Integrität, Verfügbarkeit
          </li>
        </ul>
      </ul>
      <q-separator class="q-mt-md" />

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder q-mb-md text-underline text-third"
      >
        Netzwerktopologien
      </div>
      <table class="tg">
        <thead>
          <tr>
            <th><a class="text-weight-bold">Skizze</a></th>
            <th><a class="text-weight-bold">Topologie</a></th>
            <th><a class="text-weight-bold">Vorteile</a></th>
            <th><a class="text-weight-bold">Nachteile</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax">
              <q-img
                class="fit bg-grey-5"
                :src="src + '/Netzwerke/Topologien/Bustopologie.png'"
                style="max-width: 600px"
                @click="
                  show_img = true;
                  popupsrc = '/Netzwerke/Topologien/Bustopologie.png';
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
            </td>
            <td class="text-h6 text-weight-bold">Bustopologie</td>
            <td class="tg-0lax">
              -Einfach Installierbar<br />-Kurze Leitungen<br />
            </td>
            <td class="tg-0lax">
              -Bei Kabelbruch fällt Netz aus<br />-Zugriffszeit nicht
              berechenbar<br />
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <q-img
                class="fit bg-grey-5"
                :src="src + '/Netzwerke/Topologien/Ringtopologie.png'"
                style="max-width: 600px"
                @click="
                  show_img = true;
                  popupsrc = '/Netzwerke/Topologien/Ringtopologie.png';
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
            </td>
            <td class="text-h6 text-weight-bold">Ringtopologie</td>
            <td class="tg-0lax">
              -Zugriffszeit vorhersehbar<br />-Keine Datenkollosionen<br />
            </td>
            <td class="tg-0lax">
              -höhere Latenzzeiten<br />-höherer Verkabelungsaufwand als Bus
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <q-img
                class="fit bg-grey-5"
                :src="src + '/Netzwerke/Topologien/Sterntopologie.png'"
                style="max-width: 600px"
                @click="
                  show_img = true;
                  popupsrc = '/Netzwerke/Topologien/Sterntopologie.png';
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
            </td>
            <td class="text-h6 text-weight-bold">
              Sterntopologie<br />(kann zu Baum erweitert werden)<br />
            </td>
            <td class="tg-0lax">
              -Einfache Erweiterung<br />-Kabelbruch führt nicht zum
              Netzausfall<br />
            </td>
            <td class="tg-0lax">
              -hoher Verkabelungsaufwand<br />-Netzausfall bei Ausfall des
              zentralen Vertreters<br />
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <q-img
                class="fit bg-grey-5"
                :src="src + '/Netzwerke/Topologien/Maschentopologie.png'"
                style="max-width: 600px"
                @click="
                  show_img = true;
                  popupsrc = '/Netzwerke/Topologien/Maschentopologie.png';
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
            </td>
            <td class="text-h6 text-weight-bold">Maschentopologie</td>
            <td class="tg-0lax">
              -Unendliche Netzausdehnung möglich<br />-hohe Ausfallsicherheit<br />
            </td>
            <td class="tg-0lax">
              -aufwendige Administration<br />-teure Vernetzung<br />
            </td>
          </tr>
        </tbody>
      </table>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder q-mb-md text-underline text-third"
      >
        Allgemeine Begriffe
      </div>
      <ul>
        <li>
          <a class="text-weight-bolder">Zwischensystem: </a>Gerät zur
          Verstärkung, Weiterleitung und Anpassung des Datenstromes
        </li>
        <li>
          <a class="text-weight-bolder">Datenpaket: </a>Datenströme in
          Übertragungseinheiten zerlegt, welche als Datenpaket bezeichnet
          werden.Sind mit Sender- u. Empfängeradresse ausgestattet (siehe
          versch. Headeraufbau)
        </li>
        <li>
          <a class="text-weight-bolder">Räumliche Ausdehnung von Netzen:</a>
        </li>

        <ul>
          <li>
            <a class="text-weight-bolder">PAN: </a>Personal Area Network (z.B.
            Bluetooth)
          </li>
          <li>
            <a class="text-weight-bolder">LAN: </a>Local Area Network (lokales
            Netz)
          </li>
          <li>
            <a class="text-weight-bolder">MAN: </a>Metropolitan Area Network
            (regionales Netz einer Metropolregion)
          </li>
          <li>
            <a class="text-weight-bolder">WAN: </a>Wide Area Network
            (Weitverkehrsverbindung)
          </li>
          <li>
            <a class="text-weight-bolder">GAN: </a>Global Area Network (globales
            Netz)
          </li>
        </ul>

        <li>
          <a class="text-weight-bolder">PowerLAN: </a>Nutzt das Stromnetz als
          lokales Übertragungsmedium
        </li>
        <li><a class="text-weight-bolder">WLAN: </a>Wireless-LAN</li>
        <li>
          <a class="text-weight-bolder">VLAN: </a>Virtual LAN : flexible,
          logische Trennung eines physischen Netzes
        </li>
        <li>
          <a class="text-weight-bolder">IEEE: </a>Insitute of Electrical and
          Electronics Engineers (US-Normungsbehörde)
        </li>
        <li>
          <a class="text-weight-bolder">ISO: </a>International Organisation for
          Standardization
        </li>
      </ul>
    </div>
  </div>
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

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
