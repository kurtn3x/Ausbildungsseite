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
      Strukturierte Verkabelung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Strukturierte Verkabelung
    </div>
    <ul>
      <li class="text-weight-bold">
        Konzept für die Verkabelung mit anwendungsneutralen Kommunikationskabeln
        in und zwischen Gebäuden
      </li>
      <li class="text-weight-bolder">Ziel einer strukturierten Verkabelung</li>
      <ul>
        <li>
          Unterstützung der aktuellen u. zukünftigen Kommunikationssysteme
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
      <li class="text-weight-bold text-h6 q-mt-md text-third">
        Strukturierte Verkabelung nach EN 50173/50174
      </li>
      <ul>
        <li>
          <a class="text-weight-bolder text-orange-4">Primärbereich: </a
          >Verbindet zentrale Komponenten und einzelne Gebäude. Meist
          Lichtwellenleiter mit Redundanz.
        </li>
        <li>
          <a class="text-weight-bolder text-pink-3">Sekundärbereich: </a
          >Vertikale Stockwerksverkabelung. Lichtwellenleiter oder Twisted Pair.
        </li>
        <li>
          <a class="text-weight-bolder text-green-4">Tertiärbereich: </a
          >Horizontale Stockwerksverkabelung bis zur Anschlussdose.
          Lichtwellenleiter oder Twisted Pair.
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
    <div class="text-weight-bold text-h6 q-mt-md text-underline text-third">
      Übertragungsmedien
    </div>
    <ul>
      <li class="text-weight-bold">Leitergebundene</li>
      <ul>
        <li>
          Metallische Leiter: Kupferleitungen (Koaxialkabel, Twisted Pair)
        </li>
        <li>Nichtmetallische Leiter: Glasfaser</li>
        <li class="text-weight-bold">Lichtwellenleiter</li>
        <ul>
          <li>Lichtleitung erfolgt mittels Quarzglas oder Kunststoff.</li>
          <li>
            bestehen im Inneren aus einem Kern und einen umgebenden Mantel mit
            niedrigerem Brechungsindex
          </li>
          <li>
            Totalreflexion an der Grenzschischt -> Weiterleitung des Lichts
          </li>
          <li class="text-green">Vorteile gegenüber Twisted-Pair:</li>
          <ul>
            <li>Kostengünstig und robust</li>
            <li>Einfachere Verbindungstechnik</li>
            <li>Power over Ethernet möglich</li>
          </ul>
          <li class="text-red">Nachteile gegenüber Twisted-Pair:</li>
          <ul>
            <li>Geringe Reichweite</li>
            <li>Elektromagnetische Störungen</li>
          </ul>
        </ul>
      </ul>
      <li class="text-weight-bold">Leiterungebundene</li>
      <ul>
        <li>Infarot</li>
        <li>Ultraschall</li>
        <li>Funk</li>
      </ul>
    </ul>
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://studyflix.de/informatik/strukturierte-verkabelung-5549
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VerkabelungPage',
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
