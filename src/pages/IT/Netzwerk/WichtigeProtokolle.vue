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
      Weitere wichtige und oft verwendete Protokolle
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Übersicht
    </div>
    <ul>
      <li class="text-weight-bolder">POP</li>
      <ul>
        <li>Post Office Protocol</li>
        <li>
          Verwendung von E-Mail Programmen zum abholen von E-Mails eines
          E-Mail-Servers
        </li>
        <li>
          Dateien werden auf dem E-Mail-Server gelöscht und sind nur noch lokal
          verfügbar (schlecht für mehrere Geräte)
        </li>
        <li>
          z.B. POP3: Auflisten, Abholen und Löschen von E-Mails auf dem
          Mail-Server
        </li>
        <li>Port 110 für POP3</li>
        <li>Port 995 für POP3S (POP3 mit SSL-Verschlüsselung)</li>
      </ul>
      <li class="text-weight-bolder">IMAP</li>
      <ul>
        <li>Internet Message Access Protocol</li>
        <li>stellt Netzwerkdateisystem für E-Mails bereit</li>
        <li>
          Speichern von Mails, Ordnerstrukturen und Einstellungen auf dem
          Mail-Server
        </li>
        <li>
          E-Mails verbleiben auf dem Mailserver und werden nur mit Clients
          synchronisiert
        </li>
        <li>Verwaltung des E-Mail-Kontos erfolgt auf dem E-Mailserver</li>
        <li>Port 143</li>
        <li>Port 993 für IMAPS (IMAP mit SSL-Verschlüsselung)</li>
      </ul>
      <li class="text-weight-bolder">SMTP</li>
      <ul>
        <li>Simple Mail Transfer Protocol</li>
        <li>Austausch von E-Mails</li>
        <li>Einspeisen und Weiterleiten von E-Mails</li>
        <li>Port 25</li>
        <li>Port 465 für SMTPS (SMTP mit SSL-Veschlüsselung)</li>
      </ul>
      <li class="text-weight-bolder">FTP</li>
      <ul>
        <li>File Transfer Protocol</li>
        <li>
          Hochladen von Dateien von einem Client zum Server, oder herunterladen
          von Dateien vom Server
        </li>
        <li>
          erlaubt Anlegen von FTP-Verzeichnissen und umbennenen von
          Verzeichnissen und Dateien
        </li>
        <li>keine Verschlüsselung</li>
        <li>Port 20 & 21</li>
      </ul>
      <li class="text-weight-bolder">SSH</li>
      <ul>
        <li>Secure Shell</li>
        <li>lokales verfügbar machen von entfernten Kommandozeilen</li>
        <li>Verschlüsselung der Datenübertragung</li>
        <li>sicherer Ablöser für Telnet</li>
        <li>
          auch viele weitere Funktionen, z.B. SFTP, SCP, Tunneling, SOCKS,
          SSHFS, ... (viele Funktionen sind verbunden mit der Verschlüsselung
          unsicherer Protokolle über SSH)
        </li>

        <li>Port 22</li>
      </ul>
      <li class="text-weight-bolder">SFTP</li>
      <ul>
        <li>SSH File Transfer Protocol</li>
        <li>Verschlüsselung von FTP mithilfe von SSH</li>
      </ul>

      <li class="text-weight-bolder">HTTP / HTTPS</li>
      <ul>
        <li>Hypertext Transfer Protocol</li>
        <li>
          Übertragung von Websiten aus dem World Wide Web auf den Webbrowser
        </li>
        <li>HTTP ist unverschlüsselt</li>
        <li>
          HTTPS = Hypertext Transfer Protocol Secure, ist verschlüsselt mit SSL
          oder TLS (Standard TLS1.2 oder TLS1.3)
        </li>
        <li>
          Port 80 für unverschlüsselte Verbindung (HTTP) und Port 443 für
          verschlüsselte Verbindung (HTTPS)
        </li>
      </ul>
      <li class="text-weight-bolder">Telnet</li>
      <ul>
        <li>Fernsteuerung von Computern über Terminals</li>
        <li>unverschlüsselt und unsicher, durch SSH ersetzt</li>
        <li>Port 23</li>
      </ul>
      <li class="text-weight-bolder">NTP</li>
      <ul>
        <li>Network Time Protocol</li>
        <li>Versorgen eines Endgeräts über das Internet mit einer Uhrzeit</li>
        <li>Synchronisation von Echtzeituhren</li>
        <li>Clients beziehen Uhrzeit von NTP-Servern</li>
        <li>
          in der Regel erfolgt die Synchronisation von mehreren Zeitservern
        </li>
        <li>
          SNTP = Simple Network Time Protocol, ähnlich zu NTP, jedoch
          Synchronisation nur von einem Zeitserver → ungenauer, jedoch weniger
          Rechenintensiv
        </li>
      </ul>
      <li class="text-weight-bolder">RDP</li>
      <ul>
        <li>Remote Desktop Protocol</li>
        <li>Netzwerkprotokoll von Microsoft für Zugriff auf andere Computer</li>
        <li>
          Übertragung grafischer Bildschirminhalte sowie Anschlüsse (Maus,
          Tastatur, ...)
        </li>
        <li>
          Zusammenarbeit einer Serverkomponente (Remote Desktop Services) und
          Clientkomponente
        </li>
      </ul>

      <li class="text-weight-bolder">SNMP</li>
      <ul>
        <li>Simple Network Management Protocol</li>
        <li>
          Überwachen, Verwalten und Steuern von Netzwerkelementen wie Switches,
          Router oder Server
        </li>
        <li>
          Client kann SNMP-Daten vom Zielsystem abholen oder das Zielsystem
          sendet bei Bedarf die Daten automatisch an einen Client (SNMP-Trap
          genannt)
        </li>
        <li>Standard in Managementprogrammen und sehr breite Unterstützung</li>
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
