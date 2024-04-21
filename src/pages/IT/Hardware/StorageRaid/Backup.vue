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
