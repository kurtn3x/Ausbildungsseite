<template>
  <div class="text-body1 q-ma-lg">
    <div class="text-center text-h4 text-weight-bolder q-mt-md text-primary">
      Netzwerke
    </div>
    <div class="text-center q-mt-lg text-h5 text-weight-bold">IPv4</div>
    <q-separator class="q-mt-md" />
    <div class="text-h6 q-mt-lg q-ml-md text-weight-bolder">Allgemeines</div>
    <ul>
      <li>bestehen aus 32Bit, also 4 Oktetten</li>
      <li>Dezimale Schreibweise</li>
      <li>Ca. 4,3 Milliarden verfügbare Adressen</li>
      <li class="text-weight-bold">Beispiel: 192.168.24.2/24</li>
    </ul>

    <table class="tg q-ml-xl">
      <thead>
        <tr>
          <th><a class="text-weight-bold">192</a></th>
          <th><a class="text-weight-bold">168</a></th>
          <th><a class="text-weight-bold">24</a></th>
          <th><a class="text-weight-bold">2</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">1. Oktett</td>
          <td class="tg-0lax">2. Oktett</td>
          <td class="tg-0lax">3. Oktett</td>
          <td class="tg-0lax">4. Oktett</td>
        </tr>
        <tr>
          <td class="tg-0lax">8 Bit<br /></td>
          <td class="tg-0lax">8 Bit</td>
          <td class="tg-0lax">8 Bit</td>
          <td class="tg-0lax">8 Bit</td>
        </tr>
        <tr>
          <td class="tg-0lax">0-255</td>
          <td class="tg-0lax">0-255</td>
          <td class="tg-0lax">0-255</td>
          <td class="tg-0lax">0-255</td>
        </tr>
        <tr>
          <td class="tg-0lax">1100 0000</td>
          <td class="tg-0lax">1010 1000</td>
          <td class="tg-0lax">0001 1000</td>
          <td class="tg-0lax">0000 0010</td>
        </tr>
      </tbody>
    </table>
    <q-separator class="q-mt-lg" />
    <div class="text-h4 q-mt-lg q-ml-md text-weight-bolder">Subnetting</div>

    <table class="tg q-ml-xl q-mt-lg">
      <thead>
        <tr>
          <th><a class="text-weight-bold">Subnetzmaske</a></th>
          <th><a class="text-weight-bold">Suffix</a></th>
          <th><a class="text-weight-bold">Binär letzte 2 Oktette</a></th>
          <th>
            <a class="text-weight-bold"
              >Verfügbare Client-Adressen <br />( - Netzadresse &amp;
              Broadcast)</a
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">255.255.252.0</td>
          <td class="tg-0lax">/22</td>
          <td class="tg-0lax">1111 1100 0000 0000</td>
          <td class="tg-0lax">1022</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.254.0</td>
          <td class="tg-0lax">/23</td>
          <td class="tg-0lax">1111 1110 0000 0000</td>
          <td class="tg-0lax">510</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.0</td>
          <td class="tg-0lax">/24</td>
          <td class="tg-0lax">1111 1111 0000 0000</td>
          <td class="tg-0lax">254</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.128</td>
          <td class="tg-0lax">/25</td>
          <td class="tg-0lax">1111 1111 1000 0000</td>
          <td class="tg-0lax">126</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.192</td>
          <td class="tg-0lax">/26</td>
          <td class="tg-0lax">1111 1111 1100 0000</td>
          <td class="tg-0lax">62</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.224</td>
          <td class="tg-0lax">/27</td>
          <td class="tg-0lax">1111 1111 1110 0000</td>
          <td class="tg-0lax">30</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.240</td>
          <td class="tg-0lax">/28<br /></td>
          <td class="tg-0lax">1111 1111 1111 0000</td>
          <td class="tg-0lax">14</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.248</td>
          <td class="tg-0lax">/29</td>
          <td class="tg-0lax">1111 1111 1111 1000</td>
          <td class="tg-0lax">6</td>
        </tr>
        <tr>
          <td class="tg-0lax">255.255.255.252</td>
          <td class="tg-0lax">/30</td>
          <td class="tg-0lax">1111 1111 1111 1100</td>
          <td class="tg-0lax">2</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>
        Eine IPv4 Adresse hat 32 Bit. Die Anzahl der möglichen Hosts in einem
        Subnetz kann bestimmt werden, indem man die Bits, welche die Anzahl
        Hosts beschreiben von diesen 32 Bit abzieht.
      </li>
      <li>Beispiel:</li>
      <ul>
        <li>
          Es soll ein Subnetz ermittelt werden, welches für 14 Clients
          ausreicht.
        </li>
        <li>
          Da jedes Netz zuzüglich noch eine Netz- und Broadcast-Adresse hat,
          muss das Netz 16 Adressen zur Verfügung stellen.
        </li>
        <li>
          16 Adressen passen in 4 Bit (2^4 = 16). Diese 4 Bit zieht man von den
          32 möglichen Bit der IP-Adresse ab, was 28Bit ergibt.
        </li>
        <li>
          Diese 16 Adressen passen also in das Subnetz mit dem Suffix /28 oder
          in Binärschreibweise in das Subnetz 255.255.255.240.
        </li>
        <li>Im Netz 192.168.164.0/28 gilt also im ersten Subnetz:</li>
        <ul>
          <li>Netzadresse: 192.168.164.0/28</li>
          <li>Erste Client-Adresse: 192.168.164.1/28</li>
          <li>Letzte Client-Adresse: 192.168.164.14/28</li>
          <li>Broadcast-Adresse: 192.168.164.15/28</li>
        </ul>
      </ul>
    </ul>
    <div class="text-h5 q-mt-lg q-ml-md text-weight-bolder">
      Beispiel für das Netz 192.168.164.0
    </div>
    <IPv4SubnetExample class="q-ml-lg q-mt-lg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IPv4SubnetExample from 'components/IPv4SubnetExample.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { IPv4SubnetExample },
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
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
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
