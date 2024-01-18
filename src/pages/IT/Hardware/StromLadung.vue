<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Strom & Ladung
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        <a class="text-weight-bolder text-weight-bold">Ohmsches Gesetz</a>
      </li>
      <ul>
        <li>
          Stärke des durch ein Objekt fließenden Stroms ist proportional zur
          elektrischen Spannung
        </li>
        <li>Widerstand R = Spannung U / Elektrischer Strom I</li>
      </ul>
      <li><a class="text-weight-bolder text-weight-bold">Spannung U</a></li>
      <ul>
        <li>Potentialdifferenz elektrischer Ladungen</li>
        <li>Einheit: V (Volt)</li>
      </ul>
      <li>
        <a class="text-weight-bolder text-weight-bold">Elektrischer Strom I</a>
      </li>
      <ul>
        <li>Beschreibt die Bewegung von Ladungsteilchen</li>
        <li>Einheit: A (Ampere)</li>
      </ul>
      <li><a class="text-weight-bolder text-weight-bold">Ladung Q</a></li>
      <ul>
        <li>
          Eigenschaft atomarer Teilchen, die als Ladungsträger bezeichnet werden
        </li>
        <li>Einheit: C (Coulomb)</li>
        <li>Q = I in Ampere * t in Sekunden</li>
      </ul>
      <li><a class="text-weight-bolder text-weight-bold">Widerstand R</a></li>
      <ul>
        <li>Einheit: Ω (Ohm)</li>
        <li>R = U in Volt / I in Ampere</li>
      </ul>
      <li><a class="text-weight-bolder text-weight-bold">Stromdichte S</a></li>
      <ul>
        <li>
          Gibt an, wie viele Ladungsträger in einer Sekunde durch einen Leiter
          mit einem bestimmten Querschnitt fließen
        </li>
        <li>Einheit: A/m² (Ampere/m²)</li>
        <li>S = I in Ampere / Fläche A in m²</li>
      </ul>
      <li>
        <a class="text-weight-bolder text-weight-bold"
          >Elektrische Leistung P</a
        >
      </li>
      <ul>
        <li>Einheit: W (Watt)</li>
        <li>P = U in Volt * I in Ampere</li>
        <li>Mit Widerstand gilt:</li>
        <ul>
          <li>P = I² in Ampere * R in Ohm</li>
          <li>P = U² in Volt / R in Ohm</li>
        </ul>
      </ul>
      <li><a class="text-weight-bolder text-weight-bold">Energie E</a></li>
      <ul>
        <li>
          Benötigt über eine Zeitspanne konstante Stromstärke und Spannung
        </li>
        <li>E = U in Volt * I in Ampere * t in Sekunden</li>
        <li>E = P in Watt * t in Sekunden</li>
      </ul>
      <li><a class="text-weight-bolder text-weight-bold">Anderes</a></li>
      <ul>
        <li>
          Tatsächlich bezogene Leistung = benötigte durchschnittliche Leistung /
          Wirkungsgrad in %
        </li>
        <li>
          Energiekosten = Benutzungsdauer in h * bezogene Leistung aus Stromnetz
          in kiloWatt * Energiekosten kWh in Cent
          <ul>
            <li>Beispiel: 30cent/kWh, 180h Benutzungsdauer, 140W</li>
            <li>
              entwender 30cent/kWh in cent/Wh umrechnen oder 140W in kW
              umrechnen
            </li>
            <li>0.03 cent/Wh * 140 W * 180 h = 756 Cent Kosten</li>
            <li>30 cent/kWh * 0.14 kW * 180 h = 756 Cent Kosten</li>
          </ul>
        </li>
        <li>
          Netzspannung in Deutschland: 230Volt → z.B. Steckdose mit 10A kann in
          Deutschland mit maximal 2300Watt belastet werden
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'StomLadungPage',
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
