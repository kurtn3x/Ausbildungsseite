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
      Strukturierte Verkabelung
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold">
        Konzept für die Verkabelung mit anwendungsneutralen Kommunikationskabeln
        in und zwischen Gebäuden
      </li>
      <li class="text-weight-bolder">Ziel einer strukturierten Verkabelung</li>
      <ul>
        <li>
          Unterstützung der aktuellen und zukünftigen Kommunikationssysteme
        </li>
        <li>Kapazitätsreserve</li>
        <li>flexible Erweiterbarkeit</li>
        <li>Ausfallsicherheit</li>
        <li>Einhaltung existierender Standards</li>
      </ul>
      <li class="text-weight-bolder">
        Bestandteile einer strukturierten Verkabelung
      </li>
      <ul>
        <li>Leitungen und Steckverbindungen</li>
        <li>Netzwerktopologie</li>
        <li>Empfehlungen für Verlegung und Installation</li>
        <li>standardisierte Mess-, Prüf- und Dokumentationsverfahren</li>
      </ul>
      <li class="text-weight-bolder text-h7">
        Strukturierte Verkabelung nach EN 50173/50174
      </li>
      <ul>
        <li>
          <a class="text-weight-bolder text-orange-4">Primärbereich: </a
          >Verbindet zentrale Komponenten und einzelne Gebäude. Meist
          Lichtwellenleiter mit Redundanz (Twisted-Pair auch möglich, jedoch
          selten)
        </li>
        <li>
          <a class="text-weight-bolder text-pink-3">Sekundärbereich: </a
          >Vertikale Stockwerksverkabelung. Lichtwellenleiter oder Twisted Pair.
        </li>
        <li>
          <a class="text-weight-bolder text-green-4">Tertiärbereich: </a
          >Horizontale Stockwerksverkabelung bis zur Anschlussdose. Verwendung
          von Twisted-Pair (Lichtewellenleiter auch möglich, jedoch selten)
        </li>

        <q-img
          class="fit"
          :src="src + '/Netzwerke/Verkabelung/Verkabelung.jpg'"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/Verkabelung/Verkabelung.jpg';
          "
          style="max-width: 600px"
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
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://studyflix.de/informatik/strukturierte-verkabelung-5549 Ich bin
      nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'StrukturierteVerkabelungPage',
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
