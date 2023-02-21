<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Hauptthemaaaaaaaaaaaaa
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Nebenthemaaaaaaaaaaaa
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Erstes Seitenthema
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
    };
  },
});
</script>
