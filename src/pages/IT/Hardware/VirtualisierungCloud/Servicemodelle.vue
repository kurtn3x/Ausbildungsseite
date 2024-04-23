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
    <h1
      class="text-center q-mt-sm text-h4 text-weight-bold text-primary q-mb-sm"
    >
      Cloud Computing Servicemodelle
    </h1>

    <q-separator class="q-mt-md" />
    <ul>
      <li class="text-weight-bolder text-h7 text-secondary">Colocation</li>
      <ul>
        <li>auch Serverhousing oder Serverhoming</li>
        <li>
          Anbieter stellt Rechenzentrumsfläche für Dritte zum Betrieb von
          Informationstechnik bereit
        </li>
        <li>
          Anbieter übernimmt Klimatisierung, Energieversorgung,
          Netzwerkanschluss und Sicherheitstechnik
        </li>
      </ul>
      <li class="text-weight-bolder text-h7 text-secondary">
        IaaS - Infrastructure-as-a-Service
      </li>
      <ul>
        <li>
          Drittanbieter stellt Infrastruktur-Services wie Storage und
          Virtualisierung über eine Cloud oder Internet zur Verfügung
        </li>
        <li>
          Nutzer ist für Einstellungen am Betriebssystem, Daten, Anwendungen
          usw. selbst verantwortlich
        </li>
        <li>Infrastruktur über API oder Dashboard gesteuert</li>
        <li>Rechenzentrum wird vom Anbieter gewartet</li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>Rechenzentrum muss nicht gewartet werden</li>
          <li>flexible Skalierung</li>
          <li>keine Wartungskosten</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>
            Sicherheitsprobleme durch Anbieter (Sicherheitsverantwortng liegt
            beim Anbieter)
          </li>
          <li>Teilung der Infrastrukturressourcen mit anderen Nutzern</li>
          <li>Zuverlässigkeit bzw. Verfügbarkeit durch Anbieter bestimmt</li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7 text-secondary">
        PaaS - Platform-as-a-Service
      </li>
      <ul>
        <li>
          Drittanbieter stellt Hardware und Software in seiner eigenen
          Infrastruktur zur Verfügung
        </li>
        <li>Primär für Bereich Entwicklung und Programmierung</li>
        <li>Nutzer muss Infrastruktur nicht aufbauen oder verwalten</li>
        <li>
          Nutzer ist nicht für Hardwarewartung oder Softwareupdates
          verantwortlich
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>
            wie IaaS + weniger Verwaltungsaufwand → keine
            Betriebssystem-Updates/-Einstellungen nötig
          </li>
          <li>weniger Verwaltungsaufwand</li>
          <li>einfacheres Deployment auf andere Umgebungen</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>wie IaaS</li>
          <li>
            Verlust von Kontrolle → keine Kontrolle über Sicherheit und
            Performance betriebssystemseitig
          </li>
          <li>
            kein eigenständiges beheben von Problemen auf Betriebssystemseite
          </li>
        </ul>
      </ul>
      <li class="text-weight-bolder text-h7 text-secondary">
        SaaS - Software-as-a-Service
      </li>
      <ul>
        <li>
          Drittanbieter stellt eine komplette Anwendung über eine Website bereit
        </li>
        <li>
          Nutzer ist nicht für Softwareupdates oder generelle Softwarewartung
          verantwortlich
        </li>
        <li>Nutzer greift über Dashboard oder API auf die Anwendung zu</li>
        <li>
          sinvoll für Hosten einer bestimmten Anwendung wie z.B. eine Website
        </li>
        <li class="text-green">Vorteile:</li>
        <ul>
          <li>
            wie PaaS + weniger Verwaltungsaufwand da auch keine
            Updates/Einstellungen der Software nötig
          </li>
          <li>sehr flexibel → einfachstes Deployment der Anwendung</li>
          <li>gut für Anwendungen, die nicht groß angepasst werden müssen</li>
        </ul>
        <li class="text-red">Nachteile:</li>
        <ul>
          <li>wie PaaS</li>
          <li>
            noch weniger Kontrolle, da auch keine Einstellungen/Problembehebung
            direkt an der Software möglich
          </li>
        </ul>
      </ul>

      <q-img
        class="fit bg-grey-5 q-mt-md"
        :src="src + '/Hardware/servicemodelle.png'"
        style="max-width: 600px"
        @click="
          show_img = true;
          popupsrc = '/Hardware/servicemodelle.png';
        "
      >
      </q-img>
      <ul>
        <li>
          Mit On-Site ist im Bild On-Premises-Hosting gemeint und nicht
          Colocation.
        </li>
      </ul>
    </ul>
    <q-separator class="q-mt-md" />
    <div
      class="text-subtitle2 text-grey font-size-small"
      style="line-break: anywhere"
    >
      Bildquellen & Lizens(von oben nach unten, falls erforderlich): <br />

      https://www.redhat.com/rhdc/managed-files/iaas-paas-saas-diagram5.1-1638x1046.png
      <br />

      Ich bin nicht der Eigentümer der oben genannten Bilder.
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'CloudServicemodellePage',
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
