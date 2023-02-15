import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    darkmode: LocalStorage.getItem('darkmode'),
  }),

  getters: {
    darkmodeState: (state) => state.darkmode,
  },

  actions: {},
});
