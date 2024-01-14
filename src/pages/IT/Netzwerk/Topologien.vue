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
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Netzwerktopologien
    </div>
    <q-separator class="q-mt-md" />
    <div class="row justify-center">
      <table class="tg q-mt-lg">
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
                style="max-width: 200px"
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
            <td class="text-h6 text-weight-bold text-center">Bustopologie</td>
            <td class="tg-0lax">
              Einfach Installierbar<br /><br />Kurze Leitungen
            </td>
            <td class="tg-0lax">
              Bei Kabelbruch fällt Netz aus<br /><br />Zugriffszeit nicht
              berechenbar
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <q-img
                class="fit bg-grey-5"
                :src="src + '/Netzwerke/Topologien/Ringtopologie.png'"
                style="max-width: 200px"
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
            <td class="text-h6 text-weight-bold text-center">Ringtopologie</td>
            <td class="tg-0lax">
              Zugriffszeit vorhersehbar<br /><br />Keine Datenkollosionen
            </td>
            <td class="tg-0lax">
              höhere Latenzzeiten<br /><br />höherer Verkabelungsaufwand als Bus
            </td>
          </tr>
          <tr>
            <td class="tg-0lax items">
              <div class="">
                <q-img
                  class="fit bg-grey-5"
                  :src="src + '/Netzwerke/Topologien/Sterntopologie.png'"
                  style="max-width: 200px"
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
              </div>
            </td>
            <td class="text-h6 text-weight-bold text-center">
              Sterntopologie<br />(kann zu Baum erweitert werden)<br />
            </td>
            <td class="tg-0lax">
              Einfache Erweiterung<br /><br />Kabelbruch führt nicht zum
              Netzausfall
            </td>
            <td class="tg-0lax">
              hoher Verkabelungsaufwand<br /><br />Netzausfall bei Ausfall des
              zentralen Vertreters
            </td>
          </tr>
          <tr>
            <td class="tg-0lax">
              <q-img
                class="fit bg-grey-5"
                :src="src + '/Netzwerke/Topologien/Maschentopologie.png'"
                style="max-width: 200px; min-width: 125px"
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
            <td class="text-h6 text-weight-bold text-center">
              Maschentopologie
            </td>
            <td class="tg-0lax">
              Unendliche Netzausdehnung möglich<br /><br />hohe
              Ausfallsicherheit
            </td>
            <td class="tg-0lax">
              aufwendige Administration<br /><br />teure Vernetzung
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <q-separator class="q-mt-md" />
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://de.m.wikipedia.org/wiki/Datei:Netzwerktopologie_Bus.png
      <br />
      https://de.m.wikipedia.org/wiki/Datei:Netzwerktopologie_Ring.png <br />
      https://de.m.wikipedia.org/wiki/Datei:Netzwerktopologie_Stern.png <br />
      https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FullMeshNetwork.svg/220px-FullMeshNetwork.svg.png
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TopologienPage',
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
  max-width: 100%;
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
  vertical-align: center;
}
</style>
