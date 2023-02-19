<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar, LocalStorage } from 'quasar';
import { useSettingsStore } from 'stores/settings';

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
    const settingsStore = useSettingsStore();
    if (settingsStore.darkmodeState == null) {
      settingsStore.darkmode = true;
    }
    if (settingsStore.fontsizeState == null) {
      settingsStore.fontsize = 100;
    }
    q.dark.set(settingsStore.darkmodeState);
    settingsStore.$subscribe((mutation, state) => {
      LocalStorage.set('darkmode', state.darkmode);
    });
    settingsStore.$subscribe((mutation, state) => {
      LocalStorage.set('fontsize', state.fontsize);
    });
  },
});
</script>
