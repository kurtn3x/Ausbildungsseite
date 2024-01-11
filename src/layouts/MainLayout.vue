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
        <q-separator vertical color="white" />

        <q-space />
        <q-separator vertical color="white" />

        <q-icon name="format_size" size="30px" class="q-ml-md q-mr-md" />
        <q-slider
          label
          label-text-color="black"
          label-color="white"
          switch-label-side
          v-model="fontSize"
          color="white"
          thumb-color="third"
          :min="50"
          :step="10"
          :max="200"
          style="width: 150px"
          class="q-mr-md"
          track-color="white"
        />
        <q-separator vertical color="white" />
        <q-btn
          :icon="darkmode ? 'light_mode' : 'dark_mode'"
          stretch
          flat
          @click="darkmodeChanged"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <Links />
    </q-drawer>

    <q-page-container>
      <router-view
        :style="
          'font-size:' +
          fontSize +
          '%' +
          ';line-height:' +
          (fontSize * 1.1 + 50) +
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
import Links from 'components/Links.vue';

export default defineComponent({
  name: 'MainLayout',

  components: { Links },

  setup() {
    const leftDrawerOpen = ref(false);
    const settingsStore = useSettingsStore();
    const q = useQuasar();

    return {
      darkmode: ref(settingsStore.darkmodeState),
      fontSize: ref(settingsStore.fontsizeState),
      q,
      leftDrawerOpen,
      settingsStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    fontSizeh6() {
      return this.fontSize + 50 + '%';
    },
    fontSizeh5() {
      return this.fontSize + 100 + '%';
    },
    fontSizeh4() {
      return this.fontSize + 150 + '%';
    },
  },

  watch: {
    fontSize() {
      this.settingsStore.fontsize = this.fontSize;
    },
  },

  methods: {
    darkmodeChanged() {
      this.settingsStore.darkmode = !this.darkmode;
      this.darkmode = !this.darkmode;
      this.q.dark.set(this.darkmode);
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
