<template>
  <q-page>
    <div class="q-ma-md">
      <IPv4SubnetExample class="text-body1" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IPv4SubnetExample from 'components/IPv4SubnetExample.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { IPv4SubnetExample },
  setup() {
    return {
      helloworld: 1,
    };
  },
});
</script>
