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
      Cloud Computing & On-Premises-Hosting
    </h1>

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Cloud Computing
    </div>

    <ul>
      <li>
        beschreibt das zur Verfügung stellen von Computerressourcen (z.B.
        Server, Datenspeicher, Applikationen) übers Internet als Dienstleistung,
        bzw. das Verwenden einer Cloud für das Hosten einer Anwendung
      </li>
      <li class="text-green text-weight-bold">Vorteile (für Nutzer):</li>
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
          <a class="text-underline">Platzersparnis:</a> keine lokalen Ressourcen
          und keine Infrastrukturverantwortung
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
      <li class="text-red text-weight-bold">Nachteile (für Nutzer):</li>
      <ul>
        <li>
          <a class="text-underline">Sicherheitsrisiken:</a> Datenübertragung auf
          Cloud-Server übers Internet muss abgesichert werden, Generelle
          Sicherheitsverantwortung wird an Cloud-Anbieter abgegeben
        </li>
        <li>
          <a class="text-underline">Mehr Sicherheitsrisiken:</a> Anbieter kann
          Festplattendaten oder RAM durch physischen Zugriff auslesen und so an
          Daten kommen
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

    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      On-Premises-Hosting
    </div>
    <ul>
      <li>
        beschreibt das Hosten einer Anwendung auf einem eigenen, lokalen Server
      </li>
      <li class="text-green text-weight-bold">Vorteile:</li>
      <ul>
        <li>
          <a class="text-underline">Zugriff und Kontrolle:</a> Unernehmen haben
          die volle Kontrolle über ihre Server und der Art und Weise, wie sie
          gehostet werden
        </li>
        <li>
          <a class="text-underline">Sicherheit:</a> Unternehmen haben die
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
      <li class="text-red text-weight-bold">Nachteile:</li>
      <ul>
        <li>
          <a class="text-underline">Teurer als Cloud:</a> die Server müssen
          gekauft und gepflegt werden ,IT-Personal wird zur Wartung der Server
          benötigt, Stromkosten, ...
        </li>
        <li>
          <a class="text-underline">Benötigt Platz:</a> benötigt viel Platz zum
          Installieren der Server
        </li>
        <li>
          <a class="text-underline">Weniger Skalierbar:</a> falls mehr
          Rechenleistung oder Speicherplatz benötigt wird, muss ein neuer Server
          gekauft werden (der bei einer zukünftigen Lastverminderung ggf. nicht
          mehr benötigt wird)
        </li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CloudOnPremisesPage',
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
