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
        <li>
          Nichtverfügbarkeit eines Internetdienstes, der eignetlich verfügbar
          sein sollte
        </li>
        <li>oft durch Überlastung oder Überforderung des Datennetzes</li>
        <li>
          mutwillig verursachtes Senden vieler Anfragen zur Dienstblockade bzw.
          Überlastung / Verlangsamung eines Dienstes
        </li>
        <li>
          bei einer großen Zahl an Rechnern, welche die Abfragen senden spricht
          man von Distributed Denial of Service
        </li>
        <li>
          auch durch Botnets (siehe <a class="text-weight-bolder">Malware</a>→<a
            class="text-blue text-weight-bold"
            >Botnets</a
          >)
        </li>
        <li>Beispiel einer DDoS-Attacke über Botnets:</li>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/datenschutz/ddos.png'"
          style="max-width: 400px"
          @click="
            show_img = true;
            popupsrc = '/datenschutz/ddos.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
      <li class="text-weight-bolder">Malware</li>
      <ul>
        <li>
          Malware ist ein Überbegriff vieler verschiedener Schadsoftwares, dazu
          zählen:
        </li>
        <ul>
          <li>
            <a class="text-weight-bold text-blue">Viren</a> sind Schadprogramme,
            die sich selbst verbreiten und reproduzieren. Tragen sich in Dateien
            oder Bootsektoren ein und verbreiten sich durch infizierte Dateien
            oder Wechselmedien. Sie nehmen schädliche Veränderungen an weiterer
            Software vor und können teilweise auch die Hardware beschädigen.
          </li>
          <li>
            <a class="text-weight-bold text-blue">Würmer</a> vervielfältigen
            sich wie auch Viren, jedoch ohne Dateien oder Bootsektoren zu
            infizieren. Verbreiten sich, indem sie z.B. E-Mail Programme
            übernehmen und E-Mails mit Wurm als Anhang an alle Kontake
            verschicken.
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
            z.B. Ausspähen des Surfverhaltens des Nutzers, um dann gezielte
            Popup-Werbung zu schalten.
          </li>
          <li>
            <a class="text-weight-bold text-blue">Botnets</a> stellen einem
            Angreifer die Netzwerkverbindung, Daten oder Ressourcen eines
            Opferrechners zur Verfügung. Von dort aus nutzt der Angreifer die
            erlangten Ressourcen, um das Botnet zu erweitern oder andere
            Cyberattacken auszuführen, z.B. Versand von Spam-Mails vom System
            eines Opfers aus oder DDoS-Attacken
          </li>
          <li>
            <a class="text-weight-bold text-blue">Keylogger</a> überwachen die
            Eingaben des Benutzers an der Tastatur. Durch das senden dieser
            Daten an den Angreifer kann er so z.B. Passwörter ausspähen.
          </li>
          <li>
            <a class="text-weight-bold text-blue">Rootkits</a> sind
            Softwarewerkzeuge, die nach Eindrigen auf das Opfersystem
            installiert werden und von dort die zukünftigen Anmeldeversuche
            eines Angreifers oder auch Dateien und Prozesse verbergen. Zweck ist
            unter anderem andere Schadprogramme vor Antivirenprogrammen zu
            verbergen.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Man-in-the-Middle-Angriff</li>
      <ul>
        <li>findet in Rechnernetzen statt</li>
        <li>
          Angreifer steht zwischen beiden Kommunikationspartnern und hat dabei
          die Kontrolle über den Datenverkehr zwischen den Netzwerkteilnehmern
        </li>
        <li>Angreifer kann Datenverkehr einsehen und manipulieren</li>
        <li class="text-weight-bold">Beispiele:</li>
        <ul>
          <li>
            <a class="text-weight-bolder">ARP-Spoofing</a> bezeichnet die
            Modifizierung der ARP-Tabellen des Opfersystems durch einen
            Angreifer, um so Datenverkehr umzuleiten. Funktioniert auch an
            Switches.
          </li>
          <li>
            <a class="text-weight-bolder"
              >Vorspielen eines falschen DHCP-Servers</a
            >. Durch automatisches Verteilen einer falschen
            Standard-Gateway-Adresse über den DHCP-Server kann der Datenverkehr
            eines Opfersystems an ein komprimitiertes Gateway gesendet werden.
            Eine Gegenmaßnahme hierfür ist das einsetzen von DHCP snooping,
            welches ungewollten DHCP-Traffic filtern und weitere
            Sicherheitsmaßnahmen gegen falsche DHCP-Server im Netz vornehmen
            kann.
          </li>
          <li>
            <a class="text-weight-bolder">DNS Cache Poisoning </a> umschreibt
            das falsche Übersetzen von DNS-Adressen aufgrund komprimitierter
            DNS-Einträge. Hierbei kann z.B. die Website paypal.de das Opfer auf
            einen vom Angreifer aufgesetzten Server weiterleiten, wodurch der
            Angreifer an persönliche Daten kommen könnte.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">
        Passwort-Angriffe / Brute-Force-Angriffe
      </li>
      <ul>
        <li>Ausprobieren aller möglichen Fälle (Methode der rohen Gewalt)</li>
        <li>
          Direktes knacken von Passwörtern schwer geworden → viele
          Sicherheitsvorkehrungen (z.B. zu viele Eingabeversuche blockieren),
          sichere Passwörter teils vorgeschrieben
        </li>
        <li>
          → Hacken von Passwortdatenbanken. Da Passwörter i.d.R. als Hash
          gespeichert werden haben die Angreifer noch keinen direkten Zugriff
          auf das Passwort.
        </li>
        <li>
          Hashes für alle möglichen Zeichenkombinationen werden kalkuliert und
          mit denen der gehackten Datenbank abgeglichen → falls Hashes
          übereinstimmen wurde das Passwort gefunden
        </li>
        <li>
          <a class="text-weight-bold">Rainbow Tables</a> bezeichnen Tabellen mit
          oft verwendeten, bereits zu Hashes ausgerechneten Passwörten.
        </li>
        <li>
          Bei einer sicheren Hashmethode und einem komplexen Passwort ist das
          Finden des dazugehörigen Hashes derzeit praktisch unmöglich
          (theoretisch ist es hingegen sehr einfach → Limit ist die
          Computing-Power).
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
          z.B.: E-Mail Nachricht: Bestätigen Sie ihr Passwort. Der Link in der
          E-Mail führt zu einer gefälschten PayPal-Website. Nach einloggen des
          Nutzers auf der gefälschten Seite erhält der Angreifer die Nutzerdaten
          und kann das Konto plündern.
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
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-subtitle2 text-grey font-size-small">
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://commons.wikimedia.org/wiki/File:Stachledraht_DDos_Attack.svg
      <br />Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
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
