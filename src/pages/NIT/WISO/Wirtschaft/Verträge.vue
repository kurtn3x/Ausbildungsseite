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
      Verträge und Vertragsarten
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Leasing- und Mietvertrag
    </div>
    <ul>
      <li class="text-weight-bolder">Der Leasingvertrag</li>
      <ul>
        <li>
          Überlassung einer Sache zum Gebrauch gegen Entgelt zwischen
          Leasinggeber und -nehmer
        </li>
        <li>
          individuelle Vereinbarungen zu Wartung, Instandhaltung und
          Versicherung der Sache möglich
        </li>
        <li>z.B. Auto, Produktionsanlage, IT-Geräte</li>
        <li class="text-weight-bold text-green">Vorteile</li>
        <ul>
          <li>
            steuerliche Vorteile (Leasingraten als Betriebs- ausgaben voll
            absetzbar)
          </li>
          <li>
            Leasinggegenstände erscheinen nicht in der Bilanz des Leasingnehmers
          </li>
          <li>Planungssicherheit durch feste Monatsraten</li>
          <li>unvorhersehbare Risken trägt der Leasinggeber</li>
        </ul>
        <li class="text-weight-bold text-red">Nachteile</li>
        <ul>
          <li>Leasinggegenstand ist kein Eigentum des Leasingnehmers.</li>
          <li>Hohe Gesamtkosten für den Leasingnehmer.</li>
          <li>Die Leasingdauer (u. U. mehrere Jahre) ist meist nicht</li>
          kündbar.
          <li>
            Der Leasinggeber darf Vertrag kündigen, wenn der Leasingnehmer in
            Zahlungsverzug gerät.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Der Mietvertrag</li>
      <ul>
        <li>
          gegenseitiger schuldrechtlicher Vertrag zur zeitweisen
          Gebrauchsüberlassung einer gemieteten Sache gegen Entgelt
        </li>
        <li>
          Verantwortung beim Vermieter, Mietsache in vertragsmäßig geeignetem
          Zustand zu übergeben und den Erhalt dieses Zustandes zu gewährleisten
        </li>
        <li>z.B. Wohnung, Auto, Produktionsanlage, IT-Geräte</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Der Factoringvertrag
    </div>
    <ul>
      <li>Soll Liquidität von Unternehmen mit hohen Außenständen erhalten</li>
      <li>
        Factoring-Bank kauft Forderung einer Unternehmung auf, bevorschusst die
        Unternehmung und übernimmt die Eintreibung der Forderung beim Kunden
      </li>
      <li>z.B. Bezahlung mit Klarna</li>
      <li class="text-weight-bolder">Teilnehmer am Factoringvertrag</li>
      <ul>
        <li>
          <a class="text-weight-bold">Debitor: </a>Schuldner aus Lieferungen und
          Leistungen (Käufer, welcher Ware nicht sofort bezahlt)
        </li>
        <li>
          <a class="text-weight-bold">Kreditor: </a>Gäubiger von Forderungen aus
          Lieferungen und Leistungen (Verkäufer einer Ware, die nicht sofort
          bezahlt wird)
        </li>
        <li>
          <a class="text-weight-bold">Factor: </a>Finanzdienstleister, der
          fortlaufend Forderungen seiner Kunden ankauft und diese somit umgehend
          mit Liquidität versorgt
        </li>
      </ul>
      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/serviceanfragen/factoringvertrag.jpg'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/serviceanfragen/factoringvertrag.jpg';
        "
      >
      </q-img>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Werk- und Dienstvertrag
    </div>
    <ul>
      <li class="text-weight-bolder">Der Werkvertrag</li>
      <ul>
        <li>
          Herstellung eines Werkes oder sonstigen Erfolgs gegen Entgelt
          (erfolgsabhängig!)
        </li>
        <li>Partner: Unternehmer und Besteller</li>
        <li>ist zweckbestimmt → fester Leistungsgegenstand mit Abnahme</li>
        <li>z.B. Anpassung von Software an bestimmte Bedürfnisse</li>
      </ul>
      <li class="text-weight-bolder">Der Dienstvertrag</li>
      <ul>
        <li>Dienstleistungen gegen Entgelt (nicht erfolgsabhängig!)</li>
        <li>Partner: Dienstleister und Dienstleistungsnehmer</li>
        <li>ist zeitbestimmt → allgemeine, laufende Tätigkeit</li>
        <li>
          z.B. Schulung und Beratung der Mitarbeiter zu Hard- und Software
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizenz(von oben nach unten, falls erforderlich): <br />
      https://www.bommi2000.de/wirtkunde/e2_lernfeld06_2.jpg<br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VertragsartenPage',
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
