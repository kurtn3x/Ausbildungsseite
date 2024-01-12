<template>
  <q-page>
    <div class="text-center q-mt-lg text-h4 text-weight-bold text-primary">
      Netzwerke
    </div>
    <q-separator class="q-mt-md" />
    <ul class="q-mt-lg">
      <li>
        Ein Rechnernetz oder Computernetz ist ein Zusammenschluss verschiedener
        technischer, primär selbstständiger elektronischer Systeme, der die
        Kommunikation der einzelnen Systeme untereinander ermöglicht. Techniken,
        Protokolle und Systeme zur Datenübertragung realisieren die
        Kommunikation zwischen den Teilnehmern im Netzwerk.
      </li>
      <li>
        <a class="text-weight-bold">Ziel: </a>Kommunikation der einzelnen
        Systeme untereinander und die gemeinsame Nutzung von Ressourcen. Wie
        z.B. Rechenleistung, Geräte(Drucker,....), Software, Daten, Dienste.
      </li>
      <li class="text-weight-bold">Nachteile:</li>
      <ul>
        <li>Infrastruktur und Betriebskosten</li>
        <li>Administrationsaufwand</li>
        <li>
          Zusätzliche Risiken im Bezug auf Daten-/Informationssicherheit,
          Vertraulichkeit, Integrität, Verfügbarkeit
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-h6 q-mt-lg q-ml-md text-weight-bolder q-mb-md text-underline text-third"
    >
      Allgemeine Begriffe
    </div>
    <ul>
      <li>
        <a class="text-weight-bolder">Zwischensystem: </a>Gerät zur Verstärkung,
        Weiterleitung und Anpassung des Datenstromes
      </li>
      <li>
        <a class="text-weight-bolder">Datenpaket: </a>Datenströme in
        Übertragungseinheiten zerlegt, welche als Datenpaket bezeichnet
        werden.Sind mit Sender- u. Empfängeradresse ausgestattet (siehe versch.
        Headeraufbau)
      </li>
      <li>
        <a class="text-weight-bolder">Räumliche Ausdehnung von Netzen:</a>
      </li>

      <ul>
        <li>
          <a class="text-weight-bolder">PAN: </a>Personal Area Network (z.B.
          Bluetooth)
        </li>
        <li>
          <a class="text-weight-bolder">LAN: </a>Local Area Network (lokales
          Netz)
        </li>
        <li>
          <a class="text-weight-bolder">MAN: </a>Metropolitan Area Network
          (regionales Netz einer Metropolregion)
        </li>
        <li>
          <a class="text-weight-bolder">WAN: </a>Wide Area Network
          (Weitverkehrsverbindung)
        </li>
        <li>
          <a class="text-weight-bolder">GAN: </a>Global Area Network (globales
          Netz)
        </li>
      </ul>

      <li>
        <a class="text-weight-bolder">PowerLAN: </a>Nutzt das Stromnetz als
        lokales Übertragungsmedium
      </li>
      <li><a class="text-weight-bolder">WLAN: </a>Wireless-LAN</li>
      <li>
        <a class="text-weight-bolder">VLAN: </a>Virtual LAN : flexible, logische
        Trennung eines physischen Netzes
      </li>
      <li>
        <a class="text-weight-bolder">IEEE: </a>Insitute of Electrical and
        Electronics Engineers (US-Normungsbehörde)
      </li>
      <li>
        <a class="text-weight-bolder">ISO: </a>International Organisation for
        Standardization
      </li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AllgemeinPage',
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
