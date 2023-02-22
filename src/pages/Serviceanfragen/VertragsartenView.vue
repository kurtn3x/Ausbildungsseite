<template>
  <div class="text-body1">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="q-ma-lg">
      <div
        class="text-center text-h4 text-weight-bolder q-mt-md text-secondary"
      >
        Serviceanfragen
      </div>
      <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
        Vertragsarten
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Leasing- vs Mietvertrag
      </div>
      <ul>
        <li class="text-h6 text-weight-bolder">Der Leasingvertrag</li>
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
          <li class="text-weight-bold">Vorteile</li>
          <ul>
            <li>
              steuerliche Vorteile (Leasingraten als Betriebs- ausgaben voll
              absetzbar)
            </li>
            <li>
              Leasinggegenstände erscheinen nicht in der Bilanz des
              Leasingnehmers
            </li>
            <li>Planungssicherheit durch feste Monatsraten</li>
            <li>unvorhersehbare Risken trägt der Leasinggeber</li>
          </ul>
          <li class="text-weight-bold">Nachteile</li>
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
        <li class="text-h6 text-weight-bolder">Der Mietvertrag</li>
        <ul>
          <li>
            gegenseitiger schuldrechtliche Vertrag zur zeitweisen
            Gebrauchsüberlassung einer gemieteten Sache gegen Entgelt
          </li>
          <li>
            Verantwortung beim Vermieter, Mitsache in vertragsmäßig geeignetem
            Zustand zu übergeben und den Erhalt dieses Zustandes zu
            gewährleisten
          </li>
          <li>z.B. Wohnung, Auto, Produktionsanlage, IT-Geräte</li>
        </ul>
      </ul>
      <q-separator class="q-mt-md" />

      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Der Factoringvertrag
      </div>
      <ul>
        <li>Soll Liquidität von Unternehmen mit hohen Außenständen erhalten</li>
        <li>
          Factoring-Bak kauft Forderung einer Unternehmung auf, bevorschusst die
          Unternehmung und übernimmt die Eintreibung der Forderung beim Kunden
        </li>
        <li class="text-weight-bolder">Teilnehmer am Factoringvertrag</li>
        <ul>
          <li>
            <a class="text-weight-bold">Debitor: </a>Schuldner aus Lieferungen
            und Leistungen (Käufer, welche Ware nicht sofort bezahlt)
          </li>
          <li>
            <a class="text-weight-bold">Kreditor: </a>Gäubiger von Forderungen
            aus Lieferungen und Leistungen (Verkäufer einer Ware, die nicht
            sofort bezahlt wird)
          </li>
          <li>
            <a class="text-weight-bold">Factor: </a>Finanzdienstleister, der
            fortlaufend Forderungen seiner Kunden ankauft und diese somit
            umgehend mit Liquidität versorgt
          </li>
        </ul>

        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/serviceanfragen/factoringvertrag.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/serviceanfragen/factoringvertrag.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Werktvertrag vs Dienstvertrag
      </div>
      <ul>
        <li class="text-h6 text-weight-bolder">Der Werkvertrag</li>
        <ul>
          <li>
            Herstellung eines Werkes oder sonstigen Erfolgs gegen Entgelt
            (erfolgsabhängig!)
          </li>
          <li>Partner: Unternehmer und Besteller</li>
          <li>ist zweckbestimmt -> fester Leistungsgegenstand mit Abnahme</li>
          <li>z.B. Anpassung von Software an bestimmte Bedürfnisse</li>
        </ul>
        <li class="text-h6 text-weight-bolder">Der Dienstvertrag</li>
        <ul>
          <li>Dienstleistungen gegen Entgelt (nicht erfolgsabhängig!)</li>
          <li>Partner: Dienstleister und Dienstleistungsnehmer</li>
          <li>ist zeitbestimmt -> allgemeine, laufende Tätigkeit</li>
          <li>
            z.B. Schulung und Beratung der Mitarbeiter zu Hard- und Software
          </li>
        </ul>
      </ul>
    </div>
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
