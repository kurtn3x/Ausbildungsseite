<template>
  <div class="text-body1 q-ma-lg">
    <q-dialog v-model="show_img">
      <q-img :src="src + popupsrc" class="bg-grey-5" />
    </q-dialog>
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Projektmanagement
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Allgemeines
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Projekte
    </div>
    <ul>
      <li>
        Vorhaben, dass sich im Wesentlichen durch Einmaligkeit in seinen
        Bdeingungen in ihrere Gesamtheit auszeichnet
      </li>
      <li class="text-weight-bolder">Kennzeichen:</li>
      <ul>
        <li>werden vom Kunden beauftragt -> Lastenheft</li>
        <li>Auftragnehmer erstellt auf dessen Grundlage das Pflichtenheft</li>
        <li>Eigene organisatorische Struktur</li>
        <li>Projekte sind abrechenbar</li>
        <li>gliedern sich in Meilensteinabschnitte</li>
        <li>hohes Misserfolgsrisiko</li>
        <li>Kunde gibt Rahmenbedingungen wie Zeit und Kosten vor</li>
        <li>Komplex und umfangreich</li>
        <li>werden standartisierte Dokumente erstellt</li>
        <li>bilden eine Schnittstelle zur umgebenden Infrastruktur</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Projektphasen
    </div>
    <ul>
      <li class="text-weight-bolder">Projektdefinition und -analyse</li>
      <ul>
        <li>Ziel wird festgelegt</li>
        <li>Chancen- und Risikoanalyse</li>
        <li>festlegen wesentlicher Inhalte</li>
        <li>Abschätzung von Kosten, Ausmaß und Zeit</li>
        <li>Am Ende formeller Projektauftrag</li>
      </ul>
      <li class="text-weight-bolder">Projektplanung</li>
      <ul>
        <li>Organisation des Projektteams</li>
        <li>
          festlegen von Aufgabenplänen, Ablaufplänen, Terminplänen,
          Kapizitätsplänen, Kommunikationsplänen, Kostenplänen, Qualitätsplänen
          und Risikomanagement
        </li>
      </ul>
      <li class="text-weight-bolder">Projektdurchführung - und kontrolle</li>
      <ul>
        <li>Durchführung des Projekts</li>
        <li>
          Kontrolle des Projektfortschritts und Reaktion auf projektstörende
          Ereignisse
        </li>
        <li>evtl. Planungsänderungen und Korrekturmaßnahmen</li>
      </ul>
      <li class="text-weight-bolder">Projektabschluss</li>
      <ul>
        <li>Präsentation der Ergebnisse und Übergabe mit Dokumentation</li>
        <li>Projekt wird rückblickend bewertet, Erfahrungen festgehalten</li>
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
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
});
</script>
