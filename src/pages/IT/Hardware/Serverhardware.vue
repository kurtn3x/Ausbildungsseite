<template>
  <q-page padding>
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-sm text-h4 text-weight-bold text-primary">
      Server-Hardware
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Übersicht und Begriffe zu Server-Hardware
    </div>
    <ul>
      <li class="text-weight-bolder">CPU</li>
      <ul>
        <li>
          <a class="text-weight-bold">Multicore: </a>Alle Kerne teilen sich die
          gleichen Ressourcen
        </li>
        <li>
          <a class="text-weight-bold">Multiprocessing: </a>Jede CPU bekommt ihre
          eigenen Systemressourcen
        </li>
        <li>
          <a class="text-weight-bold">Hyperthreading: </a>Effizientere Nutzung
          der Prozessorressourcen, da jeder Kern mehrere Threads gleichzeitig
          verarbeiten kann. Steigert auch den Prozessordurchsatz und verbessert
          damit die Gesamtleistung von Multithreading-Software.
        </li>
        <li>
          <a class="text-weight-bold">CPU-Cache: </a>Der CPU-Cache dient der
          Optimierung der Verarbeitung von Operationen. Prozessorkerne können
          schneller auf den CPU-Cache zugreifen als auf den RAM oder den
          Festplattenspeicher.
        </li>
        <li>Besondere Merkmale von Server-CPUs:</li>
        <ul>
          <li>meist keine integrierte GPU</li>
          <li>Unterstützen mehrere TiB RAM</li>
          <li>großer Cache</li>
          <li>Unterstützung von ECC-RAM</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">RAM</li>
      <ul>
        <li>
          <a class="text-weight-bold">ECC: </a>Error Correcting Code. Kann
          selber Speicherfehler erkennen und korrigieren
        </li>
        <li>
          <a class="text-weight-bold">Registered RAM: </a>RAM beinhaltet ein
          Register, um Speicherzugriff der CPU auf RAM zu erleichtern
        </li>
        <li>
          <a class="text-weight-bold">Quad-Channel: </a>vier
          Arbeitsspeicher-Module gleicher Kapizität können parallel betrieben
          werden. Erhöht die Datentransferrate.
        </li>
      </ul>
      <li class="text-weight-bolder">Storage</li>
      <ul>
        <li>besonders SCSI & Fibre Channel</li>
        <li>
          <router-link to="/hardware/storage-backup" class="text-light-blue">
            Siehe auch Storage & Backup</router-link
          >
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
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
