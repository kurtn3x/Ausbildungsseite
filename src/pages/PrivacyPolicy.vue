<template>
  <q-page padding>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Privacy Policy
    </div>
    <q-separator class="q-mt-md" />
    <div class="row justify-center">
      <q-card
        bordered
        flat
        class="q-mt-lg bg-transparent"
        style="max-width: 500px"
      >
        <div class="q-ma-md">
          <div>
            No Cookies used on this site (some cookies may be set by other sites
            belonging to my domain).
          </div>
          <div>No Logs.</div>
          <div>No Data sent to 3rd parties.</div>
          <div>
            Website State is saved in Local Storage (text size,
            darkmode/lightmode)
          </div>
          <div class="q-mt-md">Contact</div>
          <div>Mail: kurtn3x@proton.me</div>
          <div>Discord: nex1233</div>
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
