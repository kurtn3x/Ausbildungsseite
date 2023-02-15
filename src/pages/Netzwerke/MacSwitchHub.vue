<template>
  <div class="text-body1 q-ma-md">
    <div class="text-center text-h4 text-weight-bolder q-mt-md">Netzwerke</div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">
      Mac-Adressen, Switche und Hubs
    </div>
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Mac-Adressen</div>
    <ul>
      <li>MAC = Media Access Control</li>
      <li>
        Weltweit eindeutige, unveränderbare Hardwareadresse jedes einzelnen
        Netzwerkadapters
      </li>
      <li>Bestehen aus 48 Bit also 6 Oktette</li>
      <li>Hexadezimale Schreibweise</li>
      <li>
        Bestimmte Unternehmen unterhalten bestimmte Anfangsbereiche von
        Mac-Adressen (erste 3 Oktette / 24Bit bzw erste 6 Zeichen) =
        "Organizationally Unique Identifier"
      </li>
      <li class="text-weight-bold">
        Beispiel: 00-09-8C-00-69-63 oder auch : statt -
      </li>
    </ul>
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Hub</div>
    <ul>
      <li>verbinden Geräte sternförmig</li>
      <li>keine Analyse der Mac-Adresse</li>
      <li>nur Verstärkung und Weiterleitung des Signals auf allen Ports</li>
      <li>kann Endgeräte nicht unterscheiden und sendet alles an Jeden</li>
      <li>
        Jede Kommunikation zwischen zwei Endgeräten besetzt alle Leitungen
      </li>
    </ul>
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Switche</div>
    <ul>
      <li>
        Können Mac-Adressen auswerten und lernt, welche sich an welchen Port
        befinden
      </li>
      <li>Diese Informationen werden in einer internen Tabelle gespeichert</li>
      <li>
        Kommunikation zwischen zwei Rechnern belegt nur die betroffenen
        Leitungen
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      helloworld: 1,
    };
  },
});
</script>
