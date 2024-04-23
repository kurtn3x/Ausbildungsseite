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
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Binär-, Dezimal-, und Hexadezimal Umrechnungen und Berechnungen
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li>Es gibt viele verschiedene Wege und Methoden zur Umrechnung.</li>
      <li>Nur meine Präferenzen.</li>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Binär ↔ Dezimal
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
        Dezimalzahl passt: ja → 1, nein → 0
      </li>
      <li>
        wenn die Zahl passt (also eine 1 eingetragen wurde, diese von der
        Dezimalzahl abziehen)
      </li>
      <li>
        Beispiel: Dezimalzahl 300 (eine typische Tabelle bis zur 128(8Bit)
        reicht nicht → 256 (9Bit))
      </li>
      <div style="overflow-x: auto">
        <table class="tg" style="min-width: 600px">
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
              <td class="tg-0lax text-weight-bolder">Binär</td>
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
              <td class="tg-0lax text-weight-bolder">Rechnung</td>
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
              <td class="tg-0lax text-weight-bolder">Rest</td>
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
      </div>
      <li>
        genau auf dem selben weg geschieht die Umrechnung von Binär zu Dezimal:
      </li>
      <ul>
        <li>
          über die Zahlen von rechts nach links die zweier Potenzen schreiben
          (oder denken) und die Zusammenrechnen, wo 1 steht
        </li>
        <li>z.B. 1100 0001 → 128 + 64 + 0 + 0 + 0 + 0 + 0 + 1 = 193</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Binär ↔ Hexa
    </div>
    <ul>
      <li>
        bei der Umrechnung von Binär in Hexadezimal muss man in 4er- Feldern
        denken: 4Binär-Zahlen ergeben eine Hexadezimalzahl
      </li>
      <li>
        falls eine gegebene Binärzahl nicht durch 4 teilbar ist, muss man vor
        die Binärzahlen Nullen anfügen, z.B. gegeben: 1 0101 1001 →
        <a class="text-red">000</a>1 0101 1001
      </li>
      <li>
        nun geht man die 4er-Binärfelder durch und trägt die Hexadezimalzahl
        dazu ein
      </li>
      <li>Tabelle für die Umrechnung</li>

      <q-img
        class="bg-grey-5"
        :src="src + '/rechnungen/hexbindez.jpg'"
        style="max-width: 250px"
        @click="
          show_img = true;
          popupsrc = '/rechnungen/hexbindez.jpg';
        "
      >
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
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Dezimal ↔ Hexa
    </div>
    <ul>
      <li>
        Am besten die Dezimalzahl in Binär umrechnen, und dann die entstandene
        Binärzahl in Hexdezimal umrechnen
      </li>
      <li>
        bzw. die Hexadezimalzahl in Binär umrechnen und die enstandene Binärzahl
        in eine Dezimalzahl umrechnen
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich):<br />
      https://www.watelectronics.com/wp-content/uploads/Hexadecimal-and-Binary-Number-System-Representation.jpg
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'BinDezHexPage',
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
  table-layout: auto;
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
