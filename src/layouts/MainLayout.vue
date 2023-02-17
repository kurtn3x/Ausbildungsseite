<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Ausbildung</q-toolbar-title>
        <q-space />
        <q-slider
          v-model="fontSize"
          color="green"
          :min="50"
          :step="1"
          :max="200"
          style="width: 200px"
        />
        <q-btn
          icon="visibility"
          class="q-ml-md"
          flat
          @click="darkmodeChanged"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list bordered class="rounded-borders">
        <q-item clickable to="/" class="text-weight-bolder text-cyan-5"
          ><q-item-section>Home</q-item-section></q-item
        >
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Betriebe und Unternehmen (LF1)"
          header-class="text-weight-bolder text-cyan-5"
        >
          <q-list bordered>
            <q-item :inset-level="1" to="/betrieb_unternehmen/allgemein"
              ><q-item-section>Betriebe und Unternehmen</q-item-section></q-item
            >
            <q-separator />
            <q-item :inset-level="1" to="/betrieb_unternehmen/ziele"
              ><q-item-section
                >Ziele von Betrieben und Unternehmen</q-item-section
              ></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/betrieb_unternehmen/management"
              ><q-item-section
                >Managementsysteme und Qualitätsmanagement</q-item-section
              ></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              to="/betrieb_unternehmen/unternehmensrechtsformen"
              ><q-item-section>Unternehmensrechtsformen</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              to="/betrieb_unternehmen/unternehmensleitbild"
              ><q-item-section>Das Unternehmensleitbild</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              to="/betrieb_unternehmen/aufbauorganisation"
              ><q-item-section>Aufbauorganisation</q-item-section></q-item
            >
            <q-separator />

            <q-item
              :inset-level="1"
              to="/betrieb_unternehmen/wertschoepfungsprozesse"
              ><q-item-section>Wertschöpfungsprozesse</q-item-section></q-item
            >
          </q-list>
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Netzwerke & Co (LF3 & LF9)"
          header-class="text-weight-bolder text-cyan-5"
        >
          <q-list bordered>
            <q-item :inset-level="1" to="/netzwerke/allgemein_topologien"
              ><q-item-section>Netzwerke und Topologien</q-item-section></q-item
            >
            <q-separator />
            <q-item :inset-level="1" to="/netzwerke/verkabelung"
              ><q-item-section>Kabel und Verkabelung</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/netzwerke/mac_switch_hub"
              ><q-item-section
                >MAC-Adressen, Switche und Hubs</q-item-section
              ></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/netzwerke/osi"
              ><q-item-section>Das OSI-Schichtenmodell</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/netzwerke/ipv4"
              ><q-item-section>IPv4</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/netzwerke/ipv6"
              ><q-item-section>IPv6</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/netzwerke/dns_dhcp"
              ><q-item-section>DNS and DHCP</q-item-section></q-item
            >
            <q-separator />

            <q-item :inset-level="1" to="/netzwerke/tcp_udp_ports"
              ><q-item-section>TCP, UDP & Ports</q-item-section></q-item
            >
            <q-separator />
            <q-item :inset-level="1" to="/netzwerke/routing"
              ><q-item-section>Routing</q-item-section></q-item
            >
          </q-list>
        </q-expansion-item>
        <q-separator />

        <q-expansion-item
          expand-separator
          label="Datenschutz und Datensicherheit (LF4)"
          header-class="text-weight-bolder text-cyan-5"
        >
          <q-list bordered>
            <q-item
              :inset-level="1"
              to="/datenschutz_datensicherheit/schutzziele"
              ><q-item-section>Schutzziele</q-item-section></q-item
            >
            <q-separator />
            <q-item :inset-level="1" to="/datenschutz_datensicherheit/tom"
              ><q-item-section
                >Technisch organisatorische Maßnahmen</q-item-section
              ></q-item
            >
          </q-list>
        </q-expansion-item>
        <q-separator />
        <q-expansion-item
          expand-separator
          label="Strom und Ladung (LF7)"
          header-class="text-weight-bolder text-cyan-5"
        >
          <q-list bordered>
            <q-item :inset-level="1" to="/strom_ladung/allgemein"
              ><q-item-section>Allgemein</q-item-section></q-item
            ></q-list
          >
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view
        :style="
          'font-size:' + fontSize + '%' + ';line-height:' + fontSize + '%'
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
      fontSize: ref(100),
      q,
      leftDrawerOpen,
      settingsStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    darkmodeChanged() {
      this.settingsStore.darkmode = !this.settingsStore.darkmodeState;
      this.q.dark.set(this.settingsStore.darkmodeState);
      console.log(this.settingsStore.darkmodeState);
    },
  },
});
</script>

<style>
.text-h6 {
  font-size: 150%;
}
</style>
