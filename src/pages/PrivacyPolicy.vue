<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Privacy Policy
    </div>
    <q-separator class="q-mt-md" />
    <div class="row justify-center">
      <q-card flat class="q-mt-lg bg-transparent">
        <div class="q-ma-md">
          <div>No Cookies</div>
          <div>No Logs</div>
          <div>No Data sent to 3rd parties</div>
          <div>No Data collected/saved on server</div>
          <div class="q-mt-md text-underline">Source:</div>
          <div>
            <a
              href="https://github.com/kurtn3x/Ausbildungsseite"
              target="_blank"
              >https://github.com/kurtn3x/Ausbildungsseite</a
            >
          </div>
          <div class="q-mt-md text-underline">Contact:</div>
          <div>Mail: kurtn3x@gmail.com</div>
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
