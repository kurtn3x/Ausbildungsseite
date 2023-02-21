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
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list bordered class="rounded-borders">
        <q-item
          clickable
          to="/"
          class="text-weight-bolder text-secondary text-body1"
          ><q-item-section>Home</q-item-section></q-item
        >
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Betriebe und Unternehmen (LF1)"
          header-class="text-weight-bolder text-secondary text-body1 text-body1"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/allgemein"
              ><q-item-section>Betriebe & Unternehmen</q-item-section></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/ziele"
              ><q-item-section
                >Ziele von Betrieben & Unternehmen</q-item-section
              ></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/management"
              ><q-item-section
                >Managementsysteme & Qualitätsmanagement</q-item-section
              ></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/unternehmensrechtsformen"
              ><q-item-section>Unternehmensrechtsformen</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/unternehmensleitbild"
              ><q-item-section>Das Unternehmensleitbild</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/aufbauorganisation"
              ><q-item-section>Aufbauorganisation</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/betrieb_unternehmen/wertschoepfungsprozesse"
              ><q-item-section>Wertschöpfungsprozesse</q-item-section></q-item
            >
          </q-list>
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Alles über Netzwerke (LF3 & LF9)"
          header-class="text-weight-bolder text-secondary text-body1"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/netzwerke/allgemein_topologien"
              ><q-item-section>Netzwerke & Topologien</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" class="text-body2" to="/netzwerke/osi"
              ><q-item-section>Das OSI-Schichtenmodell</q-item-section></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/netzwerke/verkabelung"
              ><q-item-section>Kabel & Verkabelung</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/netzwerke/mac_switch_hub"
              ><q-item-section
                >MAC-Adressen, Switche & Hubs</q-item-section
              ></q-item
            >

            <q-separator />

            <q-item :inset-level="1" class="text-body2" to="/netzwerke/ipv4"
              ><q-item-section>IPv4</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" class="text-body2" to="/netzwerke/ipv6"
              ><q-item-section>IPv6</q-item-section></q-item
            >
            <q-separator />
            <q-item :inset-level="1" class="text-body2" to="/netzwerke/routing"
              ><q-item-section>Routing</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/netzwerke/tcp_udp_ports"
              ><q-item-section>TCP, UDP & Ports</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" class="text-body2" to="/netzwerke/dns_dhcp"
              ><q-item-section>DNS and DHCP</q-item-section></q-item
            >
          </q-list>
        </q-expansion-item>
        <q-separator />

        <q-expansion-item
          expand-separator
          label="Datenschutz und Datensicherheit (LF4)"
          header-class="text-weight-bolder text-secondary text-body1"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/datenschutz_datensicherheit/schutzziele"
              ><q-item-section>Schutzziele</q-item-section></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/datenschutz_datensicherheit/tom"
              ><q-item-section
                >Technisch organisatorische Maßnahmen</q-item-section
              ></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/datenschutz_datensicherheit/raid"
              ><q-item-section>Speicher & RAID</q-item-section></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/datenschutz_datensicherheit/schutzbedarfsanalys"
              ><q-item-section
                >Schutzbedarfsanalyse & Schutzbedarfsklassen</q-item-section
              ></q-item
            >
          </q-list>
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Datenbanken (und Programmierung) (LF5)"
          header-class="text-weight-bolder text-secondary text-body1"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/datenbanken_programmierung/normalisierung"
              ><q-item-section>Normalisierung</q-item-section></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/datenbanken_programmierung/erm"
              ><q-item-section
                >Entity-Relationship-Modell</q-item-section
              ></q-item
            ></q-list
          >
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Serviceanfragen bearbeiten (LF6)"
          header-class="text-weight-bolder text-secondary text-body1"
        >
          <q-list bordered>
            <q-item :inset-level="1" class="text-body2" to="/services/allgemein"
              ><q-item-section>Allgemeines</q-item-section></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/services/vertragsarten"
              ><q-item-section>Vertragsarten</q-item-section></q-item
            ></q-list
          >
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Strom und Ladung (LF7)"
          header-class="text-weight-bolder text-secondary text-body1"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/strom_ladung/allgemein"
              ><q-item-section>Allgemein</q-item-section></q-item
            ></q-list
          >
        </q-expansion-item>
        <q-separator />

        <q-expansion-item
          expand-separator
          label="Projektmanagement (LF8)"
          header-class="text-weight-bolder text-secondary text-body1"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/projektmanagement/allgemein"
              ><q-item-section
                >Projekte und Projektphasen</q-item-section
              ></q-item
            >
            <q-separator />
            <q-item
              :inset-level="1"
              class="text-body2"
              to="/projektmanagement/pflichtenheft_lastenheft"
              ><q-item-section
                >Pflichtenheft & Lastenheft</q-item-section
              ></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/projektmanagement/gantt"
              ><q-item-section>Gantt-Diagramm</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              class="text-body2"
              to="/projektmanagement/netzplan"
              ><q-item-section>Netzplan</q-item-section></q-item
            >
          </q-list>
        </q-expansion-item>
      </q-list>
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
import { useSettingsStore } from 'stores/settings';
import { useQuasar } from 'quasar';

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
      return this.fontSize + '%';
    },
    fontSizeh5() {
      return this.fontSize + 20 + '%';
    },
    fontSizeh4() {
      return this.fontSize + 40 + '%';
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
