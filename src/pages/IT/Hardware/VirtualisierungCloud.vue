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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Cloud Computing vs On-Premises-Hosting
    </div>
    <ul>
      <li class="text-weight-bolder">Cloud Computing</li>
      <ul>
        <li>
          beschreibt das zur Verfügung stellen von Computerressourcen (z.B.
          Server, Datenspeicher, Applikationen) übers Internet als
          Dienstleistung, bzw. das Verwenden einer Cloud für das Hosten einer
          Anwendung
        </li>
        <li class="text-green">Vorteile (für Nutzer):</li>
        <ul>
          <li>
            <a class="text-underline">Kostenvorteile:</a> Bezahlung nach Dauer
            oder verwendeten Rechenleistung mit Modellen wie Pay-per-Use
          </li>
          <li>
            <a class="text-underline">Flexibel:</a> einfachere Skalierung nach
            benötigten Ressourcen
          </li>
          <li>
            <a class="text-underline">Platzersparnis:</a> keine lokalen
            Ressourcen und keine Infrastrukturverantwortung
          </li>
          <li>
            <a class="text-underline">Datensicherheit:</a> Daten gehen bei einem
            lokalen Desaster nicht verloren, Ggf. Verwendung von automatischen
            Backups beim Cloud-Anbieter
          </li>
          <li>
            <a class="text-underline">Automatische Updates:</a>
            Updateverantwortung liegt beim Anbieter
          </li>
        </ul>
        <li class="text-red">Nachteile (für Nutzer):</li>
        <ul>
          <li>
            <a class="text-underline">Sicherheitsrisiken:</a> Datenübertragung
            auf Cloud-Server übers Internet muss abgesichert werden, Generelle
            Sicherheitsverantwortung wird an Cloud-Anbieter abgegeben
          </li>
          <li>
            <a class="text-underline">Mehr Sicherheitsrisiken:</a> Anbiter kann
            Festplattendaten oder RAM durch physischen Zugriff auslesen und so
            an Daten kommen
          </li>
          <li>
            <a class="text-underline">Keine Kontrolle:</a> Nutzer kann nicht auf
            bestimmte Konfigurationseinstellungen des Cloud-Servers zugreifen
          </li>
          <li>
            <a class="text-underline">Verbindungsprobleme:</a> Funktionierende
            Internetverbindung wird für Zugriff auf die Cloud benötigt
          </li>
          <li>
            <a class="text-underline">Unzuverlässig:</a> Probleme beim Anbieter
            können zum Ausfall der Cloud führen
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">On-Premises-Hosting</li>
      <ul>
        <li>
          beschreibt das Hosten einer Anwendung auf einem eigenen, lokalen
          Server
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>
            <a class="text-underline">Zugriff und Kontrolle:</a> Unernehmen
            haben die volle Kontrolle über ihre Server und der Art und Weise,
            wie sie gehostet werden
          </li>
          <li>
            <a class="text-underline">Sicherheit:</a>: Unternehmen haben die
            Möglichkeit, sicherzustellen, dass ihre Server geschützt und sicher
            sind
          </li>
          <li>
            <a class="text-underline">Datenhoheit:</a> gespeicherte Daten werden
            lokal gespeichert, ein Zugriff oder Auslesen durch Dritte ist mit
            Sicherheitsvorkehrungen nicht möglich
          </li>
          <li>
            <a class="text-underline">Performance:</a> Daten müssen nicht durchs
            Internet reisen, wodurch eine geringere Latenz entsteht
          </li>
          <li>
            <a class="text-underline">Zuverlässigkeit:</a> Weniger anfällig für
            Internetprobleme, da lokal
          </li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>
            <a class="text-underline">Teurer als Cloud:</a> die Server müssen
            gekauft und gepflegt werden ,IT-Personal wird zur Wartung der Server
            benötigt, Stromkosten, ...
          </li>
          <li>
            <a class="text-underline">Benötigt Platz:</a> benötigt viel Platz
            zum Installieren der Server
          </li>
          <li>
            <a class="text-underline">Weniger Skalierbar:</a> falls mehr
            Rechenleistung oder Speicherplatz benötigt wird, muss ein neuer
            Server gekauft werden (der bei einer zukünftigen Lastverminderung
            ggf. nicht mehr benötigt wird)
          </li>
        </ul>
      </ul>
    </ul>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
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
          Drittanbieter stellt eine komplette Anwendung über einer Website
          bereit
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
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Virtualisierung
    </div>
    <ul>
      <li>
        Virtualisierung ist das Nachbilden eines Hardware- oder Softwareobjekts
        durch ein ähnliches Objekt vom selben Typ
      </li>
      <li>
        Erzeugung virtueller Geräte und Dienste wie Hardware, Betriebssystem
        oder Netzwerkanschlüsse
      </li>
    </ul>
    <ul>
      <li class="text-weight-bolder">Containervirtualisierung</li>
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
      <li class="text-weight-bolder">
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
          <li class="text-weight-bold">Hypervisor</li>
          <ul>
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
              ermöglichen das Ausführen von Software für Computer oder
              Betriebssysteme auf einem anderen Computer mit einer anderen
              Architektur
            </li>
            <li>soll dieselben Ergebnisse erzielen, wie das Original</li>
          </ul>
          <li class="text-weight-bold">Hardwarevirtualisierung</li>
          <ul>
            <li>Abstraktion realer Hardware</li>
            <li>
              Virtualisierung des gesamten Systems oder von Teilkomponenten
              (z.B. CPU)
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
