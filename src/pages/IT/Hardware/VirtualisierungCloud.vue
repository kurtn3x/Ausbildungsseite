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
      Virtualisierung und Cloud-Computing
    </div>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Cloud Computing Allgemein
    </div>
    <ul>
      <li>
        beschreibt das zur Verfügung stellen von Computerressourcen (z.B.
        Server, Datenspeicher, Applikationen) übers Internet als Dienstleistung
      </li>
      <li class="text-green">Vorteile:</li>
      <ul>
        <li>
          Kostenvorteile, da z.B. Bezahlung nach Dauer der Nutzung und Dienst
          nicht immer genutzt wird
        </li>
        <li>Platzersparnis, da man keine lokalen Ressourcen braucht</li>
        <li>
          Sicherheitsvorteile (kann auch ein Nachteil sein, man gibt große Teile
          der Sicherheitsverantwortung an den Anbieter ab)
        </li>
        <li>flexibler: einfachere Skalierung der benötigten Ressourcen</li>
      </ul>
      <li class="text-red">Nachteile:</li>
      <ul>
        <li>
          Sicherheitsrisiken (Absicherung des Zugriffs bei Transfer von Client
          zu Server)
        </li>
        <li>Risiko von unautorisierten Zugriffen des Cloud-Anbieters</li>
        <li>
          Kontrolle von privaten Anwenderdaten nimmt durch Cloud-Giganten wie
          Google überhand
        </li>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Cloud Computing Servicemodelle
    </div>
    <ul>
      <li class="text-weight-bolder">IaaS - Infrastructure-as-a-Service</li>
      <ul>
        <li>
          Drittanbieter stellt Infrastruktur-Services wie Storage und
          Virtualisierung über eine Cloud oder Internet zur Verfügung
        </li>
        <li>
          Nutzer ist für Betriebssystem, Daten, Anwendungen usw. selbst
          verantwortlich
        </li>
        <li>Infrastruktur über API oder Dashboard gesteuert</li>
        <li>Rechenzentrum wird vom Anbieter gewartet</li>
      </ul>
      <li class="text-weight-bolder">PaaS - Platform-as-a-Service</li>
      <ul>
        <li>
          Drittanbieter stellt Hardware und Software in seiner eigenen
          Infrastruktur zur Verfügung
        </li>
        <li>Primär für Bereich Entwicklung und Programmierung</li>
        <li>Nutzer muss Infrastruktur nicht aufbauen oder verwalten</li>
        <li>
          Nutzer ist nicht für Hardwarewartung oder Softwareupdates
          verantwortlich
        </li>
      </ul>
      <li class="text-weight-bolder">SaaS - Software-as-a-Service</li>
      <ul>
        <li>
          Drittanbieter stellt eine komplette Anwendung über eine Website bereit
        </li>
        <li>
          Nutzer ist nicht für Softwareupdates oder generelle Softwarewartung
          verantwortlich
        </li>
        <li>Nutzer greift über Dashboard oder API auf die Anwendung zu</li>
        <li>
          sinvoll für Hosten einer bestimmten Anwendung wie z.B. eine Website
        </li>
      </ul>

      <li class="text-weight-bolder">Colocation</li>
      <ul>
        <li>auch Serverhousing oder Serverhoming</li>
        <li>
          Anbieter stellt Rechenzentrumsfläche für Dritte zum Betrieb von
          Informationstechnik bereit
        </li>
        <li>
          Anbieter übernimmt Klimatisierung, Energieversorgung,
          Netzwerkanschluss und Sicherheitstechnik
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Virtualisierung
    </div>
    <ul>
      <li class="text-weight-bolder">Containervirtualisierung</li>
      <ul>
        <li>
          anderen Computerprogrammen wird eine Laufzeitumgebung innerhalb eines
          geschlossenen Containers zur Verfügung gestellt
        </li>
        <li>
          es wird kein weiteres Betriebssystem gestartet → verschiedene
          Betriebssysteme als Gastsystem unmöglich
        </li>

        <li>effizientere Ressourcennutzung</li>
      </ul>
      <li class="text-weight-bolder">Virtuelle Maschinen</li>
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
          <li>Günstig & Einfach</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>ineffizient (Hypervisor zieht auch Leistung)</li>
          <li>
            Schlechteres Load-Balancing, da Lastverhalten der einzelnen VMs
            nicht vorhersehbar ist
          </li>
        </ul>

        <li class="text-weight-bolder">Methoden:</li>
        <ul>
          <li class="text-weight-bold">Hypervisor</li>
          <ul>
            <li>
              abstrahierte Schicht zwischen tatsächlich vorhandener Hardware und
              weiteren Betriebssystemen
            </li>
            <li>erlauben Definierung einer virtuellen Umgebung</li>
            <li>
              Typ-1-Hypervisor: auch native oder bare-metal setzt direkt auf der
              Hardware auf und benötigt keine vorherige
              Betriebssystem-Installation.
            </li>
            <li>
              Typ-2-Hypervisor: setzt auf einem vollwertigen Betriebssystem auf
              und nutzt Gerätetreiber des Betriebssystems um auf die Hardware
              zuzugreifen
            </li>
          </ul>
          <li class="text-weight-bold">Emulator</li>
          <ul>
            <li>
              System, welches ein anderes in bestimmten Teilaspekten nachbildet
            </li>
            <li>
              ermöglichen das Ausführen von Software für Computer oder
              Betriebssysteme auf einem anderen Computer mit einer anderen
              Architektur
            </li>
          </ul>
          <li class="text-weight-bold">Hardwarevirtualisierung</li>
          <ul>
            <li>
              Virtualisierung des gesamten Systems oder von Teilkomponenten
              (z.B. CPU)
            </li>
          </ul>
        </ul>
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
