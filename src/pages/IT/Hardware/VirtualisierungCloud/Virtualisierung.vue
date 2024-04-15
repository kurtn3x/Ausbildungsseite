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
      Virtualisierung
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        Virtualisierung ist das Nachbilden eines Hardware- oder Softwareobjekts
        durch ein ähnliches Objekt vom selben Typ
      </li>
      <li>
        Erzeugung virtueller Geräte und Dienste wie Hardware, Betriebssystem
        oder Netzwerkanschlüsse
      </li>

      <li class="text-weight-bolder text-h7 q-mt-sm text-secondary">
        Virtuelle Maschinen bzw. "Standard-Virtualisierung"
      </li>
      <ul>
        <li>
          Kapselung eines Rechnersystems innerhalb eines lauffähigen
          Rechnersystems
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>Mehrere Betriebssysteme gleichzeitig</li>
          <li>unterschiedliche Architekturen möglich</li>
          <li>Erhöhte Sicherheit</li>
          <li>Isolation von Applikationen</li>
          <li>Günstig & Einfach</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>ineffizient</li>
          <li>
            Schlechteres Load-Balancing, da Lastverhalten der einzelnen VMs
            nicht vorhersehbar ist und VMs sich die realen Ressourcen teilen
            müssen
          </li>
          <li>
            Fällt das Hostsystem aus, sind alle darauf gehosteten VMs betroffen
          </li>
        </ul>

        <li class="text-weight-bolder">Methoden:</li>
        <ul>
          <li class="text-weight-bolder text-underline">Hypervisor</li>
          <ul>
            <li>am meisten verwendet</li>
            <li>
              abstrahierte Schicht zwischen tatsächlich vorhandener Hardware und
              weiteren Betriebssystemen
            </li>
            <li>erlauben Definierung einer virtuellen Umgebung</li>
            <li>
              <a class="text-weight-bold">Typ-1-Hypervisor:</a> auch native oder
              bare-metal setzt direkt auf der Hardware auf und benötigt keine
              vorherige Betriebssystem-Installation. z.B. Hyper-V, VMware ESXI
            </li>
            <li>
              <a class="text-weight-bold">Typ-2-Hypervisor:</a> setzt auf einem
              vollwertigen Betriebssystem auf und nutzt Gerätetreiber des
              Betriebssystems um auf die Hardware zuzugreifen. z.B. Virtualbox,
              VMware Workstation
            </li>
          </ul>

          <li class="text-weight-bold">Emulation</li>
          <ul>
            <li>
              System, welches ein Anderes in bestimmten Teilaspekten nachbildet
            </li>
            <li>
              soll möglichst dieselben Ergebnisse erzielen, wie das Original
            </li>
          </ul>
          <li class="text-weight-bold">Desktop-Virtualisierung</li>
          <ul>
            <li>
              Arbeitsplätze bzw. VMs werden in einer virtuellen Umgebung
              eingerichtet
            </li>
            <li>Verbindung auf VM bzw. den Arbeitsplatz über das Netzwerk</li>
            <li>Zugriff von überall</li>
          </ul>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7 q-mt-sm text-secondary">
        Containervirtualisierung
      </li>
      <ul>
        <li>
          anderen Computerprogrammen wird eine Laufzeitumgebung innerhalb eines
          geschlossenen Containers zur Verfügung gestellt
        </li>
        <li>
          es wird kein weiteres Betriebssystem gestartet → verschiedene
          Betriebssysteme als Gastsystem unmöglich, da die Container sich den
          Kernel des OS teilen
        </li>
        <li>Verwendung des Kernels des Hostsystems</li>
        <li>effizientere Ressourcennutzung</li>
        <li>z.B. Docker</li>
      </ul>
      <q-img
        class="fit bg-grey-5 q-mt-sm"
        :src="src + '/Hardware/virtualisierung.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Hardware/virtualisierung.png';
        "
      >
        <div
          class="absolute-bottom-right text-subtitle2"
          style="height: 40px; font-size: 10px; background-color: transparent"
        >
          Click for full size
        </div>
      </q-img>
      <ul>
        <li>
          Skizze: Unterschied Typ-1-Hypervisor und Container (beim
          Typ-2-Hypervisor wäre z.B. im linken Bildabschnitt noch das Operating
          System zwischen Infrastructure und Hypervisor)
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />

      https://www.netapp.com/de/media/container-vs-vm-inline1_tcm24-82163.png?v=85344?v=85344
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VirtualisierungPage',
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
