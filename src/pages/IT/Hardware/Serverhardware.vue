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
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Server-Hardware
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
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
          damit die Gesamtleistung von Multithreading-Software
        </li>
        <li>
          <a class="text-weight-bold">CPU-Cache: </a>Der CPU-Cache dient der
          Optimierung der Verarbeitung von Operationen. Prozessorkerne können
          schneller auf den CPU-Cache zugreifen als auf den RAM oder den
          Festplattenspeicher
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
          selber Speicherfehler erkennen und korrigieren (1-Bit-Speicherfehler
          erkennen & korrigieren, 2-Bit-Speicherfehler erkennen)
        </li>
        <li>
          <a class="text-weight-bold">Registered RAM: </a>RAM beinhaltet ein
          Register, um Speicherzugriff der CPU auf RAM zu erleichtern
        </li>
        <li>
          <a class="text-weight-bold">Quad-Channel: </a>vier
          Arbeitsspeicher-Module gleicher Kapizität können parallel betrieben
          werden. Erhöht die Datentransferrate
        </li>
        <li class="text-underline">
          Beispiel: 16 GB DDR4-2400 ( PC4-19200R, CL16) ECC-RAM
        </li>
        <ul>
          <li>
            DDR4 (Unterschied zu DDR3: höhere Taktraten möglich
            (1600MHz-3200MHz))
          </li>
          <li>Taktrate von 2400MHz</li>
          <li>
            2400 MHz entspricht einer Datenübertragungsrate von 19200MByte/s
            (steht zum einen in der Beschreibung, kann auch mit der Formel
            Taktrate*64/8 berechnet werden → 2400*64/8=19200)
          </li>
          <li>ECC = Error Correcting Code</li>
          <li>R (19200R) = Registered</li>
          <li>
            auf allen Kanälen zusammen (PC4 → 4 Kanäle) kann eine
            Datenübertragungsrate von 4*19200=76800MByte/s stattfinden
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Storage</li>
      <ul>
        <li>besonders SCSI, Fibre Channel & Infiniband</li>
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
