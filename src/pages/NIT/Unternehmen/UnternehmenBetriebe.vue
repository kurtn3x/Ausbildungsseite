<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Der Betrieb und das Unternehmen
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        <a class="text-weight-bolder text-h6 text-secondary text-underline"
          >Betrieb</a
        >
        ist eine unselbstständige örtliche Einheit zum Zweck des Erstellens von
        Gütern
      </li>
      <ul>
        <li>Technisch organisatorische Einheit</li>
        <li>z.B. Hotel, Friseur, IT-Betrieb, Automanufaktur</li>
        <li>Merkmale:</li>
        <ul>
          <li>Einem Unternehmen zugeordnet</li>
          <li>Dient der Leistungserstellung</li>
          <li>
            Folgt einem wirtschaftlichen Ziel, ist aber wirtschaftlich
            unselbstständig
          </li>
        </ul>
      </ul>
    </ul>

    <ul>
      <li>
        <a class="text-weight-bolder text-h6 text-secondary text-underline"
          >Unternehmen</a
        >
        ist ein selbstständig rechtliches und finanzielles Gebilde
      </li>
      <ul>
        <li>Rechtliche Wirtschaftseinheit</li>
        <li>z.B. Hotelkette, Friseurkette, IT-GmbH, Auto AG</li>
        <li>Merkmale:</li>
        <ul>
          <li>Geschäftsbücher und Jahresabschlüsse</li>
          <li>Ziel: Gewinn(-maximierung)</li>
          <li>Finanzielles Gefüge mit möglichen Risiken</li>
          <li>Autonom, unabhängig von staatlichen Stellen</li>
          <li>nicht örtlich gebunden</li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Unterscheidung von Betrieb und Unternehmen
    </div>
    <ul>
      <li class="text-weight-bolder">Nach Wirtschaftssektoren:</li>
      <ul>
        <li>
          Dienen dazu, Arbeitsmarkt in verschiedene Bereiche zu klassifizieren
        </li>
        <li>Primärsektor (Urproduktion wie Land- und Fortswirtschaft)</li>
        <li>Sekundärsektor (industrieller Sektor wie Handwerk und Bau)</li>
        <li>Tertiärsektor (Dienstleistungssektor wie Medizin und Banken)</li>
        <li>Tertiärsektor kann noch in</li>

        <ul>
          <li>
            Quartärsektor (Informationssektor wie Dienste im Bereich Freizeit
            und Unterhaltung)
          </li>
          <li>Quintärsektor (Entsorgungswirtschaft, Wasseraufbereitung)</li>
        </ul>
        <li>unterteilt werden.</li>
      </ul>
    </ul>

    <ul>
      <li class="text-weight-bolder">Nach Wirtschaftszweigen/Branche:</li>
      <ul>
        <li>Gruppe von Unternehmen, die nah verwandte Substitute herstellen</li>
        <li>
          Gruppe von Unternehmen, die im Rahmen ihrer wirtschaftlichen Tätigkeit
          ähnliche Produkte herstellen oder ähnliche Dienstleistungen erbringen
        </li>
      </ul>
    </ul>

    <ul>
      <li class="text-weight-bolder">Nach Art der Leistung/Zweck:</li>
      <ul>
        <li>
          z.B. Handwerksbetriebe führen Handwerksleistungen aus und
          Industriebetriebe produzieren Sachgüter, Dienstleistungsbetriebe
          bieten Dienstleistungen an
        </li>
      </ul>
    </ul>

    <ul>
      <li class="text-weight-bolder">Nach Größe:</li>
      <ul>
        <li>Kleinstbetriebe: max 10 Mitarbeiter, bis 2Mio€ Umsatz</li>
        <li>Kleinbetriebe: max 50 Mitarbeiter, bis 10Mio€ Umsatz</li>
        <li>Mittelgroße Betriebe: max 250 Mitarbeiter, bis 50Mio€ Umsatz</li>
        <li>Großbetriebe: über 250 Mitarbeiter, über 50Mio€ Umsatz</li>
      </ul>
    </ul>

    <ul>
      <li class="text-weight-bolder">Nach Zielsetzung:</li>
      <ul>
        <li>Erwerbswirtschaftliche Betriebe - Ziel = Gewinn</li>
        <li>
          Gemeinwirtschaftliche Betriebe - Ziel= Kostendeckung oder
          Verlustminimierung
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'UnternehmenBetriebePage',
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
