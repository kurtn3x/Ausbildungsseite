<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <q-dialog v-model="show_img">
      <q-img
        :src="src + popupsrc"
        fit="contain"
        style="max-width: 90%; max-height: 90%; overflow-y: hidden"
        class="bg-grey-5"
      />
    </q-dialog>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Cyberbedrohungen
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-third text-underline"
    >
      Bekannte Arten von Cyberattacken
    </div>
    <ul>
      <li class="text-weight-bolder">Ransomware-Angriffe</li>
      <ul>
        <li>
          Cyberkriminelle übernehmen die Kontrolle über ein System und fordern
          Lösegeld für dessen Rückgabe
        </li>
        <li>auch Verschlüsselung von Daten und Lösegeld für Entschlüsselung</li>
      </ul>
      <li class="text-weight-bolder">DOS- / DDoS-Angriffe</li>
      <ul>
        <li>Denial of Service / Distributed Denial of Service</li>
      </ul>
      <li class="text-weight-bolder">Malware</li>
      <ul>
        <li>
          Malware ist ein Überbegriff vieler verschiedener Schadsoftwares, dazu
          zählen:
        </li>
        <li>
          <a class="text-weight-bold text-blue">Viren</a> sind Schadprogramme,
          die sich selbst verbreiten und reproduzieren. Tragen sich in Dateien
          oder Bootsektoren ein und verbreiten sich durch infizierte Dateien
          oder Wechselmedien. Sie nehmen schädliche Veränderungen an weiterer
          Software vor und können teilweise auch die Hardware beschädigen.
        </li>
        <li>
          <a class="text-weight-bold text-blue">Würmer</a> vervielfältigen sich
          wie auch Viren, jedoch ohne Dateien oder Bootsektoren zu infizieren.
          Verbreiten sich, indem sie z.B. E-Mail Programme übernehmen und
          E-Mails mit Wurm als Anhang an alle Kontake verschicken.
        </li>
        <li>
          <a class="text-weight-bold text-blue">Trojaner</a> tarnen sich als
          nützliche Anwendung, verfüllen jedoch im Hintergrund andere
          Funktionen. Können sich grundsätzlich nicht selbst verbreiten, z.B.
          photoshop.exe, welche im Hintergrund Daten löscht. Dabei kann sich
          auch für eine bessere Tarnung eine echte Photoshop-Instanz öffnen.
        </li>
        <li>
          <a class="text-weight-bold text-blue">Spyware</a> ist eine Software,
          die Daten eines Computernutzers ohne dessen Wissen an Dritte sendet,
          z.B. ausspähen des Surfverhaltens des Nutzers, um dann gezielte
          Popup-Werbung zu schalten.
        </li>
        <li>
          <a class="text-weight-bold text-blue">Botnets</a> stellen einem
          Angreifer die Netzwerkverbindung, Daten oder Ressourcen eines
          Opferrechners zur Verfügung. Von dort aus nutzt der Angreifer die
          erlangten Ressourcen, um das Botnet zu erweitern oder andere
          Cyberattacken auszuführen, z.B. Versand von Spam-Mails vom System
          eines Opfers aus
        </li>
        <li>
          <a class="text-weight-bold text-blue">Keylogger</a> überwachen die
          Eingaben des Benutzers an der Tastatur. Durch das senden dieser Daten
          an den Angreifer kann er so z.B. Passwörter ausspähen.
        </li>
        <li>
          <a class="text-weight-bold text-blue">Rootkits</a> sind
          Softwarewerkzeuge, die nach Eindrigen auf das Opfersystem installiert
          werden und von dort die zukünftigen Anmeldeversuche eines Angreifers
          oder auch Dateien und Prozesse verbergen. Zweck ist unter anderem
          andere Schadprogramme vor Antivirenprogrammen zu verbergen.
        </li>
      </ul>

      <li class="text-weight-bolder">Phishing</li>
      <ul>
        <li>
          Angreifer versucht sich als vertrauenswürder Kommunikationspartner
          auszugeben
        </li>
        <li>über E-Mails, Websiten oder Nachrichten</li>
        <li>Ziel: erlangen von sensiblen oder persönlichen Daten des Opfers</li>
        <li>
          z.B.: E-Mail Nachricht: Bestätigen Sie ihr Passwort mit Link zu einer
          gefälschten PayPal-Website. Nach einloggen des Nutzers erhält der
          Angreifer die Nutzerdaten und kann das Konto plündern.
        </li>
      </ul>
      <li class="text-weight-bolder">Social Engineering</li>
      <ul>
        <li>ähnlich zu Phishing</li>
        <li>Manipulieren des Opfers zum Offenlegen von Informationen</li>
        <li>
          z.B.: reicher Prinz aus Afrika, welcher schnell Geld benötigt und
          später das doppelte zurücküberweist
        </li>
      </ul>
      <li class="text-weight-bolder">Man-in-the-Middle-Angriff</li>
      <li class="text-weight-bolder">
        Passwort-Angriffe / Brute-Force-Angriffe
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CyberbedrohungPage',
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
