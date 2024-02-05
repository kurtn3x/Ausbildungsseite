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
      Der Markt
    </div>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Definitionen
    </div>
    <ul>
      <li class="text-weight-bolder">Absatz</li>
      <ul>
        <li>
          umfasst alle planenden, durchführenden, kontrollierenden und
          erhaltenden Tätigkeiten beim Veräußern von betrieblichen Leistungen
          gegen Entgelt
        </li>
      </ul>
      <li class="text-weight-bolder">Marketing</li>
      <ul>
        <li>marktgesteuerte Unternehmensführung</li>
        <li>
          alle betrieblichen Aktivitäten sind auf die gegenwärtigen und
          zukünftigen Erfordernisse der Märkte ausgerichtet
        </li>
        <li>
          gestaltet Märkte, indem Bedarf geschaffen und erwünschtes
          Kaufverhalten der Kunden erzeugt wird
        </li>
        <li>
          Marketing muss marktorientiert, zukunfsorientiert und
          wachstumsorientiert sein
        </li>
        <li class="text-weight-bold">Aufgaben des Marketings:</li>
        <ul>
          <li>sich selbst aus der Sicht des Kunden beurteilen</li>
          <li>Stärken aufbauen, Schwächen reduzieren</li>
          <li>bestehende Absatzsegment sichern und neue finden</li>
          <li>Konkurrenz beobachten und sich von ihr absetzen</li>
        </ul>
        <li class="text-weight-bold">Ziele des Marketings:</li>
        <ul>
          <li>
            preispolitische Ziele (Preise
            stabilisieren/anheben/kontrollieren/senken)
          </li>
          <li>
            produktpolitische Ziele (Spitzen-/Massen-/Standard-/Spezialprodukte)
          </li>
          <li>
            kommunikationspolitische Ziele (Aufmerksamtkeit wecken, Kunden
            informieren, Kaufabsicht stärken)
          </li>
          <li>
            vertriebspolitische Ziele (Versand beschleunigen, Logistikkosten
            senken)
          </li>
        </ul>
        <li class="text-weight-bold">Marketinginstrumente:</li>
        <ul>
          <li>Produktpolitik (Qualität, Innovation, Markenpolitik, Service)</li>
          <li>
            Preispolitik (Preisgestaltung, Zahlungsbedingungen,
            Garantieleistungen, Finanzierungsgestaltung)
          </li>
          <li>
            Distributionspolitik (Vertriebsmethoden, Logistik, Versand,
            Transport)
          </li>
          <li>
            Kommunikationspolitik (Werbung, Direktmarketing, persönlicher
            Verkauf, Sponsoring, ....)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">Customer Relationship Management</li>
      <ul>
        <li>
          speichern von Kundendaten und Abstimmung dieser Daten aufeinander
        </li>
        <li>Kunden können sehr individuell beworben und bearbeitet werden</li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder text-secondary text-underline"
    >
      Marktformen und -arten
    </div>
    <ul>
      <li class="text-weight-bolder">Verkäufermärkte und Käufermärkte</li>
      <ul>
        <li class="text-weight-bold">Verkäufermärkte</li>
        <ul>
          <li>
            Anbieter bestimmen aufgrund des geringen Angebots an Gütern bei
            gleichzeitig viel größerer Nachfrage nach diesenen Gütern die Preise
          </li>
          <li>
            Anbieter haben selbst bei ungünstigem Preis, geringer Qualität oder
            schlechtem Service keine Absatzsorgen
          </li>
          <li>z.B.: DDR, Nachkriegsmärkte</li>
        </ul>
        <li class="text-weight-bold">Käufermärkte</li>
        <ul>
          <li>
            Nachfrager bestimmen aufgrund des riesigen Angebots an Gütern die
            Preise
          </li>
          <li>
            Fülle an Gütern aller Art mit Qualität, hoher Lieferbereitschaft,
            hohem Service und großer Auswahl
          </li>
          <li>
            z.B. Lebensmittel in Deutschland (hohe Konkurrenz unter Discountern)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder">volkommener und unvolkommener Markt</li>
      <ul>
        <li class="text-weight-bold">volkommener Markt</li>
        <ul>
          <li>liegt vor wenn alle 3 der folgenden Bedingungen erfüllt sind</li>
          <li>
            Alle Güter sind hinsichtlich Art, Qualität, Ausstattung und
            Aufmachung völlig gleich
          </li>
          <li>vollständige Marktübersicht (Markttransparenz)</li>
          <li>Käufer ziehen keinen Anbieter und kein Produkt vor</li>
        </ul>
        <li class="text-weight-bold">unvolkommener Markt</li>
        <ul>
          <li>
            liegt vor, wenn eine der Bedingungen des vollkommenen Marktes nicht
            erfüllt ist
          </li>
          <li>Unterschiedliche Qualität von Gütern</li>
          <li>fehlende Marktübersicht</li>
          <li>Präferenzen liegen vor</li>
        </ul>
      </ul>
      <li class="text-weight-bolder">
        Nach Anzahl der Anbieter und Nachfrager
      </li>
      <ul>
        <q-img
          class="fit bg-grey-5 q-mt-md"
          :src="src + '/serviceanfragen/marktformen.png'"
          style="max-width: 600px"
          @click="
            show_img = true;
            popupsrc = '/serviceanfragen/marktformen.png';
          "
        >
          <div
            class="absolute-bottom-right text-subtitle2"
            style="height: 40px; font-size: 10px; background-color: transparent"
          >
            Click for full size
          </div>
        </q-img>
        <li>
          <a class="text-weight-bold">Duopol:</a> Variante des Oligopols, bei
          der viele Nachfrager zwei Anbietern gegenüberstehen (Gefahr von Preis-
          und Mengenabsprachen)
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />
      https://www.bommi2000.de/wirtkunde/e1_lernbereich3_6x9zoll.pdf<br />
      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
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
