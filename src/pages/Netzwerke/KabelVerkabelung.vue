<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Kabel und Verkabelung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      Strukturierte Verkabelung
    </div>
    <ul>
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
        <li>standardisierte Mess-m Prüf- und Dokumentationsverfahren</li>
      </ul>
      <li class="text-weight-bold text-h6 q-mt-md text-third">
        Strukturierte Verkabelung nach EN 50173/50174
      </li>
      <ul>
        <li>
          <a class="text-weight-bolder text-orange-4">Primärbereich:</a
          >Verbindet zentrale Komponenten und einzelne Gebäude. Meist
          Lichtwellenleiter & Redundanz.
        </li>
        <li>
          <a class="text-weight-bolder text-pink-3">Sekundärbereich:</a
          >Vertikale Stockwerksverkabelung. Lichtwellenleiter oder Twisted Pair.
        </li>
        <li>
          <a class="text-weight-bolder text-green-4">Tertiärbereich:</a
          >Horizontale Stockwerksverkabelung bis zur Anschlussdose.
          Lichtwellenleiter oder Twisted Pair.
        </li>
        <q-img
          :src="src + '/Netzwerke/Verkabelung/Verkabelung.jpg'"
          class="bg-grey-5 q-mt-md"
          style="width: 600px"
        />
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
      </ul>
      <li class="text-weight-bold">Leiterungebundene</li>
      <ul>
        <li>Infarot</li>
        <li>Ultraschall</li>
        <li>Funk</li>
      </ul>
      <li class="text-weight-bold text-h6">Lichtwellenleiter</li>
      <ul>
        <li>Lichtleitung erfolgt mittels Quarzglas oder Kunststoff.</li>
        <li>
          bestehen im Inneren aus einem Kern und einen umgebenden Mantel mit
          niedrigerem Brechungsindex
        </li>
        <li>Totalreflexion an der Grenzschischt -> Weiterleitung des Lichts</li>
        <li class="text-weight-bold">Vorteile gegenüber Twisted-Pair:</li>
        <ul>
          <li>Konstengünstig und robust</li>
          <li>Einfachere Verbindungstechnik</li>
          <li>Power over Ethernet möglich</li>
        </ul>
        <li class="text-weight-bold">Nachteile gegenüber Twisted-Pair:</li>
        <ul>
          <li>Geringe Reichweite</li>
          <li>Elektromagnetische Störungen</li>
        </ul>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
    };
  },
});
</script>
