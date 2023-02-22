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
        Hardware und Umrechnungen
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Binär-, Dezimal-, und Hexadezimalumrechnungen sowie Berechnungen
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Binär &lt;-&gt; Dezimal
      </div>
      <ul>
        <li>
          Zweierpotenztabelle benötigt (diese könnte auch weiter gehen, je nach
          Zahlengröße)
        </li>

        <table class="tg" style="max-width: 500px">
          <thead>
            <tr>
              <th class="tg-0lax">128</th>
              <th class="tg-0lax">64</th>
              <th class="tg-0lax">32</th>
              <th class="tg-0lax">16</th>
              <th class="tg-0lax">8</th>
              <th class="tg-0lax">4</th>
              <th class="tg-0lax">2</th>
              <th class="tg-0lax">1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">2⁷</td>
              <td class="tg-0lax">2⁶</td>
              <td class="tg-0lax">2⁵<br /></td>
              <td class="tg-0lax">2⁴</td>
              <td class="tg-0lax">2³</td>
              <td class="tg-0lax">2²<br /></td>
              <td class="tg-0lax">2¹</td>
              <td class="tg-0lax">2⁰</td>
            </tr>
          </tbody>
        </table>
        <li>
          von links nach rechts durchgehen und schauen ob die Zahl in die
          Dezimalzahl passt: ja -> 1, nein -> 0
        </li>
        <li>
          wenn die Zahl passt (also eine 1 eingetragen wurde, diese von der
          Dezimalzahl abziehen)
        </li>
        <li>
          Beispiel: Dezimalzahl 300 (eine typische Tabelle bis zur 128(8Bit)
          reicht nicht -> 256 (9Bit))
        </li>
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-0lax">2er Potenz<br /></th>
              <th class="tg-0lax">256</th>
              <th class="tg-0lax">128</th>
              <th class="tg-0lax">64</th>
              <th class="tg-0lax">32</th>
              <th class="tg-0lax">16</th>
              <th class="tg-0lax">8</th>
              <th class="tg-0lax">4</th>
              <th class="tg-0lax">2</th>
              <th class="tg-0lax">1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax">Binär</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">0<br /><br /></td>
              <td class="tg-0lax">0</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">0</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">1</td>
              <td class="tg-0lax">0<br />passt nicht<br /></td>
              <td class="tg-0lax">0<br />passt nicht<br /></td>
            </tr>
            <tr>
              <td class="tg-0lax">Rechnung</td>
              <td class="tg-0lax">300-256 =44</td>
              <td class="tg-0lax">128 &gt; 44<br />passt nicht<br /></td>
              <td class="tg-0lax">64 &gt; 44<br />passt nicht<br /></td>
              <td class="tg-0lax">44-32 =12</td>
              <td class="tg-0lax">16&gt;12<br />passt nicht<br /></td>
              <td class="tg-0lax">12-8 =4</td>
              <td class="tg-0lax">4-4 =0</td>
              <td class="tg-0lax">passt nicht</td>
              <td class="tg-0lax">passt nicht</td>
            </tr>
            <tr>
              <td class="tg-0lax">Rest</td>
              <td class="tg-0lax">44</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">12</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax">4</td>
              <td class="tg-0lax">0</td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
            </tr>
          </tbody>
        </table>
        <li>
          genau auf dem selben weg geschieht die Umrechnung von Binär zu
          Dezimal:
        </li>
        <ul>
          <li>
            über die Zahlen von rechts nach links die zweier Potenzen schreiben
            (oder denken) und die Zusammenrechnen, wo 1 steht
          </li>
          <li>z.B. 1100 0001 -> 128 + 64 + 0 + 0 + 0 + 0 + 0 + 1 = 193</li>
        </ul>
      </ul>
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Binär &lt;-&gt; Hexa
      </div>
      <ul>
        <li>
          bei der Umrechnung von Binär in Hexadezimal muss man in 4er- Feldern
          denken: 4Binär-Zahlen ergeben eine Hexadezimalzahl, falls das nicht
          aufgeht muss man so viele Nullen an die Binärzahl vorne
          heranschreiben, bis die Anzahl der Binärzahlen durch 4 teilbar ist
        </li>
        <li>
          nun geht man die 4er-Binärfelder durch und trägt die Hexadezimalzahl
          dazu ein
        </li>
        <li>Tabelle für die Umrechnung (bis 15 ist notwendig zu wissen!)</li>

        <q-img
          class="bg-grey-5"
          :src="src + '/rechnungen/hexbindez.jpg'"
          style="max-width: 250px"
          @click="
            show_img = true;
            popupsrc = '/rechnungen/hexbindez.jpg';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>

        <li>Beispiel: Binärzahl 1100 0101 in Hexa</li>
        <ul>
          <table class="tg">
            <thead>
              <tr>
                <th class="tg-0lax">4er- Binärblock<br /></th>
                <th class="tg-0lax">1100</th>
                <th class="tg-0lax">0101</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-0lax">Hexadezimalzahl</td>
                <td class="tg-0lax">C</td>
                <td class="tg-0lax">5</td>
              </tr>
            </tbody>
          </table>
          <li>Diese Binärzahl ergibt die Hexadezimalzahl C5</li>
        </ul>
        <li>
          genau auf dem selben Weg rechnet man auch eine Hexadezimalzahl in eine
          Binärzahl um
        </li>
        <ul>
          <li>
            Man rechnet je eine Hexadezimalzahl in 4Bit um und fügt am Ende die
            Bit zusammen
          </li>
        </ul>
      </ul>
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Dezimal &lt;-&gt; Hexa
      </div>
      <ul>
        <li>
          Dezimalzahl in Binär umrechnen und von dort aus weitermachen, bzw. die
          Hexadezimalzahl in Binär ausrechnen und diese dann zu Dezimal
          umrechnen.
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
