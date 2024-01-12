<template>
  <q-page>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      TOM - Die technisch-organisatorischen Maßnahmen
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        <a class="text-weight-bolder text-h6 text-underline text-third"
          >Technische Maßnahmen</a
        >
      </li>
      <ul>
        <li>
          Unter technischen Maßnahmen sind alle Schutzversuche zu verstehen, die
          im weitesten Sinne physisch umsetzbar sind
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Umzäunung des Geländes</li>
          <li>Sicherung von Türen und Fenstern</li>
          <li>bauliche Maßnahmen allgemein</li>
          <li>Alarmanlagen jeglicher Art</li>
        </ul>
        <li>oder Maßnahmen die in Soft- und Hardware umgesetzt werden</li>
        <li>Beispiele:</li>
        <ul>
          <li>Benutzerkonto</li>
          <li>Passworterzwingung</li>
          <li>Logging (Protokolldateien)</li>
          <li>biometrische Benutzeridentifikation</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-underline text-third"
          >Organisatorische Maßnahmen</a
        >
      </li>
      <ul>
        <li>
          Als organisatorische Maßnahmen sind solche Schutzversuche zu verstehen
          die durch Handlungsanweisung, Verfahrens- und Vorgehensweisen
          umgesetzt werden.
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Besucheranmeldung</li>
          <li>
            Arbeitsanweisung zum Umgang mit fehlerhaften Druckerzeugnissen
          </li>
          <li>Vier-Augen-Prinzip</li>
          <li>festgelegte Intervalle zur Stichprobenprüfungen</li>
        </ul>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h5 q-mt-lg q-ml-md text-weight-bolder text-underline text-third"
    >
      TOM gemäß Bundesdatenschutzgesetz (BDSG)
    </div>
    <ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Zutrittskontrolle</a>
      </li>
      <ul>
        <li>
          Maßnahmen, die Unbefugte daran hindern Zutritt zu
          Datenverarbeitungsanlagen zu erhalten (räumlich)
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Zäune</li>
          <li>Alarmanlagen</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Zugangskontrolle</a>
      </li>
      <ul>
        <li>
          Maßnahmen, die Unbefugte am Nutzen von Datenverarbeitunganlagen
          hindern
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Benutzerkennung mit Passwort</li>
          <li>biometrische Benutzeridentifikation</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Zugriffskontrolle</a>
      </li>
      <ul>
        <li>
          Maßnahmen, die dafür sorgen, dass Personen nur auf die Inhalte Zugriff
          haben, für die sie berechtigt sind und dass Daten nicht unbefugt
          kopiert, verändert oder gelöscht werden können
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Berechtigungskonzept</li>
          <li>Benutzerkennung mit Passwort</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Weitergabekontrolle</a>
      </li>
      <ul>
        <li>
          Maßnahmen, die Unbefugte daran hindern, personenbezogene Daten bei der
          Übertragung, beimTransport oder bei der Speicherung zu lesen,
          kopieren, verändern oder zu löschen
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Verschlüsselung</li>
          <li>Protokollierungsmaßnahmen</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Eingabekontrolle</a>
      </li>
      <ul>
        <li>
          Es muss sichergestellt werden, dass nachträglich überprüft werden kann
          ob und von wem personenbezogene Daten eingegeben, verändert oder
          gelöscht worden sind.
        </li>
        <ul>
          <li>Protokollierung</li>
          <li>Benutzeridentifikation</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Auftragskontrolle</a>
      </li>
      <ul>
        <li>
          Es muss sichergestellt werden, dass personenbezogene Daten, die im
          Auftrag verarbeitet werden, gemäß den Weisungen des Auftraggebers
          verarbeitet werden.
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>Weisungsbefugnisse festlegen</li>
          <li>Vor-Ort-Kontrollen</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third"
          >Verfügbarkeitskontrolle</a
        >
      </li>
      <ul>
        <li>
          Es muss sichergestellt werden, dass personenbezogene Daten gegen
          zufällige Zerstörung oder Verlust geschützt werden.
        </li>
        <ul>
          <li>Brandschutzmaßnahmen</li>
          <li>Überspannungsschutz</li>
        </ul>
      </ul>
      <li>
        <a class="text-weight-bolder text-h6 text-third">Trennungsgebot</a>
      </li>
      <ul>
        <li>
          Es ist sicher zu Stellen, dass personenbezogene Daten, die zu
          unterschiedlichen Zwecken erhoben wurden, getrennt verarbeitet werden
          können.
        </li>
        <ul>
          <li>Trennung von Produktiv- und Testsystemen</li>
          <li>getrennte Ordnerstrukturen (Auftragsdatenverarbeitung)</li>
        </ul>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TOMPage',
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
