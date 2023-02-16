<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-primary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">IPv6</div>
    <q-separator class="q-mt-md" />
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Allgemeines</div>
    <ul>
      <li>Hexadezimal (je 4 Bit in eine Hexadezimalzahl)</li>
      <li>8 Blöcke mit je 16 Bit bzw. 8 Blöcke mit je 4 Hexadezimalzahlen</li>
      <li>Blöcke durch Doppelpunkte getrennt</li>
      <li>2^128 verfügbare Adressen</li>
    </ul>

    <table class="tg q-ml-lg">
      <thead>
        <tr>
          <th><a class="text-weight-bold">IPv4</a></th>
          <th><a class="text-weight-bold">IPv6</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">Netzanteil</td>
          <td class="tg-0lax">Prefix mit /64</td>
        </tr>
        <tr>
          <td class="tg-0lax">Hostanteil</td>
          <td class="tg-0lax">Interface-Identifier</td>
        </tr>
        <tr>
          <td class="tg-0lax">Netzmaske</td>
          <td class="tg-0lax">Präfixlänge</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>Präfix links, Interface-Identifier rechts</li>
      <li>Interface-Identifier immer 64 Bit lang</li>
      <li>Präfixe maximal 64 Bit lang</li>
      <li>
        <a class="text-weight-bold"
          >Beispiel: 2001:0db8<a class="text-red">:0000:</a>08d3<a
            class="text-red"
            >:0000:</a
          >8a2e:0070:7344</a
        >
      </li>
      <ul>
        <li>führende Nullen können ausgelassen werden</li>
        <ul>
          <li>
            Beispiel: 2001:db8<a class="text-red">:0:</a>8d3<a class="text-red"
              >:0:</a
            >8a2e:70:7344
          </li>
        </ul>

        <li>
          Ein oder mehrere aufeinander folgende 0 Blöcke dürfen einmalig
          ausgelassen werden
        </li>
        <ul>
          <li>
            Beispiel: 2001:db8<a class="text-orange">:0000:0000:</a>1428<a
              class="text-red"
              >:0000:0000:</a
            >57ab
          </li>
          <li>
            wird zu: 2001:db8<a class="text-orange">::</a>1428<a
              class="text-red"
              >:0:0:</a
            >57ab (orange 2. Regel, rot 1. Regel)
          </li>
        </ul>
      </ul>
      <li><a class="text-weight-bold">Besondere IPv6-Adressen:</a></li>
      <ul>
        <li>::/128 nicht spezifizierte Adresse (Adresse fehlt)</li>
        <li>::/0 Standard-Route</li>
        <li>::1/128 Loopback Adresse</li>
        <li>
          Fe80::/64 Link-Local-Adressen, sind nur bis zum ersten Router gültig
        </li>
      </ul>
      <li><a class="text-weight-bolder">Subnetting</a></li>
      <ul>
        <li>
          <a class="text-blue">2001:00d3:a3df:3357:</a>
          <a class="text-green">54b7:1d72:6f0a:e9dc </a>
          <a class="q-ml-md">|</a>
          <a class="text-blue q-ml-md">Netzanteil</a
          ><a class="text-green q-ml-md"> Hostanteil </a>
        </li>
        <li>
          Der Netzanteil kann noch weiter unterteilt werden, so bekommt der
          Provider z.B. die ersten 32 Bit, die nächsten 16Bit sind für die
          Netzaufteilung und der Kunde bekommt dann ein /64 Netz
          <a class="text-green">2001:00d3</a>
          <a class="text-purple">:a3df</a>
          <a class="text-yellow">:3357: ...</a>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
