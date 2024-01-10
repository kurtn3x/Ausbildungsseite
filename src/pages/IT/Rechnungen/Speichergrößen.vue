<template>
  <div class="text-body1" :class="small ? 'q-ma-sm' : 'q-ma-lg'">
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Speichergrößen
    </div>
    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bold">
        Speichergrößen können in vielen verschiedenen Arten und Formen angegeben
        werden, zu beachten gilt
      </li>
      <ul>
        <li class="text-purple text-weight-bold">8 Bit = 1 Byte</li>
        <li>Unterschied Bit und Byte beachten</li>
        <li>Beispiel:</li>
        <ul>
          <li>KB - Kilobyte</li>
          <li>Kbit - Kilobit → 800Kbit = 100KB</li>
          <li>KiB - Kibibyte</li>
          <li>Kibit - Kibibit → 800Kibit = 100KiB</li>
          <li>MB/s - Megabyte/s</li>
          <li>MBit/s - Megabit/s → 800Mbit/s = 100MB/s</li>
        </ul>
        <li>
          Es gibt zwei Formen der Speichergrößenangabe:
          <a class="text-weight-bolder text-red">2er-Potenzen (*1024)</a> und
          <a class="text-weight-bolder text-green"> 10er-Potenzen (*1000)</a>.
          2er-Potenzen sind durch ein ' i ' in der in der Abkürzung zu erkennen.
        </li>
        <ul>
          <li>
            1 KiB = Kibibyte = 2er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-red">1024</a> = 8192 Bit
          </li>
          <li>
            1 KB = Kilobyte = 10er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-green">1000</a> = 8000 Bit
          </li>
          <li>
            1 MiB = Mebibyte = 2er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-red">1024</a> *
            <a class="text-weight-bolder text-red">1024</a> = 8.388.608 Bit
          </li>
          <li>
            1 MB = Megabyte = 10er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-green">1000</a> *
            <a class="text-weight-bolder text-green">1000</a> = 8.000.000 Bit
          </li>
          <li>
            1 GiB = Gibibyte = 2er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-red">1024</a> *
            <a class="text-weight-bolder text-red">1024</a>
            *
            <a class="text-weight-bolder text-red">1024</a> Bit
          </li>
          <li>
            1 GB = Gigabyte = 10er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-green">1000</a> *
            <a class="text-weight-bolder text-green">1000</a>*
            <a class="text-weight-bolder text-green">1000</a> Bit
          </li>
          <li>
            1 TiB = Tebibyte = 2er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-red">1024</a> *
            <a class="text-weight-bolder text-red">1024</a>
            *
            <a class="text-weight-bolder text-red">1024</a>
            *
            <a class="text-weight-bolder text-red">1024</a> Bit
          </li>
          <li>
            1 TB = Terrabyte = 10er-Potenz = 1 *
            <a class="text-purple text-weight-bold">8</a> *
            <a class="text-weight-bolder text-green">1000</a> *
            <a class="text-weight-bolder text-green">1000</a>*
            <a class="text-weight-bolder text-green">1000</a>
            *
            <a class="text-weight-bolder text-green">1000</a> Bit
          </li>
        </ul>
        <li>
          generell lohnt es sich, gegebene Werte bis zu den Bits umzurechnen,
          sobald beide Formen (Bit und Byte Werte) verwendet werden
        </li>
      </ul>

      <table class="tg q-mt-md">
        <thead>
          <tr>
            <th class="tg-0lax">Potenz</th>
            <th class="tg-0lax">Anfangswert</th>
            <th class="tg-0lax">Byte (/8)</th>
            <th class="tg-0lax">KiB / KB</th>
            <th class="tg-0lax">MiB / MB</th>
            <th class="tg-0lax">GiB /GB</th>
            <th class="tg-0lax">TiB / TB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0lax text-red">2er</td>
            <td class="tg-0lax text-red">100.000.000 Bit</td>
            <td class="tg-0lax text-red">12.500.000 Byte</td>
            <td class="tg-0lax text-red">~12.207 KiB</td>
            <td class="tg-0lax text-red">~11,92 MiB</td>
            <td class="tg-0lax text-red">~11,92 / 1024 GiB</td>
            <td class="tg-0lax text-red">~11.92 / 1024 / 1024 TiB</td>
          </tr>
          <tr>
            <td class="tg-0lax text-green">10er</td>
            <td class="tg-0lax text-green">100.000.000 Bit</td>
            <td class="tg-0lax text-green">12.500.000 Byte</td>
            <td class="tg-0lax text-green">12.500 KB</td>
            <td class="tg-0lax text-green">12,5 MB</td>
            <td class="tg-0lax text-green">12,5 / 1000 GB</td>
            <td class="tg-0lax text-green">12,5 / 1000 / 1000 TB</td>
          </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'SpeichergrößenPage',
  setup() {
    const q = useQuasar();
    return { q, src: 'https://media.kurtn3x.xyz/assets' };
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

<style type="text/css">
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  width: 100%;
}
.tg td {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg th {
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: break-word;
}
.tg .tg-0lax {
  text-align: left;
  vertical-align: top;
}
</style>
