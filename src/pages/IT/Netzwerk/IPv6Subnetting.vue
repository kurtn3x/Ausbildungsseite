<template>
  <div class="text-body1">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
      <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
        IPv6
      </div>
      <q-separator class="q-mt-md" />
      <div
        class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
      >
        Allgemeines
      </div>
      <ul>
        <li>
          <a class="text-blue">2001:00d3:a3df:3357:</a>
          <a class="text-green">54b7:1d72:6f0a:e9dc </a>
          <a class="q-ml-md">|</a>
          <a class="text-blue q-ml-md">Netzanteil</a
          ><a class="text-green q-ml-md"> Hostanteil </a>
        </li>
        <li>
          Der Netzanteil kann noch weiter unterteilt werden, so bekommt der
          Provider z.B. die ersten 32 Bit, die nächsten 16Bit sind für die
          Netzaufteilung und der Kunde bekommt dann ein /64 Netz
          <a class="text-green">2001:00d3</a>
          <a class="text-purple">:a3df</a>
          <a class="text-yellow">:3357: ...</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IPv6Page',
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

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
