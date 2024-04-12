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
      Der Bubblesort-Algorithmus
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>Sortieren einer Liste von Elementen nach Größe</li>
      <li>
        Es werden immer die nebeneinanderliegenden Elemente verglichen. Falls
        ein Element größer ist als das darauffolgende Element, werden die
        Elemente getauscht.
      </li>
      <li>z.B. Liste von Zahlen aufsteigend sortieren</li>
      <li class="text-weight-bolder">Beispiel Pseudo-Code:</li>
      <div
        style="font-family: monospace, monospace"
        :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
        class="text-body1"
      >
        <div class="q-ml-sm">
          <div class="text-grey">
            # Das Array "werte" ist die Liste, die sortiert werden soll
          </div>
          <div>werte = [7, 3, 2, 8, 9, 1, 4, 6, 5]</div>
          <div class="text-grey">"länge" ist die Länge des Arrays, also 9</div>
          <div>länge = werte.Length</div>
          <div class="text-grey"># Temporäre Variable initialisieren</div>
          <div>temp = 0</div>
          <div class="text-grey"># Äußerer For-Loop über die gesamte Länge</div>
          <div>for (y = 0, y &lt; länge, y++)</div>
          <div class="text-grey">
            &nbsp;&nbsp;# Innerer For-Loop über die gesamte Länge-1, da wir
            später auf die Variable "i+1" zugreifen müssen, welche im letzten
            Durchgang auf einen nicht existierenden Index zugreifen würde
          </div>
          <div>&nbsp;&nbsp;for(i = 0, i &lt; länge - 1, i++)</div>
          <div class="text-grey">
            &nbsp;&nbsp;&nbsp;&nbsp;# Vergleiche ob der nächste Wert in der
            Liste größer ist als der jetzige
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;if (werte[i] &gt; werte[i+1])</div>
          <div class="text-grey">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Wenn ja, tausche die beiden
            Werte miteinander
          </div>
          <div class="text-grey">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Hier muss entwender werte[i]
            oder werte[i+1] in "temp" gespeichert werden, je nachdem welcher
            Wert zuerst überschrieben wird
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp = werte[i+1]</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;werte[i+1] = werte[i]</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;werte[i] = temp</div>
        </div>
      </div>
      <li class="text-weight-bolder q-mt-sm">Beispiel in Python:</li>
      <div
        style="font-family: monospace, monospace"
        :class="darkmode ? 'bg-grey-9 text-white' : 'bg-grey-3 text-dark'"
        class="text-body1"
      >
        <div class="q-ml-sm">
          <div>werte = [7, 3, 2, 8, 9, 1, 4, 6, 5]</div>
          <div>länge = len(werte)</div>
          <div>temp = 0</div>
          <div>for y in range(0, länge):</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;for i in range(0, länge-1):</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if werte[i] >
            werte[i+1]:
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp
            = werte[i+1]
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;werte[i+1]
            = werte[i]
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;werte[i]
            = temp
          </div>
          <div>print(werte)</div>
        </div>
      </div>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useSettingsStore } from 'stores/settings';

export default defineComponent({
  name: 'BubbleSortPage',
  setup() {
    const q = useQuasar();
    const settingsStore = useSettingsStore();

    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
      settingsStore,
    };
  },
  computed: {
    darkmode() {
      return this.settingsStore.darkmode;
    },
  },
});
</script>
