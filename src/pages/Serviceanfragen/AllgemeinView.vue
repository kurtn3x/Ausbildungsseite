<template>
  <div class="text-body1">
    <q-dialog v-model="show_img" full-width>
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
        Allgemeines
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        IMAC/R/D IT-Service-Lebenszyklus
      </div>
      <ul>
        <div class="bg-grey-5">
          <q-img
            :src="src + '/serviceanfragen/IMACRD.png'"
            @click="
              show_img = true;
              popupsrc = '/serviceanfragen/IMACRD.png';
            "
          >
            <div
              class="absolute-bottom-right text-subtitle2 text-black"
              style="
                height: 40px;
                font-size: 10px;
                background-color: transparent;
              "
            >
              Click for full size
            </div>
          </q-img>
        </div>
      </ul>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
      >
        Rechtliche Grundlagen / Vorgaben für IT-Services
      </div>
      <ul>
        <li class="text-weight-bold">Bürgerliches Gesetzbuch BGB</li>
        <ul>
          <li>
            systematische und zentrale Regelung des deutschen Privatrechts
          </li>
          <li>relevante Inhalte für IT-Services:</li>
          <ul>
            <li>digitale Produkte</li>
            <li>Geschäftsfähigkeit</li>
            <li>Willenserklärung</li>
            <li>Vertragsrecht</li>
          </ul>
        </ul>
        <li class="text-weight-bold">Handelsgesetzbuch HGB</li>
        <ul>
          <li>regelt den Handel unter Kaufleuten und Unternehmen</li>
          <li>relevante Inhalte für IT-Services:</li>
          <ul>
            <li>
              Wahl der Unternehmensrechtsform, Einfluss auf Steuerzahlungen,
              Buchführung und Haftung
            </li>
            <li>Bilanzierung äbhängig von Vertragsart</li>
            <li>Gewinn- und Verlustrechnung</li>
            <li>Verpflichtung zur Buchführung</li>
          </ul>
        </ul>
        <li class="text-weight-bold">Europäische Datenschutzverordnung</li>
        <ul>
          <li>
            EU-einheutliche Regeln zur Sicherstellung des Schutzes
            personenbezogener Daten und des freien Datenverkehrs im Binnenmarkt
          </li>
        </ul>
        <li class="text-weight-bold">Strafgesetzbuch</li>
        <ul>
          <li>
            regelt das materielle Strafrecht in Deutschland: Inahlt, Entstehung,
            Veränderung, Übertragung und Erlöschen von Rechten
          </li>
          <li>
            Konkretisierung des materiellen Rechts durch das formale Recht
          </li>
        </ul>
        <li class="text-weight-bold">Telemediengesetz</li>
        <ul>
          <li>zentrale Vorgaben für das Internetrecht</li>
          <li>
            Telemedien umfassen Webshops, Suchmaschinen, Informationsdienste,
            Chatrooms,...
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
