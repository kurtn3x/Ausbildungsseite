<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Brechnungen von Strom & Ladung
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold text-h7">USV-Stromleistung</li>
      <ul>
        <li>Haltedauer = Batteriekapazität / Leistung</li>
        <li class="text-weight-bolder">
          Beispiel1: Wie lange kann die USV Strom liefern?
        </li>
        <ul>
          <li>
            <a class="text-underline">gegeben:</a> Akkuspannung 12V,
            Akkukapazität 200Ah, Leistung 20000W
          </li>
          <q-card bordered flat style="max-width: 500px">
            <q-expansion-item
              dense-toggle
              dense
              expand-separator
              label="Lösung"
              header-class="q-pl-xs bg-secondary text-body2 text-uppercase text-weight-medium rounded-borders"
              align="left"
            >
              <ul class="q-ma-sm">
                <li>Amperestunden in Wattstunden umrechnen</li>
                <ul>
                  <li>Akkukapazität in Wh = 200Ah*12V = 2400Wh</li>
                </ul>
                <li>Haltedauer in h= Akkukapazität in Wh / Leistung in W</li>
                <ul>
                  <li>Haltedauer in h = 2400Wh / 20000W</li>
                  <li>Haltedauer in h= 0.12Stunden</li>
                  <li>Haltedauer in m (*60) = 7.2 Minuten</li>
                </ul>
              </ul>
            </q-expansion-item>
          </q-card>
        </ul>
        <li class="text-weight-bolder">
          Beispiel2: Wie lange kann die USV Strom liefern?
        </li>
        <ul>
          <li>
            <a class="text-underline">gegeben:</a> 4 Racks mit je 2.75kW
            Leistung, Batteriekapazität von 6kWh
          </li>
          <q-card bordered flat style="max-width: 500px">
            <q-expansion-item
              dense-toggle
              dense
              expand-separator
              label="Lösung"
              header-class="q-pl-xs bg-secondary text-body2 text-uppercase text-weight-medium rounded-borders"
              align="left"
            >
              <ul class="q-ma-sm">
                <li>
                  Haltedauer = 6kWh / (4*2.75) = 0.54 Stunden = 32 Minuten
                </li>
              </ul>
            </q-expansion-item>
          </q-card>
        </ul>
        <li class="text-weight-bolder">
          Beispiel3: 100% geladener Akku kann bei einer Last von 100VA eine
          Stunde Stromausfall überbrücken. Der Ladestand soll 40% nicht
          unterschreiten. Der angeschlossene Server hat einen Leistungsbedarf
          von 300 Watt. Der Server benötigt 5 Minuten zum herunterfahren.
          Berechne den Ladestand in Prozent, bei dem der Shutdown des Servers
          eingeleitet werden muss.
        </li>
        <ul>
          <li>VA == Watt (W)</li>
          <q-card bordered flat style="max-width: 500px">
            <q-expansion-item
              dense-toggle
              dense
              expand-separator
              label="Lösung"
              header-class="q-pl-xs bg-secondary text-body2 text-uppercase text-weight-medium rounded-borders"
              align="left"
            >
              <ul class="q-ma-sm">
                <li>100VA über einer Stunde = 100Wh Akkuleistung</li>
                <li>
                  Haltedauer bei 100% = 100Wh / 300W = 0.33 Stunden = 20 Minuten
                </li>
                <li>Beizubehaltende Ladung = 100% - 60% = 40%</li>
                <li>
                  20Min * 60% = 12Min (Restliche Zeit, mit benötigten Restakku
                  von 40% sind diese 12Minuten (also 60%) quasi die neuen 100%)
                </li>
                <li>
                  12Min - 5Min (benötigte Zeit zum herunterfahren) = 7 Min
                </li>
                <li>
                  20Min (Laufzeit 100%) - 7Min (Laufzeit bis Ende Shutdown) =
                  13Min
                </li>
                <li>13Min / 20Min = 0.65 = 65%</li>
                <li>
                  Der Shutdown des Servers muss bei einem Ladestand von 65%
                  eingeleitet werden.
                </li>
              </ul>
            </q-expansion-item>
          </q-card>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold text-h7">Stromkosten</li>
      <ul>
        <li>
          = Benutzungsdauer in h * bezogene Leistung aus Stromnetz in kiloWatt *
          Energiekosten kWh in Cent
        </li>
        <li class="text-weight-bolder">Beispiel: Stromkosten berechnen</li>
        <ul>
          <li>
            <a class="text-underline">gegeben:</a> Strompreis von 30cent/kWh,
            180h Benutzungsdauer, 140W Verbrauch
          </li>
          <q-card bordered flat style="max-width: 500px">
            <q-expansion-item
              dense-toggle
              dense
              expand-separator
              label="Lösung"
              header-class="q-pl-xs bg-secondary text-body2 text-uppercase text-weight-medium rounded-borders"
              align="left"
            >
              <ul class="q-ma-sm">
                <li>
                  entwender 30cent/kWh in cent/Wh umrechnen oder 140W in kW
                  umrechnen
                </li>
                <li>0.03 cent/Wh * 140 W * 180 h = 756 Cent Kosten</li>
                <li>oder 30 cent/kWh * 0.14 kW * 180 h = 756 Cent Kosten</li>
              </ul>
            </q-expansion-item>
          </q-card>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold text-h7">
        Maximale Belastung einer Steckdose
      </li>
      <ul>
        <li>Netzspannung in Deutschland: 230Volt</li>
        <li>
          z.B. Steckdose mit 10A kann in Deutschland mit maximal 2300Watt
          belastet werden (10*230)
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'BerechnungenPage',
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
