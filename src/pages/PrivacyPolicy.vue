<template>
  <q-page padding>
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Privacy Policy
    </h1>
    <q-separator class="q-mt-md" />
    <div class="row justify-center">
      <q-card flat class="q-mt-lg bg-transparent">
        <div class="q-ma-md">
          <div>No Cookies</div>
          <div>No Logs</div>
          <div>No Data sent to 3rd parties</div>
          <div>No Data collected/saved on server</div>
          <div class="q-mt-md text-underline text-weight-bold">Source:</div>
          <div>
            <a
              href="https://github.com/kurtn3x/Ausbildungsseite"
              target="_blank"
              class="text-blue"
              >https://github.com/kurtn3x/Ausbildungsseite</a
            >
          </div>
          <div class="q-mt-md text-underline text-weight-bold">Contact:</div>
          <div>
            <a
              href="https://about.kurtn3x.xyz"
              target="_blank"
              class="text-blue"
              >about.kurtn3x.xyz</a
            >
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PrivacyPolicyPage',
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
