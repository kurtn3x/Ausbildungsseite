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
        <li class="text-purple-4 q-mt-md">
          DISTINCT = gleiche Feldinhalte werden ignoriert
        </li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              <a class="text-red">SELECT </a>
              <a class="text-purple-4"> DISTINCT </a>
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
        <ul>
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
            gibt den zusammengerechneten Preis aller Computer in der Tabelle
            Lager aus
          </li>
        </ul>

        <li class="text-green q-mt-md">
          COUNT = Anzahl aller Datensätze (*) oder aller Datensätze mit Eintrag
          im Feld (#Feldname)
        </li>
        <ul>
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
        </ul>
        <ul>
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
          <li>
            gibt die Anzahl aller Computer mit gesetztem Preis im Lager aus
          </li>
        </ul>
        <li class="text-blue q-mt-md">
          MIN | MAX = ermittelt den kleinsten/größten Wert im angegebenen Feld
        </li>
        <ul>
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
      <li class="text-weight-bolder q-mt-md">
        INTO - Kopieren von Daten in eine neue Tabelle
      </li>
      <ul>
        <li>SELECT * (oder Feldliste)</li>
        <li class="text-red">INTO - kopieren der angegebenen Feldliste nach</li>
        <li class="text-green">#Zieltabelle</li>
        <li>FROM #Quelltabelle</li>
        <li>WHERE #Bedingung</li>
        <ul>
          <li class="q-mt-sm">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white q-mt-sm"
            >
              SELECT *
              <a class="text-red">INTO </a>
              <a class="text-green">Computer</a>
              FROM Lager WHERE Artikelart='Computer';
            </div>
          </li>
          <li>Kopiert alle Computer im Lager in eine neue Tabelle Computer</li>
        </ul>
      </ul>

      <li class="text-weight-bolder q-mt-md">
        INSERT INTO - Kopieren von Daten in eine existierende Tabelle
      </li>
      <ul>
        <li class="text-red">INSERT INTO</li>
        <li class="text-green">#Zieltabelle</li>
        <li>SELECT * (oder Feldliste)</li>
        <li>FROM #Quelltabelle</li>
        <li>WHERE #Bedingung</li>
        <ul>
          <li class="q-mt-sm">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white q-mt-sm"
            >
              <a class="text-red">INSERT INTO </a>
              <a class="text-green">Computer</a>
              SELECT * FROM Lager WHERE Artikelart='Computer';
            </div>
          </li>
          <li>
            Kopiert alle Computer im Lager in die existierende Tabelle Computer
          </li>
        </ul>
      </ul>

      <li class="text-weight-bolder q-mt-md">
        UNION (ALL) - Daten aus verschiedenen Tabellen in einer Ansicht
      </li>
      <ul>
        <li class="text-red">
          UNION - Verbunden mit, doppelte Datensätze werden ignoriert
        </li>

        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT Name, Straße, Ort FROM Kunde
              <a class="text-red">UNION</a>
              SELECT Name, Straße, Ort FROM Verkäufer;
            </div>
          </li>
          <li>
            Gibt die ausgewählten Felder aus beiden Tabellen einmalig aus.
            Doppelte Datensätze werden ignoriert.
          </li>
        </ul>

        <li class="text-green q-mt-md">
          UNION ALL - doppelte Datensätze werden mit ausgegeben
        </li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT Name, Straße, Ort FROM Kunde
              <a class="text-green">UNION ALL</a>
              SELECT Name, Straße, Ort FROM Verkäufer;
            </div>
          </li>
          <li>
            Gibt die ausgewählten Felder aus beiden Tabellen aus. Doppelte
            Datensätze werden mit ausgegeben.
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder q-mt-md">
        INTERSECT | EXCEPT - Schnittmenge & Differenz
      </li>
      <ul>
        <li class="text-green">INTERSECT - Verbunden wenn Schnittmenge</li>

        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT Ort FROM Kunde
              <a class="text-green">INTERSECT </a>
              SELECT Ort FROM Verkäufer;
            </div>
          </li>
          <li>
            gibt alle Orte aus, in denen sowohl Kunden als auch Verkäufer wohnen
          </li>
        </ul>
        <li class="text-red q-mt-md">EXCEPT - Verbunden wenn Differenzmenge</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT Ort FROM Kunde
              <a class="text-red">EXCEPT </a>
              SELECT Ort FROM Verkäufer;
            </div>
          </li>
          <li>
            gibt alle Orte der Lieferanten aus, in denen keine Kunden wohnen
          </li>
        </ul>
      </ul>

      <li class="text-weight-bolder q-mt-md">
        JOIN - Verknüpfungen mehrerer Tabellen
      </li>
      <ul>
        <li>SELECT * (oder #Feldliste) FROM #Tabelle1</li>
        <li class="text-red">
          INNER|LEFT|RIGHT|FULL|CROSS - Art der Verknüpfung
        </li>
        <ul>
          <li>
            INNER - alle Datensätze von #Tabelle1, die entsprechende Datensätze
            in #Tabelle2 haben. JOIN ohne Verknüpfungsangabe nutzt immer diese
            Verknüpfung.
          </li>
          <li>
            LEFT - alle Datensätze von #Tabelle1, die entsprechende Daten in
            #Tabelle2 haben (sonst NULL)
          </li>
          <li>
            RIGHT - alle Datensätze von #Tabelle2, die entsprechende Datensätze
            in #Tabelle1 haben (sonst NULL)
          </li>
          <li>
            FULL - alle Datensätzer beider #Tabellen, mit den entsprechenden
            Daten der anderen Tabelle (sonst NULL)
          </li>
          <li>
            CROSS - jeder Datensatz von #Tabelle1 wird mit jedem Datensatz von
            #Tabelle2 verknüpft
          </li>
        </ul>
        <li class="text-green">JOIN #Tabelle2 - Verbindung zu #Tabelle2</li>
        <li class="text-blue">ON #Bedingung - Mit der #Bedingung</li>

        <li>Bemerkungen:</li>
        <ul>
          <li class="text-purple-4">
            In der #Feldliste sollte der Tabellenname immer mit angegeben
            werden, da in unterschiedlichen Tabellen gleiche Feldnamen auftreten
            können (Notation: #Tabellenname.#Feldname)
          </li>
          <li class="text-pink">
            Langen Tabellennamen kann man mit AS ein Alias zuweisen (z.B. SELECT
            * FROM LangerTabellenName AS LTN)
          </li>
        </ul>

        <li>Beispiele:</li>
        <ul>
          <li>
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT
              <a class="text-purple-4"
                >La.Artikel_Nr, La.Artikel_Bez, Li.Lieferer_Nr, Li.Name1, Li.Ort
              </a>
              FROM Lager <a class="text-pink"> AS La </a>
              <a class="text-green">JOIN Lieferanten</a>
              <a class="text-pink"> AS Li</a>
              <a class="text-blue"> ON La.Lieferer_Nr = Li. Lieferer_Nr;</a>
            </div>
          </li>
          <li>
            Ausgabe aller Lieferanten, die in einem Artikel im Lager mit ihrer
            Lieferer_Nr hinterlegt sind. Standardmäßig nutzt ein reines JOIN
            immer das INNER JOIN
          </li>

          <li class="q-mt-md">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT
              <a class="text-purple-4"
                >La.Artikel_Nr, La.Artikel_Bez, Li.Lieferer_Nr, Li.Name1, Li.Ort
              </a>
              FROM Lager <a class="text-pink"> AS La </a>
              <a class="text-green">LEFT JOIN Lieferanten</a>
              <a class="text-pink"> AS Li</a>
              <a class="text-blue"> ON La.Lieferer_Nr = Li. Lieferer_Nr;</a>
            </div>
          </li>
          <li>
            Ausgabe aller Artikel, ist kein Lieferant zugeordnet soll NULL
            angezeigt werden
          </li>

          <li class="q-mt-md">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT
              <a class="text-purple-4"
                >La.Artikel_Nr, La.Artikel_Bez, Li.Lieferer_Nr, Li.Name1, Li.Ort
              </a>
              FROM Lager <a class="text-pink"> AS La </a>
              <a class="text-green">RIGHT JOIN Lieferanten</a>
              <a class="text-pink"> AS Li</a>
              <a class="text-blue"> ON La.Lieferer_Nr = Li. Lieferer_Nr;</a>
            </div>
          </li>
          <li>
            Ausgabe aller Lieferanten, ist kein Artikel zugeordnet soll NULL
            angezeigt werden
          </li>

          <li class="q-mt-md">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT
              <a class="text-purple-4"
                >La.Artikel_Nr, La.Artikel_Bez, Li.Lieferer_Nr, Li.Name1, Li.Ort
              </a>
              FROM Lager <a class="text-pink"> AS La </a>
              <a class="text-green">FULL JOIN Lieferanten</a>
              <a class="text-pink"> AS Li</a>
              <a class="text-blue"> ON La.Lieferer_Nr = Li. Lieferer_Nr;</a>
            </div>
          </li>
          <li>
            Ausgabe aller Artikel und Lieferanten. Ist keine Zuordnung möglich
            soll NULL angezeigt werden
          </li>

          <li class="q-mt-md">
            <div
              style="font-family: monospace, monospace"
              class="bg-grey-9 text-white"
            >
              SELECT
              <a class="text-purple-4"
                >La.Artikel_Nr, La.Artikel_Bez, Li.Lieferer_Nr, Li.Name1, Li.Ort
              </a>
              FROM Lager <a class="text-pink"> AS La </a>
              <a class="text-green">CROSS JOIN Lieferanten</a>
              <a class="text-pink"> AS Li;</a>
            </div>
          </li>
          <li>
            Jeder Datensatz der einen Tabelle wird mit jedem der anderen Tabelle
            kombiniert
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
