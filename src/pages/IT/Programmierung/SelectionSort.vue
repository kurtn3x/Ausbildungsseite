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
      Der Selectionsort-Algorithmus
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>Sortieren einer Liste von Elementen nach Größe</li>
      <li>
        Die Liste wird nacheinander abgearbeitet: Bei jedem Listenindex wird die
        restliche Liste nach dem kleinsten Element durchsucht. Ist eines der
        restlichen Elemente kleiner als das des jetzigen Listenindexes, werden
        beide Elemente getauscht.
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
          <div>&nbsp;&nbsp;min_index = y</div>
          <div class="text-grey">
            &nbsp;&nbsp;# Das restliche Array nach dem derzeitigen Index (y)
            durchgehen
          </div>
          <div>&nbsp;&nbsp;for(i = y+1, i &lt; länge, i++)</div>
          <div class="text-grey">
            &nbsp;&nbsp;&nbsp;&nbsp;# Vergleiche ob der Index irgendeines Wertes
            im restlichen Array größer ist als der derzeitige Index (y)
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;if (werte[min_index] &gt; werte[i])</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_index = i</div>
          <div>&nbsp;&nbsp;temp = werte[y]</div>
          <div>&nbsp;&nbsp;werte[y] = werte[min_index]</div>
          <div>&nbsp;&nbsp;werte[min_index] = temp</div>
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
          <div>&nbsp;&nbsp;&nbsp;&nbsp;min_index = y</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;for i in range(y+1, länge):</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if werte[min_index]
            > werte[i]:
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min_index
            = i
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;temp = werte[y]</div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;werte[y] = werte[min_index]
            <div>&nbsp;&nbsp;&nbsp;&nbsp;werte[min_index] = temp</div>
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
