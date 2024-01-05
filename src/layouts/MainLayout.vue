<template>
  <q-layout view="HHH LpR fFf">
    <q-header>
      <q-toolbar class="q-pa-none">
        <q-btn
          flat
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          style="width: 75px"
          stretch
        />
        <q-separator vertical />

        <q-space />
        <q-separator vertical />

        <q-icon name="format_size" size="30px" class="q-ml-md q-mr-md" />
        <q-slider
          label
          label-text-color="black"
          label-color="white"
          switch-label-side
          v-model="fontSize"
          color="white"
          thumb-color="purple"
          :min="50"
          :step="1"
          :max="200"
          style="width: 200px"
          class="q-mr-md"
          track-color="white"
        />
        <q-separator vertical />
        <q-btn icon="visibility" stretch flat @click="darkmodeChanged" />
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-expansion-item
        dense-toggle
        label="Projektmanagement"
        header-class="bg-primary text-white text-body1"
        expand-icon-class="text-white"
        :content-inset-level="0.2"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/projektmanagement/projekt"
            label="Das Projekt"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/projektmanagement/gantt"
            label="Gantt-Diagramm"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/projektmanagement/netzplan"
            label="Netzplan"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/projektmanagement/pflichten-lastenheft"
            label="Pflichten- & Lastenheft"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        label="Qualitätsmanagement"
        header-class="bg-primary text-white text-body1"
        expand-icon-class="text-white"
        :content-inset-level="0.2"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/qualitatsmanagement/systeme-methoden"
            label="Managementsysteme - & methoden"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/qualitatsmanagement/pdca"
            label="Der PDCA-Zyklus"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        label="Unternehmen"
        header-class="bg-primary text-white text-body1"
        expand-icon-class="text-white"
        :content-inset-level="0.2"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/unternehmen/unternehmen-betriebe"
            label="Unternehmen & Betriebe"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/unternehmen/aufbauorganisation"
            label="Aufbauorganisation"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/unternehmen/Leitbild"
            label="Leitbild"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/unternehmen/rechtsformen"
            label="Rechtsformen"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/unternehmen/wertschopfung"
            label="Wertschöpfung"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/unternehmen/ziele"
            label="Ziele"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        label="Wirtschaft"
        header-class="bg-primary text-white text-body1"
        expand-icon-class="text-white"
        :content-inset-level="0.2"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/wirtschaft/kostenrechnung"
            label="Kostenrechnung"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/wirtschaft/markt"
            label="Der Markt"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-btn
            dense
            flat
            to="/wirtschaft/vertrage"
            label="Verträge & Vertragsarten"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        label="Netzwerk"
        header-class="bg-primary text-white text-body1"
        expand-icon-class="text-white"
        :content-inset-level="0.2"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/netzwerk/allgemein"
            label="Allgemein"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-expansion-item
            dense-toggle
            expand-separator
            label="Netzwerkkonzepte & topologien"
            header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
            class="q-mt-xs"
            align="start"
            dense
            :content-inset-level="0.4"
          >
            <div class="q-ma-xs">
              <q-btn
                dense
                flat
                to="/netzwerk/topologien"
                label="Netzwerktopologien"
                class="full-width q-mt-xs"
                rounded
                align="start"
              />
              <q-btn
                dense
                flat
                to="/netzwerk/strukturierte-verkabelung"
                label="Strukturierte Verkabelung"
                class="full-width q-mt-xs"
                rounded
                align="start"
              />
            </div>
          </q-expansion-item>
          <q-expansion-item
            dense-toggle
            dense
            expand-separator
            label="Netzwerkmodelle"
            header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
            class="q-mt-xs"
            align="start"
            :content-inset-level="0.4"
          >
            <div class="q-ma-xs">
              <q-btn
                dense
                flat
                to="/netzwerk/osi"
                label="OSI-Modell"
                class="full-width q-mt-xs"
                rounded
                align="start"
              />
              <q-btn
                dense
                flat
                to="/netzwerk/osi"
                label="TCP/IP Modell"
                class="full-width q-mt-xs"
                rounded
                align="start"
              />
            </div>
          </q-expansion-item>
        </div>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        label="Datenschutz & Datensicherheit"
        header-class="bg-primary text-white text-body1"
        expand-icon-class="text-white"
        :content-inset-level="0.2"
      >
        <div class="q-ma-xs">
          <q-btn
            dense
            flat
            to="/datenschutz-datensicherheit/raid"
            label="Storage & RAID"
            class="full-width q-mt-xs"
            rounded
            align="start"
          />
          <q-expansion-item
            dense
            dense-toggle
            expand-separator
            label="BSI IT Grundschutz"
            header-class="q-pl-xs text-body2 text-uppercase text-weight-medium rounded-borders"
            class="q-mt-xs"
            align="start"
            :content-inset-level="0.4"
          >
            <q-btn
              dense
              flat
              to="/datenschutz-datensicherheit/schutzziele"
              label="Schutzziele"
              class="full-width q-mt-xs"
              rounded
              align="start"
            />
            <q-btn
              dense
              flat
              to="/datenschutz-datensicherheit/tom"
              label="Techn. Org. Maßnahmen"
              class="full-width q-mt-xs"
              rounded
              align="start"
            />
            <q-btn
              dense
              flat
              to="/datenschutz-datensicherheit/schutzbedarfsanalyse"
              label="Schutzbedarfsanalyse"
              class="full-width q-mt-xs"
              rounded
              align="start"
            />
            <q-btn
              dense
              flat
              to="/datenschutz-datensicherheit/sicherheitsprozess"
              label="IT-Sicherheitsprozess"
              class="full-width q-mt-xs"
              rounded
              align="start"
            />
          </q-expansion-item>
        </div>
      </q-expansion-item>
    </q-drawer>

    <q-page-container>
      <router-view
        :style="
          'font-size:' +
          fontSize +
          '%' +
          ';line-height:' +
          (fontSize + 50) +
          '%'
        "
      />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useSettingsStore } from 'stores/settings';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const settingsStore = useSettingsStore();
    const q = useQuasar();

    return {
      fontSize: ref(settingsStore.fontsizeState),
      q,
      leftDrawerOpen,
      settingsStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  watch: {
    fontSize() {
      this.settingsStore.fontsize = this.fontSize;
    },
  },

  computed: {
    fontSizeh6() {
      return this.fontSize + 35 + '%';
    },
    fontSizeh5() {
      return this.fontSize + 50 + '%';
    },
    fontSizeh4() {
      return this.fontSize + 100 + '%';
    },
  },

  methods: {
    darkmodeChanged() {
      this.settingsStore.darkmode = !this.settingsStore.darkmodeState;
      this.q.dark.set(this.settingsStore.darkmodeState);
    },
  },
});
</script>

<style>
.text-h6 {
  font-size: v-bind(fontSizeh6);
}
.text-h5 {
  font-size: v-bind(fontSizeh5);
}
.text-h4 {
  font-size: v-bind(fontSizeh4);
}
</style>
