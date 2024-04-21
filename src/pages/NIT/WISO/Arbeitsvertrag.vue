<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Der Arbeitsvertrag
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-h7 text-weight-bold">Regelungen:</li>
      <ul>
        <li class="text-weight-bold text">Probezeit</li>
        <ul>
          <li>
            normale Arbeitnehmer: keine gesetzliche Mindestzeit (= Keine
            Probezeit falls nicht im Vertrag angegeben), maximal 6 Monate
          </li>
          <li>Azubis: mindestens 1Monat, maximal 4 Monate</li>
          <li>
            Während der Probezeit ist die Kündigung ohne Angabe von Gründen
            möglich, dabei ist die Kündigungsfrist auf 14 Tage heruntergesetzt
          </li>
        </ul>
        <li class="text-weight-bold text-h7">Befristung</li>
        <ul>
          <li>Falls nicht angegeben: unbefristet</li>
          <li>
            für maximal 2 Jahre möglich, können innerhalb dieses Zeitraums 3x
            verlängert werden
          </li>
          <li>
            Arbeitsvertrag endet automatisch ohne Kündigung nach Ablauf der
            Befristung
          </li>
        </ul>
        <li class="text-weight-bold">Weitere Regelungen:</li>
        <ul>
          <li>mindestens 15 freie Sonntage (Gastronomie: 10)</li>
          <li>wöchentliche Arbeitszeit max. 48 Stunden</li>
          <li>
            tägliche Ruhezeit mindestens 11 Stunden nach der Arbeit
            (Gastronomie: 10)
          </li>
          <li>
            Mindesturlaub 24 Werktage (30/27/25 für unter 16-/17-/18-Jährige), +
            5 Tage für Schwerbehinderte
          </li>
        </ul>
      </ul>
      <li class="text-h7 text-weight-bold">Pflichten Arbeitnehmer</li>
      <ul>
        <li class="text-weight-bold">Pflicht zur Arbeitsleistung</li>
        <ul>
          <li>
            Persönliches Verrichten der im Arbeitsvertrag vereinbarten Arbeiten
          </li>
          <li>nach bestem Wissen & Gewissen</li>
          <li>Arbeitnehmer bei Schlechterfüllung schadensersatzpflichtig</li>
        </ul>
        <li class="text-weight-bold">Gehorsamspflicht</li>
        <ul>
          <li>Arbeitnehmer hat Weisungen zu befolgen</li>
        </ul>
        <li class="text-weight-bold">Treue- und Verschwiegenheitspflicht</li>
        <ul>
          <li>Wahrnehmung und Vertretung der Interessen des Arbeitsgebers</li>
        </ul>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AllgemeinesWISOPage',
  setup() {
    const q = useQuasar();
    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
});
</script>
