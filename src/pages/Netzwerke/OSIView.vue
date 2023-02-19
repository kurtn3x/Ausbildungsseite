<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-secondary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold text-primary">
      Das OSI-Schichtenmodell
    </div>
    <q-separator class="q-mt-md" />
    <table class="tg q-mt-lg">
      <thead>
        <tr>
          <th><a class="text-weight-bold"> Schicht</a></th>
          <th><a class="text-weight-bold"> Name</a></th>
          <th><a class="text-weight-bold"> Verwendete Protokolle</a></th>
          <th><a class="text-weight-bold"> Verwendete Adressen</a></th>
          <th><a class="text-weight-bold"> Mögliche Fehler</a></th>
          <th><a class="text-weight-bold"> TCP/IP Schicht</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0pky">7</td>
          <td class="tg-0pky">
            <a class="text-weight-bold"
              >Anwendungsschicht<br />Application Layer<br
            /></a>
          </td>
          <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
          <td class="tg-0pky">-</td>
          <td class="tg-0pky">Fehlerhafte Serverkonfiguration</td>
          <td class="tg-0lax">Application Layer</td>
        </tr>
        <tr>
          <td class="tg-0pky">6</td>
          <td class="tg-0pky">
            <a class="text-weight-bold"
              >Darstellungsschicht <br />
              Presentation Layer</a
            >
          </td>
          <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
          <td class="tg-0pky">-</td>
          <td class="tg-0pky">Fehlerhafte Serverkonfiguration</td>
          <td class="tg-0lax">Application Layer</td>
        </tr>
        <tr>
          <td class="tg-0pky">5</td>
          <td class="tg-0pky">
            <a class="text-weight-bold">
              Kommunikationsschicht<br />Session Layer<br />
            </a>
          </td>
          <td class="tg-0pky">FTP, HTTP, SMTP, Telnet</td>
          <td class="tg-0pky">-</td>
          <td class="tg-0pky">Fehlerhafte Serverkonfiguration</td>
          <td class="tg-0lax">Application Layer</td>
        </tr>
        <tr>
          <td class="tg-0pky">4</td>
          <td class="tg-0pky">
            <a class="text-weight-bold"
              >Transportschicht<br />Transport Layer<br
            /></a>
          </td>
          <td class="tg-0pky">TCP, UDP</td>
          <td class="tg-0pky">Ports</td>
          <td class="tg-0pky">Verlust eines Segments</td>
          <td class="tg-0lax">Transport Layer</td>
        </tr>
        <tr>
          <td class="tg-0pky">3</td>
          <td class="tg-0pky">
            <a class="text-weight-bold"
              >Vermittlungsschicht<br />Network Layer<br
            /></a>
          </td>
          <td class="tg-0pky">IPv4, IPv6, ICMP</td>
          <td class="tg-0pky">IPv4 Adressen<br />IPv6 Adressen<br /></td>
          <td class="tg-0pky">
            Falsche IP-Adresse<br />Falsches Subnetz<br />
          </td>
          <td class="tg-0lax">Internet Layer</td>
        </tr>
        <tr>
          <td class="tg-0pky">2</td>
          <td class="tg-0pky">
            <a class="text-weight-bold"
              >Sicherungsschicht<br />Data-Link Layer<br
            /></a>
          </td>
          <td class="tg-0pky">ARP, Ethernet<br /></td>
          <td class="tg-0pky">MAC-Adressen</td>
          <td class="tg-0pky">Netzwerkkarte defekt</td>
          <td class="tg-0lax">Network Access Layer</td>
        </tr>
        <tr>
          <td class="tg-0pky">1</td>
          <td class="tg-0pky">
            <a class="text-weight-bold"
              >Bitübertragungsschicht<br />Physical Layer<br />
            </a>
          </td>
          <td class="tg-0pky">Token Ring, Ethernet</td>
          <td class="tg-0pky">-</td>
          <td class="tg-0pky">Medium getrennt</td>
          <td class="tg-0lax">Network Access Layer</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li class="text-weight-bolder q-mt-md">
        OSI-Schicht 2,3,4 binden das Datenpaket in einen Frame bzw. Header, um
        die Weiterleitung über diese Schichten zu ermöglichen: Der
        Ethernet-Frame, der IP-Header & der TCP/UDP-Header. Der Aufbau dieser
        Header ist bei den jeweiligen Unterthemen zu finden.
      </li>

      <q-img
        :src="src + '/Netzwerke/ipv4/Datenpaket.png'"
        class="bg-grey-5 q-mt-md"
        style="width: 600px"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      src: 'https://media.kurtn3x.xyz/assets',
    };
  },
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
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-sxqf {
  border-color: inherit;
  font-family: inherit;
  text-align: left;
  vertical-align: top;
}
.tg .tg-0pky {
  border-color: inherit;
  text-align: left;
  vertical-align: top;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
