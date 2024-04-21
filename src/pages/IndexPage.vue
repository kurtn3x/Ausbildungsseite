<template>
  <q-page padding>
    <div class="text-center q-mt-lg text-h7 text-secondary">
      Kompendium für Themen der AP2 für Fachinformatiker der Fachrichtungen
      Systemintegration & Anwendungsentwicklung.
    </div>
    <div class="row justify-center q-mt-lg">
      <q-card bordered flat style="width: 600px; line-height: 1rem">
        <Links />
      </q-card>
    </div>
    <div style="min-height: 30px">
      <div class="absolute-bottom-right q-mb-md q-mr-md">
        <router-link to="/privacy-policy" class="q-ml-md text-light-blue"
          >Privacy Policy</router-link
        >
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import Links from 'components/Links.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Links },
  setup() {
    const q = useQuasar();
    return {
      q,
      src: 'https://media.kurtn3x.xyz/assets',
      show_img: ref(false),
      popupsrc: ref(''),
    };
  },
  computed: {
    small() {
      if (this.q.screen.width < 1024) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>
