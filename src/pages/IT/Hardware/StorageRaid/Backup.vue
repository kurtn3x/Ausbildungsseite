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
      Arten von Backups
    </h1>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder text-h7 text-secondary">
        Vollständiges Backup
      </li>
      <ul>
        <li>
          kopieren des gesamten Datensatzes, unabhängig davon, ob Änderungen
          vorgenommen wurden
        </li>
        <li>langsam und beansprucht am meisten Speicherplatz</li>
        <li>sichert Dateien unabhängig von Archivbit</li>
        <li>setzt das Archivbit zurück</li>
      </ul>

      <li class="text-weight-bolder text-h7 text-secondary">
        Inkrementelles Backup
      </li>
      <ul>
        <li>
          es werden nur die Dateien gesichert, die sich seit dem letzten Backup
          verändert haben
        </li>
        <li>
          sichert also alle Dateien, die über ein gesetztes Archivbit verfügen
        </li>
        <li>Archivbit wird zurückgesetzt</li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>schnell und effizient</li>
          <li>benötigen wenig Speicherplatz</li>
          <li>spart Netzwerkbandbreite</li>
          <li>kosteneffizient</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>
            Wiederherstellung der Daten ist zeitaufwending und komplex
            (Erfordert das letzte vollständige Backup und alle darauffolgenden
            inkrementellen Backups zur Datenwiederherstellung)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7 text-secondary">
        Differentielles Backup
      </li>
      <ul>
        <li>
          es werden nur die Dateien gesichert, die sich seit dem letzten
          <a class="text-blue text-weight-bold">vollständigen</a> Backup
          verändert haben
        </li>
        <li>
          sichert also alle Dateien, die über ein gesetztes Archivbit verfügen
        </li>
        <li>das Archivbit bleibt unverändert</li>
        <li>
          Größe der Backupdatei nimmt immer weiter zu, bis zum nächsten
          Vollbackup
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>
            Wiederherstellung des Backups einfach (erfordert nur das letzte
            vollständige Backup und das letzte differentielle Backup)
          </li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>größere Backups</li>
          <li>
            dauert dadurch länger, nutzt mehr Speicherplatz und verursacht mehr
            Netzwerklast
          </li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Andere Backuparten
    </div>
    <ul>
      <li class="text-weight-bolder text-h7 text-secondary">Snapshots</li>
      <ul>
        <li>Momentaufnahme eines Systems oder Objekts</li>
        <li>meist Abbild eines Dateisystems</li>
        <li>
          kopiert nur Einstellungen und Metadaten, die zur Wiederherstellung
          benötigt werden würden
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>speicherplatzsparender</li>
          <li>
            einfacheres Management, z.B. können alte Snapshots einfach
            überschrieben werden
          </li>
          <li>einfachere Wiederherstellung</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>
            werden in der Regel auf dem selben Speichermedium gesichert, auf dem
            auch das Original liegt → bei Ausfall des Speichermediums ist der
            Snapshot nutzlos
          </li>
          <li>
            ohne korrektes Snapshot-Management sehr schnell sehr viele & große
            Snapshot-Dateien
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7 text-secondary">Klon</li>
      <ul>
        <li>
          identische Kopie einer Festplatte (Partionen, Daten,
          Festplattenkonfigurationen)
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>einfache Wiederherstellung</li>
          <li>
            auf Backup-Daten kann auch im Klon-Image direkt zugegriffen werden
            (ohne die Daten vorher wiederherzustellen)
          </li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>große Abbilddatei</li>
          <li>
            Datenwiederherstellung kann lange dauern, da alles wiederhergestellt
            wird
          </li>
        </ul>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'BackupPage',
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
