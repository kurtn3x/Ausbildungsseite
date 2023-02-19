import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    darkmode: LocalStorage.getItem('darkmode'),
    fontsize: LocalStorage.getItem('fontsize'),
  }),

  getters: {
    darkmodeState: (state) => state.darkmode,
    fontsizeState: (state) => state.fontsize,
  },

  actions: {},
});
