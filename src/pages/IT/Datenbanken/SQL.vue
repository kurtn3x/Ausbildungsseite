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
      SQL-Befehle
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li>
        Angaben mit # sind nicht Bestandteil der SQL-Syntax, diese Felder müssen
        durch richtige Angaben aus der SQL-Tabelle getauscht werden (z.B.
        #Feldliste → "Name, Klasse, Alter")
      </li>
      <li class="text-weight-bolder q-mt-md">SELECT-Anweisung</li>
      <ul>
        <li class="text-red">SELECT = Wähle</li>
        <li class="text-pink">
          #Feldliste = Angabe der Felder durch Kommata getrennt oder auch * für
          alle Felder
        </li>
        <li class="text-green">FROM = von</li>
        <li class="text-cyan">#Tabelle = Tabellenname</li>
        <li>Einfache Beispiele:</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              <a class="text-red">SELECT </a>
              <a class="text-pink">Atrikel_nr, Atrikel_Bez </a>
              <a class="text-green">FROM</a> <a class="text-cyan">Lager</a>;
            </div>
          </li>
          <li>
            gibt die Artikel_nr und Artikel_Bez aller Zeilen aus der Tabelle
            Lager aus
          </li>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white q-mt-md"
            >
              <a class="text-red">SELECT </a>
              <a class="text-pink">* </a>
              <a class="text-green">FROM</a> <a class="text-cyan">Lager</a>;
            </div>
          </li>
          <li>gibt alle Felder aller Zeilen der Tabelle Lager aus</li>
        </ul>

        <li class="q-mt-md text-lime">
          Zusammenrechnen mehrer Felder und Zuweisen eines Aliases mit AS
        </li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              <a class="text-red">SELECT </a>
              <a class="text-pink">Atrikel_nr, </a>
              <a class="text-lime">(Einkaufspreis*Bestand) AS Warenwert </a>
              <a class="text-green">FROM</a> <a class="text-cyan">Lager</a>;
            </div>
          </li>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              <a class="text-red">SELECT </a>
              <a class="text-pink">Name, Gehalt, </a>
              <a class="text-lime">(Gehalt+150) AS Sonderzahlung </a>
              <a class="text-green">FROM</a> <a class="text-cyan">Personal</a>;
            </div>
          </li>
        </ul>
        <li class="text-purple q-mt-md">
          DISTINCT = gleiche Feldinhalte werden ignoriert
        </li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              <a class="text-red">SELECT </a>
              <a class="text-purple"> DISTINCT </a>
              <a class="text-pink">Land </a>
              <a class="text-green">FROM</a> <a class="text-cyan">Kunden</a>;
            </div>
          </li>
          <li>
            gibt alle Länder aller Zeilen der Tabelle Kunden genau einmal aus
          </li>
          <li>
            bzw. gibt ohne Dopplungen alle Länder aus, aus denen die Kunden
            herkommen
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder q-mt-md">WHERE-Klausel</li>
      <ul>
        <li>
          folgt nach dem SELECT, um Bedingungen für die SELECT-Daten anzugeben
        </li>
        <li class="text-red">WHERE = Wobei</li>
        <li class="text-green">
          #Bedingung = liefert einen boolschen Wert mithilfe von
          Vergleichsoperatoren:
        </li>
        <ul>
          <li>
            die logischen Vergleichsoperatoren (=, &lt;=, &gt;=, &gt;, ....)
          </li>
          <li>IS NULL | IS NOT NULL = Wert existiert nicht | Wert existiert</li>
          <li>BETWEEN = zwischen</li>
          <li>IN | NOT IN = enthalten | nicht enthalten in Liste</li>
        </ul>
        <li class="text-blue">AND | OR = Verknüpfung</li>
        <li>Beispiele:</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT * FROM LAGER <a class="text-red">WHERE </a>
              <a class="text-green">Artikelart='Computer' </a>
              <a class="text-blue">AND </a>
              <a class="text-green">Marke='Lenovo';</a>
            </div>
          </li>
          <li>gibt alle Computer der Marke Lenovo aus</li>
          <li class="q-mt-md">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT * FROM LAGER <a class="text-red">WHERE </a>
              <a class="text-green">Preis IS NOT NULL </a>
              <a class="text-blue">AND </a>
              <a class="text-green">Artikelart='Computer';</a>
            </div>
          </li>
          <li>gibt alle Computer aus, die einen Preis haben</li>
        </ul>
      </ul>
      <li class="text-weight-bolder q-mt-md">Wildcards</li>
      <ul>
        <li>
          Wildcards können verwendet werden, um Strings mit ähnlicher
          Schreibweise zu finden
        </li>
        <li class="text-red">LIKE = so ähnlich wie</li>
        <li class="text-green">
          #Muster = Gesuchtes Muster mit Wildcards _ oder %
        </li>
        <li>Beispiele</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT * FROM LAGER WHERE Name <a class="text-red">LIKE </a> 'M<a
                class="text-green"
                >_</a
              >ller;'
            </div>
          </li>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT * FROM LAGER WHERE Name <a class="text-red">LIKE </a> 'M<a
                class="text-green"
                >%</a
              >ller;'
            </div>
          </li>
          <li>gibt alle mit Namen Müller, Miller, Möller, Malller, ... aus</li>
        </ul>
      </ul>
      <li class="text-weight-bolder q-mt-md">ORDER BY-Klausel</li>
      <ul>
        <li>sortieren der Ausgabe</li>
        <li class="text-red">ORDER BY = Sortiere das Ergebnis nach</li>
        <li class="text-green">
          #Tabellenfeld = Feld, nach dem sortiert werden soll
        </li>
        <li class="text-blue">
          ASC | DESC = ASC: aufsteigend, DESC: absteigende Sortierung
        </li>
        <li>Beispiele:</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT * FROM Personal <a class="text-red">ORDER BY </a>
              <a class="text-green">Name </a> <a class="text-blue">ASC;</a>
            </div>
          </li>
          <li>
            gibt alle Mitglieder aus Personal aus, sortiert nach aufsteigendem
            Namen (A→Z)
          </li>
          <li class="q-mt-md">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT * FROM Personal <a class="text-red">ORDER BY </a>
              <a class="text-green">Name </a> <a class="text-blue">DESC;</a>
            </div>
          </li>
          <li>
            gibt alle Mitglieder aus Personal aus, sortiert nach absteigendem
            Namen (Z→A)
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder q-mt-md">Aggregatfunktionen</li>
      <ul>
        <li>
          Zusammenrechnen, zählen oder Minimal-/Maximalwerte einer oder mehrerer
          Felder bestimmen
        </li>
        <li class="text-red q-mt-md">
          SUM = Summe über ein Feld bilden und mit AS Alias zuweisen
        </li>
        <li>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            SELECT
            <a class="text-red">SUM(Verkaufspreis) AS SummeVerkauf</a> FROM
            Lager WHERE Artikelart='Computer';
          </div>
        </li>
        <li>
          gibt den zusammengerechneten Preis aller Computer in der Tabelle Lager
          aus
        </li>

        <li class="text-green q-mt-md">
          COUNT = Anzahl aller Datensätze (*) oder aller Datensätze mit Eintrag
          im Feld (#Feldname)
        </li>
        <li>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            SELECT
            <a class="text-green">COUNT(*)</a> FROM Lager WHERE
            Artikelart='Computer';
          </div>
        </li>
        <li>gibt die Anzahl aller Computer im Lager aus</li>

        <li>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white q-mt-sm"
          >
            SELECT
            <a class="text-green">COUNT(Preis)</a> FROM Lager WHERE
            Artikelart='Computer';
          </div>
        </li>
        <li>gibt die Anzahl aller Computer mit gesetztem Preis im Lager aus</li>

        <li class="text-blue q-mt-md">
          MIN | MAX = ermittelt den kleinsten/größten Wert im angegebenen Feld
        </li>
        <li>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white"
          >
            SELECT
            <a class="text-blue">MIN(Preis)</a> FROM Lager WHERE
            Artikelart='Computer';
          </div>
        </li>
        <li>gibt den Computer mit dem kleinsten Preis aus</li>

        <li>
          <div
            style="font-family: monospace, monospace"
            class="bg-grey-9 text-white q-mt-sm"
          >
            SELECT
            <a class="text-blue">MAX(Preis)</a> FROM Lager WHERE
            Artikelart='Computer';
          </div>
        </li>
        <li>gibt den Computer mit dem höchsten Preis aus</li>
      </ul>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SQLPage',
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
