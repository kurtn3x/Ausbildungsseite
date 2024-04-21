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
      Dateisysteme & Dateirechte
    </h1>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Dateisysteme
    </div>
    <ul>
      <li>
        Ablagesystem auf einem Speichermedium, das die Verwaltung, Organisierung
        und Strukturierung von Dateien ermöglicht
      </li>
      <li>
        Dateisysteme werden oft für jede Festplattenpartition gebildet; die
        Partitionierung bildet hierbei den Rahmen für das Dateisystem
      </li>
      <li>
        definieren u.a. Dateinamen-Konventionen, Dateiattribute und
        Zugriffsrechte
      </li>
      <li>
        Die Bildung von Dateisystemen bezeichnet man auch als
        <a class="text-weight-bold">Formatierung</a>
      </li>
      <li>
        bestimmte Dateisysteme werden nur von bestimmten Betriebssystemen
        unterstützt, jedoch liefern Treiber oder Drittanbiertsoftware eine
        breite Untersützung unter verschiedenen Betriebssystemen
      </li>
      <li class="text-weight-bolder">NTFS</li>
      <ul>
        <li>= New Technology File System</li>
        <li>Dateisystem von Microsoft, Standard für neuere Windows-Systeme</li>
        <li>Anwendung besonders auf internen Festplatten für Windows</li>
        <li>
          integrierte Rechteverwaltung, Rechte können jeweils für lokale und
          Remote-Zugriffe vergeben werden
        </li>
        <li>hohe Datensicherheit & Performance</li>
      </ul>
      <li class="text-weight-bolder">ext4</li>
      <ul>
        <li>ältere Versionen: ext2, ext3</li>
        <li>
          Standard vieler Linux-Systeme für die Formatierung von Festplatten
        </li>
        <li>
          beliebige Vergrößerung und Verkleinerung von Partitionen im laufenden
          Betrieb
        </li>
        <li>Rechteverwaltung möglich</li>
        <li>hohe Datensicherheit & Performance</li>
      </ul>
      <li class="text-weight-bolder">FAT</li>
      <ul>
        <li>FAT = File Allocation Table</li>
        <li>Versionen FAT12, FAT16, FAT32</li>
        <li>
          für kleine Datenträger, besonders mobile Datenträger wie USB-Sticks
        </li>
        <li>FAT32: nur maximale Dateigröße 4GB</li>
        <li>
          Update: <a class="text-weight-bold">exFAT</a>, relativ neu und viele
          Verbesserungen gegenüber FAT32 (z.B. max. Dateigröße von 512TB)
        </li>
        <li>
          breite Unterstützung, bestmögliche Kompatibilität zwischen
          verschiedensten Systemen
        </li>
      </ul>
      <li>
        viele weitere z.B. btrfs (Linux, gut für Backups durch integriertes
        Snapshot-Management), HFS & HFS+ (veraltetes Apple Filesystem), APFS
        (Apple File System, Update von HFS)
      </li>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-md q-ml-sm text-weight-bolder text-secondary text-underline"
    >
      Dateirechte
    </div>
    <ul>
      <li>
        auf älteren Betriebssystemen wie DOS waren Dateirechte noch nicht
        vorgesehen, da es sich dort nicht um Mehrbenutzersysteme gehandelt hat
      </li>
      <li class="text-weight-bolder">Access Control Lists</li>
      <ul>
        <li>
          man unterscheidet bei Dateirechten zwischen einfachen Zugriffsrechten
          und sogenannten Access Control Lists
        </li>
        <li>
          Access Control Lists erlauben eine feinere Einstellung der
          Zugriffsrechte (z.B. einer Datei kann für mehrere Nutzer & Gruppen
          unterschiedliche Rechte vergeben werden)
        </li>
      </ul>
      <li class="text-weight-bolder text-h7 q-mt-sm">Linux / Unix</li>
      <ul>
        <li>
          Linux als klassisches Mehrbenutzerbetriebssystemen besitzt seit der
          ersten Version Dateirechte
        </li>
        <li>
          Jede Datei (oder Ordner) besitzt eine Regelung der Zugriffsrechte
        </li>
        <li>Rechte werden nicht vererbt</li>
        <li>
          Werden neue Dateien angelegt, werden die Rechte aus der Rechtemaske
          (umask) abgeleitet
        </li>
        <li>Rechte werden nach Benutzerklassen geregelt</li>
        <li class="text-weight-bold">Benutzerklassen:</li>
        <ul>
          <li>Eigentümer (user): ist ein spezifisches Benutzerkonto</li>
          <li>Gruppe (group): ist eine spezifische Benutzergruppe</li>
          <li>
            Sonstige (others): jeder andere, der nicht der Eigentümer oder
            Mitglied der Gruppe ist
          </li>
        </ul>
        <li>
          jeder Nutzerklasse werden bestimmte Rechte auf die Datei zugeschrieben
        </li>
        <li class="text-weight-bold">Dateirechte:</li>
        <ul>
          <li>
            Lesen (read; Kurzform 'r'): Nutzer darf den Inhalt der Datei oder
            des Ordners einsehen
          </li>
          <li>
            Schreiben (write; Kurzform 'w'): Nutzer darf die Datei ändern,
            löschen, umbenennen, neue Dateirechte geben oder im Falle eines
            Ordners neue Dateien und Unterverzeichnisse im Ordner anlegen
          </li>
          <li>
            Ausführen (execute; Kurzform 'x'): Nutzer darf die Datei als
            Programm ausführen oder im Falle eines Ordners in den Ordner
            hineingehen (jedoch den Inhalt nicht anzeigen lassen)
          </li>
        </ul>
        <li class="text-weight-bolder">Dateirechte in Bits</li>
        <ul>
          <li>
            Dateirechte werden oft über die Angabe von Rechtebits vergeben
          </li>
          <li>
            Jedes Recht bekommt ein Bit zugeordnet, also insgesamt 3Bits, z.B.
            000 (Reihenfolge: Read,Write,Execute)
          </li>
          <li>
            Ist das Bit auf 1 gesetzt, besitzt die Benutzerklasse das Recht
          </li>
          <li>Jeder Benutzerklasse werden jeweils die Rechtebits zugeordnet</li>
          <li>
            Die Rechtebits werden in das Dezimalformat umgerechnet und in der
            Reihenfolge Owner, Gruppe, Sonstige angegeben
          </li>
          <li>
            Dadurch entstehen z.B. die Rechte
            <a class="text-weight-bolder text-red">7</a
            ><a class="text-weight-bolder text-green">5</a
            ><a class="text-weight-bolder text-blue">4</a>
          </li>
          <li class="text-red">
            Rechtebits des Owners, 7 = 1(r)1(w)1(x), d.h. der Owner hat alle
            Rechte
          </li>
          <li class="text-green">
            Rechtebits der Gruppe, 5 = 101, d.h. die Gruppe hat Schreib- und
            Ausführrechte
          </li>
          <li class="text-blue">
            Rechtebits der Sonstigen, 4 = 100, d.h. die Sonstigen haben
            Leserechte
          </li>
        </ul>
        <li class="text-weight-bolder">Umask</li>
        <ul>
          <li>
            gibt an, welche Rechte ein Programm (wie z.B. touch → anlegen einer
            leeren Datei) auf eine neu angelegte Datei/Ordner setzen darf; das
            Programm kann die Rechte jedoch immernoch von sich aus einschränken
            (z.B. touch legt eine Datei immer ohne Ausführrechte an, selbst wenn
            die umask es erlaubt)
          </li>
          <li>
            In der umask werden die 3 Rechtebits (in Dezimal) für jede
            Benutzerklasse angegeben, die nicht gesetzt werden dürfen (quasi das
            Gegenteil von den Dateirechten; wenn eine Datei die Dateirechte 755
            haben soll, muss die umask 022 sein)
          </li>
          <li class="text-weight-bold">Beispiele:</li>
          <ul>
            <li>
              777 (erlaube kein setzen von Rechtebits) → Programm, welches neue
              Datei anlegt darf keine Rechte setzen (keiner hat auf die neu
              angelegte Datei irgendwelche Rechte)
            </li>
            <li>
              444 (erlaube kein setzen des Read-Bits) → Programm darf das
              Read-Bit auf neu angelegte Datei für alle Nutzerklassen nicht
              setzen (alle Benutzerklassen haben maximal Schreib- und
              Leserechte)
            </li>
            <li>
              022 (oft default; jedes Rechtebit für den Owner darf gesetzt
              werden, das Write-Bit für die Gruppe und Sonstige darf nicht
              gesetzt werden) → Programm kann Owner-Rechte vergeben wie es
              möchte, ist jedoch in der Rechtevergabe für die Gruppe & Sonstige
              eingeschränkt (kein Schreiben)
            </li>
            <li>
              000 (unsicher; alle Rechtebits jeder Nutzerklasse dürfen gesetzt
              werden) → Programm darf eine neue Datei mit den Rechten anlegen,
              die das Programm definiert. Die umask schränkt die Rechtevergabe
              neuer Dateien nicht ein.
            </li>
          </ul>
          <li>
            trotz einer umask von 000 würde das Programm 'touch' z.B. nur die
            Rechte Read & Write für jede Benutzerklasse vergeben, da das
            Programm von sich aus keine Ausführrechte vergibt (obwohl die umask
            es erlauben würde)
          </li>
        </ul>
        <li class="text-weight-bold">Linux-Kommandos für Dateirechte</li>
        <ul>
          <li>chown</li>
          <ul>
            <li>Ändern der Benutzerklassen Owner und Group einer Datei</li>
            <li>
              <div
                style="font-family: monospace, monospace"
                class="bg-grey-9 text-white"
              >
                chown nutzer:gruppe datei.txt
              </div>
            </li>
          </ul>
          <li class="q-mt-sm">chmod</li>
          <ul>
            <li>Ändern der Dateirechte einer Datei</li>
            <li>Angabe der Rechte mit den Rechtebit</li>
            <li>
              <div
                style="font-family: monospace, monospace"
                class="bg-grey-9 text-white"
              >
                chmod 755 datei.txt
              </div>
            </li>
          </ul>
          <li class="q-mt-sm">umask</li>
          <ul>
            <li>Setzen der umask</li>
            <li>
              <div
                style="font-family: monospace, monospace"
                class="bg-grey-9 text-white"
              >
                umask 022
              </div>
            </li>
          </ul>
        </ul>
        <li>
          bestimmte Linux-Dateisysteme implementieren auch Access Control Lists
        </li>
      </ul>
      <li class="text-weight-bolder q-mt-sm text-h7">Windows</li>
      <ul>
        <li>Dateirechte erst ab Windows-NT 3.5 durch Einführung von NTFS</li>
        <li>Windows verwendet nur Access Control Lists zur Rechtevergabe</li>
        <li>
          Jeder Datei wird ein Zugriffskontroll-Deskriptor zugeordnet, der eine
          ACL enthalten kann; falls keine ACL vorhanden ist, hat Jeder
          Vollzugriff
        </li>
        <li>
          Man unterscheidet zwischen Dateirechten(Sicherheitseinstellungen, die
          man einem Dateiobjekt gibt) und Freigaberechten(Berechtigungen einer
          Netzwerkfreigabe)
        </li>
        <li>
          Falls Datei- und Freigaberechte gleichzeitig verwendet werden, ist die
          Berechtigung mit der größten Einschränkung wirksam
        </li>
        <li>
          Dateirechte können vererbt werden, z.B. die Rechte, die auf einem
          Ordner gesetzt sind können an alle Unterobjekte weitergegeben werden
        </li>
        <li class="text-weight-bolder">Verfügbare Dateirechte</li>
        <ul>
          <li>Vollzugriff: Alle Rechte</li>
          <li>
            Ändern: Alle Rechte, außer Berechtigungen und Besitzerrechte ändenr
          </li>
          <li>
            Lesen & Ausführen: Datei öffnen, lesen und ausführbare Dateien
            starten
          </li>
          <li>Ordnerinhalt auflisten: (für Ordner)</li>
          <li>Lesen: Datei öffnen und lesen</li>
          <li>Schreiben: Datei ändern oder neu erzeugen</li>
          <li class="text-weight-bold">spezielle Berechtigungen</li>
          <ul>
            <li>
              spezielle Berechtigungen unterteilen die Standardberechtigungen in
              kleinere Gruppen
            </li>
            <li>
              z.B. Lesen kann mit den speziellen Berechtigungen Attribute Lesen,
              Daten lesen, Berechtigungen lesen, ... eingeschränkt werden
            </li>
          </ul>
        </ul>
        <li class="text-weight-bolder">Verfügbare Freigaberechte</li>
        <ul>
          <li>Lesen</li>
          <li>Ändern</li>
          <li>Vollzugriff (zum Löschen ist Vollzugriff erforderlich)</li>
        </ul>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'DateisystemeDateirechtePage',
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
