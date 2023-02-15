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

        <q-toolbar-title> </q-toolbar-title>
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

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
