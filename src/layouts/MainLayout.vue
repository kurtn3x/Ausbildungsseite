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
        <q-btn icon="visibility" flat @click="darkmodeChanged" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list bordered class="rounded-borders">
        <q-item clickable to="/">Home</q-item>
        <q-expansion-item
          expand-separator
          label="Betriebe und Unternehmen (LF1)"
        >
          <q-item :inset-level="1" to="/betrieb_unternehmen/allgemein"
            >Betriebe und Unternehmen</q-item
          >
          <q-item :inset-level="1" to="/betrieb_unternehmen/ziele"
            >Ziele von Betrieben und Unternehmen</q-item
          >
          <q-item :inset-level="1" to="/betrieb_unternehmen/management"
            >Managementsysteme und Qualitätsmanagement</q-item
          >
          <q-item
            :inset-level="1"
            to="/betrieb_unternehmen/unternehmensrechtsformen"
            >Unternehmensrechtsformen</q-item
          >
        </q-expansion-item>
        <q-expansion-item expand-separator label="Netzwerke & Co (LF3 & LF9)">
          <q-item :inset-level="1" to="/netzwerke/netzwerktopologien"
            >Netzwerke und Topologien</q-item
          >
          <q-item :inset-level="1" to="/netzwerke/mac_switch_hub"
            >MAC-Adressen, Switche und Hubs</q-item
          >
          <q-item :inset-level="1" to="/netzwerke/osi"
            >Das OSI-Schichtenmodell</q-item
          >
          <q-item :inset-level="1" to="/netzwerke/ipv4">IPV4</q-item>
          <q-item :inset-level="1" to="/netzwerke/ipv6">IPV6</q-item>
          <q-item :inset-level="1" to="/netzwerke/dns">DNS</q-item>
          <q-item :inset-level="1" to="/netzwerke/dhcp">DHCP</q-item>
        </q-expansion-item>
        <q-item clickable to="/lf3">LF3</q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
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
