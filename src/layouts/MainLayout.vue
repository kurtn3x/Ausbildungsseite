<template>
  <q-layout view="HHH LpR fFf">
    <q-header>
      <q-toolbar class="q-pa-none">
        <q-btn
          flat
          square
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          style="width: 65px"
          stretch
          class="bg-secondary"
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
          thumb-color="white"
          :min="0.5"
          :step="0.1"
          :max="2"
          style="width: 125px"
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
      <q-scroll-area class="fit" :thumb-style="thumbStyle">
        <div>
          <div>
            <Links />
          </div>
          <q-separator />
          <div style="height: 45px">
            <q-btn
              stretch
              flat
              square
              to="/"
              icon="home"
              style="height: 45px"
              class="bg-primary text-white absolute-bottom-left"
            />
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view
        :style="
          'font-size:' +
          fontSize +
          'rem' +
          ';line-height:' +
          (fontSize + 0.75) +
          'rem'
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
      thumbStyle: {
        right: '1px',
        borderRadius: '7px',
        backgroundColor: '#27b5d5',
        width: '7px',
        opacity: 0.9,
      } as any,
    };
  },
  computed: {
    fontSizeh7() {
      return this.fontSize + 0.3 + 'rem';
    },
    fontSizeh6() {
      return this.fontSize + 0.6 + 'rem';
    },
    fontSizeh5() {
      return this.fontSize + 0.9 + 'rem';
    },
    fontSizeh4() {
      return this.fontSize + 1.2 + 'rem';
    },

    lineHeighth7() {
      return this.fontSize + 1.2 + 'rem';
    },
    lineHeighth6() {
      return this.fontSize + 1.3 + 'rem';
    },
    lineHeighth5() {
      return this.fontSize + 1.5 + 'rem';
    },
    lineHeighth4() {
      return this.fontSize + 2 + 'rem';
    },
    ulPadding() {
      if (this.q.screen.width < 1024) {
        return 15 + 'px';
      } else {
        return 30 + 'px';
      }
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
.text-h7 {
  font-size: v-bind(fontSizeh7);
  line-height: v-bind(lineHeighth7);
}
.text-h6 {
  font-size: v-bind(fontSizeh6);
  line-height: v-bind(lineHeighth6);
}
.text-h5 {
  font-size: v-bind(fontSizeh5);
  line-height: v-bind(lineHeighth5);
}
.text-h4 {
  font-size: v-bind(fontSizeh4);
  line-height: v-bind(lineHeighth4);
}

ul {
  padding-left: v-bind(ulPadding);
}
</style>
