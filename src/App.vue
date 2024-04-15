<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar, LocalStorage } from 'quasar';
import { useSettingsStore } from 'stores/settings';
import { settings } from 'cluster';

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
    const settingsStore = useSettingsStore();
    if (settingsStore.darkmodeState == null) {
      settingsStore.darkmode = true;
    }
    if (settingsStore.fontsizeState == null || settingsStore.fontsize > 2) {
      if (q.screen.width < 1024) {
        settingsStore.fontsize = 1;
      } else {
        settingsStore.fontsize = 1.2;
      }
    }
    q.dark.set(settingsStore.darkmodeState);
    settingsStore.$subscribe((mutation, state) => {
      LocalStorage.set('darkmode', state.darkmode);
    });
    settingsStore.$subscribe((mutation, state) => {
      LocalStorage.set('fontsize', state.fontsize);
    });
    return { q };
  },
});
</script>
