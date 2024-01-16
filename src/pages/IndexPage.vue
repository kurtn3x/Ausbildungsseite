<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Themen
    </div>
    <q-separator class="q-mt-md" inset size="3px" />
    <div class="row justify-center q-mt-lg">
      <q-card bordered flat style="width: 600px">
        <Links />
      </q-card>
    </div>
    <div class="absolute-bottom-right q-mb-md q-mr-md">
      <div class="text-right">
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
