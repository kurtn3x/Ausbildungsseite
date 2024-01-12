<template>
  <q-page>
    <div class="row justify-center q-mt-lg">
      <q-card bordered flat style="width: 600px">
        <Links />
      </q-card>
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
