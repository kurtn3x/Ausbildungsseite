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
      Verkabelung
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-underline text-secondary"
    >
      Strukturierte Verkabelung
    </div>
    <ul>
      <li class="text-weight-bold">
        Konzept für die Verkabelung mit anwendungsneutralen Kommunikationskabeln
        in und zwischen Gebäuden
      </li>
      <li class="text-weight-bolder">Ziel einer strukturierten Verkabelung</li>
      <ul>
        <li>
          Unterstützung der aktuellen und zukünftigen Kommunikationssysteme
        </li>
        <li>Kapazitätsreserve</li>
        <li>flexible Erweiterbarkeit</li>
        <li>Ausfallsicherheit</li>
        <li>Einhaltung existierender Standards</li>
      </ul>
      <li class="text-weight-bolder">
        Bestandteile einer strukturierten Verkabelung
      </li>
      <ul>
        <li>Leitungen und Steckverbindungen</li>
        <li>Netzwerktopologie</li>
        <li>Empfehlungen für Verlegung und Installation</li>
        <li>standardisierte Mess-, Prüf- und Dokumentationsverfahren</li>
      </ul>
      <li class="text-weight-bolder text-h7">
        Strukturierte Verkabelung nach EN 50173/50174
      </li>
      <ul>
        <li>
          <a class="text-weight-bolder text-orange-4">Primärbereich: </a
          >Verbindet zentrale Komponenten und einzelne Gebäude. Meist
          Lichtwellenleiter mit Redundanz (Twisted-Pair auch möglich, jedoch
          selten)
        </li>
        <li>
          <a class="text-weight-bolder text-pink-3">Sekundärbereich: </a
          >Vertikale Stockwerksverkabelung. Lichtwellenleiter oder Twisted Pair.
        </li>
        <li>
          <a class="text-weight-bolder text-green-4">Tertiärbereich: </a
          >Horizontale Stockwerksverkabelung bis zur Anschlussdose. Verwendung
          von Twisted-Pair (Lichtewellenleiter auch möglich, jedoch selten)
        </li>

        <q-img
          class="fit"
          :src="src + '/Netzwerke/Verkabelung/Verkabelung.jpg'"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/Verkabelung/Verkabelung.jpg';
          "
          style="max-width: 600px"
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      Übertragungsmedien
    </div>
    <ul>
      <li class="text-weight-bolder text-h7">Leitergebundene</li>
      <ul>
        <li class="text-weight-bolder">Metallische/elektrische Leiter:</li>
        <ul>
          <li class="text-weight-bold">Koaxialkabel</li>
          <ul>
            <li>
              Übertragung von Hochfrequenzsignalen (Fernsehantennen /
              Satellitenschüsseln)
            </li>
          </ul>
          <li class="text-weight-bold">Twisted-Pair</li>
          <ul>
            <li>Vier verdrillte Adern-Paare</li>
            <li>Elektromagnetische Strahlung strahlt parallel vom Sender ab</li>
            <li>
              Durch Verdrillen wird in andere Richtung als der Partner gestrahlt
            </li>
            <li>Unterschiedliche Standards: Cat5, Cat6, Cat7, Cat8</li>
            <li>
              Twisted-Pair-Kabel besitzen unterschiedliche Arten von
              Abschirmungen, welche einen zusätzlichen Schutz gegen störende
              äußere elektromagnetische Felder bieten:
            </li>
            <q-img
              class="fit"
              :src="src + '/Hardware/twisted-pair.png'"
              @click="
                show_img = true;
                popupsrc = '/Hardware/twisted-pair.png';
              "
              style="max-width: 600px"
            >
              <div
                class="absolute-bottom-right text-subtitle2"
                style="
                  height: 40px;
                  font-size: 10px;
                  background-color: transparent;
                "
              >
                Click for full size
              </div>
            </q-img>
          </ul>
        </ul>
        <li class="text-weight-bolder">Nicht-metallische/optische Leiter:</li>
        <ul>
          <li class="text-weight-bold">Lichtwellenleiter</li>
          <ul>
            <li>Lichtleitung erfolgt mittels Quarzglas oder Kunststoff</li>
            <li>
              bestehen im Inneren aus einem Kern und einen umgebenden Mantel mit
              niedrigerem Brechungsindex
            </li>
            <li>
              Totalreflexion an der Grenzschischt -> Weiterleitung des Lichts
            </li>
            <li class="text-underline">Multimode</li>
            <ul>
              <li>Kerndurchmesser relativ dick</li>
              <li>
                Licht bricht in vielen Winkeln und verliert an Genauigkeit
              </li>
              <li>gleichzeitige Ausbreitung mehrerer Modi oder Lichstrahlen</li>
            </ul>
            <li class="text-underline">Monomode</li>
            <ul>
              <li>sehr dünner Kerndurchmesser</li>
              <li>Licht als gerader Strahl durchgeleitet</li>
              <li>nur ein Lichtmodus</li>
            </ul>
            <li class="text-green">Vorteile:</li>
            <ul>
              <li>unempfindlich gegen elektromagnetische Störungen</li>
              <li>wenig eigene Störaussendung</li>
              <li>robuster gegen Umwelteinflüsse</li>
              <li>Kostengünstig</li>
              <li>Geringere Dämpfung</li>
              <li>Höhere Übertragungsrate</li>
              <li>Größere Reichweiten möglich</li>
              <li>Keine Erdung und Potenzialausgleich erforderlich</li>
            </ul>
            <li class="text-red">Nachteile:</li>
            <ul>
              <li>kein Power over Ethernet möglich</li>
              <li>Komplexere Verbindungstechnik als z.B. Twisted-Pair</li>
              <li>Zerbrechlich</li>
            </ul>
          </ul>
        </ul>
      </ul>
      <li class="text-weight-bold text-h7">Leiterungebundene</li>
      <ul>
        <li>
          <a class="text-weight-bold">Funkübertragung:</a> WLAN/Wi-Fi,
          Bluetooth, NFS, Mobilfunk
        </li>
        <li><a class="text-weight-bold">Optische Übertragung:</a> Laserlink</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div class="text-weight-bold text-h6 q-mt-md text-underline text-secondary">
      Simplex und Duplex
    </div>
    <ul>
      <li class="text-weight-bold text-h7">Simplex</li>
      <ul>
        <li>
          Simplex beschreibt, dass bei der Kommunikation zwischen zwei Geräten
          die Übertragung grundsätzlich auf einem Kanal nur in eine Richtung
          möglich ist
        </li>
        <li>
          <a class="text-weight-bold">Dual-Simplex</a> beschreibt das Nutzen von
          2 zwei Simplex-Verbindungen, womit auch eine Datenübertragung in beide
          Richtungen möglich ist (ein Kanal hin, ein Kanal zurück). Jedoch
          findet hierbei die Kommunikation über 2 Kanäle statt. (Unterschied zu
          Voll-Duplex: Übertragung in beide Richtungen auf nur einem Kanal)
        </li>
      </ul>

      <li class="text-weight-bold text-h7">Duplex</li>
      <ul>
        <li>
          Duplex beschreibt, dass bei der Kommunikation zwischen zwei Geräten
          die Übertragung grundsätzlich in beide Richtungen möglich ist
        </li>
        <li>Man unterscheidet zwischen Halbduplex und Vollduplex</li>
        <li class="text-weight-bold">Halbduplex</li>
        <ul>
          <li>
            es kann in beide Richtungen, allerdings nicht zur selben Zeit
            kommuniziert werden
          </li>
          <li>Sender und Empfänger müssen sich daher abwechseln</li>
          <li>Beispiel: Walkie-Talkie</li>
        </ul>
        <li class="text-weight-bold">Vollduplex</li>
        <ul>
          <li>
            Daten können auf einem Kanal gleichzeitig in beide Richtungen
            gesendet und empfangen werden
          </li>
          <li>Beispiel: Telefon</li>
        </ul>
        <q-img
          class="bg-grey-5"
          :src="src + '/Netzwerke/SimplexDuplex.webp'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/Netzwerke/SimplexDuplex.webp';
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
    </ul>
    <q-separator class="q-mt-md" />

    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://studyflix.de/informatik/strukturierte-verkabelung-5549
      <br />
      https://www.fibermall.com/blog/wp-content/uploads/2022/06/different-layers-of-the-network.jpg
      <br />
      https://heinen-elektronik.de/wp-content/uploads/2023/02/Simplex_duplex.png
      <br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VerkabelungPage',
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
